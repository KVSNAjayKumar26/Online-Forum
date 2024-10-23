import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
const UserProfile = ({ user }) => {
  return (
    <Box display="flex" alignItems="center" style={{ marginBottom: '20px' }}>
    <Avatar src={user.avatar} alt={user.name} />
    <Box ml={2}>
        <Typography variant='h6'>{user.name}</Typography>
        <Typography variant='body2'>{user.bio}</Typography>
    </Box>
</Box>
  )
}

export default UserProfile