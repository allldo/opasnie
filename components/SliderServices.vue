<script setup>
import Service from './Service.vue'
import ArrowButton from './ArrowButton.vue'
import { ref, onMounted, nextTick, onUnmounted } from 'vue';

const slider = ref(true)
const top_slaider  = ref('')
const top_slaider1  = ref('')
const moveValue0 = ref(0);
const move0 = ref('0px');
const moveValue = ref(0);
const move = ref('0px');
const moveValue1 = ref(0);
const move1 = ref('0px');
const buttonOn = ref(false);
const LbuttonOn = ref(false);
const RbuttonOn = ref(true);
const LbuttonOn2 = ref(false);
const RbuttonOn2 = ref(true);
const SliderOn = () => {
    slider.value = true;
    buttonOn.value = false;
    SliderRight(0);
}
const SliderOff = () => {
    slider.value = false;
    buttonOn.value = true;
    SliderLeft(0);
}
const SliderRight = (slider) => {
    if(slider==0){
        if(moveValue0.value<0){
            moveValue0.value += 107;
        }
        buttonOn.value = false;
        move0.value = moveValue0.value + '%';
    }
    if(slider==1){
        RbuttonOn.value = true;
        if(moveValue.value<0){
            moveValue.value += 100;
        }

        if(moveValue.value>=0){
            LbuttonOn.value = false;
        }else{
            LbuttonOn.value = true;
        }
        move.value = moveValue.value + '%';
    }
    if(slider==2){
        RbuttonOn2.value = true;
        if(moveValue1.value<0){
            moveValue1.value += 100;
        }
        if(moveValue1.value>=0){
            LbuttonOn2.value = false;
        }else{
            LbuttonOn2.value = true;
        }
        buttonOn.value = false;
        move1.value = moveValue1.value + '%';
    }
}
const SliderLeft = (slider) => {
    if(slider==0){
        if(moveValue0.value>-107){
            moveValue0.value -= 107;
        }
        buttonOn.value = true;
        move0.value = moveValue0.value + '%';
    }
    if(isMobile.value){
        if(slider==1){
            LbuttonOn.value = true;
            if(moveValue.value>-300){
                moveValue.value -= 100;
            }
            if(moveValue.value<=-300){
                RbuttonOn.value = false;
            }else{
                RbuttonOn.value = true;
            }
            move.value = moveValue.value + '%';
        }
        if(slider==2){
            LbuttonOn2.value = true;
            if(moveValue1.value>-300){
                moveValue1.value -= 100;
            }
            if(moveValue1.value<=-300){
                RbuttonOn2.value = false;
            }else{
                RbuttonOn2.value = true;
            }
            move1.value = moveValue1.value + '%';
        }
    }else{
        if(slider==1){
            LbuttonOn.value = true;
            if(moveValue.value>-100){
                moveValue.value -= 100;
            }
            if(moveValue.value<=-100){
                RbuttonOn.value = false;
            }else{
                RbuttonOn.value = true;
            }
            buttonOn.value = true;
            move.value = moveValue.value + '%';
        }
        if(slider==2){
            LbuttonOn2.value = true;
            if(moveValue1.value>-100){
                moveValue1.value -= 100;
            }
            if(moveValue1.value<=-100){
                RbuttonOn2.value = false;
            }else{
                RbuttonOn2.value = true;
            }
            buttonOn.value = true;
            move1.value = moveValue1.value + '%';
        }
    }
}
const isMobile = ref(false);
const isTablet = ref(false);
const is4K = ref(false);
onMounted(async () => {
  await nextTick();
   top_slaider.value = document.getElementById('top_slaider');
   top_slaider1.value = document.getElementById('top_slaider1');
   isMobile.value = window.matchMedia('(max-width: 649px)').matches;
   isTablet.value = window.matchMedia('(min-width: 650px) and (max-width: 1199px)').matches;
   is4K.value = window.matchMedia('(min-width: 1950px)').matches;
});
const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 649px)').matches;
    isTablet.value = window.matchMedia('(min-width: 650px) and (max-width: 1199px)').matches;
    is4K.value = window.matchMedia('(min-width: 1950px)').matches;
};
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
const textArray1 = ref([{'text':'Выявление супружеской неверности.'},{'text':'Поиск должников и мошенников.'},{'text':'Анализ поведения несовершеннолетних и членов семьи.'},{'text':'Выявление брачных аферистов и мошенников.'},{'text':'Установление/Определение условий проживания ребенка.'},{'text':'Наблюдение и проверка информации.'}]);
const textArray2 = ref([{'text':'Поиск пропавших без вести.'},{'text':'Розыск пропавших родственников.'},{'text':'Сотрудничество с волонтерскими объединениями.'}]);
const textArray3 = ref([{'text':'Адрес регистрации и номера телефонов.'},{'text':'Фактическое место жительства.'},{'text':'Место работы, образ жизни и контакты.'},{'text':'Состав семьи.'},{'text':'Детали биографии.'},{'text':'Наличие судимости и административных штрафов.'}]);
const textArray4 = ref([{'text':'Сбор сведений по гражданским и уголовным делам.'},{'text':'Консультации по вопросам личной безопасности.'},{'text':'Организация случайных встреч.'}]);
const textArray5 = ref([{'text':'Выявление неблагонадежных сотрудников.'},{'text':'Обнаружение скрытого наблюдения.'},{'text':'Проведение наблюдений и проверка данных.'}]);
const textArray6 = ref([{'text':'О физических и юридических лицах.'},{'text':'Об объектах и их характеристиках.'},{'text':'О деловых партнерах и их деятельности.'},{'text':'О конкурентах и их бизнесе.'}]);
const textArray7 = ref([{'text':'Информация с предыдущих мест работы кандидатов.'},{'text':'Оценка лояльности сотрудников.'},{'text':'Выявление источника утечек информации.'},{'text':'Проверка на связи с конкурентами.'},{'text':'Мониторинг выполнения обязанностей и соблюдения инструкций сотрудниками.'}]);
const textArray8 = ref([{'text':'Анализ рыночной ситуации.'},{'text':'Сбор данных из публичных источников.'},{'text':'Подготовка информации для деловых переговоров.'}]);
</script>
<template>
    <section id="services"  v-if="!isMobile && !isTablet">
        <h2>Наши <u>Услуги</u></h2>
        <div id="slider_top">
            <p style="cursor: pointer;" @click="SliderOn" :class="{active:slider}">ДЛЯ ФИЗИЧЕСКИХ ЛИЦ</p>
            <p class="active">/</p>
            <p style="cursor: pointer;" @click="SliderOff" :class="{active:!slider}">ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ</p>
        </div>
        <div id="slider" :class="{is4K:is4K}">
            <div :style="{ left: move0 }">
                <Service id="id1" altImg="Розыск людей в Алматы" title="Помощь в решении личных проблем" :textArray="textArray1" imgUrl="/service1.webp"/>
                <Service altImg="Помощь с проблемами" title="Розыск людей" :textArray="textArray2" imgUrl="/service2.webp"/>
                <Service altImg="Сбор информации о человеке" title="Сбор информации" :textArray="textArray3" imgUrl="/service3.webp"/>
                <Service id="id4" altImg="Организация случайных встреч" title="Другие услуги" :textArray="textArray4" imgUrl="/service4.webp"/>
                <Service altImg="Помощь в обеспечении безопасности" title="Консультации и помощь в организации безопасности" :textArray="textArray5" imgUrl="/service5.webp"/>
                <Service altImg="Сбор и анализ информации о конкурентах" title="Сбор и анализ информации" :textArray="textArray6" imgUrl="/service8.webp"/>
                <Service altImg="Проверка выполнения обязательств партнерамии и персоналом" title="Контроль выполнения обязательств партнерами и проверка персонала" :textArray="textArray7" imgUrl="/service6.webp"/>
                <Service altImg="Бизнес разведка конкурентов" title="Бизнес-разведка" :textArray="textArray8" imgUrl="/service7.webp"/>
            </div>
        </div>
        <div id="slider_bottom">
            <div>
                <span :class="{span_active:slider}"></span>
                <span :class="{span_active:!slider}"></span>
            </div>
            <div>
                <ArrowButton style="transform: rotate(180deg);" :on="buttonOn" @click="SliderOn"/>
                <ArrowButton :on="!buttonOn" @click="SliderOff"/>
            </div>
        </div>
    </section>

    <section id="services2"  v-if="isMobile || isTablet">
        <h2>Наши <u>Услуги</u></h2>
        <p>ДЛЯ ФИЗИЧЕСКИХ ЛИЦ</p>
        <div id="slider3">
            <div :style="{ left: move }" id="top_slaider">
                <Service id="id1" altImg="Розыск людей в Алматы" title="Помощь в решении личных проблем" :textArray="textArray1" imgUrl="/service1.webp"/>
                <Service altImg="Помощ с проблемами" title="Розыск людей" :textArray="textArray2" imgUrl="/service2.webp"/>
                <Service altImg="Сбор информации о человеке" title="Сбор информации" :textArray="textArray3" imgUrl="/service3.webp"/>
                <Service id="id4" altImg="Организация случайных встреч" title="Другие услуги" :textArray="textArray4" imgUrl="/service4.webp"/>
            </div>
        </div>
        <div id="slider_bottom">
            <div>
                <ArrowButton style="transform: rotate(180deg);" :on="LbuttonOn" @click="SliderRight(1)"/>
                <ArrowButton :on="RbuttonOn" @click="SliderLeft(1)"/>
            </div>
        </div>
        <p>ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ</p>
        <div id="slider4">
            <div :style="{ left: move1 }" id="top_slaider1">
                <Service altImg="Помощь в обеспечении безопасности" title="Консультации и помощь в организации безопасности" :textArray="textArray5" imgUrl="/service5.webp"/>
                <Service altImg="Сбор и анализ информации о конкурентах" title="Сбор и анализ информации" :textArray="textArray6" imgUrl="/service8.webp"/>
                <Service altImg="Проверка выполнения обязательств партнерамии и персоналом" title="Контроль выполнения обязательств партнерами и проверка персонала" :textArray="textArray7" imgUrl="/service6.webp"/>
                <Service altImg="Бизнес разведка конкурентов" title="Бизнес-разведка" :textArray="textArray8" imgUrl="/service7.webp"/>
            </div>
        </div>
        <div id="slider_bottom">
            <div>
                <ArrowButton style="transform: rotate(180deg);" :on="LbuttonOn2" @click="SliderRight(2)"/>
                <ArrowButton :on="RbuttonOn2" @click="SliderLeft(2)"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
