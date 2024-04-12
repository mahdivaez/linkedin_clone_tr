import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
const Post = ({ name, description, massage, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{massage}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/> 
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/> 
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/> 
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/> 

      </div>
    </div>
  );
};

export default Post;
