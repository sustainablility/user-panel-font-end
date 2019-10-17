import axios from "axios";
import {getUserInfoByUserTokenUrl} from "../config";

async function getUserInfoByUserToken(token) {
    let response = await axios.get(getUserInfoByUserTokenUrl, {
        params: {
            token: token
        }
    }).catch(err => {});
    if (response === undefined) {
        return null;
    }
    if (response.status !== 200) {
        return null;
    }
    if (response.data === "") {
        return null;
    }
    return response.data;
}

export default getUserInfoByUserToken;