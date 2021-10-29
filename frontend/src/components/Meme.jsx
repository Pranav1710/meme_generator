import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";

const Meme = ({ meme }) => {
    m = '/memes/' + meme.filename
  return (
    <>
      <Card className='my-3 p-3 rounded'>
          <Card.Img src={m} variant='top' />
      </Card>
    </>
  );
};

export default Product;
