const arr1 = [
  {
    id: 0,
    name: "Product name 0",
    quantity: 36,
    price: "$53.29"
  },
  {
    id: 1,
    name: "Product name 1",
    quantity: 32,
    price: "$99.33"
  },
  {
    id: 2,
    name: "Product name 2",
    quantity: 34,
    price: "$86.83"
  },
  {
    id: 3,
    name: "Product name 3",
    quantity: 25,
    price: "$68.07"
  },
  {
    id: 4,
    name: "Product name 4",
    quantity: 25,
    price: "$74.79"
  }
];
const arr2 = [
  {
    id: 2,
    name: "Product name 2",
    quantity: 34,
    price: "$86.83"
  },
  {
    id: 3,
    name: "Product name 3",
    quantity: 25,
    price: "$68.07"
  }
];

//Solution One
function compareOne(first, second) {
  const result = first;
  for (const secondEl in second) {
    for(const firstEl in first){
      const test1 = first[firstEl];
      const test2 = second[secondEl];
      let found = JSON.stringify(first[firstEl])===JSON.stringify(second[secondEl]);
      if (found) {
        result.splice(firstEl,1);
        break;
      }
    }
  }
  return result;
}

//Solution Two 
function compareTwo(otherArray) {
  return function (current) {
    return otherArray.filter(function (other) {
      return other.id == current.id
    }).length == 0;
  }
}

const result = arr1.filter(compareTwo(arr2));
const result2 = compareOne(arr1, arr2);
const pesho = 10;