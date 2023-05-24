
import { Router, Switch } from "react-router-dom";
//REDUX
import { Provider } from "react-redux";
import { history } from "./Utils/constants";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";
import AppRoutes from "./Routes/app.router";
import routes from "./Routes/Routes";
import AlertContainer from "./Components/AlertContainer";

function App() {
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            {routes.map((route) => (
              <AppRoutes
                key={route.path}
                path={route.path}
                exact={route.exact}
                isPrivate={route.isPrivate}
                component={route.element}
              />
            ))}
          </Switch>
        </Router>
        <AlertContainer/>
      </PersistGate>
    </Provider>
  );
}

export default App;
