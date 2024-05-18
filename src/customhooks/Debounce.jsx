import { useEffect, useState } from "react"



export const useDebounce = (value, timeout)=>{

    const [debounceValue, setDebounceValue] = useState("")

    useEffect(()=>{
       const timoeOutId = setTimeout(() => {
         setDebounceValue(value)       
       }, timeout);

       return()=>{
        clearTimeout(timoeOutId)
       }

    },[value])

    return debounceValue
}