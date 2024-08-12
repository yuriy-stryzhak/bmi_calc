import * as React from 'react';
import { useState, useMemo } from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const handleHeightChange = (event, newValue) => {
    setHeight(newValue);
  };

  const handleWeightChange = (event, newValue) => {
    setWeight(newValue);
  };

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 5 }}
      className="container"
    >
      <Typography 
        variant="h5" 
        component="h1" 
        gutterBottom 
        align="center" 
        sx={{ fontWeight: 'bold', mb: 5 }}
        className="title"
      >
        Body Mass Index Calculator
      </Typography>

      <div className="input-section">
        <Typography variant="body1" gutterBottom>
          Weight: {weight} kg
        </Typography>
        <Slider
          value={weight}
          onChange={handleWeightChange}
          step={1}
          min={40}
          max={220}
          valueLabelDisplay="auto"
          style={{ marginBottom: '25px' }}
        />

        <Typography variant="body1" gutterBottom>
          Height: {height} cm
        </Typography>
        <Slider
          value={height}
          onChange={handleHeightChange}
          step={1}
          min={140}
          max={220}
          valueLabelDisplay="auto"
        />
      </div>

      <div className="output-section" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body1" gutterBottom>
          Your Index is
        </Typography>

        <Chip
          label={output}
          sx={{
            fontSize: '1.5rem',
            padding: '1rem',
            height: 'auto',
            minWidth: '80px',
            backgroundColor: '#4caf50',
            color: 'white',
          }}
        />
      </div>
    </Container>
  );
}

export default App;
