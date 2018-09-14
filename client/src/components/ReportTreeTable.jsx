import React, {Component} from 'react';
import _ from "lodash";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
// pull in the HOC
import treeTableHOC from "react-table/lib/hoc/treeTable";

// wrap ReacTable in it
// the HOC provides the configuration for the TreeTable
const TreeTable = treeTableHOC(ReactTable);

  export default class ReportTreeTable extends Component{
  constructor(props) {
      super(props);
      this.state = {
          data: []
      }; 
  }

  componentWillMount() {
      fetch('/excel')
      .then(res => {
          return res.json();
      })
      .then((data) => {
          this.setState({ data : data.data })
          return data.data;
      })
      .catch(error => {
          console.log('login error: ' + error)
      });
  }


  render() {
    // now use the new TreeTable component
    return (
      <div>
        <TreeTable
          filterable
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id])
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              : true;
          }}
          data={this.setState.data}
          pivotBy={["state", "post", "city"]}
          columns={[
            // we only require the accessor so TreeTable
            // can handle the pivot automatically
            {
              accessor: "Office"
            },
            {
              accessor: "Service Area"
            },
            {
              accessor: "Operating Unit"
            },
            {
              accessor: "Level"
            },

            // any other columns we want to display
            {
              Header: "Employee Name",
              accessor: "Employee Name"
            },
            {
              Header: "Employee Type",
              accessor: "Employee Type"
            },
            {
              Header: "FTE",
              accessor: "FTE"
            },
            {
              Header: "Resume Link",
              accessor: "Resume Link"
            },
            {
              Header: "Assignment",
              accessor: "Assignment"
            },
            {
              Header: "Proposed",
              accessor: "Proposed"
            }
          ]}
          defaultPageSize={10}
          SubComponent={row => {
            // a SubComponent just for the final detail
            const columns = [
              {
                Header: "Property",
                accessor: "property",
                width: 200,
                Cell: ci => {
                  return `${ci.value}:`;
                },
                style: {
                  backgroundColor: "#DDD",
                  textAlign: "right",
                  fontWeight: "bold"
                }
              },
              { Header: "Value", accessor: "value" }
            ];
            const rowData = Object.keys(row.original).map(key => {
              return {
                property: key,
                value: row.original[key].toString()
              };
            });
            return (
              <div style={{ padding: "10px" }}>
                <ReactTable
                  data={rowData}
                  columns={columns}
                  pageSize={rowData.length}
                  showPagination={false}
                />
              </div>
            );
          }}
        />
        <br />
      </div>
    );
  }
}