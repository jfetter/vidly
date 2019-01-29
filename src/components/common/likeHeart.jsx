import React from "react";
const LikeHeart = ({ like, toggleLike }) => {
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={() => {
        toggleLike();
      }}
      className={like ? "fa fa-heart" : "fa fa-heart-o"}
    />
  );
};

export default LikeHeart;
