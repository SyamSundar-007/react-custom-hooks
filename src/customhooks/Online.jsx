import { useEffect, useState } from "react"

export function useIsOnline(){
    const [isonline, setIsOnline] = useState(window.navigator.onLine)
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true)
        })

        window.addEventListener("offline",()=>{
            setIsOnline(false)
        })

        return window.removeEventListener("offline",()=>{
            setIsOnline(false)
        })
    },[])

    return isonline
   
}