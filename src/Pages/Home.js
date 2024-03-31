import "./home.css"
import { CategoryContext } from "../Contexts/CategoryContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Home = ({categories}) => {

    const {handleCategory} = useContext(CategoryContext)

    return(
        <div  >
            <h1>Categories</h1>
            <div className="home">
            {
                categories.map(({_id,thumbnail,category}) => 
                <div style={{cursor:"pointer"}} key={_id} onClick={() => handleCategory(category)} >
                    <Link to="/videoListing" >
                      <img alt="thumbnail" src={thumbnail} ></img>
                    <h3 className="category-name">{category}</h3>
                    </Link>
                </div>
                )
            }
            </div>
        </div>
    )
}