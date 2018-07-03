export default new class User {
  constructor (user) {
    this.setData(user);
  }

  setData (user) {
    this.name = user.name;
    this.email = user.email;
    this.login = user.login;
    this.password = user.password;
    this.avatar = user.avatar;
  }

  getData () {
    let { name, email, password, login, avatar } = this;
    return {
     name,
     password,
     email,
     login,
     avatar
    }
  }


}