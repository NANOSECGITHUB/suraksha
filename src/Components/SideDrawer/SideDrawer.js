//https://www.youtube.com/watch?v=oQnojIyTXb8

import React, { Component } from 'react'
import axios from 'axios';
import './SideDrawer.css';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';
import AirportShuttleSharpIcon from '@material-ui/icons/AirportShuttleSharp';
import ContactsSharpIcon from '@material-ui/icons/ContactsSharp';

import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core';

const styles = {
  list: {
    width: 350,
    //overflow: 'auto', 
    overflow: 'scroll',
    height: 'inherit',
    //display: 'block',
    //maxWidth: 360, 
    marginLeft: 0,

    //width: 700,
  },
  links: {
    width: 350,
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

//const menuItems = { data: [{'name': 'Item1','url' : '/item1'},{'name': 'Item2','url': '/item2'}] };

// const menuItems = {data: [{'name': 'Item1','url' : '/item1'},{'name': 'Item2','url': '/item2'},{'name': 'Item3','children':[{'name': 'Item31','url': '/item31'}, {'name': 'Item32','url': '/item32'}]}]};

//const menuItems = {data: [{'name':'INVOICE ','url':'Invoice.js'}]};

// 29.04.2020 const menuItems = { data: [{ 'name': 'MASTERS ', 'children': [{ 'name': 'RESIDENT MANAGEMENT', 'url': 'Residentmanagement.js' }, { 'name': 'VEHICLE MANAGEMENT', 'url': 'Vehiclemanagement.js' }, { 'name': 'VISITOR MANAGEMENT', 'url': 'Visitormanagement.js' }] }, { 'name': 'PURCHASE ', 'children': [{ 'name': 'PURCHASE ', 'url': 'Purchase.js' }, { 'name': 'PURCHASE RETURN', 'url': 'Purchasereturn.js' }] }, { 'name': 'SALES ', 'children': [{ 'name': 'SALES ', 'url': 'Sales.js' }, { 'name': 'SALES RETURN', 'url': 'Salesreturn.js' }] }, { 'name': 'INVOICE ', 'url': 'Invoice.js' }, { 'name': 'REPORTS ', 'children': [{ 'name': 'SALES REPORTS', 'url': 'Salesreport.js' }, { 'name': 'SALES RETURN REPORTS', 'url': 'Salesreturnreport.js' }] }] };

//const menuItems = {data: [{'name':'MASTERS            ','children': [{'name':'RESIDENT MANAGEMENT','url':'Residentmanagement.js'},{'name':'VEHICLE MANAGEMENT','url':'Vehiclemanagement.js'},{'name':'VISITOR MANAGEMENT','url':'Visitormanagement.js'}]},{'name':'PURCHASE           ','children': [{'name':'PURCHASE ','url':'Purchase.js'},{'name':'PURCHASE RETURN','url':'Purchasereturn.js'}]},{'name':'SALES              ','children': [{'name':'SALES          ','url':'Sales.js'},{'name':'SALES RETURN','url':'Salesreturn.js'}]},{'name':'INVOICE            ','url':'Invoice.js'},{'name':'REPORTS            ','children': [{'name':'SALES REPORTS','url':'Salesreport.js'},{'name':'SALES RETURN REPORTS','url':'Salesreturnreport.js'}]}]};

//var menuItems =  {data: [{'name': 'Item1','url' : '/item1'},{'name': 'Item2','url': '/item2'},{'name': 'Item3','children':[{'name': 'Item31','url': '/item31'}, {'name': 'Item32','url': '/item32'}]}]};

// {data: [{'name':'MASTERS            ','children': [{'name':'RESIDENT MANAGEMENT','url':'Residentmanagement.js'},{'name':'VEHICLE MANAGEMENT','url':'Vehiclemanagement.js'},{'name':'VISITOR MANAGEMENT','url':'Visitormanagement.js'}]},{'name':'PURCHASE           ','children': [{'name':'PURCHASE ','url':'Purchase.js'},{'name':'PURCHASE RETURN','url':'Purchasereturn.js'}]},{'name':'SALES              ','children': [{'name':'SALES          ','url':'Sales.js'},{'name':'SALES RETURN','url':'Salesreturn.js'}]},{'name':'INVOICE            ','url':'Invoice.js'},{'name':'REPORTS            ','children': [{'name':'SALES REPORTS','url':'Salesreport.js'},{'name':'SALES RETURN REPORTS','url':'Salesreturnreport.js'}]}]}

//var menuItems = { data: [{ 'name': 'MASTERS            ', 'children': [{ 'name': 'RESIDENT MANAGEMENT', 'url': 'Residentmanagement.js' }, { 'name': 'VEHICLE MANAGEMENT', 'url': 'Vehiclemanagement.js' }, { 'name': 'VISITOR MANAGEMENT', url':'Visitormanagement.js'}]},{'name':'PURCHASE           ','children': [{'name':'PURCHASE ','url':'Purchase.js'},{'name':'PURCHASE RETURN','url':'Purchasereturn.js'}]},{'name':'SALES              ','children': [{'name':'SALES          ','url':'Sales.js'},{'name':'SALES RETURN','url':'Salesreturn.js'}]},{'name':'INVOICE            ','url':'Invoice.js'},{'name':'REPORTS            ','children': [{'name':'SALES REPORTS','url':'Salesreport.js'},{'name':'SALES RETURN REPORTS','url':'Salesreturnreport.js'}]}]};
//var menuItems = { data: [{"name":"MASTERS             ",  "children": [{ "name": "RESIDENT MANAGEMENT", "url": "Residentmanagement.js" }, { "name": "VEHICLE MANAGEMENT", "url": "Vehiclemanagement.js"},  { "name": "VISITOR MANAGEMENT","url":"Visitormanagement.js"}]},{"name":"PURCHASE           ","children": [{"name":"PURCHASE ","url":"Purchase.js"},{"name":"PURCHASE RETURN","url":"Purchasereturn.js"}]},{"name":"SALES              ","children": [{"name":"SALES          ","url":"Sales.js"},{"name":"SALES RETURN","url":"Salesreturn.js"}]},{"name":"INVOICE            ","url":"Invoice.js"},{"name":"REPORTS            ","children": [{"name":"SALES REPORTS","url":"Salesreport.js"},{"name":"SALES RETURN REPORTS","url":"Salesreturnreport.js"}]}]};
//{data: [{"name": "Item1","url" : "/item1"},{"name": "Item2","url": "/item2"},{"name": "Item3","children":[{"name": "Item31","url": "/item31"}, {"name": "Item32","url": "/item32"}]}]};

//{ data: [{ "name": "Item1", "url": "/item1" }, { "name": "Item2", "url": "/item2" }] };
//{ data: [{ 'name': 'Item1', 'url': '/item1' }, { 'name': 'Item2', 'url': '/item2' }] };

//{
//  "menu": "{data: [{'name':'MASTERS            ','children': [{'name':'RESIDENT MANAGEMENT','url':'Residentmanagement.js'},{'name':'VEHICLE MANAGEMENT','url':'Vehiclemanagement.js'},{'name':'VISITOR MANAGEMENT','url':'Visitormanagement.js'}]},{'name':'PURCHASE           ','children': [{'name':'PURCHASE ','url':'Purchase.js'},{'name':'PURCHASE RETURN','url':'Purchasereturn.js'}]},{'name':'SALES              ','children': [{'name':'SALES          ','url':'Sales.js'},{'name':'SALES RETURN','url':'Salesreturn.js'}]},{'name':'INVOICE            ','url':'Invoice.js'},{'name':'REPORTS            ','children': [{'name':'SALES REPORTS','url':'Salesreport.js'},{'name':'SALES RETURN REPORTS','url':'Salesreturnreport.js'}]}]}"
//};

//var menuItems = {data: [{'name':'MASTERS            ','children': [{'name':'RESIDENT MANAGEMENT','url':'Residentmanagement.js'},{'name':'VEHICLE MANAGEMENT','url':'Vehiclemanagement.js'},{'name':'VISITOR MANAGEMENT','url':'Visitormanagement.js'}]},{'name':'PURCHASE           ','children': [{'name':'PURCHASE ','url':'Purchase.js'},{'name':'PURCHASE RETURN','url':'Purchasereturn.js'}]},{'name':'SALES              ','children': [{'name':'SALES          ','url':'Sales.js'},{'name':'SALES RETURN','url':'Salesreturn.js'}]},{'name':'INVOICE            ','url':'Invoice.js'},{'name':'REPORTS            ','children': [{'name':'SALES REPORTS','url':'Salesreport.js'},{'name':'SALES RETURN REPORTS','url':'Salesreturnreport.js'}]}]};
// var menuItems = {data: [{"name":"MASTERS            ","children": [{"name":"RESIDENT MANAGEMENT","url":"Residentmanagement.js"},{"name":"VEHICLE MANAGEMENT","url":"Vehiclemanagement.js"},{"name":"VISITOR MANAGEMENT","url":"Visitormanagement.js"}]},{"name":"PURCHASE           ","children": [{"name":"PURCHASE ","url":"Purchase.js"},{"name":"PURCHASE RETURN","url":"Purchasereturn.js"}]},{"name":"SALES              ","children": [{"name":"SALES          ","url":"Sales.js"},{"name":"SALES RETURN","url":"Salesreturn.js"}]},{"name":"INVOICE            ","url":"Invoice.js"},{"name":"REPORTS            ","children": [{"name":"SALES REPORTS","url":"Salesreport.js"},{"name":"SALES RETURN REPORTS","url":"Salesreturnreport.js"}]}]};
//var menuItems = { data: [{ "name": "Item1", "url": "/item1" }, { "name": "Item2", "url": "/item2" }, { "name": "Item3", "children": [{ "name": "Item31", "url": "/item31" }, { "name": "Item32", "url": "/item32" }] }] };
//var menuItems = { data: [{ "name": "Item1", "url": "/item1" }, { "name": "Item2", "url": "/item2" }, { "name": "Item3", "children": [{ "name": "Item31", "url": "/item31" }, { "name": "Item32", "url": "/item32" }] }] };

class sideDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //posts: []
      posts: []
    }
  }
  

  componentDidMount() {
    axios.get('http://localhost:8092/chakrika/webapi/aliens/Menu1')
    //axios.get('http://localhost:8092/chakrika/webapi/aliens/Menu')
      .then(res => {
        console.log('res res res res res res res res res res res');
        console.log(res);
        console.log('res res res res res res res res res res res');
        this.setState({posts: res.data})
        //menuItems = this.state.posts.data;
        console.log('~~~~~~~~~~^^^^^^^^^^^^^^^^^^^~~~~~~~~~~~~~~~');
        console.log(this.state.posts);
        //console.log(menuItems);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      })
      .catch(err => {
        console.log('error error error error error error error error error error error error ')
        console.log(err)
        console.log('error error error error error error error error error error error error ')
      })
  }

  handleClick(item) {
    this.setState(prevState => (
      { [item]: !prevState[item] }
    ))
  }
  // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handler(children) {
    const { classes } = this.props
    const { state } = this
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem
              button
              key={subOption.name}>
              {/* <AddIcon /> */}
              {/* <AddIcon /> */}
              {/* <DeleteIcon /> */}
              {/* <PrintIcon /> */}
              {/* <AirportShuttleSharpIcon /> */}

              {/* <ListItemGraphic icon="mood" />   */}
              {/* <Redirect to="/nav" /> */}
              <Link
                to={subOption.url}
                className={classes.links}>
                <ListItemText
                  inset
                  primary={subOption.name}
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => this.handleClick(subOption.name)}>
            {/* <ListItemGraphic icon="star_border" /> */}
            {/* <img src='Avatar.png'/> */}
            <DeleteIcon />

            <ListItemText
              inset
              primary={subOption.name} />
            {state[subOption.name] ?
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>

          <Collapse
            in={state[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      )
    })
  }
  render() {
//    var menuItems = { data: [{ "name": "Item1", "url": "/item1" }, { "name": "Item2", "url": "/item2" }, { "name": "Item3", "children": [{ "name": "Item31", "url": "/item31" }, { "name": "Item32", "url": "/item32" }] }] };
//    const { posts } = this.state;
//    const { posts } = this.state;
//    var menuItems = this.state;
//    var menuItems =  this.state;
     console.log('%%%%%%%%%%%%%%%% this.state.posts %%%%%%%%%%%%%%%%%%')
     console.log(this.state.posts);
     console.log('%%%%%%%%%%%%%%%% menuItems %%%%%%%%%%%%%%%%%%')
     //console.log(menuItems);
     console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')


    //{data: [{'name': 'Item1','url' : '/item1'},{'name': 'Item2','url': '/item2'},{'name': 'Item3','children':[{'name': 'Item31','url': '/item31'}, {'name': 'Item32','url': '/item32'}]}]};
    
    //{ data: [{ 'name': 'MASTERS ', 'children': [{ 'name': 'RESIDENT MANAGEMENT', 'url': 'Residentmanagement.js' }, { 'name': 'VEHICLE MANAGEMENT', 'url': 'Vehiclemanagement.js' }, { 'name': 'VISITOR MANAGEMENT', 'url': 'Visitormanagement.js' }] }, { 'name': 'PURCHASE ', 'children': [{ 'name': 'PURCHASE ', 'url': 'Purchase.js' }, { 'name': 'PURCHASE RETURN', 'url': 'Purchasereturn.js' }] }, { 'name': 'SALES ', 'children': [{ 'name': 'SALES ', 'url': 'Sales.js' }, { 'name': 'SALES RETURN', 'url': 'Salesreturn.js' }] }, { 'name': 'INVOICE ', 'url': 'Invoice.js' }, { 'name': 'REPORTS ', 'children': [{ 'name': 'SALES REPORTS', 'url': 'Salesreport.js' }, { 'name': 'SALES RETURN REPORTS', 'url': 'Salesreturnreport.js' }] }] }; 

    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
//    console.log(menuItems.data)
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
//    console.log(posts);
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')


    //var menuItems = { data: [{ "name": "Item1", "url": "/item1" }, { "name": "Item2", "url": "/item2" }, { "name": "Item3", "children": [{ "name": "Item31", "url": "/item31" }, { "name": "Item32", "url": "/item32" }] }] };

  

    let drawerClasses = 'side-drawer';
    const { classes } = this.props
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <div className={classes.list}>
          <List>
            {/* {this.handler(menuItems.data)} */}
            {this.handler(this.state.posts)}
            
          </List>
        </div>
      </nav>
    )
  }
}
export default withStyles(styles)(sideDrawer)
