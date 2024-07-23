import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => ({
      sideDrawerOpen: !prevState.sideDrawerOpen
    }));
  };

  backdropClickHandler =()=>{
    this.setState({sideDrawerOpen:false});
  };
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer show={this.state.sideDrawerOpen} />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className='App'>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: '100%' }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
