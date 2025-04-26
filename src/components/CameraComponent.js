import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { detectObjects } from "../ai-detection";

export default function CameraComponent() {
  const webcamRef = useRef(null);
  const [predictions, setPredictions] = useState([]);

  const captureAndDetect = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = imageSrc;
    
    img.onload = async () => {
      const results = await detectObjects(img);
      setPredictions(results);
    };
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: "100%", maxWidth: "500px" }}
      />
      
      <button 
        onClick={captureAndDetect}
        style={{ 
          padding: "10px 20px",
          margin: "10px",
          background: "#4285f4",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Šta je ovo?
      </button>

      {predictions.length > 0 && (
        <div>
          <h3>Rezultati:</h3>
          <ul>
            {predictions.map((item, index) => (
              <li key={index}>
                {item.className} - {Math.round(item.probability * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
