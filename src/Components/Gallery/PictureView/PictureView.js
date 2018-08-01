import React, { Component } from 'react';
import { ViewContainer, Title } from './style.js';
import createHistory from "history/createBrowserHistory";
import PictureGallery from './PictureGallery.js';
import Publications from './Publications.js';
class Pictureview extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

// This uses states stored location property to determine what string to use for category title
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

// Get path from history, then set state properties with pathname and image count per category.
setCountAndLocation = () => {
  const history = createHistory();
  const location = history.location;
  
  if (location.pathname === "/portfolio/malefashion") {
    this.setState({
      location: location.pathname,
      count: 10
    });
  } else if (location.pathname === "/portfolio/kids") {
    this.setState({
      location: location.pathname,
      count: 23
    })
  } else if (location.pathname === "/portfolio/other") {
    this.setState({
      location: location.pathname,
      count: 29
    })
  } else if (location.pathname === "/portfolio/femalefashion") {
    this.setState({
      location: location.pathname,
      count: 72
    })
  } else {
    this.setState({
      location: location.pathname,
      count: 2
    })
  }
    
}

// Populate array with images when a category is selected by using location prop stored in state in the image path
createImages = () => {
  let images = []

  for(let i=1; i <= this.state.count; i++) {
    let imgURL = "https://webdesignbyraymond.com/fortitudephotos" + this.state.location + "/" + i + ".jpg";
    images.push({
      original: imgURL,
      thumbnail: imgURL
    },)
  }
  return images
}

// Find out current path and set state properties accordingly on portfolio load
componentDidMount() {
  this.setCountAndLocation();
}

// Anytime a category is selected update state properties to reflect choice
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

// This is used to for the logic behind conditionally rendering publications, currently only accessible when first clicking portfolio
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
          <PictureGallery createImages={props.createImages} />
        )}
        
    </ViewContainer>
  );
}
export default Pictureview;