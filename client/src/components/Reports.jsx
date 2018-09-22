import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import AppProvider from './Context/AppProvider'; 
import AppContext from './Context/AppContext'; 
import './Report.css';
import moment from 'moment';

export default class Reports extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }; 
    }
 
    render(){
        return(
            <div>
                <AppProvider>
                    <AppContext.Consumer>
                    {(context) => 
                        <ReactTable 
                        data={context.data} 
                        filterable
                        defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                        columns={context.columns} 
                        defaultPageSize= {20}
                        defaultSorted={[
                            {
                                id: "Service Area",
                                desc: false
                            }
                        ]}
                        className="-striped -highlight"
                        getTrProps={(state, rowInfo, column) => {
                          if (rowInfo !== undefined) {
                            let dateColumns = [];
                            state.columns.forEach(element => {
                              if(moment(element.Header, "DD/MM/YYYY").isValid())
                              dateColumns.push(element.Header)
                            });

                            dateColumns.forEach(element => {
                              return {
                                style: {
                                  //background: rowInfo.row._original['Skills'] == 'Java' ? "#00afec" : "red"
                                  background: rowInfo.row.Skills === 'SAP' ? 'red' : 'white',
                                 }
                                }
                              });
                            // if (rowInfo) {
                            //   return {
                            //     style: {
                            //       background: rowInfo.row.Skills === 'SAP' ? 'red' : 'white',
                            //       color: 'black'
                            //     }
                            //   }
                            // }
                            return {};
                            }
                          }
                        }

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
                    }
                    </AppContext.Consumer>
                </AppProvider>
            </div>
        )
    }

    
    // rowDefine(state, rowInfo, column){
    //     if(moment(column.Header, "DD/MM/YYYY").isValid()){
    //       debugger;
    //       style: {
    //       color: (rowInfo.row._original[column.Header] === '-' ? '#dadada' : '#00afec');
    //       backgroundColor: (rowInfo.row._original[column.Header] === '-' ? '#00afec' : '#1aabec')
    //     }
    //   }
    // }
}