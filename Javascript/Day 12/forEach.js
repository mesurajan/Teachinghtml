const product = () => {
  const productdetails = [
    {
      id: 1,
      name: "T-shirt",
      actualprice: 1000,
      discountedprice: 800,
      instock: true,
      color: ["red", "blue", "green"],
      description: "A comfortable cotton T-shirt for casual wear.",
    },
    {
      id: 2,
      name: "Jeans",
      actualprice: 2000,
      discountedprice: 1600,
      instock: false,
      color: ["black", "blue"],
      description: "Durable denim jeans for everyday wear.",
    },
  ];

  console.log("The list of clothing products are as follows:");
  console.log("--------------------------------------------------");

  productdetails.map((products) => {
    console.log("Product ID :", products.id);
    console.log("Product Name :", products.name);
    console.log("Actual Price :", products.actualprice);
    console.log("Discounted Price :", products.discountedprice);
    console.log("In Stock :", products.instock);
    console.log("Color :", products.color);
    console.log("Description :", products.description);
    console.log("-----------------------------");
  });
};
product();

//create an array name listofstudnets and add 5 students with 6 properties of each student like name ,age,
// roll number, class, section, address and display the details of each student using forEach

//create an array name listofbooks and add 5 books with 6 properties of each book like title ,author,
// price, genre, publication year, description and display the details of each book using forEach

//create an array name listofmovies and add 5 movies with 6 properties of each movie like title ,director,
// release year, genre, rating, description and display the details of each movie using forEach

//create an array name listofcars and add 5 cars with 6 properties of each car like make ,model,
// year, price, color, description and display the details of each car using forEach


//create an array name listofPms and add 5 prime ministers with 6 properties of each prime minister like name ,age,elected year,
//  party, term, description and display the details of each prime minister using map

//create an array name listofCountries and add 5 countries with 6 properties of each country like name ,capital, population,
// area, currency, description and display the details of each country using map

//create an array name listofindangered species and add 5 endangered species with 6 properties of each species like name ,scientific name, 
// habitat,population, conservation status, description and display the details of each species using map

//create an array name listofplanets and add 5 planets with 6 properties of each planet like name ,distance from sun,
// diameter, mass, number of moons, description and display the details of each planet using map