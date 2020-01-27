import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TableWithActions from "../../../components/TableWithActions";

import _ from "lodash";

import { enabledActions } from "./userData";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const UserPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {_.map(enabledActions(), action => {
        return (
          <ExpansionPanel key={action.type}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                {action.title}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TableWithActions type={action.type} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};
export default UserPanel;
