import {AuthApis} from '../api/auth';
import {LoginDataType, RegisterDataType} from '../../type/auth';
import {publicApiRequest} from '../../lib/axios-instance';

/**
 * Authentication service
 */

export default class AuthServices {
  public async login(body: LoginDataType) {
    const response = await publicApiRequest().post(AuthApis.login, body);
    return response?.data;
  }
  public async register(body: RegisterDataType) {
    console.log('App registration', AuthApis.register);
    const response = await publicApiRequest().post(AuthApis.register, body);
    return response?.data;
  }
}
