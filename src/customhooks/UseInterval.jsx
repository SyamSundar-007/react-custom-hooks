
import { useEffect, useState } from "react"

export const useInterval = (fn, timeout)=>{

    useEffect(()=>{
      const intervalId =   setInterval(() => {
            fn()
            
        }, timeout);

        return()=>{
            clearInterval(intervalId)
        }
    },[timeout,fn])
}