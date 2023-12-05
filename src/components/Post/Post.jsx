import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  if (posts.length <= 0) {
    return "No posts found...";
  }
  const post = posts.map((post) => {
    return (
      <div key={post.id}>
        <Link to={"/postDetail/" + post.id}>
          <p>Post: {post.title}</p>
        </Link>
      </div>
    );
  });
  return <>{post}</>;
};

export default Post;
