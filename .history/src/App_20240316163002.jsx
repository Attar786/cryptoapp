import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Coins from "./components/Coins"
import Exhanges from "./components/Exhanges"
import CoinDetails from "./components/CoinDetails"
import Headers from "./components/Header"
function App() {
  

  return (
    <>
      <Router>

<Routes>
  <Route path="/" element= {<Home/>}/>
  <Route path="/" element= {<Coins/>}/>
  <Route path="/" element= {<CoinDetails/>}/>
  <Route path="/" element= {<Exhanges/>}/>
  <Route path="/" element= {<Headers/>}/>
</Routes>

      </Router>
      
    </>
  )
}

export default App
