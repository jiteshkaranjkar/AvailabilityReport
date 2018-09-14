import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  dropdownButton: {
    margin: theme.spacing.unit,
    minWidth: "150px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:"0px",
  }
});

class CustomToggle extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {selectTitle:this.props.selectTitle, open:this.props.isOpen}
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      //debugger;
      e.preventDefault();
      this.props.onClick(e);
    }
    
  
    render() {
      const { classes } = this.props;
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}> */}
            <DropdownButton aria-expanded={this.state.open} className={classes.dropdownButton} onClick={this.handleClick} bsStyle="primary" title={this.state.selectTitle}>
              {this.props.children}
            </DropdownButton>
            {/* </Paper> */}
          </Grid>
        </Grid>
      );
    }
  }

export default withStyles(styles, { withTheme: true })(CustomToggle);