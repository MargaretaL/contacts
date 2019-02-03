/**
 * Created by lilit on 2019-01-30.
 */

import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import logger from './logger';

export default applyMiddleware(
    thunk,
    logger
)