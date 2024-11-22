import { useCallback, useEffect, useState } from "react"
export const useKeyboard = () => {

    //Actions the player can do and textures for objects the player can hold
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    //Handle key down event
    const handleKeyDown = useCallback((event) => {
        switch (event.keyCode) {
            case "KeyW":
            case "KeyS":
            case "KeyA":
            case "KeyD":
        }
    })

    //Handle key up event
    const handleKeyUp = useCallback((event) => {
        
    })


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.addEventListener('keydown', handleKeyDown)
            document.addEventListener('keyup', handleKeyUp)
        }
    }, [])
}