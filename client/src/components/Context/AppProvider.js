import React, { Component } from "react";
import AppContext from "./AppContext";
import matchSorter from "match-sorter";
// import _ from 'lodash';
import moment from 'moment';
// import TextField from '@material-ui/core/TextField';
// import { colors } from "../../../node_modules/@material-ui/core";

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {
      columnFilter: [
        "Employee Name",
        "Business Unit",
        "Service Area",
        "Operating Unit",
        "Office",
        "Employee Type",
        "FTE",
        "Resume_Link",
        "Level",
        "Consultant Status"
      ]
    };
  }

  state = {
    number: 10,
    color: "red",
    columns: [],
    employeeNames: []
  };

  render() {
    if (this.state.data === null || this.state.data === undefined) {
      return null;
    } else if (this.state.data.length > 0) {
      this.state.data = this.state.data.filter(this.isEligible);
      this.state.employeeNames = this.state.data.map(
        col => col["Employee Name"]
      );
      this.state.columns = this.getColumns(this.state.data[1]);
      this.state.data = this.colorCodingData(this.state.data, this.state.columns);
      return (
        <AppContext.Provider value={this.state}>
          {this.props.children}
        </AppContext.Provider>
      );
    }
    return null;
  }

  componentWillMount() {
    this.GetReportData();
  }

  componentWillUpdate() {
    return false;
  }

  async GetReportData() {
    await fetch("/excel/report")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data.data });
        return data.data;
      })
      .catch(error => {
        console.log("login error: " + error);
      });
  }

  isEligible(value) {
    if (value !== null || value !== undefined || value !== 0 || value !== "") {
      return value;
    }
  }

  getColumnsDyna(firstRow) {
    let col = [];
    for (let key in firstRow) {
      if (col.indexOf(key) === -1)//&& key !== undefined 
      {
        col.push(key);
      }
    }
    return col;
  }

  // ReportKeyColorCode(value){
  //   let color;
  //   switch(value){
  //     case '-':
  //       color = colors.green;
  //       break;
  //     case 'C':
  //     case 'D':
  //     case 'T':
  //     case 'F':
  //       color = colors.yellow;
  //       break;
  //     case 'H':
  //     case 'V':
  //     case 'I':
  //       color = colors.lightBlue;
  //       break;
  //     case '-(5L)':
  //     case '-(5X)':
  //       color = colors.purple;
  //       break;
  //     case '1':
  //     case '2':
  //       color = colors.green;
  //       break;
  //     case '-(2PT)':
  //     case '4(1PT)':
  //       color = colors.purple;
  //       break;
  //     case '-5(5V)':
  //     case '-1(1F1H2T)':
  //       color = colors.red;
  //       break;
  //     default:
  //     break;
  //   }
  //   return color;
  // }

  colorCodingData(data, columns){
    if (data !== undefined && data.length > 0) {
      data.forEach(element => {
        //debugger;
        for(let rowinfo in element){
          if(moment(rowinfo, "DD/MM/YYYY").isValid()){
            
          }
          // if (rowinfo.indexOf(key) === -1) {
          //   //rowinfo.push(key);
          // }
          
          // if(moment(data[0], "DD/MM/YYYY").isValid()){
          //   style: {
          //   backgroundColor: (rowInfo.row._original[column.Header] === '-' ? '#00afec' : '#1aabec')
          //   }
          // }
      }  

      });
    }
    return data;
  }
  
  getColumns(firstRow) {
    if (firstRow !== undefined) {
      let col = [];
      col = this.getColumnsDyna(firstRow);
      let cols = [];
      for (let x = 0; x <= col.length; x++) {
        let column;
        if (
          col[x] !== "Resume_Link" &&
          col[x] !== "Consultant Status (Staffit)" 
        ) {
          if (
            col[x] === "Employee Name" ||
            col[x] === "Time Allocation" ||
            col[x] === "Assignment"
          ) {
            column = {
              Header: col[x],
              accessor: col[x],
              width: 250,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: [col[x]] }),
              filterAll: true
            };
          }
          // else if(moment(col[x], "DD/MM/YYYY").isValid()){
          //   column = {
          //   Header: col[x],
          //   accessor: col[x],
          //   filterMethod: ((filter, rows) => {
          //     rows.forEach(element => {
          //       for(let rowinfo in element){
          //         // if(rowInfo.row._original[column.Header] === '-' ? '#dadada' : '#00afec')

          //       }
          //     });
          //   }),
          //   };
          // }
            else {
            column = {
              Header: col[x],
              accessor: col[x],
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: [col[x]] }),
              filterAll: true
            };
          }
          cols.push(column);
        }
      }
      let progressCol = {
        Header: "Info",
        columns: [
          // {
          //   Header: "Proposal/Comments",
          //   accessor: "comments",
          //   width: 250,
          //   // Cell: this.renderEditable
          //   Cell: row => ( 
          //     <TextField
          //       //id="search"
          //       //label="Search field"
          //       //className={classes.textField}
          //       // margin="normal"
          //     />
          //   )
          // },
          {
            Header: "Availability",
            accessor: "progress",
            Cell: row => (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#dadada",
                  borderRadius: "2px"
                }}
              >
                <div
                  style={{
                    width: "200px", //`${row.value}%`,
                    height: "100%",
                    backgroundColor:
                      row.value > 66
                        ? "#85cc00"
                        : row.value > 33
                          ? "#ffbf00"
                          : "#ff2e00",
                    borderRadius: "2px",
                    transition: "all .2s ease-out"
                  }}
                />
              </div>
            )
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: row => (
              <span>
                <span
                  style={{
                    color:
                      row.value === "blocked"
                        ? "#ff2e00"
                        : row.value === "bench"
                          ? "#ffbf00"
                          : "#57d500",
                    transition: "all .3s ease"
                  }}
                >
                  &#x25cf;
                </span>{" "}
                {row.value === "blocked"
                  ? "is Blocked"
                  : row.value === "bench"
                    ? `on Bench`
                    : "Occupied"}
              </span>
            )
          }
        ]
      };
      cols.push(progressCol);
      return cols;
    }
  }
}