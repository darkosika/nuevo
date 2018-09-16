import {FETCH_LIBRARIES,FETCH_LIBRARY} from '../actions';
import _ from 'lodash';
export default function(state={},action){
    switch(action.type){
        case FETCH_LIBRARY:
        return {...state,[action.payload.id]:action.payload}; 
        case FETCH_LIBRARIES:
        return _.mapKeys(action.payload.data,'id'); 
    default:
    return state;
}
} 
 