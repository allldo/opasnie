<script setup>

</script>
<template>
    <section id="about">
        <h2>Почему <u>Мы</u>?</h2>
        <div>
            <div id="like">
                <img width="167px" height="121px" src="/like.webp" loading="lazy" alt="like">
                <p class="main_title">Гарантия</p>
                <p>Мы предоставляем детективные услуги с гарантией качества.</p>
            </div>
            <div id="security">
                <img width="192px" height="138px" src="/security.webp" loading="lazy" alt="security">
                <p class="main_title">Конфиденциальность</p>
                <p>Все наши услуги выполняются с полным соблюдением конфиденциальности.</p>
            </div>
            <div id="society">
                <img width="175px" height="126px" src="/society.webp" loading="lazy" alt="society">
                <p class="main_title">Наши связи</p>
                <p>Мы имеем обширные контакты, что ускоряет решение ваших вопросов.</p>
            </div>
        </div>
        <a class="button" href="https://wa.me/+77068478227" target="_blank">СВЯЗАТЬСЯ С НАМИ</a>
    </section>
</template>
<style scoped>
h2{
    font-size: 38px;
    font-weight: 800;
    line-height: 38px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #2F3B49;
}
.main_title{
    font-size: 31px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0.04em;
    color: #2F3B49;
    margin: 24px 0;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 92px;
    margin-bottom: 92px;
}
section>div{
    display: flex;
    justify-content: space-between;
    width: 1315px;
    margin: 65px 0 74px;
}
div>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
p{
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    color: #313131;
}
.button{
    font-size: 25px;
    font-weight: 700;
    line-height: 30.48px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 40px;
    background: #FF0606;
    width: 368px;
    height: 76px;
    transition: 0.75s;
}
.button:hover{
    background: #2A3848;
    color: #fff;
}
#like{
    max-width: 332px;
}
#like>img{
    width: 167px;
    height: 121px;
}
#security{
    max-width: 394px;
}
#security>img{
    width: 173px;
    height: 124px;
}
#society{
    max-width: 335px;
}
#society>img{
    width: 158px;
    height: 113px;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    h2{
        font-size: 30px;
        line-height: 30px;
    }
    .main_title{
        font-size: 23px;
        line-height: 23px;
        margin: 18px 0;
    }
    section{
        margin-top: 69px;
        margin-bottom: 69px;
    }
    section>div{
        width: 1061px;
        margin: 49px 0 56px;
    }
    p{
        font-size: 18px;
        line-height: 18px;
    }
    .button{
        font-size: 19px;
        line-height: 23px;
        border-radius: 30px;
        width: 276px;
        height: 57px;
    }
    #like{
        max-width: 249px;
    }
    #like>img{
        width: 139px;
        height: 101px;
    }
    #security{
        max-width: 296px;
    }
    #security>img{
        width: 144px;
        height: 104px;
    }
    #society{
        max-width: 251px;
    }
    #society>img{
        width: 131px;
        height: 95px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
    section{
        margin-top: 43px;
        margin-bottom: 43px;
    }
    .button{
        font-size: 17px;
        line-height: 20.72px;
        width: 236px;
        height: 41px;
    }
    h2{
        font-size: 25px;
        line-height: 25px;
    }
    #like>img{
        width: 60px;
        height: 43px;
    }
    #security>img{
        width: 60px;
        height: 43px;
    }
    #society>img{
        width: 60px;
        height: 43px;
    }
    section>div{
        width: 621px;
        margin: 43px 0;
    }
    .main_title{
        font-size: 16px;
        line-height: 16px;
        margin: 10px 0;
    }
    p{
        font-size: 12px;
        line-height: 12px;
    }
    #like{
        max-width: 168px;
    }
    #security{
        max-width: 210px;
    }
    #society{
        max-width: 173px;
    }
}
@media  (max-width: 649px) {
  
    img{
        margin-top: 13px;
    }
    #like{
        max-width: 202px;
    }
    #security{
        max-width: 223px;
    }
    #society{
        max-width: 196px;
    }
    #like>img{
        width: 60px;
        height: 43px;
    }
    #security>img{
        width: 60px;
        height: 43px;
    }
    #society>img{
        width: 60px;
        height: 43px;
    }
    h2{
        font-size: 20px;
        line-height: 20px;
    }
    .main_title{
        font-size: 18px;
        line-height: 18px;
        margin: 11px 0 8px;
    }
    p{
        font-size: 14px;
        line-height: 14px;
    }
    section{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    section>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 23px 0 22px;
    }
    .button{
        font-size: 13px;
        line-height: 15.85px;
        width: 178px;
        height: 35px;
    }
}
</style>