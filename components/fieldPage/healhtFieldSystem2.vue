
<template>
    <section class="section">
        <h2 class="title">какие бывают системы подогрева полей</h2>
        <div class="subtitle__box">
            <p class="subtitle">Для увеличения срока эксплуатации футбольных полей используются системы подогрева газонов.
            </p>
            <p class="text">Система позволяет поддерживать игровые характеристики искусственного газона на протяжении всего
                зимнего периода, а для натурального — продлить срок его эксплуатации в осеннее время, сократить время
                подготовки в весеннее время и ускорить восстановление после игр.</p>
        </div>
        <img class="image__main" src="../../assets/images/hotFieldsPage/systemHealting2.png" alt="футбольное поле">
        <div class="box">
            <p class="text__title">Существуют жидкостные и электрические системы подогрева.</p>
            <div class="text__container">
                <p class="text ">Электрические системы подогрева более эффективные, имеют гибкое управление, но
                    из-за высокой себестоимости не получили широкого распространения. К тому же современные нагревательные
                    кабели, используемые при строительстве, производятся за пределами нашей страны и возникают сложности с
                    их доставкой, а порой это сейчас и невозможно.</p>
                <p class="text text__gap">Та же кабельная продукция, которая производится в России, имеет меньшую надежность
                    и эффективность. Основное преимущество электрической системы подогрева перед жидкостной – возможность
                    использования со всеми амортизирующими подложками, используемыми с искусственными газонами.</p>
                <p class="text text__gap">Жидкостные системы подогрева более распространены, имеют большое количество
                    вариантов исполнения. В качестве греющих туб используются различные модификации полипропиленовых и
                    полиэтиленовых труб.</p>
            </div>

        </div>
        <div class="box">
            <div class="text__box">
                <p class="text text__gap">Полиэтиленовые трубы широко используются, благодаря популяризации известными
                    брендами и неоспоримому качеству rautherm компании Rehau. При применении полиэтиленовых труб для
                    коллектора применяют трубы из ПНД, PPR или стальные. Для соединения греющих труб и коллектора
                    используются компрессионные фитинги, в большинстве случае изготавливаемые из металлов.</p>
                <p class="text text__gap">Благодаря надежности соединений коллектор полипропиленовой системы располагают в
                    теле футбольного поля и засыпают песком, а не за пределами в отдельном лотке, позволяющем осуществлять
                    ревизию и увеличивая сроки и стоимость строительства.</p>
                <p class="text text__gap">Из полипропиленовой продукции на мировом рынке широкой популярностью по праву
                    пользуются фусиоленовые трубы фирмы Aquatherm, которые хорошо себя проявили на многих спортивных
                    объектах и в России.</p>
            </div>
            <img class="image" src="../../assets/images/hotFieldsPage/systemHealting3.png" alt="укладка подогрева поля">
        </div>
    </section>
</template>
    
<style scoped lang ="scss">
.section {
    display: flex;
    flex-direction: column;
    margin: 120px auto 0 auto;
}

.subtitle__box {
    width: 100%;
    margin: 60px auto 0 auto;
    display: flex;
    justify-content: space-between;

    .subtitle {
        font-family: 'Roboto', sans-serif;
        line-height: 16px;
        font-size: 14px;
        font-weight: 400;
        color: $whitetext;
        max-width: 446px;
        text-align: start;
        text-transform: uppercase;
        margin: 0;
    }
}

.text {
    font-family: 'Roboto', sans-serif;
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
    text-align: start;
    color: $whitetext;
    max-width: 600px;
    margin: 0;

    &__gap {
        margin: 15px auto 0 0;
    }


}

.text__title {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    text-align: start;
    color: $whitetext;
    max-width: 300px;

}

.title {
    font-family: 'Prosto One', cursive;
    line-height: 39px;
    font-size: 32px;
    font-weight: 400;
    margin: 0 auto 0 0;
    color: $whitetext;
    max-width: 525px;
    text-transform: uppercase;
}




.box {
    display: flex;
    width: 100%;
    gap: 60px;
    margin: 60px auto 0 auto;
}

.image {
    width: 600px;
    height: 310px;
    border-radius: 12px;

    &__main {
        width: 100%;
        border-radius: 12px;
        height: 360px;
        margin: 60px auto 0 auto;
    }
}

.text__container {
    display: flex;
    margin: 0 auto 0 50px;
    max-width: 540px;
    flex-direction: column;
    text-align: start;
    gap: 0;
}

.text__box {
    display: flex;
    margin: 0 auto 0 auto;
    max-width: 540px;
    flex-direction: column;
    text-align: start;
}
</style>
    
