import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import songApi from "../../api/songApi";

import UiMusicPlayer from "./ui-music-player";

export default function MusicPlayer() {

    const [fetchComplete, setFetchComplete] = useState(false);
    const [listSongs, setListSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        async function getDataFromApi() {
            try {
                const response = await songApi.getAll();
                if (response) {
                    console.log("response", response);
                    setListSongs(response);
                    setCurrentSong(response[0]);
                    setFetchComplete(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getDataFromApi();

    }, [fetchComplete])


    const steps = [
        {
            selector: '.music-player',
            content: () => (<h2>Wellcome to my error MusicPlayer :)</h2>),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.control-btn.repeat-btn',
            content: () => (
                <>
                    <b>Repeat song: </b>
                    <span>hold Z & say "repeat"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.control-btn.prev-btn',
            content: () => (
                <>
                    <b>Previous song: </b>
                    <span>hold Z & say "previous"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.control-btn.toggle-play-btn',
            content: () => (
                <>
                    <b>Play/pause song: </b>
                    <span>hold Z & say "play/pause"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.control-btn.next-btn',
            content: () => (
                <>
                    <b>Next song: </b>
                    <span>hold Z & say "next"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.control-btn.random-btn',
            content: () => (
                <>
                    <b>Random song: </b>
                    <span>hold Z & say "random"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
        {
            selector: '.music-player__list-songs',
            content: () => (
                <>
                    <b>Play percific song: </b>
                    <span>hold Z & say "choi bai + songName"</span>
                </>
            ),
            style: {
                color: '#000'
            }
        },
    ]

    const voice = useSelector((state) => state.voice);
    const [isOpenTour, setIsOpenTour] = useState(voice.isListenMusic);

    useEffect(() => {
        setIsOpenTour(voice.isListenMusic);
    }, [voice.isListenMusic])

    const closeTour = () => {
        setIsOpenTour(false);
    };

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
        if (fetchComplete) {
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
        }
    }, [fetchComplete]);

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
        if (fetchComplete) {
            audio.current.ontimeupdate = () => {
                if (audio.current.duration) {
                    var progressPercent = Math.floor(audio.current.currentTime / audio.current.duration * 100);
                    eProgress.current.value = progressPercent;
                    eProgress.current.nextElementSibling.style.width = progressPercent + "%";
                }
            }
        }
    }, [fetchComplete])

    useEffect(() => {
        if (isPlaying) {
            audio.current.play();
            eCdImageRotate.play();
        }
    }, [isPlaying, currentSong, eCdImageRotate])

    //xử lý khi tua
    useEffect(() => {
        if (fetchComplete) {
            eProgress.current.oninput = function (e) {
                const seekTime = ((audio.current.duration * e.target.value) / 100);
                audio.current.currentTime = seekTime;
            }
        }
    }, [fetchComplete])

    //xử lý cd quay
    useEffect(() => {
        if (fetchComplete) {
            const tmpECdImageRotate = eCdImage.current.animate([{
                transform: "rotate(360deg)"
            }], {
                duration: 6000,
                iterations: Infinity
            })

            tmpECdImageRotate.pause();
            setECdImageRotate(tmpECdImageRotate)
        }
    }, [fetchComplete])

    //xử lý khi end tự động chuyển bài
    useEffect(() => {
        if (fetchComplete) {
            audio.current.onended = function () {
                isRepeat
                    ? audio.current.play()
                    : isRandom
                        ? randomSong()
                        : handleNextSongClick();
            }
        }
    }, [fetchComplete])

    return (
        <UiMusicPlayer
            fetchComplete={fetchComplete}
            isPlaying={isPlaying}
            eMP={eMP}
            eDashboard={eDashboard}
            currentSong={currentSong}
            cd={cd}
            eCdImage={eCdImage}
            isRepeat={isRepeat}
            setIsRepeat={setIsRepeat}
            handleNextSongClick={handleNextSongClick}
            handlePrevSongClick={handlePrevSongClick}
            handleTogglePlayClick={handleTogglePlayClick}
            handleSongClick={handleSongClick}
            isRandom={isRandom}
            setIsRandom={setIsRandom}
            eProgress={eProgress}
            audio={audio}
            eListSongs={eListSongs}
            listSongs={listSongs}
            steps={steps}
            isOpenTour={isOpenTour}
            closeTour={closeTour}
            voice={voice}
        />
    );
}
