import React from 'react';
import HomeLayout from './Layout/HomeLayout.jsx';
import { connect } from 'react-redux';
import { fetchReport } from './Context/actions/reportActions'; 
import { fetchUtilisation } from './Context/actions/utilisationActions'; 
const locationNumbers = {
  location:"Sydney",
  employeeHeadCount:0,
  totalBillingHours:0,
  totalUtilization:0,
  DigitalBillingHours:0,
  DigitalUtilization:0,
  DigitalChannelsBillingHours:0,
  DigitalChannelsUtilization:0,
}
  
class Home extends React.Component {

  constructor(props){
    super(props);
    this.props.fetchReport();
    this.props.fetchUtilisation();
    this.state = {numbers:{employeesCount:0, offices:[], level:[], serviceArea:[], locationNumbers:[]}}
  }
  
  render(){
    if(this.props.report !== null && this.props.report !== undefined)
    {
      if(this.props.report.length === 0)
        return null
      else{
        this.getCounts();
        this.getSydneyNumbers();
      return (
        <div>
          <HomeLayout numbers={this.state.numbers} />
          </div>
        );
      }
    }
    else
    return null;
  }

  getCounts(){
    this.state.numbers.employeesCount = this.props.report.length;
    this.state.numbers.offices = this.getKeyValuePair(this.props.report, "Office");
    this.state.numbers.level = this.getKeyValuePair(this.props.report, "Level");
    this.state.numbers.serviceArea = this.getKeyValuePair(this.props.report, "Service Area");
    return this.state.numbers; 
  }

  getSydneyNumbers(){
    var locationNos = [];
    //debugger;
    for(let key in this.state.numbers.offices){
      if(key !== 'swap'){
        locationNos.push(
        [{
          location : key,
          employeeHeadCount : this.state.numbers.offices[key],
        }]);
      }
    }

    this.state.numbers.locationNumbers.push(locationNos);
  }
  
  getKeyValuePair(rptData, prop)
  {
      let keyValue = [];
      for(let i =0 ; i <= rptData.length; i++){
          if(rptData[i] !== undefined){
              var num = rptData[i][prop]
              keyValue[num] = keyValue[num] ? keyValue[num] + 1 :1; 
          }
      }
      return keyValue;
  }  
}


const mapStateToProps = state => ({
  report: state.report.items,
  utilisation: state.utilisation.items,
})
export default connect(mapStateToProps, { fetchReport, fetchUtilisation })(Home);

