import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/lib/FormControl';
import { withStyles } from '@material-ui/core/styles';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';
import keycode from 'keycode';

const styles = theme => ({
    uiStyle: {
        width:"350px",   
        minWidth: "350px",
        maxwidth: "500px",
        "list-style": "none",
        padding: 5,
        border:0,
    }
  });

  
class CustomMenu extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
        value: '',
        open:true
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    focusNext() {
        const input = ReactDOM.findDOMNode(this.input);
        if (input) {
            input.focus();
        }
    }
    
    handleKeyDown(event) {
        //debugger;
        switch (event.keyCode) {
        case keycode.codes.down:
            this.focusNext();
            event.preventDefault();
            break;
        case keycode.codes.up:
            this.focusPrevious();
            event.preventDefault();
            break;
        case keycode.codes.esc:
        case keycode.codes.tab:
            this.props.onClose(event, { source: 'keydown' });
            break;
        default:
        }
    }

    render() {
        const { children, classes } = this.props;
        const { value } = this.state;

        return (
        <div className="dropdown-menu" style={{ padding: '' }}>
        
            <FormControl ref={c => { this.input = c; }}
                type="text" placeholder="Type to filter..."
                onChange={this.handleChange} value={value} /> 
                <ul className={classes.uiStyle}>
                {React.Children.toArray(children).filter(
                    child => !value.trim() || child.props.children.indexOf(value) !== -1
                )}
                </ul>
        </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CustomMenu);