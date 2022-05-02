const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//doubles the quantity and price in each object
const newArray1 = itemsObject.map((ele) => {
  ele.quantity = ele.quantity * 2;
  ele.price = ele.price * 2;
  return ele;
});
console.log(newArray1);

//contains item quantity > 2 and price > 300 only
const itemsObject1 = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const newArray2 = itemsObject1.filter((ele) => {
  return ele.quantity > 2 && ele.price > 300;
});
console.log(newArray2);

//calcuate the total value of the items
function sum3(itemsObject1) {
  let data = 0;
  for (let i = 0; i < itemsObject1.length; i++) {
    data = data + itemsObject1[i].quantity * itemsObject1[i].price;
  }
  return data;
}
console.log(sum3(itemsObject1));

console.log(itemsObject1
  .reduce(acc)=>{}

);

// replace space,-, transform to lowercase
const string =
  " Perhaps The Easiest-to-understand  Case  For Reduce Is   To Return The Sum Of All The Elements In An Array ";
console.log(tostring(string));
function tostring(string) {
  return string.replace(/-|\s+/g, "").toLowerCase();
}
