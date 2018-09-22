import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
// import withStyles from "@material-ui/core/styles/withStyles";
import { Popover, Row, Col, Panel, OverlayTrigger } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import BusinessIcon from '@material-ui/icons/Business';
import StorageIcon from '@material-ui/icons/Storage';
import PeopleIcon from '@material-ui/icons/People';
//import WorkIcon from '@material-ui/icons/Work';
import PagesIcon from '@material-ui/icons/Pages';
import Typography from '@material-ui/core/Typography';

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import People  from "@material-ui/icons/People";
import Money  from "@material-ui/icons/Money";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Rowing from "@material-ui/icons/Rowing";
import Event from "@material-ui/icons/Event";
import ThumbsUp from "@material-ui/icons/ThumbUp";
//CORE Compoenets
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import Table from "../components/Table/Table.jsx";
import Tasks from "../components/Tasks/Tasks.jsx";
import CustomTabs from "../components/CustomTabs/CustomTabs.jsx";
import Danger from "../components/Typography/Danger.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardIcon from "../components/Card/CardIcon.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import ChartistGraph from "react-chartist";
//import './Home.css';
//import { successColor } from "assets/jss/material-dashboard-react.jsx";
import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
//const theme = createMuiTheme();
import { bugs, website, server } from "../variables/general";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../variables/charts";

import AnimatedNumber from 'react-animated-number';

class HomeLayout extends React.Component {
    constructor(props){
      super(props);
      this.state ={ numbers:this.props.numbers, 
        totalEmployeeCount : this.props.numbers.employeesCount,
        totalSydneyBillingHours: 975*7.5*5*12,
        totalNationalBillingHours: this.props.numbers.employeesCount*7.5*5*12,
        utilization: 0,
        employeeCount: 0,
        sydneyBillingHours: 0,
        nationalBillingHours: 0
      }
      this.businessClickEvent = this.businessClickEvent.bind(this);
    }
  
    fetchNumbers() {
      if(this.state.utilization < 85){
        this.setState({
          utilization: this.state.utilization + 5  
        });
      }else{this.setState({
          utilization: 86.57  
        });
      }

      if(this.state.employeeCount < this.state.totalEmployeeCount){
        this.setState({
          employeeCount: this.state.employeeCount + 67,
        });
      }else{this.setState({
        employeeCount: this.state.totalEmployeeCount  
        });
      }

      if(this.state.sydneyBillingHours < this.state.totalSydneyBillingHours){
        this.setState({
          sydneyBillingHours: this.state.sydneyBillingHours + 9999,
        });
      }else{this.setState({
        sydneyBillingHours:this.state.totalSydneyBillingHours 
        });
      }
     
      if(this.state.nationalBillingHours < this.state.totalNationalBillingHours){
        this.setState({
          nationalBillingHours: this.state.nationalBillingHours + 19999,
        });
      }else{this.setState({
          nationalBillingHours: this.state.totalNationalBillingHours  
        });
      }
    }
  
    
    componentWillMount = () => {
      //debugger;
      // localStorage.getItem('utilization') &&  this.setState({
      //   utilization: localStorage.getItem('utilization'),
      // })
      // localStorage.getItem('employeeCount') &&  this.setState({
      //   employeeCount: localStorage.getItem('employeeCount'),
      // })
      // localStorage.getItem('sydneyBillingHours') &&  this.setState({
      //   sydneyBillingHours: localStorage.getItem('sydneyBillingHours'),
      // })
      // localStorage.getItem('nationalBillingHours') &&  this.setState({
      //   nationalBillingHours: localStorage.getItem('nationalBillingHours'),
      // })
    }

    componentWillUpdate = (nextProps, nextState) => {
      // debugger;
      // localStorage.setItem('utilization', this.state.utilization);
      // localStorage.setItem('employeeCount', this.state.employeeCount);
      // localStorage.setItem('sydneyBillingHours', this.state.sydneyBillingHours);
      // localStorage.setItem('nationalBillingHours', this.state.nationalBillingHours);
    }

    componentDidMount() {
      // debugger;
      // if(!localStorage.getItem('utilization') && 
      //   !localStorage.getItem('employeeCount') && 
      //     !localStorage.getItem('sydneyBillingHours') &&  
      //       !localStorage.getItem('nationalBillingHours'))
      // {
        // if(this.state.utilization < 86){
          setInterval(() => {
            this.fetchNumbers();
          }, 100);
        // }
      // }
    }

    roundInt(value) {
      if (value) {
        return parseFloat(Math.round(value * 100) / 100).toFixed(0);
      }
      return 0;
    }

    roundFloat(value) {
      if (value) {
        return parseFloat(Math.round(value * 100) / 100).toFixed(2);
      }
      return 0;
    }
  

