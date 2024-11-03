import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch('/users.json');
      const postsResponse = await fetch('/posts.json');
      const usersData = await usersResponse.json();
      const postsData = await postsResponse.json();

      setUsers(usersData);
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return { users, posts };
};

export default useFetchData;
