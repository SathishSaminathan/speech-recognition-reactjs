import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

export const SpeechHome = () => {
  const [value, setValue] = useState("");
  const [Listening, setListening] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      //   setListening(false);
    },
  });

  return (
    <div className="speechRecognition">
      <div className="rec">
        <textarea
          disabled
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          // onMouseDown={listen}
          // onMouseUp={stop}
          onClick={() => {
            setListening(!Listening);
            !Listening ? listen() : stop();
          }}
        >
          {/* 🎤 */}
          {Listening ? "Stop Listening" : "Listen"}
        </button>
        {listening && Listening && <div>Go ahead I'm listening</div>}
      </div>
    </div>
  );
};
