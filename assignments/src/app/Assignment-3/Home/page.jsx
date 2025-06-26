'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>Home Page</h1>
      <p>{user ? `Welcome, ${user.username}!` : "Please log in."}</p>
    </main>
  );
}