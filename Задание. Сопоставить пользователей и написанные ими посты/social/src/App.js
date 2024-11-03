import React, { useState } from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import useFetchData from './hooks/useFetchData';

const App = () => {
  const { users, posts } = useFetchData();
  const [selectedUser, setSelectedUser] = useState(null);
  const userPosts = selectedUser ? posts.filter(post => post.userId === selectedUser.id) : [];

  return (
    <div style={{ display: 'flex' }}>
      <UserList users={users} onUserSelect={setSelectedUser} />
      <PostList selectedUser={selectedUser} posts={userPosts} />
    </div>
  );
};

export default App;
