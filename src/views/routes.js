import { isAuthenticated } from 'core/auth';
import App from './app';
import SignInPage from './pages/sign-in';
import TasksPage from './pages/tasks';
import HomePage from './pages/homepage';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  TASKS: '/',
  ADMIN: '/admin',
  ADMIN_HOMEPAGE: '/edit_homepage'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.TASKS);
    }
  };
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: TasksPage,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignInPage,
        onEnter: requireUnauth(getState)
      },
      {
        path: `${paths.ADMIN}${paths.ADMIN_HOMEPAGE}`,
        component: HomePage,
        onEnter: requireAuth(getState)
      }
    ]
  };
};
