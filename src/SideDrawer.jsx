import { Drawer, IconButton, Link, List } from '@material-ui/core'
import React, { useState } from 'react';
import './SideDrawer.css';
import DehazeIcon from '@material-ui/icons/Dehaze';


function SideDrawer( { Links }) {
    const [state, setState] = useState({ right: false }) 

    const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = anchor => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" className="navbar">
        <Link href="#portfolio" ><h3 className="list_element">PORTFOLIO</h3></Link>
        <Link href="#aboutme"><h3 className="list_element">ABOUT ME</h3></Link>
        <Link href="#contact"><h3 className="list_element" >CONTACT</h3></Link>
      </List>
    </div>
  );

    return (
        <div className="hamburguer_icon">
            <IconButton edge="start" aria-label="menu" fontSize="large" onClick={toggleDrawer("right", true)}>
                <DehazeIcon  />
            </IconButton>
            <Drawer
            anchor="right"
            open={state.right}
            onOpen={toggleDrawer("right", true)}
            onClose={toggleDrawer("right", false)}
            >
              {sideDrawerList("right")}
            </Drawer>

        </div>
    )
}

export default SideDrawer
