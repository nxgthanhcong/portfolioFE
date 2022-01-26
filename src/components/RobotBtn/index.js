import { useDispatch } from 'react-redux';
import { handleVoiceSpeech } from '../../features/voice/voiceSlice';

function RobotBtn(props) {

    const { setIsOpenTour } = props;

    const dispatch = useDispatch();

    //speech 
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "vi-VI";
    recognition.continuous = false;

    //xử lý speech
    var isPress = 0;
    document.onkeydown = function (e) {
        // eRobotBtn.classList.add("robot-btn--listening");
        if (e.keyCode === 90) {
            if (isPress === 0) {
                recognition.start();
                isPress++;
            }
        }
    };

    document.addEventListener("keyup", function (e) {
        // eRobotBtn.classList.remove("robot-btn--listening");
        if (e.keyCode === 90) {
            isPress = 0;
            recognition.stop();
        }
    });

    recognition.onspeechend = () => {
        recognition.stop();
        // microphone.classList.remove('recording');
    }

    recognition.onerror = (err) => {
        console.error(err);
        // microphone.classList.remove('recording');
    }

    recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        handleVoice(text);
    }

    function handleVoice(text) {
        var handleText = text.toLocaleLowerCase();

        dispatch(handleVoiceSpeech(handleText));
    }

    return (
        <div
            class="robot-btn"
            onClick={() => setIsOpenTour("true")}
        >
            <i class="fas fa-robot"></i>
        </div>
    );
}

export default RobotBtn;