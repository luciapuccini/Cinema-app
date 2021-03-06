import React, { useState } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link, useHistory } from "react-router-dom";
import { createUser } from "../../api/fetchData";

const handleSubmit = (values, history, setError) => {
  const resp = createUser(values.email, values.name, values.password);
  resp.then(e => {
    setError(e);
  });
};

const SignUpForm = () => {
  const [error, setError] = useState("");

  const history = useHistory();
  const classes = useStyles();
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(5)
      .required("Required"),
    confirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  });
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "20px" }}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "20px" }}
        >
          Sign up
        </Typography>
        <Typography component="span" style={{ marginBottom: "10px" }}>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/web/auth"
            }}
          >
            I'm already a user
          </Link>
        </Typography>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirm: "" }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            handleSubmit(values, history, setError);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange

            /* and other goodies */
          }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="User Name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    error={errors.name && touched.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="name"
                    render={msg => <Typography>{msg}</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    error={errors.email && touched.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="email"
                    render={msg => <Typography>{msg}</Typography>}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    error={errors.password && touched.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    render={msg => <Typography>{msg}</Typography>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="confirm"
                    label="Confirm Password"
                    name="confirm"
                    type="password"
                    autoComplete="confirm"
                    value={values.confirm}
                    error={errors.confirm && touched.confirm}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirm"
                    render={msg => <Typography>{msg}</Typography>}
                  />
                </Grid>
              </Grid>
              {error.message ? (
                <Alert severity="error" style={{ marginTop: "15px" }}>
                  {error.message}
                </Alert>
              ) : null}
              {error.id ? (
                <Alert severity="success" style={{ marginTop: "15px" }}>
                  Succesfuly createrd User, Please login
                </Alert>
              ) : null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  errorMessageStyle: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export { SignUpForm };
