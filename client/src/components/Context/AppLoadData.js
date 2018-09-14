import React from "react";
import { ButtonToolbar, SplitButton } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchReport } from "./actions/reportActions";
import matchSorter from "match-sorter";
import {
  Input,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from "material-ui";

const AllReportData = {
  reportData: [],
  Columns: [],
  Employees: [],
  ColumnsFilter: []
};

class AppLoadData extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchReport();
    this.props.fetchUtilisation();
  }

  render() {
    this.GetAllDataObjects();
    return <div />;
  }

  GetAllDataObjects() {
    if (this.props.report !== null && this.props.report !== undefined) {
      if (this.props.report.length === 0) return null;
      else {
        this.props.AllReportData.reportData = this.props.report;
        var employees = this.props.report.map(x => x["Employee Name"]);
        this.props.AllReportData.Employees = employees;

        var offices = this.removeDuplicates(this.props.report, "Office").map(
          x => x["Office"]
        );
        var officeKeyValuePair = this.getKeyValuePair(
          this.props.report,
          "Office"
        );

        var employeeTypes = this.removeDuplicates(
          this.props.report,
          "Employee Type"
        ).map(x => x["Employee Type"]);
        var employeesKeyValuePair = this.getKeyValuePair(
          this.props.report,
          "Employee Type"
        );

        var levels = this.removeDuplicates(this.props.report, "Level").map(
          x => x["Level"]
        );
        var levelKeyValuePair = this.getKeyValuePair(
          this.props.report,
          "Level"
        );

        var businessUnits = this.removeDuplicates(
          this.props.report,
          "Business Unit"
        ).map(x => x["Business Unit"]);
        var businessUnitsKeyValuePair = this.getKeyValuePair(
          this.props.report,
          "Business Unit"
        );

        var offices = this.removeDuplicates(
          this.props.report,
          "Service Area"
        ).map(x => x["Service Area"]);
        var serviceAreaKeyValuePair = this.getKeyValuePair(
          this.props.report,
          "Service Area"
        );

        this.props.AllReportData.Columns = getColumns(this.props.report[0]);
        this.props.AllReportData.ColumnsFilter = this.props.AllReportData.Columns.slice(
          1,
          9
        );
        this.props.callbackFromParent(this.props.AllReportData);
      }
    } else {
      return null;
    }
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  getKeyValuePair(rptData, prop) {
    let keyValue = [];
    for (let i = 0; i <= rptData.length; i++) {
      if (rptData[i] !== undefined) {
        var num = rptData[i][prop];
        keyValue[num] = keyValue[num] ? keyValue[num] + 1 : 1;
      }
    }
    return keyValue;
  }
}

const mapStateToProps = state => ({
  report: state.report.items
});

export default connect(
  mapStateToProps,
  { fetchReport }
)(AppLoadData);

function getColumnsDyna(firstRow) {
  let col = [];
  for (let key in firstRow) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
  return col;
}

function getColumns(firstRow) {
  if (firstRow !== undefined) {
    let col = [];
    col = getColumnsDyna(firstRow);
    let cols = [];
    for (let x = 0; x <= col.length; x++) {
      let column;
      if (col[x] === "Employee Name") {
        column = {
          Header: col[x],
          accessor: col[x],
          width: 250,
          filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: [col[x]] }),
          filterAll: true
        };
      } else {
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
    return cols;
  }
}
