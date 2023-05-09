<template>
    <section class="section">
        <h2 class="title">монтаж и испытания</h2>
        <ul class="list">
            <li class="text">Для монтажа системы подогрева использовать только специально предназначенное для этого
                исправное оборудование.</li>
            <li class="text">Монтаж системы подогрева производится на подготовленный песчаный слой основания футбольного
                поля.Песчаный слой под размотку труб подогрева может быть разной толщины, в зависимости от способа его
                формирования.<br />
                · 20-40 мм, если трубы подогрева засыпаются сверху; <br />
                · 70-100 мм, если трубы укладываются в борозды, формируемые в песке.</li>
            <li class="text"> Коллектор монтируется в подготовленной траншее.</li>
            <li class="text"> Перед впайкой труб в коллектор, готовый коллектор и теплотрасса испытываются на прочность и
                герметичность воздухом с давлением около 5 атм.</li>
            <li class="text"> После окончания монтажных работ система испытывается на прочность давлением 4,5-5 атм
                воздухом.</li>
            <li class="text"> При больших перепадах температур днем и ночью или большой солнечной активности возможны
                большие перепады давления, поэтому в идеале после создания давления выждать несколько часов и зафиксировать
                давление. Если через 24 часа давление не изменилось, то систему можно считать герметичной.</li>
        </ul>

    </section>
</template>
    
<style lang="scss" scoped>
.section {
    width: 1200px;
    margin: 120px auto 0 auto;
    display: flex;
    flex-direction: column;
}

.title {
    font-family: 'Prosto One', cursive;
    font-size: 32px;
    line-height: 40px;
    color: $whitetext;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto 0 0;
    width: 100%;
    text-transform: uppercase;
}

.list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin: 60px 0 0 0;
    max-height: 220px;
    padding: 0;
    column-gap: 60px;
}

.text {
    margin: 0px 0 15px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 17px;
    color: $whitetext;
    font-weight: 500;
    max-width: 500px;
    list-style-position: inside;
    list-style-type: decimal;
    text-align: start;
}
</style>