// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Screens
import { Dashboard } from './src/screens';

// Theme
import theme from './src/shared/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
