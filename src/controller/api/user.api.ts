export class UserApi {
  firstname: string;
  lastname: string;
  email: string;

  constructor() {}

  setFirstname(firstname: string) {
    this.firstname = firstname;
  }
  setLastname(lastname: string) {
    this.lastname = lastname;
  }
  setEmail(email: string) {
    this.email = email;
  }
}
