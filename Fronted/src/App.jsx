import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./layout/Nav"
import Home from "./pages/home/Home"
import Friends from "./pages/friends/Friends"
import Friendrequest from "./pages/friendsrequiest/Friendrequest"
import Allfriends from "./pages/allfriends/Allfriends"
import Videos from "./pages/videos/Videos";
import Signup from "./pages/registerlog/Signup"
import Login from "./pages/registerlog/Login"
import Profile from "./pages/profile/Profile"
import Sendedrequest from "./pages/sendedrequest/Sendedrequest"
import Videoplayer from "./pages/videos/videoselements/videoplayer/Videoplayer"
import Menus from "./pages/menupages/Menus"
import Messageaccount from "./pages/menupages/messagepages/Messageaccount"
import Messagemobo from "./pages/menupages/messagepages/Messagemobo"

function App() {
  return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/request" element={<Friendrequest />} />
          <Route path="/friends/friend" element={<Allfriends />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/video/:id" element={<Videoplayer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/friends/sendedrequest" element={<Sendedrequest />} />
          <Route path="/messages"  >
            <Route path="messages-home" element={<Messageaccount  />} />
            <Route path="message-mobo" element={<Messagemobo  />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
