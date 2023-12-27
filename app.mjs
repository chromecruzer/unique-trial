import exp from 'express'
import _ from 'lodash'
import util from 'util'
const PORT = 4000;

const app = exp()


// lodash tutorial
//  let srr = [2,4,5,6]
// let arr = [2,1,24,14,10,true, false]   
// console.log(_.chunk(arr,2)[2]) // chunk 
// console.log(_.fill(arr,3,4,54,)) // fill
// console.log(_.compact(arr))  // compact
// let newArr = (_.concat(arr, srr))  // concat 
// console.log(newArr)




// // Original array
// let array2 = [4, 2, 3, 1, 4, 2]

// // Using lodash.findIndex
// let index = _.findIndex(array2, (e) => {
// 	return e == 1;
// }, 5);

// // Print original Array
// console.log("original Array: ", array2)

// // Printing the index
// console.log("index: ", index)


// // difference 

// let ar = [1,2,3,4,'a']
// let ar2 = ['a','b','e',3]
// let diffar = _.differenceBy(ar,ar2)
// console.log(diffar)

// // first 
//  console.log(_.first([1,2,3,7]))


//  // flatten
//  let ar3 = [[1,3],[23],[233]]
//   console.log(_.flatten(ar3))

// // flattendeep
// let arr4 = [2,[2,[2,[4]]]]
// console.log(_.flattenDeep(arr4))
// console.log(_.flattenDepth(arr4,2)) // look deep based on the level u provide man 

// // drop 

// let arr5 = [2,34,34,4,4,4,4,4,4,4,4,4]
// console.log(_.drop(arr5,1))

// // drop right 
// console.log(_.dropRight(arr5,9))

// // frompairs 

// let arr7 = [['d',1],['r',3],[9,'d']]
// console.log(_.fromPairs(arr7))

// let pairs = [
//     ['name', 'lodash'],
//     ['live', 'npm'],
//     ['used', 'nodejs']
// ]
// let obj = _.fromPairs(pairs);
// console.log(obj)
// // Original array 
// let array1 = [ 
//     { "a": 1, "b": 2 }, 
//     { "a": 2, "b": 1 },  
//     { "b": 2 } 
// ] 

// // Using _.dropRightWhile() function 
// let newArray = _.dropRightWhile(array1, (e) => { 
//     return e.b == 2; 
// }); 

// // Original Array 
// console.log("original Array: ", array1) 

// // Printing the newArray 
// console.log("new Array: ", newArray) 



// // dropwhile()

// let arr9 = [1,3,4,56,6,6,6,6,3,3,3,3,3,3,3]
// const val = _.dropWhile(arr9,(e)=>{return e!=56})
// console.log(val)

// initial which removes the last element of the array 
let arr = [2, 43, 5, 5, 53, 35, 3, 535, 3]
console.log(_.initial(arr))

// intersection method
let arr2 = [2, 4, , 5345, 435, 345, 34, 5, 3345,]
console.log(_.intersection(arr, arr2))

//////////////////////////////trac used lodash/////////////////////////////

// join
let arr4 = [3, 4, 7, 4, 3]
let joinarr = _.join(arr.concat('<>'), ` mari `)
console.log(joinarr)


// map

let arr9 = [1, 1, 12, 2, 8]
console.log(_.map(arr9, (e) => e * 2)) // if u use curly braces use the return key word then only it will work ok {}

// filter

let arrObj = [{
    name: 'luv',
    age: '20',
    isMale: false
},
{
    name: 'vaani',
    age: '24',
    isMale: true
}
]

console.table(_.filter(arrObj,(e)=>e.isMale===false))
console.log(_.sortBy(arrObj,'name'),'name')


// reduce 

// left to right 
let redArr = [9,2,3,4]
console.log(_.reduce(redArr,(e,f)=>e+f+"  the value is given by shayam,"))
// reduceRight
console.log(_.reduceRight(redArr,(e,f)=>e+f+"  the value is given by shayam,"))

// ascending 
console.log(_.sortBy(redArr),"ascending")
// descending
console.log(_.reverse(_.sortBy(redArr)),"descending")


// reject 
let rjarr = [{isMale: true},{isMale: false}]
console.log(_.reject(rjarr,(e)=>e.isMale===false))   // opposite to filter method 

// sort tricky
let arrs = [-1,-2,1,-6,-2,0]
console.log(_.sortBy(arrs),`ascending`)
console.log(_.reverse(_.sortBy(arrs)),`descending`)

////// the main util inspect 
const myObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    },
    hobbies: ['reading', 'gaming', 'coding',[]]
  };
  const dump = (obj, depth = null) => util.inspect(obj, {depth, colors: true});

  console.log('Object using dump:');
  console.log(dump(myObject));
    

// slice 
let arrsl = [1,2,3,5,4,5,1,5,1,2,3,2,1,2,1,2,1,3,5,1,6,1,1,1,2,1,31,32]
console.log(_.slice(arrsl,0,8))

// grop by 

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Emma', grade: 'B' }
  ];

  console.log(_.groupBy(students,'grade'))

  // uniq
  let uqarr = [1,1,1,1,1,1,1,1,121,2,2,2,2,1,2]
  console.log(_.uniq(uqarr))

  // keys
  const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };

  console.log(_.values(user))



  // split

  const str = 'Hello,World,How,Are,You';
  console.log(_.split(str,''))
  console.log(_.join(str,('| 0 |')))    // join 


// lodash reduce trac prototype



const mapping = [
  { sqlLabel: 'label1', nullify: (val) => val.toUpperCase() },
  { sqlLabel: 'label2', default: 'defaultVal' },
  // ... other mapping elements
];

const row = ['value1', null, 'value3'];

const result = _.reduce(mapping, (accum, { sqlLabel, nullify, default: defaultValue }, i) => {
  const value = row[i] !== undefined ? row[i] : null;
  accum[sqlLabel] = _.isFunction(nullify) ? nullify(value) : value || defaultValue;
  return accum;
}, {});

console.log(result);






// Simplified versions of the functions with descriptive variable names

// matchFieldFn prototype with descriptive names
const matchFieldFn = (fieldsOrField, record) => {
  if (_.isArray(fieldsOrField)) {
    return _.join(_.map(fieldsOrField, fieldName => record[fieldName]), '|');
  } else {
    return record[fieldsOrField];
  }
};

// deepEqualFn prototype with descriptive names
const deepEqualFn = (candidateObj, masterObj, fieldsToCompare = null) => {
  if (_.isArray(fieldsToCompare)) {
    return _.reduce(fieldsToCompare, (isDeepEqual, fieldName) => {
      if (!isDeepEqual) {
        return isDeepEqual;
      }
      return _.isEqual(candidateObj[fieldName], masterObj[fieldName]);
    }, true);
  }
  return _.isEqual(masterObj, candidateObj);
};

// Example usage
const candidateObject = {
  id: 1,
  name: 'John',
  age: 30,
  city: 'New York',
  area: 'aluma'
};

const fieldsToMatch = ['name', 'age', 'city', 'area'];
const resultMatch = matchFieldFn(fieldsToMatch, candidateObject);
console.log('matchFieldFn result:', resultMatch);

const masterObject = {
  id: 1,
  name: 'John',
  age: 30,
  city: 'New York',
  isMale: true         // added by me for testing 
};

const fieldsToCheckEquality = ['name', 'age', 'city'];
const resultEquality = deepEqualFn(candidateObject, masterObject, fieldsToCheckEquality);
console.log('deepEqualFn result:', resultEquality);


   






// lodash collection method 