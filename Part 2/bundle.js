(function (React, ReactDOM) {
  'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  console.log(ReactDOM);

  const width= 960;
  const height= 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 50;



  const App = () => (
   	React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'circle', {
          cx: centerX, cy: centerY, r: centerY - strokeWidth / 2, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),
       React.createElement( 'circle', {
          cx: centerX - eyeOffsetX, cy: centerY - eyeOffsetY, r: eyeRadius }),
      React.createElement( 'circle', {
          cx: centerX + eyeOffsetX, cy: centerY - eyeOffsetY, r: eyeRadius })
  )
  );
    
  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM));
