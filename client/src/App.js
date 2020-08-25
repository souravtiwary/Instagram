import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/screens/Home";
import Signin from "./components/screens/SignIn";
import Profile from "./components/screens/Pofile";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";
import { intialState, reducer } from "./reducer/userReducer";

export const UserContext = createContext();

//for accessing the history outside BrowserRouter otherwise we could have put all this inside App()
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user }); //this will store user so that when user do not log out and closed the window the it will
      //login the user with signin other as soon as user close the window the user will get log out
    } else {
      history.push("/signin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <CreatePost />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
