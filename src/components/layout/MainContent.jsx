import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: "#78909c",
    padding: theme.spacing(3)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: "-25px"
  },
  fullWidth: {
    width: "100%"
  }
}));

const MainContent = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.content}>{children}</div>;
};

export default MainContent;
