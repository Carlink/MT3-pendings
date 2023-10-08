import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Dashboard from '../../components/Dashboard/Dashboard'

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography color='#43ED3F' textAlign="center" variant="h2">
          MT-3 Pendings
        </Typography>
        <Typography color='#43ED3F' textAlign="center" variant="subtitle1">
          Basic Task Application
        </Typography>
      </Stack>
      <Dashboard />
    </Container >
  );
};

export default Home;
