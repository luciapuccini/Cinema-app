import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
}));

const Error = () => (
  <div className={useStyles().root}>
    <CssBaseline />
    <Container component="main" className={useStyles().main} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        404
      </Typography>
    </Container>
  </div>
);
export default Error;
