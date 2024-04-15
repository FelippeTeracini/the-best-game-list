import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: grey,
  },
});

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h5" style={{textDecoration:"none", color:'white'}} component={Link} to="/" sx={{ flexGrow: 1 }}>
            TheBestGameList
          </Typography>
          <Typography sx={{ flexGrow: 8 }}></Typography>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color='secondary' sx={{ flexGrow: 1, mr:2}} component={Link} to="/signUp"><b>Sign Up</b></Button>
            <Button variant="contained" color='primary' sx={{ flexGrow: 1}} component={Link} to="/login"><b>Login</b></Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar
