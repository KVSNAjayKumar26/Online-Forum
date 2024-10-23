import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Reply = ({ reply }) => {
  return (
    <Card style={{ margin: '10px 0' }} variant='outlined'>
        <CardContent>
            <Typography variant='body2'>{reply.content}</Typography>
            <Typography variant='caption'>- {reply.user}</Typography>
        </CardContent>
    </Card>
  );
};

export default Reply