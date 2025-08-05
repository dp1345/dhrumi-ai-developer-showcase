import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';

export function Scene3D() {
  // Create a tunnel of cubes similar to the reference image
  const createCubeTunnel = () => {
    const cubes = [];
    const rows = 6;
    const cols = 8;
    const depth = 15;
    
    for (let z = 0; z < depth; z++) {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Create a tunnel effect by skipping center cubes
          const centerX = cols / 2;
          const centerY = rows / 2;
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX + 0.5, 2) + Math.pow(y - centerY + 0.5, 2)
          );
          
          // Only place cubes at the edges to form tunnel walls
          if (distanceFromCenter > 1.5) {
            cubes.push(
              <FloatingCube 
                key={`${x}-${y}-${z}`}
                position={[
                  (x - centerX + 0.5) * 2, 
                  (y - centerY + 0.5) * 2, 
                  -z * 2
                ]} 
              />
            );
          }
        }
      }
    }
    return cubes;
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} color="#51e2f5" />
        <directionalLight position={[-10, -10, -10]} intensity={0.4} color="#9df9ef" />
        <pointLight position={[0, 0, 10]} intensity={0.6} color="#51e2f5" />
        
        {createCubeTunnel()}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}