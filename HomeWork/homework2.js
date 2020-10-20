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

function compare(otherArray){
  return function(current){
    return otherArray.filter(function(other){
      return other.id == current.id
    }).length == 0;
  }
}

const result = arr1.filter(compare(arr2));