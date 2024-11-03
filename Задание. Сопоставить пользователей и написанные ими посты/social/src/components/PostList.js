import React from 'react';
import '../styles/PostList.css';

const PostList = ({ selectedUser, posts }) => {
  return (
    <div className="post-list">
      <h2>{selectedUser ? `Посты пользователя ${selectedUser.name}` : 'Выберите пользователя'}</h2>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
