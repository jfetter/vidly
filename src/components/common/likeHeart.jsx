import React, { Component } from "react";
class LikeHeart extends Component {
  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={() => this.props.toggleLike(this.props.like)}
        className={this.props.like ? "fa fa-heart" : "fa fa-heart-o"}
      />
    );
  }
}

export default LikeHeart;
