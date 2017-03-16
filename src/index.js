import './index.css';

import numeral from 'numeral';

const learningValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${learningValue} to learn this!`);
