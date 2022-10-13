import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../firebase";

function PostDetail() {

  const[post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(()=>{
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapsot)=>{
        console.log('snapshot',snapsot.data());
        setPost(snapsot.data());
      });
  },[]);

  return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;