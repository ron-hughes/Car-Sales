export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"


export const addFeature = item => {
    return {
          type: ADD_FEATURE,
          payload: item
    };
 };
 
 export const removeFeature = item => {
    return {
       type: REMOVE_FEATURE,
       payload: item
    };
 };