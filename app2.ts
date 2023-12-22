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
      const updatedRecords: UploadRecord[] = [
        { id: 1, fieldName: "FieldA" },
        { id: 2, fieldName: "FieldB" },
        { id: 3, fieldName: "FieldA" },
        { id: 4, fieldName: "FieldC" },
        { id: 5, fieldName: "FieldB" },
      ];
  
      await this.createMap(updatedRecords);
      console.log(this.spreadsheetMap);
    }
  }
  
  // Usage:
  const mapCreator = new MapCreator('someTable');
  mapCreator.run();
  