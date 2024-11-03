import React from 'react';
import '../styles/UserList.css';

const UserList = ({ users, onUserSelect }) => {
  return (
    <div className="user-list">
      <h2>Пользователи</h2>
      {users.map(user => (
        <div
          key={user.id}
          className="user-item"
          onClick={() => onUserSelect(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
