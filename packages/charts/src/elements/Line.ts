import { Line } from 'recharts/es6';

Line.defaultProps.type = 'monotone';
Line.defaultProps.stroke = '#3F5161';

Line.defaultProps.activeDot = {
  onClick: (e) => {
    console.log(e);
  }
};

export { Line };
