const fakeAuthProvider = {
  isAuthenticated: false,
  signin(username: string, password: string, callback: VoidFunction) {
    if (username === "" || password === "") {
      return;
    }
    /* eslint no-console: 0 */
    console.log("username : %s , password : %s", username, password);
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100); // fake async
  },
};

const authProvider = {
  // TODO: 実装
};

export { fakeAuthProvider, authProvider };
