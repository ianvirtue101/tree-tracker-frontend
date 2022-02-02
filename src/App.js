import { Switch, Route, __RouterContext, useLocation } from "react-router-dom";

import { useTransition, animated } from "react-spring";

import "./App.scss";

import Home from "./pages/home/Home";
import Mappage from "./pages/maps/Mappage";
import Ngopage from "./pages/ngopage/Ngopage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-30%, 0)" },
  });

  return transitions((props, item) => (
    <>
      <div className="App">
        <Header />
        <animated.div style={props}>
          <Switch location={item}>
            <Route path="/" exact component={Home} />
            <Route path="/maps" component={Mappage} />
            <Route path="/impact" component={Ngopage} />
          </Switch>
        </animated.div>
        <Footer />
      </div>
    </>
  ));
}

export default App;
