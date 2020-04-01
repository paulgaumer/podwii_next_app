import { useState } from 'react';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const signup = async (user) => {
  const res = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: user.email,
        password: user.password
      }
    })
  });

  console.log(res.headers.get('Authorization'));
  const data = await res.json();

  return {
    currentUserToken: data
  };
};

const SignUpPage = (props) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user);
  };

  return (
    <Layout>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
};

export default SignUpPage;
