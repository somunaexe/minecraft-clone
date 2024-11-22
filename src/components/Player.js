import { useSphere } from "@react-three/cannon"
import { useThree, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
export const Player = () => {
  const { camera } = useThree() //Camera view for the player

  //Sphere for tracking the players coordinates
  const [ref, api] = useSphere(() => ({
      mass: 1,
      type: "Dynamic",
      position: [0, 5, 0],
  }))

  //Track the players coordinates
  const pos = useRef([0, 0, 0])
  useEffect(() => {
    api.position.subscribe(p => pos.current = p)
  }, [api.position])

  //Track the players velocity
  const vel = useRef([0, 0, 0])
  useEffect(() => {
    api.velocity.subscribe(v => vel.current = v)
  }, [api.velocity])

  //Update the camera position every frame to the players position
  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    api.velocity.set(0,1,0)
  })

  return (
    <mesh ref={ref}></mesh>
  )
}

