import './style.css';

import { gsap } from 'gsap';
import GUI from 'lil-gui'; 

// lil-gui
const gui = new GUI();

const myObject = {
	myBoolean: true,
	myFunction: function() {},
	myString: 'lil-gui',
  x: 0,
  y: 0,
	btn: function() {
    console.log(this.x, this.y)
  },
};

// const tl = gsap.timeline({defaults:{ease:"none"}}).to(".ball", {y:this.myNum, duration:1});
//const tl = gsap.timeline({defaults:{ease:"none"}}).to(".ball", {y:myObject.myNum});
// tl.pause();
// tl.play();

const target = document.getElementById('ball');


// gui.add( myObject, 'myBoolean' );  // Checkbox
gui.add( myObject, 'btn');
gui.add( myObject, 'x', 0, 100, 1 ).onChange( (value: number) => {
  //console.log(value);
  target!.style.transform = `translate( ${myObject.x}%, ${myObject.y}% )`;
});
gui.add( myObject, 'y', 0, 100, 1 ).onChange( (value: number) => {
  //console.log(value);
  target!.style.transform = `translate( ${myObject.x}%, ${myObject.y}% )`;
});
