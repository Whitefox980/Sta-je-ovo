// components/ObjectDetector.jsx
import { useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function ObjectDetector() {
  const imgRef = useRef();
  
  const detect = async () => {
    const model = await mobilenet.load();
    const predictions = await model.classify(imgRef.current);
    console.log('AI kaže:', predictions);
  };

  return (
    <div>
      <img ref={imgRef} src="/slika.jpg" alt="Detekcija" />
      <button onClick={detect}>ŠTA JE OVO?</button>
    </div>
  );
}
