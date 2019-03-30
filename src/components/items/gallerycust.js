import React from "react"
import ImageGallery from 'react-image-gallery';
import './image-gallery.css';


class gallerycust extends React.Component {

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: 'https://www.youtube.com/watch?v=GZ4d3HEn9zg',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
        <div width="160" >
      <ImageGallery items={images} />
      </div>
    );
  }

}
export default gallerycust;