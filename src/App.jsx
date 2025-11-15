import {Route, Routes} from "react-router-dom";

import SinglePlayer from './pages/singlePlayer.jsx'
import Home from './pages/home.jsx'
import NavBar from './components/navBar.jsx'

function App() {

  return (
      <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleplayer" element={<SinglePlayer/>}/>
        </Routes>
      </>
  )
}

export default App