import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#B4D093',
    },
    secondary: {
      main: '#E8B087',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
)
