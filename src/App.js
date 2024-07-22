import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
class App extends Component{
  state ={
    SideDrawerOpen: false
  };
  drawerToggleClickHandler =()=>{
    this.setState((prevState)=>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    }

    );
  };
  BackdropClickHandler =()=>{
    this.setState({SideDrawerOpen: false});

  };

  render(){
    let SideDrawer;
    let Backdrop;
    if(this.state.SideDrawerOpen){
      SideDrawer=<SideDrawer/>;
      Backdrop=<Backdrop click={this.BackdropClickHandler}/>
    }

  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.SideDrawerOpen}/>
      {Backdrop}
      <main style={{marginTop: '64px'}}>
      <p>This is the page content</p>

      </main>

    </div>
  );
}
}

export default App;
