import { usePlane } from "@react-three/cannon"
import { grassTexture } from "../textures"
import { RepeatWrapping } from "three"
import { NearestFilter } from "three"

//The ground/playing field for the player
export const Ground = () => {

    //The ground is built with a plane
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0] //Rotated 90 degrees to make it flat
    }))

    grassTexture.magFilter = NearestFilter //Increase the quality of the texture
    
    //Make the texture repeat, prevents stretching across the whole screen
    grassTexture.wrapS = RepeatWrapping 
    grassTexture.wrapT = RepeatWrapping
    grassTexture.repeat.set(100, 100)

    return (
        <mesh ref={ref}>
            <planeGeometry attach="geometry" args={[100,100]} />
            <meshStandardMaterial attach="material" map={grassTexture}/>
        </mesh>
    )
}

export default Ground