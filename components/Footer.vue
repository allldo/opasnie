<script setup>
const scrollTo = (index) => {
    const targetElement = document.getElementById('main');
    const targetElement2 = document.getElementById('about');
    const targetElement3 = document.getElementById('services');
    const targetElement3mobile = document.getElementById('services2');
    const targetElement4 = document.getElementById('reviews');
    if(index===1){
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    }
    if(index===2){
        if (targetElement2) {
            targetElement2.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }
    if(index===3){
        if (targetElement3) {
            targetElement3.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
        if (targetElement3mobile) {
            targetElement3mobile.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    }
    if(index===4){
        if (targetElement4) {
            targetElement4.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }
};

</script>
<template>
    <section>
        <div>
            <img loading="lazy" src="/logo.webp" alt="logo">
            <p>Сайт сделан веб-студией</p>
            <a class="bold" href="https://digital-solution.kz/">Digital Solution.kz</a>
        </div>
        <div>
            <div>
                <div>
                    <p style="cursor: pointer;" class="a" @click="scrollTo(1)">Главная</p>
                    <p style="cursor: pointer;" class="a" @click="scrollTo(2)">О Нас</p>
                    <p style="cursor: pointer;" class="a" @click="scrollTo(3)">Услуги</p>
                    <p style="cursor: pointer;" class="a" @click="scrollTo(4)">Отзывы</p>
                </div>
                <div>
                    <p class="bold">Контакты:</p>
                    <p>​Микрорайон Казахфильм, 19Б​1 этаж</p>
                    <p>+7 (707) 849 04 45</p>
                    <p>+7 (706) 847 82 27</p>
                </div>
            </div>
            <p>© 2025 ОпасныеСвязи. Все права защищены</p>
        </div>
    </section>
</template>
<style scoped>
img{
    width: 278px;
    height: 49px;
    margin-bottom: 8px;
}
a{
    font-size: 16px;
    font-weight: 500;
    line-height: 19.5px;
}
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    text-align: left;
}
p.a:hover{
    font-weight: 700;
}
section{
    background: #2A3848;
    display: flex;
    height: 347px;
    padding-top: 75px;
}
section>div:first-child{
    margin-right: 365px;
}
section>div>div{
    margin-left: 50px;
    margin-bottom: 53px;
    display: flex;
}

section>div>div>div{
    display: flex;
    min-width: 70px;
    flex-direction: column;
    margin-right: 180px;
}

section>div>div>div>a{
    margin-bottom: 21px;
}
section>div>div>div>p{
    margin-bottom: 21px;
}
.bold{
    font-weight: 700;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    img{
        width: 209px;
        height: 37px;
        margin-bottom: 6px;
    }
    a{
        font-size: 12px;
        line-height: 15px;
    }
    p{
        font-size: 11px;
        line-height: 13px;
    }
    section{
        height: 260px;
        padding-top: 56px;
    }
    section>div:first-child{
        margin-right: 274px;
    }
    section>div>div{
        margin-left: 38px;
        margin-bottom: 39px;
    }

    section>div>div>div{
        margin-right: 135px;
    }

    section>div>div>div>a{
        margin-bottom: 16px;
    }
    section>div>div>div>p{
        margin-bottom: 16px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
    section>div>p:last-child{
        margin-left: -130px;
    }
    a{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.63px;
    }
    p{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.63px;
    }
    section>div>div>div>a{
        margin-bottom: 14px;
    }
    section>div>div>div>p{
        margin-bottom: 14px;
    }
    section>div>div{
        margin-left: 0;
        margin-bottom: 0;
        justify-content: space-between;
        margin-bottom: 29px;
    }
    section>div>div>div{
        max-width: 168px;
        margin-right: 50px;
    }
    section{
        padding-top: 27px;
        height: 218px;
    }
    section>div:first-child{
        margin-right: 65px;
    }
}
@media  (max-width: 649px) {
    a{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.63px;
    }
    p{
        font-size: 12px;
        font-weight: 500;
        line-height: 14.63px;
    }
    section>div>div{
        margin-left: 0;
        margin-bottom: 0;
        justify-content: space-between;
        margin-bottom: 29px;
    }
    section>div>div>div{
        max-width: 166px;
        margin-right: 0;
    }
    section>div>div>div>a{
        margin-bottom: 14px;
    }
    section>div>div>div>p{
        margin-bottom: 14px;
    }
    img{
        width: 175px;
        height: 31px;
        margin-bottom: 17px;
    }
    section{
        flex-direction: column;
        padding-top: 24px;
        height: 316px;
    }
    section>div:first-child{
        margin-right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 17px;
    }
    section>div:first-child>p{
        text-align: center;
    }
}
</style>