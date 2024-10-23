import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

const NewThreadForm = ({ threadId }) => {
    const [reply, setReply] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reply:', reply, 'Thread ID:', threadId);
        setReply('');
    }
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <TextField
        label="Write a reply"
        variant='outlined'
        fullWidth
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        style={{ marginBottom: '10px' }}
        />
        <Button type='submit' variant='contained' color='primary'>Post Reply</Button>
    </form>
  );
};

export default NewThreadForm;