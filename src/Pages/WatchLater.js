import "./videolisting.css"
import { useContext } from "react"
import { WatchLaterContext,VideoContext } from ".."
import { Link } from "react-router-dom"

export const WatchLater = () => {
    const {handleVideo} = useContext(VideoContext)
    const {watchLaterList,handleDelete,AccessTimeFilledRoundedIcon} = useContext(WatchLaterContext)
    return (
        <div>
            <h1>Watch Later</h1>
            <div className="videoList">
            {
      watchLaterList.map((item) => {
    const {_id,title,views,thumbnail,category,creator} = item;
return (
<div key={_id} className="videoCard" onClick={() => handleVideo(_id)}>
<div className="watchLater-btn">
    <p  onClick={() => handleDelete(_id)} ><AccessTimeFilledRoundedIcon color="primary"></AccessTimeFilledRoundedIcon></p>
    </div>
<Link to="/videopage">
    <img alt="thumbnail" src={thumbnail} ></img>
    <div className="videoCard-detail" >
    <img className="creator-image" alt="creator" src={thumbnail} ></img>
    <div>
    <h4>{title}</h4>
    <h4>{category}</h4>
    <h4>{views} | {creator}</h4>
    </div>
    </div>
    </Link>
</div>
)})} </div>
        </div>
    )
}