import Tour from "reactour";

export default function UiMusicPlayer(props) {

    const {
        fetchComplete,
        isPlaying,
        eMP,
        eDashboard,
        currentSong,
        cd,
        eCdImage,
        isRepeat,
        setIsRepeat,
        handleNextSongClick,

        handlePrevSongClick,
        handleTogglePlayClick,
        handleSongClick,

        isRandom,
        setIsRandom,
        eProgress,
        audio,
        eListSongs,
        listSongs,
        steps,
        isOpenTour,
        closeTour,
        voice,
    } = props;

    return (
        <>
            {fetchComplete &&
                <div className={voice.isListenMusic ? "" : "hide"} >
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
                            src={`${process.env.REACT_APP_STATIC_URL}${currentSong.audioSlug}`}
                        // src={`${currentSong.audioSlug}`}
                        />
                        {/* <div class="song song--play"> */}
                        <div className="music-player__list-songs"
                            ref={eListSongs}
                        >
                            {
                                listSongs.map(item => (
                                    <div class="song"
                                        key={item._id}
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
            }
            <Tour
                steps={steps}
                isOpen={isOpenTour}
                onRequestClose={() => closeTour()}
            />
        </>
    );
}