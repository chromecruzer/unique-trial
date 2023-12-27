
//  TRAC spreadsheet map prototype

interface UploadRecord {
    id: number;
    fieldName: string;
  }
  
  interface TransformHelpers {
    [key:string]: { matchFields: (u: UploadRecord) => string };
  }
  
  const transformHelpers: TransformHelpers = {
    someTable: {
      matchFields: (u: UploadRecord) => u.fieldName,
    },
  };
  
  
  class MapCreator {
    private spreadsheetMap: { [key: string]: UploadRecord[] } = {};
  
    constructor(private tableName: string) {}
  
    private matchFieldFn(matchFieldsFn: (u: UploadRecord) => string, u: UploadRecord) {
      return matchFieldsFn(u);
    }
  
    private async createMap(updated: UploadRecord[]) {
      this.spreadsheetMap = updated.reduce((accum, u: UploadRecord) => {
        const field = this.matchFieldFn(transformHelpers[this.tableName]?.matchFields, u);
        if (accum[field]) {
          accum[field].push(u);
        } else {
          accum[field] = [u];
        }
        return accum;
      }, {} as { [key: string]: UploadRecord[] });
    }
  
    public async run() {
      const updatedRecords= [
        { id: 1, fieldName: "FieldA" },
        { id: 2, fieldName: "FieldB" },
        { id: 3, fieldName: "FieldA" },
        { id: 4, fieldName: "FieldC" },
        { id: 5, fieldName: "FieldB" },
        { id: 6, fieldName: "Fieldz" },
      ] as UploadRecord[] 
  
      await this.createMap(updatedRecords);
      console.log(this.spreadsheetMap);
    }
  }
  
  // Usage:
  const mapCreator = new MapCreator('someTable');
  mapCreator.run();
  


  //----------------------------------------------------------------------------------

  // TRAC delete prototype

  const appendUuids = (sql: string, uuids: any[]) => {
    let skippedFirst = false;
    let result = sql;
  
    uuids.forEach((id: any) => {
      result += `${skippedFirst ? ',' : ''}\n'${id}'`;
      skippedFirst = true;
    });
  
    // Move the closing bracket outside of the forEach loop
    result += ');';
  
    return result; // Moved return statement outside the forEach loop
  };
  
  // Prototype usage
  let baseSql = `DELETE FROM TABLE_NAME WHERE id IN (`; 
  const exampleUUIDs = ['123e4567-e89b-12d3-a456-426614174000', '223e4567-e89b-12d3-a456-426614174001'];
    
  // Using the function to append UUIDs to the base SQL query
  const finalSQL = appendUuids(baseSql, exampleUUIDs);
  
  console.log(finalSQL); // Output the final SQL query
  

  // Generics went easy 
   const getFirstElement = <ElementType>(array:ElementType[])=> array[0] + " this is concatenated"
   //
  
  const numbers = [2,4,5,34]
  console.log(getFirstElement(numbers))
  const strings = ["ali", "arun"]
  console.log(getFirstElement(strings))
  const mixed = [{val:'key', shahul: 'agalya', ajith: 'ammu'},{val:'key2', shahul: 'agalya2', ajith: 'ammu243'}]
  console.log(getFirstElement(mixed))

  // generic api coding 
  
  type ApiResponse<Data> ={
    data: Data
    isError: boolean
  }

// modifiers 

  type UserResponse = ApiResponse<{name: string, age: number, hobby: any}>
  type BlogResponse = ApiResponse<{title: string, description: any}>
  //type Status = ApiResponse<{status: number}>     for status headers
 
  // server api logic 

  const userRes: UserResponse = {
    data:{
      name:'Maddy',
      age: 33,
      hobby: 'nill'
    },
    isError: true
  }

  const BookRes: BlogResponse= {
    data:{
      title:'the beauty and the bitch',
      description: ` this is the story of the beautiful lady and fucking whore !!`
    },
    isError: true
  }

  console.table(userRes)
  console.table(BookRes)


  // reduce accum 
  const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce((accumulator, currentValue, currentIndex, array) => {
  // Your logic here
  return accumulator + currentValue + currentIndex ;
}, 1);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)



