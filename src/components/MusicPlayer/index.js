import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';

function MusicPlayer() {

    const voice = useSelector((state) => state.voice)

    const listSongs = [
        {
            name: "Anh Khong Hieu",
            singer: "Sol7 & Tommy Tèo",
            image: "./assets/images/songs/anh_khong_hieu.jpg",
            audio: "./assets/audios/anh_khong_hieu.mp3"
        },
        {
            name: "Co Tien Xanh",
            singer: "Sol7",
            image: "./assets/images/songs/co_tien_xanh.jpg",
            audio: "./assets/audios/co_tien_xanh.mp3"
        },
        {
            name: "Di Trong Thanh Pho",
            singer: "Sol7",
            image: "./assets/images/songs/di_trong_thanh_pho.jpg",
            audio: "./assets/audios/di_trong_thanh_pho.mp3"
        },
        {
            name: "Dem Hom Qua",
            singer: "Sol7",
            image: "./assets/images/songs/dem_hom_qua.jpg",
            audio: "./assets/audios/dem_hom_qua.webm"
        },
        {
            name: "Dopamine",
            singer: "Sol7",
            image: "./assets/images/songs/dopamine.jpg",
            audio: "./assets/audios/dopamine.mp3"
        },
        {
            name: "Nam Tao 27",
            singer: "Pjpo",
            image: "./assets/images/songs/nam_tao_27.jpg",
            audio: "./assets/audios/nam_tao_27.mp3"
        },
        {
            name: "Ngan Ngui",
            singer: "Sol7",
            image: "./assets/images/songs/ngan_ngui.jpg",
            audio: "./assets/audios/ngan_ngui.mp3"
        },
        {
            name: "RainDrop",
            singer: "Sol7",
            image: "./assets/images/songs/raindrop.jpg",
            audio: "./assets/audios/raindrop.mp3"
        },
        {
            name: "Vao Hu Vo",
            singer: "Sol7",
            image: "./assets/images/songs/vao_hu_vo.jpg",
            audio: "./assets/audios/vao_hu_vo.mp3"
        },
        {
            name: "Xau",
            singer: "2Can x KhanhJay",
            image: "./assets/images/songs/xau.jpg",
            audio: "./assets/audios/xau.mp3"
        },
    ]

    const [currentSong, setCurrentSong] = useState(listSongs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isRandom, setIsRandom] = useState(false);
    const [eCdImageRotate, setECdImageRotate] = useState(null);

    const audio = useRef();
    const eCdImage = useRef();
    const cd = useRef();
    const eListSongs = useRef();
    const eMP = useRef();
    const eDashboard = useRef();

    useEffect(() => {
        const cdWidth = cd.current.offsetWidth;
        eListSongs.current.onscroll = function () {
            const scrollTop = eListSongs.current.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.current.style.width = newCdWidth > 0
                ? newCdWidth + "px"
                : "0";
            cd.current.style.opacity = newCdWidth / cdWidth;
            eListSongs.current.style.height = (eMP.current.offsetHeight - eDashboard.current.offsetHeight - 45) + "px";
        }

    }, []);

    function handleTogglePlayClick() {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audio.current.pause();
            eCdImageRotate.pause();
        } else {
            audio.current.play();
            eCdImageRotate.play();
        }
    }

    function handleNextSongClick() {
        let nextIndex = listSongs.findIndex(x => x.name === currentSong.name) + 1;

        if (nextIndex >= listSongs.length) {
            nextIndex = 0;
        }

        const nextSong = listSongs[nextIndex];
        setCurrentSong(nextSong);
        setIsPlaying(true);
    }

    function handlePrevSongClick() {

        let prevIndex = listSongs.findIndex(x => x.name === currentSong.name) - 1;

        if (prevIndex < 0) {
            prevIndex = listSongs.length - 1;
        }

        const prevSong = listSongs[prevIndex];
        setCurrentSong(prevSong);
        setIsPlaying(true);
    }

    function randomSong() {
        let newIndex;
        const currentIndex = listSongs.findIndex(x => x.name === currentSong.name);
        do {
            newIndex = Math.floor(Math.random() * listSongs.length);
        } while (newIndex === currentIndex);
        setCurrentSong(listSongs[newIndex]);
        handleNextSongClick();
    }

    function handleSongClick(item) {
        const newIndex = listSongs.findIndex(x => x.name === item.name);
        setCurrentSong(listSongs[newIndex]);
        setIsPlaying(true);
    }

    //xu ly audio percentage
    const eProgress = useRef();
    useEffect(() => {
        audio.current.ontimeupdate = () => {
            if (audio.current.duration) {
                var progressPercent = Math.floor(audio.current.currentTime / audio.current.duration * 100);
                eProgress.current.value = progressPercent;
                eProgress.current.nextElementSibling.style.width = progressPercent + "%";
            }
        }
    }, [])

    useEffect(() => {
        if (isPlaying) {

            audio.current.play();
            eCdImageRotate.play();
        }
    }, [isPlaying, currentSong, eCdImageRotate])

    //xử lý khi tua
    useEffect(() => {
        eProgress.current.oninput = function (e) {
            const seekTime = ((audio.current.duration * e.target.value) / 100);
            audio.current.currentTime = seekTime;
        }
    }, [])

    //xử lý cd quay
    useEffect(() => {
        const tmpECdImageRotate = eCdImage.current.animate([{
            transform: "rotate(360deg)"
        }], {
            duration: 6000,
            iterations: Infinity
        })

        tmpECdImageRotate.pause();
        setECdImageRotate(tmpECdImageRotate)
    }, [])

    //xử lý khi end tự động chuyển bài
    useEffect(() => {
        audio.current.onended = function () {
            isRepeat
                ? audio.current.play()
                : isRandom
                    ? randomSong()
                    : handleNextSongClick();
        }
    })
    //voice.isListenMusic
    return (
        <div className={voice.isListenMusic ? "" : "hide"}>
            <div className={isPlaying
                ? "music-player music-player--play"
                : "music-player"}
                ref={eMP}
            >
                <div className="music-player__dashboard"
                    ref={eDashboard}
                >
                    <div className="music-player__header">
                        <div className="down-btn">
                            <i className="fas fa-chevron-down" />
                        </div>
                        <div className="text">
                            <p>Now playing:</p>
                            <h3>{currentSong.name}</h3>
                        </div>
                        <div className="plus-btn">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
                    <div className="music-player__song"
                        ref={cd}
                    >
                        <div
                            ref={eCdImage}
                            className="song__thumb"
                            style={{
                                backgroundImage: `url('${currentSong.image}')`,
                            }}
                        >
                        </div>
                    </div>
                    <div className="music-player__controls">
                        <div className={isRepeat
                            ? "control-btn control-btn--active repeat-btn"
                            : "control-btn repeat-btn"}
                            onClick={() => setIsRepeat(!isRepeat)}
                        >
                            <i className="fas fa-redo-alt" />
                        </div>
                        <div className="control-btn prev-btn"
                            onClick={() => handlePrevSongClick()}
                        >
                            <i className="fas fa-step-backward" />
                        </div>
                        <div
                            className="control-btn toggle-play-btn"
                            onClick={() => handleTogglePlayClick()}
                        >
                            <div className="play-btn">
                                <i className="fas fa-play" />
                            </div>
                            <div className="pause-btn">
                                <i className="fas fa-pause" />
                            </div>
                        </div>
                        <div className="control-btn next-btn"
                            onClick={() => handleNextSongClick()}
                        >
                            <i className="fas fa-step-forward" />
                        </div>
                        <div className={isRandom
                            ? "control-btn control-btn--active random-btn"
                            : "control-btn random-btn"}
                            onClick={() => setIsRandom(!isRandom)}
                        >
                            <i className="fas fa-random" />
                        </div>
                    </div>
                    <div className="progress">
                        <input
                            ref={eProgress}
                            id="progress"
                            type="range"
                            min={0}
                            max={100}
                            defaultValue={0}
                            step={1}
                        />
                        <span />
                    </div>
                </div>
                <audio
                    ref={audio}
                    id="mucsic-player__audio"
                    src={currentSong.audio}
                />
                {/* <div class="song song--play"> */}
                <div className="music-player__list-songs"
                    ref={eListSongs}
                >
                    {
                        listSongs.map(item => (
                            <div class="song"
                                onClick={() => handleSongClick(item)}
                            >
                                <img src={item.image} alt="" />
                                <div class="song__text">
                                    <h4>{item.name}</h4>
                                    <p>{item.singer}</p>
                                </div>
                                <div class="option-btn">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div >
        </div>
    );
}

export default MusicPlayer;