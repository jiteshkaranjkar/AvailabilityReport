import React from "react";
import {
  Row,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  PanelGroup
} from "react-bootstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
//import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from "@material-ui/icons/Person";

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const { classes } = this.props;
    //const { expanded } = this.state;
    //debugger;
    return (
      <div>
        <div>
          <PanelGroup
            accordion
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Panel eventKey="1">
              <Panel.Heading componentClass="h4">
                <b>
                  {this.props.selectedRow["Employee Name"].split("(")[0]}
                  <PersonIcon
                    color="primary"
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "flex-end"
                    }}
                    className={classes.heading}
                    onClick={this.businessClickEvent}
                  />
                </b>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Job level</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Level"]}
                    </Col>
                  </Row>
                </ListGroupItem>
                {/* <ListGroupItem>
                                <Row className="show-grid text-left ">
                                    <Col xs={12} sm={6} >
                                        <b>Global level</b>
                                    </Col>
                                    <Col xs={12} sm={6} >
                                        {this.props.selectedRow["Level"]}
                                    </Col>
                                </Row>
                            </ListGroupItem> */}
              </ListGroup>
            </Panel>
            <Panel eventKey="2">
              <Panel.Heading>
                <Panel.Title toggle>
                  <b>Location</b>
                </Panel.Title>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Office</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Office"]}
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel eventKey="3">
              <Panel.Heading>
                <Panel.Title toggle>
                  <b>Industry Alignment</b>
                </Panel.Title>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Industry</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      BFSI
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel eventKey="4">
              <Panel.Heading>
                <Panel.Title toggle>
                  <b>Organizational Alignment</b>
                </Panel.Title>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Business</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Business Unit"]}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Service area</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Operating Unit"]}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Business line</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Service Area"]}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Cost center</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Employee Name"]
                        .split("(")[1]
                        .substring(0, 5)}
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Capability</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      Consulting Digital Channels Sydney
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Organization unit</b>
                    </Col>
                    <Col xs={12} sm={6}>
                      {this.props.selectedRow["Operating Unit"]}
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Panel>
            <Panel eventKey="5">
              <Panel.Heading>
                <Panel.Title toggle>
                  <b>Key Contacts</b>
                </Panel.Title>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Col xs={12} sm={6}>
                      <b>Resource manager</b>
                    </Col>
                    <Col xs={12} sm={6} style={{ color: "#FF0000" }}>
                      Anusha karthikeyan
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Career coach</b>
                    </Col>
                    <Col xs={12} sm={6} style={{ color: "#FF0000" }}>
                      Angel Chuang
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Project coach</b>
                    </Col>
                    <Col xs={12} sm={6} style={{ color: "#FF0000" }}>
                      Rogier Vermeulen
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left ">
                    <Col xs={12} sm={6}>
                      <b>Engagement manager</b>
                    </Col>
                    <Col xs={12} sm={6} style={{ color: "#FF0000" }}>
                      Rogier Vermeulen
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row className="show-grid text-left">
                    <Col xs={12} sm={6}>
                      <b>Buddy</b>
                    </Col>
                    <Col xs={12} sm={6} style={{ color: "#FF0000" }}>
                      Atif Khan
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Panel>
          </PanelGroup>
          {/* <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Employee details</Typography>
                                <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> */}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "10px",
    fontSize: "12px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: theme.typography.pxToRem(35),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(25),
    color: theme.palette.text.secondary
  }
});

PersonalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersonalDetails);
