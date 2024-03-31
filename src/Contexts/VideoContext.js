import { createContext,useState } from "react";

export const VideoContext = createContext()

export const VideoProvider = ({children}) => {

    const [videoId, setVideoId] = useState()

    const handleVideo = (item) => {
           setVideoId(item)
    }

    return(
        <VideoContext.Provider value={{videoId,handleVideo}} >{children}</VideoContext.Provider>
    )
}