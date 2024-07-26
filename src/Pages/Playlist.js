import { useState } from "react"
import icon from "../Contexts/beach-icon.jpg"
import "./playlist.css"

export const Playlist = () => {

    const [playlist, setPlaylist] = useState([])
    const [playlistInput, setPlaylistInput] = useState({
        title: "",
        description: ""
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPlaylistInput({...playlistInput, [name]: value})
    }

    const handleSubmit = () => {
        const newPlaylist = {
            ...playlistInput,
            id: new Date().getTime().toString()
          };
        setPlaylist([...playlist, newPlaylist])
        setPlaylistInput({
            title: "",
            description: ""
        })
    }

    const handleDelete = (id) => {
        setPlaylist(playlist.filter((item) => item.id !== id ))
    }

    return(
        <div>
            <h1>PlayList</h1>

        <div className="add-playlist" >
            <input className="playlist-input" type="text" name="title" value={playlistInput.title} onChange={handleInput} autoComplete="off" placeholder="Title" />
            <br />
            <input className="playlist-input" type="text" name="description" value={playlistInput.description} onChange={handleInput} autoComplete="off" placeholder="Description" />
            <br />
            <button className="add-btn" onClick={handleSubmit} > Create New Playlist </button>
        </div>

       <div className="playlist" >
        {playlist.map(({id,title,description}) => 
            <div key={id} className="playlists" >
             <img className="playlist-icon" src={icon} alt="" />
              <div className="playlist-para" >
             <p> {title} </p>
             <p> {description} </p>
             <button onClick={() => handleDelete(id)} > Delete </button> 
              </div>
             
            </div>
        )}
        </div>

        </div>
    )
}