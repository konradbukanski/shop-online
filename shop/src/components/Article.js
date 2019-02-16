import React from "react";

const Article = props => {
  return (
    <article>
      <h3
        style={{
          margin: "50px"
        }}
      >
        {props.titile}
      </h3>
      <span>{props.author}</span>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
