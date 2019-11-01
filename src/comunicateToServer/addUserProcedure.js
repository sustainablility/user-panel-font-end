import axios from 'axios';
import {addProcedureUrl} from "../config";

async function addUserProcedure(procedureName,userToken) {
    let postBody = JSON.stringify({
        procedureName: procedureName,
        userToken: userToken
    });
    let response = await axios.post(addProcedureUrl, postBody, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response === undefined) {
        return false;
    }
    console.log(response);
    if (response.data != 1) {
        return false;
    }
    return true;
}

export default addUserProcedure;