import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import AppProvider from './Context/AppProvider'; 
// import AppContext from './Context/AppContext'; 

export default class Charts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            chartData: []
        }; 

    }
    componentWillMount() {
        //debugger;
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

    render(){
        //console.log("Hi", this.state.data);
        //debugger;
        if ((this.state.data !== null || this.state.data !== undefined) && this.state.data.length > 0) {
            //this.setState({ data: this.state.data.filter(this.isEligible)});
            console.log("Inside");
            let rptData = this.state.data.filter(this.isEligible)

            //Get offices
            let officeChart = this.getOfficesChartData(rptData)
            
            //Get offices
            let levelChart = this.getLevelsChartData(rptData);

           return(
                <div className="chart">
                {/*                   
                <AppProvider>
                    <AppContext.Consumer>
                        {(context) =>  this.setState({chartData : context.data})}
                    </AppContext.Consumer>
                </AppProvider> */}

                    <Grid>
                    <h2>Chart Component</h2>    
                    <div>
                        <div className="row">
                            <div className="col-sm">
                        <Bar data={officeChart} width={100} height={50}/>
                            </div>
                            <div className="col-sm">
                        <Bar data={levelChart} width={400} height={200}/>
                            </div>
                            <div className="col-sm">
                            <Line data={levelChart} width={400} height={200}/>
                            <Pie data={levelChart} width={400} height={200}/>
                            </div>
                        </div>
                    </div>
                        {/* <Line data={officeChart} width={100} height={50}/>
                        < data={officeChart} width={100} height={50}/> */}
                    </Grid>
                </div>
                )
          } else {
            return <div>Loading...</div>;
          }
    }
    
    isEligible(value){
        if(value !== null || value !== undefined || value !== 0 || value !== ""){
            return value;
        }
    }

    getOffices(rptData)
    {
        let offices = [];
        // for(let i =0 ; i <= rptData.length; i++){
        //     if(rptData[i] !== undefined && offices.indexOf(rptData[i]["Office"]) === -1){
        //         offices.push(rptData[i]["Office"]);
        //     }
        // }
        for(let i =0 ; i <= rptData.length; i++){
            if(rptData[i] !== undefined){
                var num = rptData[i]["Office"]
                offices[num] = offices[num] ? offices[num] + 1 :1; 
            }
        }
        return offices;
    }

    getLevels(rptData)
    {
        let levels = [];
        for(let i =0 ; i <= rptData.length; i++){
            if(rptData[i] !== undefined){
                var num = rptData[i]["Level"]
                levels[num] = levels[num] ? levels[num] + 1 :1; 
                // if(levels.indexOf(rptData[i]["Level"]) === -1){
                //     levels.push(rptData[i]["Level"]);
                // }
            }
        }

        // for(let i =0 ; i <= levelCounts.length; i++){
        //     levelKeys.push(Object.keys)
        // }
        return levels;
    }

    getOfficesChartData(rptData){
        //debugger;
        let offices = this.getOffices(rptData);
        let officeKeys = [];
        let officeCounts = [];
        officeCounts.push(Object.values(offices));
        officeKeys.push(Object.keys(offices));
    
        let officeChart= {
            labels: officeKeys[0],
            datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(155, 99, 132)',
            borderColor: 'rgb(155, 99, 132)',
            width:400,
            height:200,
            data: officeCounts[0],
            }]
        }
        return officeChart;
    }


    getLevelsChartData(rptData){
        //Get offices
        let levels = this.getLevels(rptData);
        let levelKeys = [];
        let levelCounts = [];
        levelCounts.push(Object.values(levels));
        levelKeys.push(Object.keys(levels));
    
        let levelChart= {
            labels: levelKeys[0],
            datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            width:200,
            height:100,
            data: levelCounts[0],
            }]
        }
        return levelChart;
    }

    getChartData(){
        // Ajax calls here
        //this.setState({
          let chartData = {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        //});
        return chartData;
    }
} 