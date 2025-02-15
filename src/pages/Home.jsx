import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Bat from '../models/Bat';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import Background from '../models/Background';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBackgroundForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -50, -130];
    let rotation = [0.3, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustBatForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0, -5, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [0.175, 0.175, 0.175];
      screenPosition = [-1, -15, -30];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [backgroundScale, backgroundPosition, backgroundRotation] = adjustBackgroundForScreenSize();
  const [batScale, batPosition, batRotation] = adjustBatForScreenSize();

  return (
    <section className="w-full h-screen relative bg-green-bg">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 500 }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <fogExp2 attach="fog" args={['#629FB3', 0.00175]} />
          <Background
            scale={backgroundScale}
            position={backgroundPosition}
            rotation={backgroundRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Bat isRotating={isRotating} scale={batScale} position={batPosition} rotation={batRotation} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
