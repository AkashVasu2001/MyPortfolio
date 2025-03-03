import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export function Model(props) {
  const { nodes } = useGLTF('/NeonGenerator-transformed.glb')

  // Load the baked texture
  const bakedTexture = useLoader(TextureLoader, '/baked_texture.png')

  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.NeonGlass001.geometry} 
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh position={[0, 0,0.2]} receiveShadow>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial color="darkgrey" />
      </mesh>
        {/* Apply the baked texture */}
        <meshStandardMaterial 
          emissiveMap={bakedTexture}
  emissive="cyan"
  emissiveIntensity={0.1} // Increase for a stronger glow effect
  toneMapped={false} // Disable tone mapping for a more intense effect
/>

      </mesh>
    </group>
  )
}

// Preload the model
useGLTF.preload('/NeonGenerator-transformed.glb')
