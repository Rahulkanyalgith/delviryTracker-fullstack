import React from "react";
import ProductCard from "./Productcard";
import pic1 from "/images/pic-1.jpg";
import pic2 from "/images/pic-2.jpg";
import pic3 from "/images/pic-3.jpg";
import pic4 from "/images/pic-4.jpg";
import pic5 from "/images/pic-5.jpg";
import pic6 from "/images/pic-6.jpg";

const Order = () => {
  const products = [
    {
      id: 1,
      title: "WALMART 1",
      description: "This is sample description",
      price: 10000,
      pic: pic1,
      trackingNumber: "020207021381215",
    },
    {
      id: 2,
      title: "WALMART 2",
      description: "This is sample description",
      price: 20000,
      pic: pic2,
      trackingNumber: "852426136339213",
    },
    {
      id: 3,
      title: "WALMART 3",
      description: "This is sample description",
      price: 30000,
      pic: pic3,
      trackingNumber: "076288115212522",
    },
    {
      id: 4,
      title: "WALMART 4",
      description: "This is sample description",
      price: 48900,
      pic: pic4,
      trackingNumber: "122816215025810",
    },
    {
      id: 5,
      title: "WALMART 5",
      description: "This is sample description",
      price: 50000,
      pic: pic5,
      trackingNumber: "843119172384577",
    },
    {
      id: 6,
      title: "WALMART 6",
      description: "This is sample description",
      price: 600900,
      pic: pic6,
      trackingNumber: "070358180009382",
    },
  ];

  return (
    <main className="mx-6 mt-3 lg:mx-48 my-10 grid grid-cols-1 gap-5">
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </main>
  );
};

export default Order;
