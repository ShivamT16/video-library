import "./videolisting.css"
import { useContext } from "react"
import { CategoryContext,WatchLaterContext,VideoContext } from ".."
import { Link } from "react-router-dom"

export const VideoListing = ({videos}) => {
    const {videoCategory} = useContext(CategoryContext)
    const {handleVideo} = useContext(VideoContext)
    const {watchLaterList,handleWatchLater,handleDelete,AccessTimeRoundedIcon,AccessTimeFilledRoundedIcon} = useContext(WatchLaterContext)
    return(
        <div>
            <h1>{videoCategory}</h1>
            <div className="videoList">
                {
videos.filter(({category}) => category === videoCategory).map((item) => {
    const {_id,title,views,thumbnail,category,creator} = item;

return (
<div key={_id} className="videoCard" onClick={() => handleVideo(_id)} >

<div className="watchLater-btn">
    {watchLaterList.find((item) => item._id === _id) ? <p onClick={() => handleDelete(_id)} ><AccessTimeFilledRoundedIcon color="primary"></AccessTimeFilledRoundedIcon></p> : 
    <p onClick={() => handleWatchLater(item) } > <AccessTimeRoundedIcon color="primary" ></AccessTimeRoundedIcon></p>
    }
</div>

    <Link className="category-name" to="/videopage">
    <img alt="thumbnail" src={thumbnail} ></img>
    <div className="videoCard-detail" >
    <img className="creator-image" alt="creator" src={thumbnail} ></img>
    <div >
    <h4>{title}</h4>
    <h4>{category}</h4>
    <h4>{views} | {creator}</h4>
    </div>
    </div>
    </Link>

</div>
)})} 
       </div>
        </div>
    )
}
