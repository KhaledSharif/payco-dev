import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Environment, Lightformer, ContactShadows, OrbitControls } from '@react-three/drei'
import { Effects } from './Effects'
import { Lambo } from './Lambo'

import Image1 from "./jpg/opensea/1.webp"
import Image2 from "./jpg/opensea/2.webp"
import Image3 from "./jpg/opensea/3.webp"

import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import Video1 from "./mp4/chorus.mp4"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay, faPause, faClock
} from "@fortawesome/free-solid-svg-icons"

import { Col, Container, Row } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";

import { Canvas, useFrame } from '@react-three/fiber'

const VideoControlButtonStyle = {
    "zIndex": 10,
    "width": "6.5vw",
    "height": "3.5vh",
    "fontSize": "0.675vw",
    "borderRadius": "0.75vw",
    "padding": "0.25vw 0.15vw 0.25vw 0.15vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.05), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.01)"
}

const MerchRowStyle = {
    "width": "86%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "margin": "1.25vh 2vw 0 2vw",
    "padding": "8vh 0 20vh 0",
    "gap": "6vw",
    "background": "linear-gradient(318deg, rgba(38,56,73,1) 0%, rgba(38,56,73,1) 10%, rgba(10,10,10,1) 100%)",
    "borderRadius": "1.0vw"
}

const MerchSubRowStyle = {
    "width": "100%",
    "display": "flex",

    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "gap": "2vw"
}

const MerchImageStyle = {
    "borderRadius": "1.0vw",
    "cursor": "pointer"
}

const VideoContainerStyle = {
    padding: "1vh 0vh 1vh 0vh",
    margin: "-3vh 0 0 0",
    display: "flex",
    alignItems: "center", justifyContent:
        "center", height: "90vh"
}


const VideoStyle = { borderRadius: "1vw 1vw 0 0" }

const ArrowHeaderStyle = {

    "borderRadius": "1.0vw",
    "color": "rgba(0,0,0,0.9)",
    "border": "none",
    "padding": "0.75vw",
    "width": "100%",

    "marginTop": "1.0vh",

    "fontSize": "1.0vw",
    "fontWeight": "400",

    "marginBottom": "1.0vw",
    "boxShadow": "0.1vw 0.1vw 0.2vw rgba(0,0,0,0.01), -0.1vw -0.1vw 0.2vw rgba(255,255,255,0.05)"
}

const ArrowHeaderSymbol = {
    "marginLeft": "1.0vw",
    "fontSize": "1.0vw",
    "color": "rgba(0,0,0,0.25)"
}

const CenterStyle = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row",
    "margin": 0,
    "padding": 0,
    "gap": "0.5vw"
}

const CenterStyleCol = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "margin": 0,
    "padding": 0
}

const WinProgressBarStyle = {
    width: "80%",
    height: "1.0vh",

    display: "flex",
    justifyContent: "center",
    marginTop: "-0.975vh"
}

const WinRowStyle = {
    width: "80%",
    display: "flex", justifyContent: "center",
    marginTop: "1.0vh"
}



function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ThreeJsCanvas = () => (
    <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
    <color attach="background" args={['#15151a']} />
    <Lambo rotation={[0, Math.PI / 1.5, 0]} scale={0.015} />
    <hemisphereLight intensity={0.5} />
    <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
    <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 4, 1]} />
      <meshStandardMaterial color="white" roughness={0.75} />
    </mesh>
    <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 3, 1]} />
      <meshStandardMaterial color="white" roughness={0.75} />
    </mesh>
    {/* We're building a cube-mapped environment declaratively.
        Anything you put in here will be filmed (once) by a cubemap-camera
        and applied to the scenes environment, and optionally background. */}
    <Environment resolution={512}>
      {/* Ceiling */}
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
      {/* Sides */}
      <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
      <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
      {/* Key */}
      <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
    </Environment>
    <Effects />
    <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
  </Canvas>
)

function MainCard() {

    const VideoRef = useRef()

    const [IsPlaying, SetIsPlaying] = useState(false)

    const [CurrentTime, SetCurrentTime] = useState(0)

    const [TotalTime, SetTotalTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (VideoRef.current) {
                SetCurrentTime(parseFloat(VideoRef.current.currentTime));

                let tt = parseFloat(VideoRef.current.duration);
                if (tt !== TotalTime) {
                    SetTotalTime(tt);
                }

            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const TogglePlay = () => {

        if (!IsPlaying) {
            VideoRef.current.play()
        } else {
            VideoRef.current.pause()
        }

        SetIsPlaying(!IsPlaying)
    }

    const ScrubVideo = ({ pct }) => {
        VideoRef.current.currentTime = pct / 100.0 * TotalTime;
        SetCurrentTime(parseFloat(VideoRef.current.currentTime));
    }

    const WindowedStyle = {
        width: "100vw",
        background: "#13161d",
        marginTop: "0",
        marginBottom: "1.0vh",
        padding: "0 0 25vh 0vw",
        borderRadius: "1.0vw",
        overflow: "hidden",
    }

    let Progress = -1;
    if (CurrentTime > 0 && TotalTime > 0) { Progress = parseFloat(CurrentTime / TotalTime * 100); }

    return <Card
        style={WindowedStyle}
        className="border border-0"
    >

        <Row>


            <Col style={CenterStyleCol}>

                <Row style={{

                    width: "100%",
                    padding: 0,
                    marginBottom: "0",
                    display: "flex",
                    justifyContent: "center"

                }}>
                    <div style={VideoContainerStyle}>
                        <ThreeJsCanvas />
                    </div>
                </Row>

                <Row style={MerchRowStyle}>

                    <Col className="col-3">
                        <img src={Image3} style={MerchImageStyle} width="100%" />
                    </Col>
                    <Col className="col-3">
                        <img src={Image1} style={MerchImageStyle} width="100%" />
                    </Col>
                    <Col className="col-3">
                        <img src={Image2} style={MerchImageStyle} width="100%" />
                    </Col>

                </Row>




                <Row style={MerchRowStyle}>

                    <Row style={MerchSubRowStyle}>

                        <Col className="col-2">
                            <img src={Image3} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image1} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image2} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image2} style={MerchImageStyle} width="100%" />
                        </Col>

                    </Row>

                   
                    <Row style={MerchSubRowStyle}>

                        <Col className="col-2">
                            <img src={Image3} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image1} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image2} style={MerchImageStyle} width="100%" />
                        </Col>
                        <Col className="col-2">
                            <img src={Image2} style={MerchImageStyle} width="100%" />
                        </Col>

                    </Row>

                </Row>

            </Col>




        </Row>


    </Card>
}

export default MainCard;
