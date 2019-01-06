import React, { Component } from 'react';
import Toolbar from './components/Toolbar'
import Cards from './components/Cards'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import movieData from './components/Constant'

class App extends Component {

  render() {

    const renderCard = movieData.map(data=>{
      return(
        <MuiThemeProvider key = {data.id}>
          <Cards 
          title = {data.name}
          image = {data.image}
          bio = {data.bio}
          learnMore = {data.learnMore}
          />
        </MuiThemeProvider>
      )
    })

    return (
      <div className="App">
      <MuiThemeProvider>
        <Toolbar/>
      </MuiThemeProvider>
      {renderCard}
      </div>
    );
  }
}

export default App;
