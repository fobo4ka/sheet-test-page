import React, { PropTypes, Component } from 'react';

const ANIMATION_DURATION = 4000;
const IMAGE_WIDTH = 1920;
const IMAGE_HEIGHT = 1080;
const NUM_OF_IMAGES = 45;

class Animation extends React.Component {
  state = {
  images: null
};

__startTimestamp = null;
__currentIndex = -1;

getImage = (url) => {
  return new Promise(function(resolve, reject){
      const img = new Image();
      img.onload = function(){
          resolve(img);
      };
      img.onerror = function(e){
          reject(e);
      };
      img.src = url;
  })
}

pad2 = (i) => {
    if (i < 10) {
        return '0' + i;
    } else {
        return '' + i;
    }
}

loadImages = () => {
    let promises = [];
    for (let i = 0; i < NUM_OF_IMAGES; i++) {
        promises.push(this.getImage('/images/box/BOX1_000' + this.pad2(i) + '.png'));
    }
    return Promise.all(promises);
}

animationStep = (timestamp) => {
  const images = this.state.images;
  const interval = ANIMATION_DURATION / images.length;
  if (!this.__startTimestamp) {
      this.__startTimestamp = timestamp;
  }

  const i = Math.floor((timestamp - this.__startTimestamp) / interval);
  if (i >= images.length) {
      return;
  }

  if (this.__currentIndex !== i) {
      this.__currentIndex = i;

      const canvas = this.refs.canvas;
      const ctx = canvas.getContext('2d');
      if (i === 0) {
          canvas.width  = IMAGE_WIDTH;
          canvas.height = IMAGE_HEIGHT;
          canvas.style.width  = '100%';
          canvas.style.height = '100%';
      }
      ctx.drawImage(images[i], 0, 0);
  }
  requestAnimationFrame(this.animationStep);
}

componentWillMount = () => {
  this.loadImages().then((images) => {
    this.setState({images: images});
  });
}

componentDidUpdate = () => {
    requestAnimationFrame(this.animationStep);
}

  render() {
    if (this.state.images) {
      requestAnimationFrame(this.animationStep);
      return (
        <canvas ref="canvas"></canvas>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Animation;
