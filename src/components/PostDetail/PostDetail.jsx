import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import { Spin } from "antd";

const PostDetail = () => {
  const { id } = useParams();
  const {post}= useSelector(state => state.posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id))
  }, []);
  if(!post){
    return <Spin/>
  }
  
  return <div>
    <h2>Title: {post.title}</h2>
    <p>Content: {post.content}</p>
    <p>Date: {new Date(post.createdAt).toDateString()}</p>
  </div>;
};

export default PostDetail;
