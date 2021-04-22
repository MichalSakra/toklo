import PageContainer from "./containers/PageContainer/PageContainer"
import Navigation from "./components/Navigation/Navigation"
import { Route } from 'react-router'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Offer from "./pages/Offer/Offer"
import Showreel from "./pages/Showreel/Showreel"
function App() {
  return (
    <div>
      <PageContainer>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/o-nas" exact component={About} />
        <Route path="/oferta" exact component={Offer} />
        <Route path="/showreel" exact component={Showreel} />
      </PageContainer>
    </div>
  );
}

export default App;
