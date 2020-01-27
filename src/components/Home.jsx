/* eslint-disable no-else-return */
import React from "react";
import { Grid } from "@material-ui/core";
import UserPanel from "../containers/pages/user/UserPanel";
import UserProfile from "../containers/pages/user/UserProfile";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Grid container justify="space-around" spacing={2}>
          <Grid item xs={4}>
            <UserProfile />
          </Grid>
          <Grid item xs={8}>
            <UserPanel />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;