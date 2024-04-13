import React from 'react';
import './Ourlatest.css'; // Assuming 'Ourlatest.css' is in the same directory

const products = [
  {
    imgSrc: '/facewash.webp', // Path relative to the public directory
    price: "19.00",
    name: "Facewash",
    description: "Description for facewash product."
  },
  {
    imgSrc: '/scrub.webp',
    price: "19.00",
    name: "Scrub",
    description: "Description for scrub product."
  },
  {
    imgSrc: '/toner.jpeg',
    price: "19.00",
    name: "Toner",
    description: "Description for toner product."
  },
  {
    imgSrc: '/serum.webp',
    price: "19.00",
    name: "Serum",
    description: "Description for serum product."
  },
  {
    imgSrc: '/sunscreen.jpg',
    price: "19.00",
    name: "Sunscreen",
    description: "Description for sunscreen product."
  },
 
];

const ProductCard = ({ product }) => {
  const { imgSrc, price, name, description } = product;
  return (
    <figure className="snip1171">
      <img src={imgSrc} alt={name} />
      <div className="price">${price}</div>
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="#">Add to Cart</a>
      </figcaption>
    </figure>
  );
};

const ProductList = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '15px', color: '#944E63' }}>
        <h3>Our Latest</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
