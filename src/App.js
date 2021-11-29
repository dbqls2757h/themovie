import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyled } from "./style/GlobalStyled";

import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Detail } from "./components/Detail/Detail";
import { Search } from "./components/Search/Search";
import { router } from "./router";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />

        <ScrollTop />

        <Header />

        <Switch>
          <Route path={router.home} exact>
            <Home />
          </Route>

          <Route path={router.detail}>
            <Detail />
          </Route>

          <Route path={router.search}>
            <Search />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
