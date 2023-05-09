<template>
    <section class="section">
        <h2 class="title">ошибки при проектировании</h2>
        <p class="subtitle">Частые ошибки проектировщиков при больших размерах футбольного поля – расположение коллектора по
            длинной стороне!</p>
        <div class="wrapper">
            <div class="card__text">
                <p class="card__text-title">При этом возникает множество минусов:</p>
                <ul class="text-list">
                    <li class="text-li">Скорость течения теплоносителя в греющих трубках в среднем 0,3-0,5 м/с, а в
                        коллекторе и теплосети 1,5-2 м/с. Поэтому увеличение длины греющей петли до 250 метров и более не
                        сильно повлияет на ее сопротивление, а увеличение длины коллектора существенно.</li>
                    <li class="text-li"> Сбалансированность системы хуже.</li>
                    <li class="text-li">Увеличит объем системы, а значит потребует более мощного насоса – затраты на
                        электроэнергию.</li>
                    <li class="text-li"> Удорожание системы из-за большего количества материалов и теплоносителя.</li>
                    <li class="text-li"> При длинном коллекторе примерно в 2 раза увеличивается количество стыков при
                        монтаже и соответственно вырастает вероятность брака в результате человеческого фактора.</li>
                </ul>
            </div>
            <div class="card__text" id="operation">
                <p class="text">· Отсутствие воздуха в системе.</p>
                <p class="text">
                    Для высокой эффективности необходимо во время пуско-наладочных работ удалить воздух из системы
                    подогрева. Для этого систему проектируют таким образов, что бы торцы подающего и обратного коллекторов
                    были выше теплосети футбольного поля и в них врезаются спускники воздуха. В ИТП в верхних точках
                    трубопроводов устанавливают воздухоотводчики.</p>
                <p class="text">· Автоматическое управление.</p>
                <p class="text">Система должна быть оборудована автоматизацией, предусматривающей аварийное отключение при
                    утечке теплоносителя в относительно небольших объемах (0,2-0,3% от объема системы).</p>
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
    margin: 20px auto 0 auto;
}

.card__text {
    display: flex;
    flex-direction: column;
    max-width: 540px;
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
</style>