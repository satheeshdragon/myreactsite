import React from 'react';
import { Carousel} from 'react-bootstrap'
import one from '../../asserts/images/1.jpg';
import two from '../../asserts/images/2.jpg';
import three from '../../asserts/images/3.jpg';

export default class Home extends React.Component {
	render() {
		return (
			<Carousel>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={one}
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>First slide label</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={two}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Second slide label</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src={three}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Third slide label</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		);
	}
}


function myClick() {
        alert("Hello World!");
    }
