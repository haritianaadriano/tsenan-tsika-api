import { User } from './../../model/user.entity';
import { UserApi } from '../api/user.api';
import { SignupApi } from '../api/signup.api';

export class UserMapper {
  constructor() {}

  async toRest(promiseUser: Promise<User>): Promise<UserApi> {
    let userApi = new UserApi();
    let user = await promiseUser;
    userApi.setEmail(user.email);
    userApi.setFirstname(user.firstname);
    userApi.setLastname(user.lastname);
    return userApi;
  }

  userApiToDomain(userApi: UserApi): User {
    let user = new User();
    user.setEmail(userApi.email);
    user.setFirstname(userApi.firstname);
    user.setLastname(userApi.lastname);
    return user;
  }

  signupApiToDomain(signupApi: SignupApi): User {
    let user = new User();
    user.setEmail(signupApi.email);
    user.setFirstname(signupApi.firstname);
    user.setLastname(signupApi.lastname);
    user.setPassword(signupApi.password);
    user.setUsername(signupApi.username);
    return user;
  }
}
