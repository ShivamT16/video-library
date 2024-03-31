import { createContext, useState } from "react";

export const CategoryContext = createContext()

export const CategoryProvider = ({children}) => {

    const [videoCategory, setVideoCategory] = useState();

    const handleCategory = (item) => {
        setVideoCategory(item);
    }

    return(
        <CategoryContext.Provider value={{handleCategory, videoCategory}}>
            {children}
        </CategoryContext.Provider>
    )
} 