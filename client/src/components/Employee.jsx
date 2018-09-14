import React from "react";

import matchSorter from "match-sorter";
import { ButtonToolbar, SplitButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchReport } from "./Context/actions/reportActions";
import Grid from "@material-ui/core/Grid";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PersonalDetails from "./Layout/PersonalDetails.jsx";
import { Popover, OverlayTrigger } from "react-bootstrap";
import _ from "underscore";
import './Employee.css';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchReport();
    this.state = {
      employees: [],
      selectedEmployees: [],
      fieldColumn: "",
      isOpen: Boolean,
      alphabets: ["A"],
      selected: 0,
      selectedAlphabet: "A"
    };
    this.letterSelect = this.letterSelect.bind(this);
  }

  // getNAReport(){
  //   let url = "https://dais.au.deloitte.com/Documents/National%20Availability.xlsx";
  //   function sendRequest(url, method, body) {
  //       const options = {
  //       method: method,
  //       headers: new Headers({'content-type': 'application/json'}),
  //       mode: 'no-cors'
  //     };
  //   }
  //  options.body = JSON.stringify(body);
  //   fetch(url, options)
  //   .then(res => res())
  //   .then(rows => { return rows; })
  // }

  componentDidMount() {
    this.setState({ alphabets: this.getIndexesInAlphabet() });
  }

  render() {
    if (this.props.report !== null && this.props.report !== undefined) {
      if (this.props.report.length === 0) return null;
      else {
        const popover = (
          <Popover id="modal-popover" title="Select Alphabet">
            To show employees with that initails.
          </Popover>
        );
        if (this.state.selectedEmployees.length === 0) {
          this.state.selectedEmployees = this.props.report.filter(employee => {
            return (
              employee["Employee Name"].charAt(0) === this.state.alphabets[0]
            );
          });
          this.state.selectedEmployees = _.sortBy(
            this.state.selectedEmployees,
            "Employee Name"
          );
          this.state.selectedRow = this.state.selectedEmployees[0];
        }
        let employeeTitle = "Select Employee";

        let employeeColumn = [
          {
            Header: "Emplpoyee Name",
            accessor: "Emplpoyee Name"
          }
        ];
        let columns = this.getColumns(this.props.report[0]);

        return (
          <div className="mainDiv">
            <Grid
              container
              alignItems="center"
              direction="row"
              alignItems="flex-start"
              justify="flex-start"
              spacing={24}
            >
              <Grid justify="center" item xs={1}>
                {" "}
                <OverlayTrigger overlay={popover}>
                  <ButtonToolbar>
                    <SplitButton
                      bsStyle="primary"
                      title={this.state.selectedAlphabet}
                      id="split-button-dropup-pull-right"
                    >
                      {this.state.alphabets.map(x => (
                        <MenuItem
                          id={x}
                          key={Math.random(1)}
                          onSelect={() => this.letterSelect(x)}
                        >
                          {x}
                        </MenuItem>
                      ))}
                    </SplitButton>
                  </ButtonToolbar>
                </OverlayTrigger>{" "}
              </Grid>
              <Grid className="employeeGrid" item xs={4}>
                <ReactTable
                  data={this.state.selectedEmployees}
                  filterable
                  width={350}
                  maxwidth={300}
                  defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value
                  }
                  columns={columns}
                  defaultPageSize={20}
                  defaultSorted={[
                    {
                      id: "Employee Name",
                      desc: false
                    }
                  ]}
                  previousText={"<<"}
                  nextText={">>"}
                  getTdProps={(state, rowInfo, column, instance) => {
                    if (rowInfo !== undefined) {
                      return {
                        onClick: (e, handleOriginal) => {
                          this.setState({
                            selected: rowInfo.index,
                            selectedRow: rowInfo.original
                          });

                          if (handleOriginal) {
                            handleOriginal();
                          }
                        },
                        style: {
                          background:
                            rowInfo.index === this.state.selected
                              ? "#00afec"
                              : "white",
                          color:
                            rowInfo.index === this.state.selected
                              ? "white"
                              : "black"
                        }
                      };
                    } else {
                    }
                  }
                }
                />
              </Grid>
              <Grid item xs={7}>
                <PersonalDetails selectedRow={this.state.selectedRow} />
              </Grid>
              {/* <Dropdown id="employeeDropdown">
                  <CustomToggle id="employeeToggle" className="customToggle" bsRole="toggle" open={!this.state.isOpen} selectTitle={employeeTitle}></CustomToggle>
                  <CustomMenu id="employeeMenu" bsRole="menu">
                      {this.state.selectedEmployees.map(x => <MenuItem id={x} key={Math.random(x.length)}>{x}</MenuItem>)}
                  </CustomMenu>
                </Dropdown> */}
            </Grid>
          </div>
        );
      }
    } else return null;
  }

  getIndexesInAlphabet() {
    return new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));
  }

  letterSelect(event, fieldName) {
    if (event === undefined) {
      event = this.state.alphabets[0];
      this.state.selectedAlphabet = this.state.alphabets[0];
    } else {
      this.state.selectedAlphabet = event;
    }

    if (event.length === 1) {
      this.state.selectedEmployees = this.props.report.filter(employee => {
        return employee["Employee Name"].charAt(0) === event;
      });
    }
    let selectedEmployees = _.sortBy(
      this.state.selectedEmployees,
      "Employee Name"
    );
    this.state.selectedRow = selectedEmployees[0];
    this.setState({ selectedEmployees: selectedEmployees });

    // if(this.state.selectedRow === undefined)
    //this.state.selectedRow = this.state.selectedEmployees[0];

    return this.state.selectedEmployees;
  }

  getColumnsDyna(firstRow) {
    let col = [];
    for (let key in firstRow) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
    return col;
  }

  getColumns(firstRow) {
    if (firstRow !== undefined) {
      let col = [];

      col = this.getColumnsDyna(firstRow);
      let cols = [];
      for (let x = 0; x <= col.length; x++) {
        let column;
        if (col[x] === "Employee Name") {
          column = {
            Header: col[x],
            accessor: col[x],
            width: "100%",
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: [col[x]] }),
            filterAll: true
          };
        } else {
          column = {
            Header: col[x],
            accessor: col[x],
            show: false,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: [col[x]] }),
            filterAll: true
          };
        }
        cols.push(column);
      }
      return cols;
    }
  }
}


const mapStateToProps = state => ({
  report: state.report.items
});
export default connect(
  mapStateToProps,
  { fetchReport }
)(Employee);
