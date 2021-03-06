import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource';
import resources from './mock/resources';
import ResourceForm from './components/ResourceForm';


class App extends Component{

//<Resource resource={aResource}/>, <Resource resource={aResource}
// constructor(props) {
//   super(props);
//   const that = this
//   // this.renderPosts.bind(this)    is-doing-this = App.renderPosts.bind(App)
// }
state = {
  resources: [...resources]
};

addResource = (newResource) => {
  // this.state.resources.push(newResource)
  this.setState({
    resources: [...this.state.resources, newResource]
  })
}

renderPosts() {
  // function mapResources (resource) {
  //   return <Resource resource={resource} />;
  // };
  const display = this.state.resources.map((resource) => {
    return <Resource resource={resource} key={resource.title} />;
  });

  return display;
}


  render() {
  return (
    <div className="App">
    <div className="header">
    <h1 className="title">Welcome to BrainHive!</h1>
    <div className='navigation'>
      <a href="">Add Resource</a>
      </div>
    </div>
    <div className="resourceList">{this.renderPosts()}</div> 
    <ResourceForm addResource={this.addResource} />  
    </div>
  );
}
}

export default App;
