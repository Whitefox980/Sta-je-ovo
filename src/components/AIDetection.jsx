// src/components/AIDetection.jsx
import { useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function AIDetection() {
  const webcamRef = useRef(null);
  const [objects, setObjects] = useState([]);

  const detect = async () => {
    const model = await mobilenet.load();
    const img = webcamRef.current.getScreenshot();
    const predictions = await model.classify(img);
    setObjects(predictions);
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={detect}>ŠTA JE OVO?</button>
      {objects.map((obj, i) => (
        <p key={i}>{obj.className} ({(obj.probability * 100).toFixed(1)}%)</p>
      ))}
    </div>
  );
}
