import "./videopage.css"
import { v4 as uuid } from 'uuid'
import { useContext, useState } from "react"
import { WatchLaterContext,VideoContext } from ".."
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

export const VideoPage = ({videos}) => {
    const [input, setInput] = useState(false)
    const [addNotes, setAddNotes] = useState([])
    const [notes, setNotes] = useState([])
    
    const {videoId} = useContext(VideoContext)
    const {watchLaterList,handleWatchLater,handleDelete,AccessTimeRoundedIcon,AccessTimeFilledRoundedIcon} = useContext(WatchLaterContext)

    const handleNotes = (e) => {
       e.preventDefault();
       const newNotes = {note: addNotes, id:uuid() }
       setNotes([...notes,newNotes])
       setAddNotes("")
    }

    const handleNoteDelete = (id) => {
        setNotes(notes.filter((item) => item.id !== id))
    }

    const handleUpdate = (id) => {
        const find = notes.find((item) => item.id === id)
        setAddNotes(find.note)
        handleNoteDelete(id)
    }

    return(
        <div>
           {
            videos.filter((element) => element._id === videoId).map((item) => {
                const {_id,title,src,thumbnail} = item;
                return(
            <div key={_id}>
                 <iframe
                  style={{height: "25rem", width: "40rem"}}
                  src={src}
                  title={title}
                ></iframe>
                <div className="video-description">
                <img className="creator-image" alt="creator" src={thumbnail} />
                <h3 className="title" >{title}</h3>
                <div className="action-btn">
                {watchLaterList.find((item) => item._id === _id) ? <p onClick={() => handleDelete(_id)} ><AccessTimeFilledRoundedIcon></AccessTimeFilledRoundedIcon></p> : 
    <p onClick={() => handleWatchLater(item) } > <AccessTimeRoundedIcon ></AccessTimeRoundedIcon></p>
    }
    <PlaylistAddRoundedIcon sx={{ fontSize: 30 }} />
    <EditNoteRoundedIcon onClick={() => setInput(!input) } sx={{ fontSize: 30 }} />
    </div>
     </div>
     {input &&
     <form>
        <div className="notes">
        <label htmlFor="Notes" ></label>
        <input className="notes-input" type="text" placeholder="Add Note..." value={addNotes} onChange={(e) => setAddNotes(e.target.value) } />
        <button className="submit-btn" onClick ={handleNotes} >Add Note</button>
        </div>
     </form>
      }
      <div className="display-notes">
      { 
        notes.map((element) => 
        <div className="Notes" key={element.id}>
            <h4 >{element.note}</h4>
            <button className="submit-btn" onClick={() => handleNoteDelete(element.id)}>Delete</button>
            <button className="submit-btn" onClick={() => handleUpdate(element.id) } >Update</button>
            
        </div>
        )
      }
      </div>
    </div>
 )
} ) }
        </div>
    )
}