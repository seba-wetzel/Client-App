import Reflux from 'reflux';

let UserActions = Reflux.createActions([
  'fetchUsers','editUsers','createUser','saveUser','findUser'
]);

export default UserActions;
