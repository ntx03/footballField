<script setup >

const play = (e) => {
    const videoPlayer = document.querySelector('#video');
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }

}
</script>

<template>
    <section class="section">
        <div class="section__container">

            <div class="title__box">
                <h2 class="title">как мы работаем</h2>
                <div class="arrow__container">
                    <button class="button__arrow"><img id="arrow_back" class="arrow__icon"
                            src="../assets/images/hotFieldsPage/Arrow_back-pale.svg" alt="бледно желтая стрелка назад">
                    </button>
                    <button class="button__arrow"><img id="arrow_forward" class="arrow__icon"
                            src="../assets/images/hotFieldsPage/Arrow_forward.svg" alt="желтая стрелка вперед">
                    </button>
                </div>
            </div>

            <div class="container">
                <div class="video-player">
                    <video id="video" class="video" poster="../assets/images/aboutPage/headerImage.png">
                        <source
                            src="../assets/video/fon-futbol-futaj-dlya-video-montaja-myac-i-futbolnoe-pole-besplatnie-f_(VIDEOMIN.NET).mp4"
                            type="video/mp4">
                        Извините, но видео не поддерживается вашим браузером
                    </video>
                    <div class="player-controls">
                        <button class="play-buton" title="play" @click="play"><img class="icon-play-button"
                                src="../assets/images/hotFieldsPage/button_play_video.svg" /></button>
                    </div>
                </div>
                <p class="video__description">Первая в России система для стандартного футбольного поля размерами 110 х72
                    метра, спроектированная под тепловую нагрузку1 Гкал (поле №4 с искусственным газоном на стадионе им Э.А.
                    Стрельцова (Торпедо) г. Москва).</p>
            </div>
        </div>
    </section>
    <div id="errorDisidning"></div>
</template>

<style scoped lang="scss">
.section {
    background-image: url(../assets/images/hotFieldsPage/bacroundNowMeWork.png);
    width: 1600px;
    margin: 120px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.section__container {
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin: 60px auto 60px auto;
}

.title__box {
    max-width: 790px;
    display: flex;
    justify-content: space-between;
}

.arrow__container {
    display: flex;
    height: min-content;
    align-self: flex-end;
    gap: 30px;
}

.arrow__icon {
    width: 40px;
}

.button__arrow {
    border: none;
    background-color: inherit;

    &:hover {
        cursor: pointer;
    }
}

.title {
    margin: 0;
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 39px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto 0 0;

}

.container {
    width: 100%;
    margin: 60px 0 0px 0;
    display: flex;
    gap: 60px;
}

.video-player {
    max-width: 790px;
    max-height: 400px;
    border-radius: 12px;
    position: relative;

    //  overflow: hidden;
    &:hover .player-controls {
        opacity: 1;
    }
}

.video {
    width: 790px;
    height: 400px;
    border-radius: 12px;
    object-position: center;
    object-fit: cover;
}

.video__text {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 400;
}

.player-controls {
    position: absolute;
    top: 45%;
    left: 45%;
    opacity: 0;
    transition: 0.3s;

}

.play-buton {
    background-color: inherit;
    border: none;
    transition: 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

}

.icon-play-button {

    &:hover {
        opacity: 1;
        width: 60px;
        height: 60px;
    }

}

.video__description {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $greytext;
    font-weight: 400;
    max-width: 350px;
    margin: 60px auto 0 0;
    text-align: start;
}
</style>