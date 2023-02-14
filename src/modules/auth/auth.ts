import {sign, verify} from 'jsonwebtoken';
import {User} from "../user/user.js";


export function authSign(userString: string) {

}

/**
 * 验证用户身份
 * @param token
 */
export function authVerify(token: string) {

    return new User();
}



