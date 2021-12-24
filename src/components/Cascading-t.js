import React, {Component } from 'react'
import axios from 'axios';
import '../App.css';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function Cascading()  {

  const [post, setPost] = React.useState(null);

  var data = JSON.stringify({
    "schoolId": "61c38c844b3925f593e9505c"
  });
  
  var config = {
    method: 'get',
    url: 'https://react-task-api.herokuapp.com/api/classes',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

  if (!post) return null;

  return (
    <div>
      <h1>{post.name}</h1>
    </div>
  );
}