import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          MT-3 Pendings
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          Basic Task Application
        </Typography>
      </Stack>
      <TemplateTester />
      <Counter />
    </Container>
  );
};

export default Home;
