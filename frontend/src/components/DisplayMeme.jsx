import React from "react";
export const DisplayMeme = (props) => {
  // const prod = props.products.length===0?"No Product Available": null ;
  const mapMeme = (ele, i) => (
    <div className="col-md-2 meme-select mb-5" key={i}>
      <img src={ele.imgUrl} alt="" className="meme-template"></img>
    </div>
  );
  return (
    <>
      {
        <div className="row mt-3" >
          {props.memes.map(mapMeme)}
        </div>
      }
    </>
  );
};
export default DisplayMeme;
