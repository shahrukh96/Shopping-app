import * as c from '../constants/CategoryConstant';

export function createCategory (name,description){
    var id=Date.now();
    var data={
        id,
        name,
        description
    }
    return {
        type:c.CREATE_CATEGORY,payload:data
    };
}