import firebaseApp from '../firebase/Firebase';

export default (nextState, replace) => {
	var user = firebaseApp.auth().currentUser;
	alert();
  if (!user) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