.is4K{
    width: 1675px !important;
}
#id1{
    margin-left: 10px;
}
h2{
    font-size: 40px;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #2A3848;
    margin-bottom: 31px;
    margin-top: 74px;
}
.active{
    font-weight: 700;
    color: #2A3848;
}
div>p{
    font-size: 25px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #BABABA;
}
div{
    display: flex;
}
span{
    background: #DDDDDD;
    width: 66px;
    height: 4px;
    margin-right: 13px;
    transition: 0.75s;
}
.span_active{
    background: #FF0606;
}
button{
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    background: none;
    margin-left: 14px;
}
#slider_top{
 justify-content: center;
}
#slider_top>p{
    margin-right: 22px;
    transition: 0.75s;
}
#slider{
    padding: 50px 50px 100px;
    width: 100%;
    justify-content: space-between;
}
#slider2{
    margin: 100px 0;
    justify-content: space-between;
}
#slider_bottom{
    justify-content: space-between;
    width: 100%;
    margin: 0 70px;
}
#services>div>div{
    position: relative;
    transition: 0.75s;
}
#services>div>div>div{
    margin-right: 35px;
}
#services2>div>div{
    position: relative;
    transition: 1s;
}
#services2>div>div>div{
    margin-right: 50px;
}
#services2>p{
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 18px;
    color: #2A3848;
}
#id4{
    margin-right: 120px !important;
}
#services{
    padding: 0 100px;
}section>div{
    overflow: hidden;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #id1{
        margin-left: 8px;
    }
    h2{
        font-size: 30px;
        line-height: 30px;
        margin-bottom: 13px;
        margin-top: 56px;
    }
    div>p{
        font-size: 19px;
        line-height: 19px;
    }
    span{
        width: 50px;
        height: 3px;
        margin-right: 10px;
    }
    button{
        border-radius: 4px;
        margin-left: 11px;
    }
    #slider_top>p{
        margin-right: 17px;
    }
    #slider{
        padding: 75px 38px;
        max-width: 1256px;
    }
    #slider2{
        margin: 75px 0;
    }
    #slider_bottom{
        margin: 0 53px;
    }
    #services>div>div>div{
        margin-right: 26px;
    }
    #services2>div>div>div{
        margin-right: 38px;
    }
    #services2>p{
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 14px;
    }
    #id4{
        margin-right: 90px !important;
    }
    #services{
        padding: 0 75px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
    section{
        display: block;
    }
    #services2>p{
        font-size: 22px;
        line-height: 22px;
    }
    #services2>div>div>div{
        margin-right: 15px;
    }
    #slider_bottom{
        position: relative;
        margin:  0;
        z-index: 100;
        overflow:visible;
        width: 680px;
    }
    #slider_bottom>div{
        position: absolute;
        left: 0px;
        top: -320px;
        z-index: 100;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    section>div{
        overflow: hidden;
        width: 560px;
        margin: 0;
    }
    h2{
        font-size: 20px;
        font-weight: 800;
        line-height: 20px;
        margin-bottom: 17px;
        margin-top: 30px;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        margin-left: 0;
    }
    section>p{
        font-size: 18px;
        font-weight: 300;
        line-height: 18px;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
@media  (max-width: 649px) {
    section{
        display: block;
    }
    #services2>div>div>div{
        margin-right: 0;
    }
    #id1{
        margin-left: 0;
    }
    #slider_bottom{
        position: relative;
        margin:  0;
        z-index: 100;
        overflow:visible;
        width: 340px;
    }
    #slider_bottom>div{
        position: absolute;
        left: 0px;
        top: -160px;
        z-index: 100;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    section>div{
        overflow: hidden;
        width: 265px;
        margin: 0;
    }
    h2{
        font-size: 20px;
        font-weight: 800;
        line-height: 20px;
        margin-bottom: 17px;
        margin-top: 30px;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        margin-left: 0;
    }
    section>p{
        font-size: 18px;
        font-weight: 300;
        line-height: 18px;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>