function ageSort(users) {
  // let arr = [];
  // for (let key of users) {
  //   //console.log(key)
  //   arr.push(key["age"])
  // }
  // console.log({arr})
  return users.sort((a,b) => {
    return (a.age - b.age)
  });
}

function oddEvenSort(arr) {
  // return arr.sort((a, b) => {
  //   if(a%2 !== 0) return (b - a)
  //   else return (b - a)
  // })
return arr.sort((a,b) => {
  if (a%2 === b%2) return a - b;
         if (a%2 === 1) return -1;
         if (a%2 === 0) return 1;
})};

function validAnagrams(s, t) {
  let sorted1 = s.split("");
  let sorted2 = t.split("");
  //console.log(sort1, sort2);

  return (sorted1.sort().join("") === sorted2.sort().join(""));
  ;
}


function reverseBaseSort(arr) {

  return arr.sort((a,b) => {
    let loga = Math.floor(Math.log10(a));
    let logb = Math.floor(Math.log10(b));
    if (loga === logb) return a - b;
    if (loga > logb) return -1;
    if (loga < logb) return 1;
  })
}

function frequencySort(arr) {
  let ob = {};
  for (let key of arr) {
    if (!ob[key]) {
       ob[key] = 1;
     } else {
       ob[key]++
      }
    }
    let ar = Object.values(ob)
}

const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
frequencySort(arr3)
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
    friends: [2, 3, 4],
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    occupation: "Data Scientist",
    friends: [1, 4],
  },
  {
    id: 3,
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    occupation: "UX Designer",
    friends: [2, 4],
  },
  {
    id: 4,
    firstName: "James",
    lastName: "Johnson",
    age: 55,
    occupation: "CTO",
    friends: [1, 2, 3],
  },
];

ageSort(users)

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