    render() {
        const { classes } = this.props;
        // let bgColor = '#e04242';

        // if (this.state.prevutilization < this.state.utilization) {
        //   bgColor = '#40a740';
        // }
    
        const employeePopOver = (
          <Popover id="modal-popover" title="Employees">
            Total {this.props.numbers.employeesCount}+ employees and counting...
          </Popover>
        );
        // debugger;
        return (
        <div>
            
            {/* <Paper className={classes.rootPaper} elevation={10}>
                <Typography variant="headline">
                    <h2>Welcome to National Availabilty & Utilisation application.</h2>
                </Typography>
                <Typography>
                <h4>This application details out resource availability and utilisation.</h4>
                </Typography>
        </Paper>*/}
            
            <Row className="show-grid text-center">
            <Col style={{height: '20px' }} xs={12} sm={12} className="person-wrapper">
            </Col>
            </Row>
            {/* 
            <Row className="show-grid text-center">
                <Col xs={12} sm={3} className="person-wrapper">
                    <Paper className={classes.paper}>
                        {' '}
                        <OverlayTrigger overlay={employeePopOver}>
                            <Panel bsStyle="primary" className={classes.root}>
                                <Panel.Body>
                                    <Typography variant="display3" style={styles.numbers} >
                                        {this.props.numbers.employeesCount}+
                                    </Typography> 
                                    <PeopleIcon variant="contained" size="large" color="primary" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
                                </Panel.Body>
                                <Panel.Heading>
                                    <Panel.Title toggle>Employees</Panel.Title>
                                </Panel.Heading>
                            </Panel>
                        </OverlayTrigger>{' '}
                    </Paper>
                </Col>
                <Col xs={12} sm={3} className="person-wrapper">
                    <Paper className={classes.paper}>
                        <Panel bsStyle="primary" className={classes.root}>
                            <Panel.Body>
                                <Typography variant="display3" style={styles.numbers} >
                                    {975*7.5*5*12}+
                                </Typography> 
                                <BusinessIcon variant="contained" size="large" color="primary" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
                            </Panel.Body>
                            <Panel.Heading>
                                <Panel.Title toggle>Sydney Billing Hours</Panel.Title>
                            </Panel.Heading>
                        </Panel>
                    </Paper>
                </Col>
                <Col xs={12} sm={3} className="person-wrapper">
                    <Paper className={classes.paper}>
                        <Panel bsStyle="primary" className={classes.root}>
                            <Panel.Body>
                                <Typography variant="display3" style={styles.numbers} >
                                {this.props.numbers.employeesCount*7.5*5*12}+
                                </Typography> 
                                <StorageIcon color="primary" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
                            </Panel.Body>
                            <Panel.Heading>
                                <Panel.Title toggle>Total Billing Hours</Panel.Title>
                            </Panel.Heading>
                        </Panel>
                    </Paper>
                </Col>
                <Col xs={12} sm={3} className="person-wrapper">                
                    <Paper className={classes.paper}>
                        <Panel bsStyle="primary" className={classes.root}>
                            <Panel.Body>
                                <Typography variant="display3" style={styles.numbers} >
                                    {86.7}%
                                </Typography>
                                <PagesIcon color="primary" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
                            </Panel.Body>
                            <Panel.Heading>
                                <Panel.Title toggle>Sydney Utilization</Panel.Title>
                            </Panel.Heading>
                        </Panel>
                    </Paper>
                </Col>
            </Row>
              */}
            
      <div>
      <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PeopleIcon variant="contained" size="large" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
              </CardIcon>
              <h2 className={classes.cardTitle}>
              <Typography variant="display3" className={classes.successText}>
              <AnimatedNumber component="text" value={this.state.employeeCount}
                style={{
                    transition: '1s ease-out',
                    transitionProperty:
                        'background-color, color, opacity'
                }}
                duration={300}
                formatValue={n => this.roundInt(n)}/>+
              </Typography> 
              </h2>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <People />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <Typography variant="headline" >
                    Employees
                  </Typography> 
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <BusinessIcon variant="contained" size="large" style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
              </CardIcon>
                <Typography variant="display3"  className={classes.successText}>
                <AnimatedNumber component="text" value={this.state.sydneyBillingHours}
                  style={{
                      transition: '1s ease-out',
                      transitionProperty:
                          'background-color, color, opacity'
                  }}
                  // frameStyle={perc => (
                  //     perc === 100 ? {} : {backgroundColor: bgColor}
                  // )}
                  duration={300}
                  formatValue={n => this.roundInt(n)}/>+
                </Typography> 
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Money />
              <Typography variant="headline" >
                Sydney Billing Hours
              </Typography> 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
              <StorageIcon style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
              </CardIcon>
              <Typography variant="display3" className={classes.successText}>
              <AnimatedNumber component="text" value={this.state.nationalBillingHours}
                style={{
                    transition: '1s ease-out',
                    transitionProperty:
                        'background-color, color, opacity'
                }}
                // frameStyle={perc => (
                //     perc === 100 ? {} : {backgroundColor: bgColor}
                // )}
                duration={300}
                formatValue={n => this.roundInt(n)}/>+
              </Typography> 
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <StorageIcon />
                <Typography variant="headline" >
                  Total Billing Hours
                </Typography> 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
              <PagesIcon style={{ fontSize: 50 }} className={classes.iconHover}  onClick={this.businessClickEvent}/>
              </CardIcon>
              <Typography variant="display3" className={classes.successText}>
                <AnimatedNumber component="text" value={this.state.utilization}
                  style={{
                      transition: '1s ease-out',
                      transitionProperty:
                          'background-color, color, opacity'
                  }}
                  // frameStyle={perc => (
                  //     perc === 100 ? {} : {backgroundColor: bgColor}
                  // )}
                  duration={300}
                  formatValue={n => this.roundFloat(n)}/>%
                  
              </Typography>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <PagesIcon />
                <Typography variant="headline" >
                Sydney Utilization
                </Typography> 
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
        
      <GridContainer> 
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="success">
            <ChartistGraph
              className="ct-chart"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="warning">
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      {/*<GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="success">
          <ChartistGraph
            className="ct-chart"
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
          />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Employees in cities
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="warning">
          <ChartistGraph
            className="ct-chart"
            data={emailsSubscriptionChart.data}
            type="Bar"
            options={emailsSubscriptionChart.options}
            responsiveOptions={emailsSubscriptionChart.responsiveOptions}
            listener={emailsSubscriptionChart.animation}
          />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Employees at different Levels
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="danger">
          <ChartistGraph
            className="ct-chart"
            data={completedTasksChart.data}
            type="Line"
            options={completedTasksChart.options}
            listener={completedTasksChart.animation}
          />
          </CardHeader>
          <CardBody>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> Employees in different Levels
            </div>
          </CardFooter>
        </Card>
      </GridItem>*/}
    </GridContainer>
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <CustomTabs 
          title="Tasks:"
          headerColor="warning"
          tabs={[
            {
              tabName: "Activities",
              tabIcon: Rowing,
              tabContent: (
                <Tasks
                  checkedIndexes={[0, 3]}
                  tasksIndexes={[0, 1, 2, 3]}
                  tasks={bugs}
                />
              )
            },
            {
              tabName: "Events",
              tabIcon: Event,
              tabContent: (
                <Tasks
                  checkedIndexes={[0]}
                  tasksIndexes={[0, 1]}
                  tasks={website}
                />
              )
            },
            {
              tabName: "Wins & Pipelines",
              tabIcon: ThumbsUp,
              tabContent: (
                <Tasks
                  checkedIndexes={[1]}
                  tasksIndexes={[0, 1, 2]}
                  tasks={server}
                />
              )
            }
          ]}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <p className={classes.cardTitleWhite}>
              New employees joining September, 2018
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="warning"
              tableHead={["ID", "Name", "Level", "Operating Unit"]}
              tableData={[
                ["1", "Dakota Rice", "CONSULTANT", "CHANNELS"],
                ["2", "Minerva Hooper", "SENIOR CONSULTANT", "PLATFORMS"],
                ["3", "Sage Rodriguez", "GRADUATE", "S&I"],
                ["4", "Philip Chaney", "MANAGER", "OPTIMISATION"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
      </div>
        {/* </Grid> */}
        </div>
        )
    } 

    businessClickEvent(event){
    //debugger;
    }
}
// const styles = theme => ({
//   root: {
//     //display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     background: 'linear-gradient(45deg, #86bc25 10%, #f2fcfe 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     //height: 48,
//     //padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(240, 244, 195, .3)',
//   },
//   rootPaper: theme.mixins.gutters({
//     paddingTop: 16,
//     paddingBottom: 16,
//     color:'grey[800]',
//     height:200,
//     background: 'linear-gradient(45deg, #86bc25 0%, #f2fcfe 100%)',
//     // backgroundColor: '#FFB74D',
//     // marginTop: theme.spacing.unit * 3,
//   }),
//   icon: {
//     margin: theme.spacing.unit * 1,
//   },
//   iconHover: {
//     margin: theme.spacing.unit * 1,
//     // '&:hover': {
//     //   color: Red[800],
//     // },
//   },
//   row: {
//     paddingTop: 16,
//   }
// });

HomeLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    // theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(dashboardStyle)(HomeLayout);