import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Thread = ({ thread }) => {
  return (
    <motion.div initial={{ opacity: 0}} animate={{  opacity: 1}} transition={{ duration: 0.5}}>
        <Card variant='outlined'>
            <CardContent>
                <Typography variant='h5'>{thread.title}</Typography>
                <Typography variant='body2'>{thread.content}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/thread/${thread.id}`} color='primary'>
                View Replies
                </Button>
            </CardActions>
        </Card>
    </motion.div>
  );
};

export default Thread;