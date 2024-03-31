import './App.css';
import {Home} from "./Pages/Home"
import { Explore } from "./Pages/Explore";
import { Playlist } from './Pages/Playlist';
import { VideoPage } from './Pages/VideoPage';
import { VideoListing } from './Pages/VideoListing';
import { WatchLater } from './Pages/WatchLater';
import {categories, videos} from "./Pages/Database"
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className='navigation'>
        <NavLink className="nav-heading" to="/">Home</NavLink>
        <NavLink className="nav-heading" to="/explore" >Explore</NavLink>
        <NavLink className="nav-heading" to="playlist" >Playlists</NavLink>
        <NavLink className="nav-heading" to="/watchlater"> Watch Later</NavLink>
      </nav>
    <Routes>
      <Route path="/" element={<Home categories = {categories}/>} />
      <Route path="/explore" element={<Explore videos = {videos} />} />
      <Route path="/videoListing" element={<VideoListing videos = {videos} />} />
      <Route path="/videopage" element={<VideoPage videos = {videos} />} />
      <Route path="/playlist" element={<Playlist/>} />
      <Route path="/watchlater" element={<WatchLater/>} />
    </Routes>

    </div>
  );
}

export default App;
