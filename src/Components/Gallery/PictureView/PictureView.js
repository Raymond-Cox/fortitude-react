import React, { Component } from 'react';
import { ViewContainer, Title } from './style.js';
import createHistory from "history/createBrowserHistory";
import MyComponent from './Sample.js';
import Publications from './Publications.js';
class Pictureview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
getTitle = () => {
  if(this.state.location === "/portfolio/malefashion") {
    return "Male Fashion"
  } else if(this.state.location === "/portfolio/kids") {
    return "Kids"
  } else if(this.state.location === "/portfolio/other") {
    return "Other"
  } else if (this.state.location === "/portfolio/femalefashion") {
    return "Female Fashion"
  }
    return "Publications"
};
setCountAndLocation = () => {
  const history = createHistory();
  const location = history.location;
  
  if (location.pathname === "/portfolio/malefashion") {
    this.setState({
      location: location.pathname,
      count: 5
    });
  } else if (location.pathname === "/portfolio/kids") {
    this.setState({
      location: location.pathname,
      count: 3
    })
  } else if (location.pathname === "/portfolio/other") {
    this.setState({
      location: location.pathname,
      count: 4
    })
  } else if (location.pathname === "/portfolio/femalefashion") {
    this.setState({
      location: location.pathname,
      count: 2
    })
  } else {
    this.setState({
      location: location.pathname,
      count: 2
    })
  }
}
createImages = () => {
  let images = []

  for(let i=1; i <= this.state.count; i++) {
    let imgURL = "https://webdesignbyraymond.com/fortitudephotos" + this.state.location + "/" + i + ".jpg";
    images.push({
      original: imgURL,
      thumbnail: imgURL
    },)
    console.log(images);
  }
  return images
}
componentDidMount() {
  this.setCountAndLocation();
}
componentWillReceiveProps() {
  const history = createHistory();
  const location = history.location;
  if(location.pathname !== this.state.location) {
    this.setCountAndLocation();
  } 
}
componentDidUpdate() {
  console.log("Component updated the path is now " + this.state.location + " and the count is " + this.state.count)
}
getLocation = () => {
  return this.state.location
}
checkForHomeGallery = () => {
  if(this.state.location === '/portfolio') {
    return true;
  }
}
  render() {
    return (
      <div>
        <ImageGallery 
        getTitle={this.getTitle()}
        getLocation={this.getLocation()}
        checkForHomeGallery={this.checkForHomeGallery()}
        createImages={this.createImages()} />
        
      </div>
    );
  };
}

const ImageGallery = (props) => {
    return (
    <ViewContainer>
      <Title>{props.getTitle}</Title>
        {props.checkForHomeGallery ? (
          <Publications />
        ) : (
          <MyComponent createImages={props.createImages} />
        )}
        
    </ViewContainer>
  );
}
export default Pictureview;