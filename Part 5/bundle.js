(function (React$1, ReactDOM, d3) {
  'use strict';

  React$1 = React$1 && Object.prototype.hasOwnProperty.call(React$1, 'default') ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const BackgroundCircle = ({ radius, strokeWidth }) => (
    React.createElement( 'circle', { r: radius, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth })
  );

  const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    React$1.createElement( React$1.Fragment, null,
      React$1.createElement( 'circle', {
        cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
      React$1.createElement( 'circle', {
        cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius })
    )
  );

  const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = d3.arc()
      .innerRadius(mouthRadius)
      .outerRadius(mouthRadius + mouthWidth)
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 3 / 2);
    
    return React$1.createElement( 'path', { d: mouthArc() });
  };

  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadius = 140;

  const App = () => (
    React$1.createElement( 'svg', { width: width, height: height },
      React$1.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
        React$1.createElement( BackgroundCircle, {
          radius: centerY - strokeWidth / 2, strokeWidth: strokeWidth }),
        React$1.createElement( Eyes, {
          eyeOffsetX: eyeOffsetX, eyeOffsetY: eyeOffsetY, eyeRadius: eyeRadius }),
        React$1.createElement( Mouth, { mouthRadius: mouthRadius, mouthWidth: mouthWidth })
      )
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));
