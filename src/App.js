import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource';
import resources from './mock/resources';


class App extends Component{

//<Resource resource={aResource}/>, <Resource resource={aResource}
// constructor(props) {
//   super(props);
//   const that = this
//   // this.renderPosts.bind(this)    is-doing-this = App.renderPosts.bind(App)

// }



renderPosts() {
  // function mapResources (resource) {
  //   return <Resource resource={resource} />;
  // };
  const display = resources.map((resource) => {
    return <Resource resource={resource} />;
  });

  return display;
}
// const display = this.resources.map(mapResources);

  render() {
    // const display = this.resources.map(function (resource) {
    //   return <Resource resource={resource} />;
    // });
  return (
    <div className="App">
    <h1>Welcome to BrainHive!</h1>
    {/* <Resource resource={this.resource[0]} />
    <Resource resource={this.resource[1]}/>
    <Resource resource={this.resource [2]} />   */}
    {this.renderPosts()}
    {/* {display} */}
    </div>
  );
}
}

export default App;
