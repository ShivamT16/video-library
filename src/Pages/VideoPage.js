import "./videopage.css"
import { useContext } from "react"
import { WatchLaterContext,VideoContext } from ".."
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

export const VideoPage = ({videos}) => {
    const {videoId} = useContext(VideoContext)
    const {watchLaterList,handleWatchLater,handleDelete,AccessTimeRoundedIcon,AccessTimeFilledRoundedIcon} = useContext(WatchLaterContext)

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
    <EditNoteRoundedIcon sx={{ fontSize: 30 }} />
    </div>
     </div>
    </div>
 )
} ) }
        </div>
    )
}