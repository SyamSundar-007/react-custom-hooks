import { useEffect, useState } from "react"


export const useMouseposition = ()=>{
    const [position, setposition] = useState({x:0,y:0});

    const handleMouseMove = (e)=>{
        setposition({x:e.clientX, y:e.clientY});
    }


    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove)

        return()=>{
            window.removeEventListener("mousemove",handleMouseMove)
        }
    },[])

    return position
}