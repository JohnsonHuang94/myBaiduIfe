import 'babel-polyfill';
import san from 'san';

require('../static/css/style.css');


import Form from './components/Form'

import {router} from 'san-router'

router.add({
	rule: '/',
	Component: Form,
	target: '#app'
});

router.start();