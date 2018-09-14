import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { Popover, Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Footer.css';
// import CalendartodayIcon from '@material-ui/icons/calendar_today';

const styles = theme =>({
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'bottom',
    display: 'flex',
    alignItems: 'flex-end',
    justify: 'flex-end',
    placement:'bottom'
  },
});

class Footer extends React.Component {
  constructor(props, context){
    super(props);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      value: 'Recents'
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const popover = (
      <Popover id="modal-popover" title="FSI">
        What a year! FSI smashed its target out the park
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;


    return (
      <div>
        <BottomNavigation value={value}
          onChange={this.handleChange}
          //className={classes.root}
          // className="navbar-fixed-bottom" 
          className="container divBottom">
          <BottomNavigationAction label="Recents" value="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Announcements" value="Announcements" onClick={this.handleShow} icon={<AnnouncementIcon />} />
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Announcements</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Transforming Defence</h4>
              <p>
                Deloitte is transforming Defence's security vetting.
              </p>

              <h4>What a year!</h4>
              <p>
                FSI smashed its target out the park{' '}
                <OverlayTrigger overlay={popover}>
                  <a href="#popover">FSI</a>
                </OverlayTrigger>{' '}
                here
              </p>

              {/* <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p>

              <hr /> */}

              {/* <h4>Overflowing text to show scroll behavior</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p> */}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </BottomNavigation>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);