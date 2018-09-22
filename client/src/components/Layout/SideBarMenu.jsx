 import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessIcon from '@material-ui/icons/Business';
import StorageIcon from '@material-ui/icons/Storage';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import PagesIcon from '@material-ui/icons/Pages';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Bar, Pie, Doughnut, Polar } from 'react-chartjs-2';
import './SideBarMenu.css';
import ChartistGraph from "react-chartist";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts";

const drawerWidth = 175;
const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 800,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state ={ open:false, chartData:this.props.chartData, selectedItem: "Offices" }
    this.peopleClickEvent = this.peopleClickEvent.bind(this);
  }

  // state = {
  //   open: false,
  //   item: ""
  // };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    // debugger;
    //this.state.chartData;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              <h4>Detailed dashboard for <b> {this.state.selectedItem} </b></h4>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }} open={this.state.open}>
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
            <List>  
              <div>
                <ListItem button onClick={this.businessClickEvent}>
                  <ListItemIcon>
                    <BusinessIcon onClick={this.businessClickEvent}/>
                  </ListItemIcon>
                  <ListItemText primary="Offices"/>
                </ListItem>
                <ListItem button  onClick={this.peopleClickEvent}>
                  <ListItemIcon>
                    <PeopleIcon onClick={this.peopleClickEvent}/>
                  </ListItemIcon>
                  <ListItemText primary="Employee Type"/>
                </ListItem>
                <ListItem button onClick={this.storageClickEvent}>
                  <ListItemIcon>
                    <StorageIcon onClick={this.storageClickEvent}/>
                  </ListItemIcon>
                  <ListItemText primary="Levels"/>
                </ListItem>
                <ListItem button onClick={this.workClickEvent}>
                  <ListItemIcon>
                    <WorkIcon onClick={this.workClickEvent}/>
                  </ListItemIcon>
                  <ListItemText primary="Business Units"/>
                </ListItem>
                <ListItem button onClick={this.pageClickEvent} >
                  <ListItemIcon>
                    <PagesIcon onClick={this.pageClickEvent} />
                  </ListItemIcon>
                  <ListItemText primary="Service Areas"/>
                </ListItem>
              </div>
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {/* <Typography noWrap>
            {'Chart Data for '} <b> {this.state.selectedItem} </b> */}
              <div className="mainDiv">
              <Grid container spacing={24}  xs={12} sm={12} md={12}>
                  <Grid item xs={12} sm={6}>
                    <Paper >
                      <Bar data={this.state.chartData} options={barOptions}  width="500" height="300"/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper >
                      <Pie data={this.state.chartData} options={options} width="500" height="300"/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper >
                      <Doughnut data={this.state.chartData} options={options} width="500" height="300"/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper >
                      <Polar data={this.state.chartData} options={options} width="500" height="300"/>    
                  {/*       <ChartistGraph
                        className="ct-chart"
                        data={this.state.chartData.data}
                        type="Line"
                        options={this.state.chartData.options}
                        listener={this.state.chartData.animation}
                      /> */}                 
                    </Paper>
                  </Grid>
              </Grid>
              </div>
          {/* </Typography> */}
        </main>
      </div>
    );
  }

  businessClickEvent = (e)=>{
    this.setState({chartData:this.props.getChartDataParentCallback(e, "Office")});
    this.setState({selectedItem:"Offices"});
  };
  peopleClickEvent = (e)=>{
    this.setState({chartData:this.props.getChartDataParentCallback(e, "Employee Type")}); 
    this.setState({selectedItem:"Employee Types"});
  };
  storageClickEvent = (e)=>{
    this.setState({chartData:this.props.getChartDataParentCallback(e, "Level")});
    this.setState({selectedItem:"Levels"});
  };
  workClickEvent = (e)=>{
    this.setState({chartData:this.props.getChartDataParentCallback(e, "Business Unit")});
    this.setState({selectedItem:"Business Unit"});
  };
  pageClickEvent = (e)=>{
    this.setState({chartData:this.props.getChartDataParentCallback(e, "Service Area")}); 
    this.setState({selectedItem:"Service Area"});
  };
}
const options = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 10
    }
  }
}

const barOptions = {
  maintainAspectRatio: false,
  responsive: false,
  legend: {
    position: 'left',
    display:false,
    labels: {
      boxWidth: 10
    }
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
