/**
 * Created by m on 16-4-5.
 */
'use strict';

import { combineReducers, createStore } from 'redux';
import Reducer from './reducer.js';

module.exports = createStore(Reducer);



