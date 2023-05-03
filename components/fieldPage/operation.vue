<template>
    <section class="section">
        <h2 class="title">эксплуатация и обслуживание</h2>
        <div class="card__text_rigth">
            <p class="text__title">В процессе эксплуатации исправной системы подогрева, как правило не возникает проблем, но
                бывают и нештатные ситуации. Практически все случаи неисправностей наших систем возникали из-за
                человеческого фактора. </p>
            <p class="text__title text__title_italic">Поэтому при непонятной ситуации лучше позвонить в техническую
                поддержку и
                проконсультироваться. Обычно для решения проблемы достаточно консультации. Но чтобы избежать поломок,
                периодически рекомендуется проводить обследование системы.</p>
        </div>
        <div class="wrapper">
            <div class="card__text">
                <p class="card__text-title">Ежегодно необходимо проводить ревизию системы:</p>
                <ul class="text-list">
                    <li class="text-li"> Испытать систему на герметичность</li>
                    <li class="text-li"> Проверить работоспособность КИП</li>
                    <li class="text-li"> Установить рекомендуемый уровень теплоносителя в подпиточном баке (в течении года
                        утечки теплоносителя в стандартном поле могут составляет до 60-80 литров в результате инфильтрации и
                        работ по обслуживанию)</li>
                    <li class="text-li"> Проверить работоспособность обратных клапанов, предохранительного клапана,
                        регулировочного клапана и воздухоотводчиков (воздухоотводчики со временем могут залипать, что
                        приведет к утечкам теплоносителя).</li>
                </ul>
            </div>
            <div class="card__text">
                <p class="text">Каждые 5 -10 лет или чаще (в зависимости от качества сетевой воды) выполнять промывку
                    теплообменника.
                    Каждые 10 лет рекомендуется менять теплоноситель
                    Каждые 25 лет или при выходе из строя производить замену мембранных баков</p>
                <p class="text">
                    При замене покрытия или ремонте основания футбольного поля, при ремонте водосборных лотков или
                    бордюрного камня по периметру футбольного поля или ремонте и обслуживании смежных коммуникаций
                    необходимо несколько раз в день следить за давлением. При резком падении давления необходимо найти и
                    устранить повреждение.</p>

            </div>
        </div>
    </section>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped lang="scss">
.section {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
}

.title {
    font-family: 'Prosto One', cursive;
    max-width: 525px;
    margin: 0 auto 60px 0;
    font-size: 32px;
    line-height: 39px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
}

.subtitle {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: $whitetext;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 auto 0 0;
    max-width: 540px;
}

.wrapper {
    display: flex;
    gap: 60px;
    width: 100%;
    margin: 60px auto 0 auto;
}

.card__text {
    display: flex;
    flex-direction: column;
    max-width: 540px;
}

.card__text_rigth {
    margin: 0px auto 0 35%;
    max-width: 540px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.card__text-title {
    margin: 0 auto 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
    text-align: start;

}

.text-list {
    display: flex;
    flex-direction: column;
    margin: 15px auto 0 0;
    list-style-type: decimal;
    list-style-position: inside;
    text-indent: 0px;
    text-align: start;
    padding: 0;
}

.text-li {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;

}

.text {
    margin: 0 auto 15px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: $whitetext;
    font-weight: 400;
}

.text__title {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: $whitetext;
    font-weight: 400;

    &_italic {
        font-style: italic;
        opacity: 0.8;
        font-weight: 300;
    }
}
</style>