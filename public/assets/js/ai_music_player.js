
const AiMusicPlayer = (function () {
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const $ = document.querySelector.bind(document);
    const eWebcam = $("#webcam-container");
    const eMP = $(".music-player");

    const URL = "https://teachablemachine.withgoogle.com/models/sSGOvvszp/";

    let model, webcam, maxPredictions, isRun;

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
            eMP.classList.remove("hide");
        }
        if (prediction[0].className.toLocaleLowerCase().includes("ms-hide") && (prediction[0].probability.toFixed(2) * 100) > 95) {
            eMP.classList.add("hide");
            eWebcam.classList.add("hide");
            const eWebcamCanvas = eWebcam.getElementsByTagName("canvas");
            eWebcamCanvas && Array.from(eWebcamCanvas).forEach(item => item.remove());
            webcam.stop();
            isRun = false;
        }
    }

    return {
        async init() {
            isRun = true;
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

            // Convenience function to setup a webcam
            const flip = true; // whether to flip the webcam
            webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

            // append elements to the DOM
            eWebcam.classList.remove("hide");
            eWebcam.appendChild(webcam.canvas);
        }
    }

}());


export default AiMusicPlayer;