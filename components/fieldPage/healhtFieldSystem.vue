
<template>
    <section class="section">
        <h2 class="title">Что такое система подогрева полей</h2>
        <p class="subtitle">Комплексное технологическое решение, предназначенное для использования спортивного сооружения в
            полной мере, в период межсезонья.</p>
        <p class="text">Полностью монолитная система не подверженная коррозии и гниению – все элементы имеют одинаковое
            температурное удлинение, отсутствие резьбовых и компрессионных соединений. Греющие петли выпускаются под
            конкретную длину поля.</p>
        <p class="text">Разработанный теплоноситель имеет только функциональные в рабочих режимах добавки и обладает
            люминесценцией, что облегчает поиск утечек. Обладает защитными свойствами для металлических поверхностей
            оборудования ИТП, не агрессивен к уплотнителям. Срок службы не менее 10 лет.</p>
        <div class="box">
            <img class="image" src="../../assets/images/hotFieldsPage/systemHeating.png" alt="укладка подогрева поля">
            <div class="text__box">
                <p class="text">Подобранное оборудование ИТП имеет идеальную совместимость, что повышает эффективность и
                    надежность по сравнению с экспериментальными проектами и решениями.</p>
                <p class="text">В комплексе система имеет оптимально простое исполнение и проверенные решения, что делает
                    её удобной и понятной в эксплуатации и обслуживании даже для неквалифицированного персонала.</p>
                <p class="text">Универсальность системы позволяет с помощью изменения настроек автоматики адаптировать её к
                    искусственным покрытиям с полузасыпанным ворсом, использованию резинового гранулята или с использованием
                    геофилов. Отсутствует необходимость во вмешательство в оборудование ИТП или основание футбольного поля
                    при замене типа покрытия или длины ворса</p>
            </div>
        </div>
        <div id="heathFieldSystem2"></div>
    </section>
</template>
    
<style scoped lang ="scss">
.section {
    display: flex;
    flex-direction: column;
    margin: 120px auto 0 auto;
}

.title {
    font-family: 'Prosto One', cursive;
    line-height: 39px;
    font-size: 32px;
    font-weight: 400;
    margin: 0 auto 0 0;
    color: $whitetext;
    max-width: 410px;
    text-transform: uppercase;
}

.subtitle {
    font-family: 'Roboto', sans-serif;
    line-height: 19px;
    font-size: 16px;
    font-weight: 400;
    margin: 60px auto 15px 0;
    color: $whitetext;
    max-width: 600px;
    text-transform: uppercase;
}

.text {
    font-family: 'Roboto', sans-serif;
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
    margin: 15px auto 15px 0;
    color: $whitetext;
    max-width: 600px;
}

.box {
    display: flex;
    width: 100%;
    gap: 60px;
    margin: 45px auto 0 auto;
}

.image {
    width: 600px;
    height: 310px;
    border-radius: 12px;
}

.text__box {
    display: flex;
    margin: 15px auto 0 auto;
    max-width: 540px;
    flex-direction: column;
    text-align: start;
}
</style>
    
