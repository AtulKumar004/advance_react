import React from "react";

const BookInfo = ({ book }) => {
    const { name, price, title, pages } = book || {};
  return book ? (
    <>
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Price : {price}</p>
      <h2>Number of pages : {pages}</h2>
    
    </>
  ) : (
    <h1>Loading... !</h1>
  );
};

export default BookInfo;
