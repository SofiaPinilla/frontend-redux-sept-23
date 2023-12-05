import React, { useEffect } from "react";
import Post from "../Post/Post";
import { getPosts } from "../../features/posts/postsSlice";
import { useDispatch } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Post />
    </div>
  );
};

export default Posts;
