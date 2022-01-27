import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleVoiceSpeech } from '../../features/voice/voiceSlice';

function ML() {

    const voice = useSelector((state) => state.voice);
    const dispatch = useDispatch();

    const eWebcam = useRef();
    const URL = "https://teachablemachine.withgoogle.com/models/sSGOvvszp/";

    let model, webcam, isRun;

    async function loop() {
        if (isRun) {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
        } else {
            webcam.pause();
            webcam.stop();
        }
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predictTopK(webcam.canvas, 1);

        if (prediction[0].className.toLocaleLowerCase().includes("ms-display") && (prediction[0].probability.toFixed(2) * 100) > 95) {
            dispatch(handleVoiceSpeech("nghe nhạc"));
        }
        if (prediction[0].className.toLocaleLowerCase().includes("ms-hide") && (prediction[0].probability.toFixed(2) * 100) > 95) {
            dispatch(handleVoiceSpeech("tắt nhạc"));
            dispatch(handleVoiceSpeech("camera off"));

            webcam.stop();
            isRun = false;
        }
    }



    useEffect(() => {
        async function init() {
            isRun = true;
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await window.tmImage.load(modelURL, metadataURL);

            // Convenience function to setup a webcam
            const flip = true; // whether to flip the webcam
            webcam = new window.tmImage.Webcam(400, 300, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

            // append elements to the DOM
            eWebcam.current.appendChild(webcam.canvas);
        }

        voice.isOpenCamera && init();
    }, [voice.isOpenCamera])

    return (
        <div className="ML">
            {
                voice.isOpenCamera && <div id="webcam-container"
                    ref={eWebcam}
                />
            }
        </div>
    );
}

export default ML;