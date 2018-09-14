import React, {Component} from 'react';
import { Grid, } from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// const products = [ 'Chair', 'Table', 'TableSet', 'DinningTable'];
// const columns = [{
//   dataField: 'id',
//   text: 'EmployeeID'
// }, {
//     dataField: 'name',
//     text: 'Employee Name'
//   }, {
//     dataField: 'name1',
//     text: 'Service Area'
//   }, {
//     dataField: 'name2',
//     text: 'Operating Unit'
//   }, {
//     dataField: 'name3',
//     text: 'Office'
//   }, {
//     dataField: 'name4',
//     text: 'Employee Type'
//   }, {
//     dataField: 'name5',
//     text: 'FTE'
//   }, {
//     dataField: 'name6',
//     text: 'Resume_Link'
//   }, {
//     dataField: 'name7',
//     text: 'Level'
//   }, {
//   dataField: 'price',
//   text: 'Product Price'
// }];

							


// const data = [
//     { id:1, name: 'Zack Siri', email: 'zacksiri@email.com' },
//     { id:2, name: 'Mack Giri', email: 'MackGiri@email.com' },
//     { id:3, name: 'Sack Larry', email: 'SackLarry@email.com' },
//     { id:4, name: 'Jack Marry', email: 'JackMarry@email.com' },
// ]
// const Contacts = props => 
//     <div>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//     </div>;

export default class Statistics extends Component{

    render(){
        return (
            <div>
                <Grid>
                    This is Statistics Page
                    {/* {data.map(info => 
                        <Contacts  key={info.id} name={info.name} email={info.email}/>
                    )}
                    
                    <BootstrapTable keyField='id' data={ products } columns={ columns } /> */}
                </Grid>
            </div>
        )
    }
}