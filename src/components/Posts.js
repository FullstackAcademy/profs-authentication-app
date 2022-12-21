import React from 'react';

const Posts = (props) => {
  const posts = props.posts;
  const token = props.token;

  const createPost = () => {
    fetch(
      'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: 'My favorite stuffed animal',
            description:
              'This is a pooh doll from 1973. It has been carefully taken care of since I first got it.',
            price: '$480.00',
            willDeliver: true,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={createPost}>New Post</button>
      {posts.map((post) => {
        return (
          <div className="singlePost">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>{post.price}</p>
            <p>{post.location}</p>
            <p>{post.willDeliver}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
