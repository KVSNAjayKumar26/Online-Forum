import { Grid } from '@mui/material'
import React from 'react'
import Thread from './Thread'

const ThreadList = ({ threads }) => {
  return (
    <Grid container spacing={2}>
        {threads.map(thread => (
            <Grid item xs={12} md={6} key={thread.id}>
                <Thread thread={thread} />
                </Grid>
        ))}
    </Grid>
  );
};

export default ThreadList;