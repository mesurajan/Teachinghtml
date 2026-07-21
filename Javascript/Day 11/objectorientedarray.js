const product = [
  {
    id: 1,
    name: "Laptop",
    actualprice: 50000,
    dicountedprice: 45000,
    instock: true,
    color: ["black", "silver", "white"],
    description: "A high-performance laptop for all your needs.",
  },
  {
    id: 2,
    name: "Smartphone",
    actualprice: 30000,
    dicountedprice: 25000,
    instock: false,
    color: ["black", "white", "blue"],
    description: "A feature-rich smartphone for all your needs.",
  },
  {
    id: 3,
    name: "Headphones",
    actualprice: 5000,
    dicountedprice: 4000,
    instock: true,
    color: ["black", "red", "blue"],
    description:
      "A pair of high-quality headphones for an immersive audio experience.",
  },
];

console.log("The list of products are as follows:");
for (let i = 0; i < product.length; i++) {
  console.log("Product ID :", product[i].id);
  console.log("Product Name :", product[i].name);
  console.log("Actual Price :", product[i].actualprice);
  console.log("Discounted Price :", product[i].dicountedprice);
  console.log("In Stock :", product[i].instock);
  console.log("Color :", product[i].color);
  console.log("Description :", product[i].description);
  console.log("-----------------------------");
}

//create an array name fruitsdetails and add 5 fruits with 6 properties of each fruits like name ,price,
//discounted price, instock, color, description and display the details of each fruit using for loop and
// for in loop.

//create an array name productdetails and add 5 clothing products with 6 properties of each product like name ,price,
//discounted price, instock, color, description and display the details of each product using for loop and
// for in loop.

//create an array name listoffurniture and add 5 furniture products with 6 properties of each product like name ,price,
//discounted price, instock, color, description and display the details of each product using for loop and
// for in loop.

//
