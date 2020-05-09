//https://academind.com/learn/react/snippets/navbar-side-drawer/
import React, { Component } from 'react';
import Toolbar from '../../Toolbar/Toolbar'
import SideDrawer from '../../SideDrawer/SideDrawer';
import Backdrop from '../../Backdrop/Backdrop';

class Nav extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState((prevState) => {
      console.log('prevstate');
      console.log(prevState);
//      return { sideDrawerOpen: false };
      return { sideDrawerOpen: true };
    });
  }

  render() {
    // let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      //backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
    
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {/* {sideDrawer} */}
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content</p>
        </main>
      </div>
    )
  }
}
export default Nav;