import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const TransportationAction = () => {
  const [stepNumber, setStepNumber] = useState(1);

  let fact =
    'As of 2019, the average Canadian produced an equivalent of 14.2 tonnes of CO2, with transportation playing the largest role, contributing 35% of total CO2 production';

  const renderFormStepOne = () => {
    return (
      stepNumber === 1 && (
        <Grid container direction="column" gap="20px">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Typography variant="body1">{fact}</Typography>
          </Box>
          <Button
            onClick={() => {
              setStepNumber(2);
            }}
            variant="contained"
          >
            Get Started
          </Button>
        </Grid>
      )
    );
  };

  const renderFormStepTwo = () => {
    return (
      stepNumber === 2 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Walking kms "
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Cycling kms"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Bus kms" variant="outlined" />
          <Button variant="contained">Add Action</Button>
        </Box>
      )
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      sx={{
        width: 400,
        minHeight: '32vw',
        backgroundColor: '#e8f4f8',
        padding: '50px',
      }}
    >
      <Typography variant="h5">Transportation</Typography>
      {renderFormStepOne()}
      {renderFormStepTwo()}
    </Grid>
  );
};

export default TransportationAction;
