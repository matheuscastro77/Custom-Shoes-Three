import './index.css';
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColor.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColor.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={"lightblue"} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColor.stripes} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={"lightblue"} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColor.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={"lightblue"} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={"lightblue"} />
    </group>
  )
}


function App() {

  const [mesh, setMesh] = useState("#ffffff")
  const [stripes, setStripes] = useState("#ffffff")
  const [laces, setLaces] = useState("#ffffff")

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={0.9} angle={0.1}
                  penumbra={1} position={[10, 15, 10]}
                  castShadow />
                <OrbitControls enablePan={true}
                  enableZoom={true}
                  enableRotate={true} />
                <Model customColor={{mesh:mesh, stripes:stripes, laces:laces}}/>
              </Suspense>
            </Canvas>
          </div>
          <h2>Customize your shoes</h2>
          <div className='colors'>
            <div>
              <input type="color" id="mesh" name="mesh"
                value={mesh} 
                onChange={(e) => setMesh(e.target.value)} />
              <label for="mesh">Color</label>
            </div>

            <div>
              <input type="color" id="stripes" name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)} />
              <label for="stripes">Stripes</label>
            </div>
            <div>
              <input type="color" id="laces" name="laces"
                value={laces} 
                onChange={(e) => setLaces(e.target.value)} />
              <label for="laces">Laces</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;