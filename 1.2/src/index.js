import 'babel-polyfill';
import san from 'san';

require('./index.css');


import Hello from './components/Hello'

import {router} from 'san-router'

router.add({
	rule: '/',
	Component: Hello,
	target: '#app'
});

router.start();