import React, { useState } from 'react'
import { threadsData } from '../services/threadService'
import ThreadList from '../components/ThreadList';

const Home = () => {
    const [threads] = useState(threadsData);
  return (
    <div style={{ padding: '20px' }}>
        <h1>Discussion Forum</h1>
        <ThreadList threads={threads} />
    </div>
  );
};

export default Home;