// let user ={

//     firstName:"John",
//     lastName:"Doe",
//     age:30,
//     isEmployed:true,
// }
// console.log("User First Name:",user.firstName);
// console.log("User Last Name:",user.lastName);
// console.log("User Age:",user.age);
// console.log("Is User Employed?:",user.isEmployed);

// let productItem : {
//    productname : string,
//    price : number,
//    inStock : boolean
// } = {
//     "product*name": "Laptop",
//     price: 999.99,
//     inStock: true,
// };

// console.log("Product Name:", productItem[product*name]);
// console.log("Product Price:", productItem.price);
// console.log("Is Product In Stock?:", productItem.inStock);
// 
type User = {
    "first-name": string;
    "last name": string;
    "@email": string;
};

let user: User = {
    "first-name": "Priya",
    "last name": "Rani",
    "@email": "p@test.com"
};
console.log("User First Name:", user["first-name"]);
console.log("User Last Name:", user["last name"]);
console.log("User Email:", user["@email"]);
