import { createContext, useState } from "react";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';

export const WatchLaterContext = createContext()

export const WatchLaterProvider = ({children}) => {
 
    const [watchLaterList, setWatchLaterList] = useState([])

    const handleWatchLater = (item) => {
         setWatchLaterList([...watchLaterList,item]);
    }

    const handleDelete = (itemId) => {
        setWatchLaterList(
            watchLaterList.filter((item) => item._id !== itemId )
        )
    }

    return(
        <WatchLaterContext.Provider value={{watchLaterList,handleWatchLater,handleDelete,AccessTimeRoundedIcon,AccessTimeFilledRoundedIcon}}>{children}</WatchLaterContext.Provider>
    )
}