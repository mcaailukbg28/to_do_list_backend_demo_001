import { sign, verify } from 'jsonwebtoken';
import { User } from "../user/user";


function authSign(userString: string) {

}

/**f
 * 验证用户身份
 * @param token
 */
function authVerify(token: string) {

    return new User();
}

export { authSign, authVerify }

