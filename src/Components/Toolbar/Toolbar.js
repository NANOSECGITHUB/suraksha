import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            {/* <div className="toolbar__toggle-button">  */}
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo">
                <a href="/">THE LOGO</a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/"><ExitToAppSharpIcon/>LOGOUT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;