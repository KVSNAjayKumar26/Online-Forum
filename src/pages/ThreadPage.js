import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { threadsData } from '../services/threadService';
import Reply from '../components/Reply';
import NewThreadForm from '../components/NewThreadForm';

const ThreadPage = () => {
    const {id } = useParams();
    const thread = threadsData.find(thread => thread.id === id);
    const [replies] = useState(thread.replies);
  return (
    <div style={{ padding: '20px' }}>
        <h2>{thread.title}</h2>
        <p>{thread.content}</p>

        <h3>Replies:</h3>
        {replies.map(reply => (
            <Reply key={reply.id} reply={reply} />
        ))}

        <NewThreadForm threadId={id} />
    </div>
  );
};

export default ThreadPage;