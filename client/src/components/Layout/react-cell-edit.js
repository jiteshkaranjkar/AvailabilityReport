import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class RemoteCellEdit extends React.Component {
  render() {
    const cellEditProp = {
      mode: 'click'
    };
    return (
      <BootstrapTable data={ this.props.data }
                      remote={ true }
                      cellEdit={ cellEditProp }
                      options={ { onCellEdit: this.props.onCellEdit } }>
        <TableHeaderColumn dataField='EmployeeName' isKey={ true }>Employee Name</TableHeaderColumn>
        <TableHeaderColumn dataField='BusinessUnit'>Business Unit</TableHeaderColumn>
        <TableHeaderColumn dataField='ServiceArea'>Service Area</TableHeaderColumn>
        <TableHeaderColumn dataField='OperatingUnit'> Operating Unit</TableHeaderColumn>
        <TableHeaderColumn dataField='Office'>Office</TableHeaderColumn>
        <TableHeaderColumn dataField='EmployeeType'>Employee Type</TableHeaderColumn>
        <TableHeaderColumn dataField='FTE'>FTE</TableHeaderColumn>
        <TableHeaderColumn dataField='ResumeLink'>ResumeLink</TableHeaderColumn>
        <TableHeaderColumn dataField='Level'>Level</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
