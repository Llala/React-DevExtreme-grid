//Here container with response data
import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

class CitiesList extends Component {
  render() {
    var err = "Cities found!";
    const { rows } = this.props;

    if(!this.props.cities || !this.props.cities.cities){
       return (null);
    }

    const columns = [
      { name: 'id', title: 'Id' },
      { name: 'name', title: 'City' }
    ];

    var theCities = this.props.cities.cities;

    //console.log(theCities);
    // return (
    //   <div>Success!</div>
    // );
    return (
      <Paper>
        <Grid rows={theCities.cities} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    );
  }

}

function mapStateToProps(cities) {
  return { cities };
}

export default connect(mapStateToProps)(CitiesList);
