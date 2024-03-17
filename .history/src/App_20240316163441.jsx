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
<Headers/>
<Routes>
  <Route path="/" element= {<Home/>}/>
  <Route path="/coins" element= {<Coins/>}/>
  <Route path="/coin/:id" element= {<CoinDetails/>}/>
  <Route path="/exchanges" element= {<Exhanges/>}/>
  <Route path="/header" element= {<Headers/>}/>
</Routes>

      </Router>
      
    </>
  )
}

export default App
