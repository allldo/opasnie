<script setup>

import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import Dropdown from './Dropdown.vue'
const name = ref('');
const width = ref('908');
const height = ref('608');
const imgsize = ref('34px');
const imgsize2 = ref('31px');
const isTablet = ref(false);
const message = ref('');
const service = ref('');

const sendMessage = () => {
    if (name.value==='' && service.value==='') {
        message.value = `Здравствуйте, интересуют ваши услуги`;
    } else if(name.value!=='' && service.value==='') {
        message.value = `Здравствуйте, меня зовут ${name.value}\nИнтересуют ваши услуги`;
    } else if(name.value==='' && service.value!=='') {
        message.value = `Здравствуйте, интересует ваша услуга: ${service.value}`;
    }else{
        message.value = `Здравствуйте, меня зовут ${name.value}\nИнтересует ваша услуга: ${service.value}`;
    }


    const url = `https://wa.me/+77068478227?text=${encodeURIComponent(message.value)}`;
    window.open(url, '_blank');
}
const handleResize = () => {
    isTablet.value = window.matchMedia('(max-width: 1199px)').matches;
};
onMounted(async () => {
  await nextTick();
  isTablet.value = window.matchMedia('(max-width: 1199px)').matches;
    if(isTablet.value){
        height.value='267';
        width.value='318';
        imgsize.value = '25px';
        imgsize2.value = '25px';
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const handleMenuOpen = (value) => {
    service.value = value;
};
</script>
<template>
    <section id="contacts">
        <div>
            <h2>Выберите <u>услугу</u></h2>
            <p>и мы ответим Вам в течение <u>10 минут</u></p>
            <input type="text" v-model="name" placeholder="Введите Ваше имя">
            <Dropdown :service="service"  @update:service="handleMenuOpen"/>
            <button @click="sendMessage">ОТПРАВИТЬ →</button>
            <div><img loading="lazy" :width="imgsize" :height="imgsize" src="/phone.webp" alt="phinenumber"> <p>+7 (707) 849 04 45</p></div>
            <div><img loading="lazy" :width="imgsize2" :height="imgsize2" src="/whatsapp.webp" alt="whatsapp"> <p>+7 (706) 847 82 27</p></div>
           
        </div>
        <iframe title="map" id="map"  loading="lazy" :width="width" :height="height" src="https://yandex.com/map-widget/v1/?um=constructor%3Ad3c421c44a97a8c13aef507ca9e9ef09e9a424643bcae61feed612728c91ac2c&amp;source=constructor" frameborder="0"/>
    </section>
</template>
<style scoped>
img{
    margin-right: 20px;
}
button{
    border: none;
    background: #FF0606;
    border-radius: 5px;
    width: 256px;
    height: 54px;
    font-size: 25px;
    font-weight: 700;
    line-height: 30.48px;
    text-align: center;
    margin: 53px 0;
    transition: 0.75s;
}
button:hover{
    background: #2A3848;
    color: #fff;
}
input{
    border: none;
    border-bottom: 1px solid #2A3848;
    font-size: 23px;
    font-weight: 500;
    line-height: 23px;
    text-align: left;
    padding: 25px 27px;
    width: 100%;
    outline: none;
    color: #2A3848;
    margin-bottom: 20px;
}
input::placeholder{
    color: #BBBBBB;
}
section{
    display: flex;
    justify-content: center;
    margin-top: 74px;
    margin-bottom: 68px;
}
section>div{
    width: 600px;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
section>div>div{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
h2{
    font-size: 35px;
    font-weight: 800;
    line-height: 35px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #2A3848;
    margin-bottom: 18px;
}
p{
    font-size: 25px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #2A3848;
    margin-bottom: 53px;
}
div>div>p{
    margin-bottom: 0;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    img{
        margin-right: 15px;
    }
    button{
        border-radius: 4px;
        width: 192px;
        height: 41px;
        font-size: 19px;
        line-height: 23px;
        margin: 40px 0;
    }
    input{
        font-size: 17px;
        line-height: 17px;
        padding: 19px 20px;
        margin-bottom: 15px;
    }
    section{
        margin-top: 56px;
        margin-bottom: 51px;
    }
    section>div{
        width: 450px;
        margin-right: 60px;
    }
    section>div>div{
        margin-bottom: 15px;
    }
    h2{
        font-size: 26px;
        line-height: 26px;
        margin-bottom: 14px;
    }
    p{
        font-size: 19px;
        line-height: 19px;
        margin-bottom: 40px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
    h2{
        font-size: 22px;
        line-height: 22px;
        margin-bottom: 8px;
    }
    p{
        font-size: 13px;
        line-height: 13px;
        margin-bottom: 21px;
    }
    img{
        margin-right: 6px;
    }
    button{
        width: 176px;
        height: 34px;
        font-size: 13px;
        line-height: 16px;
        margin: 20px 0;
    }
    input{
        font-size: 14px;
        line-height: 14px;
        padding: 11px;
        margin-bottom: 14px;
    }
    section>div{
        width: 300px;
        margin-right: 9px;
    }
    section{
        justify-content: space-around;
    }
}
@media  (max-width: 649px) {
    img{
        margin-right: 6px;
    }
    button{
        width: 176px;
        height: 34px;
        font-size: 13px;
        line-height: 16px;
        margin: 20px 0;
    }
    section{
        justify-content: center;
    }
    input{
        font-size: 14px;
        line-height: 14px;
        padding: 11px;
        margin-bottom: 10px;
    }
    h2{
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 8px;
    }
    p{
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 22px;
    }
    section>div{
        width: 336px;
        margin-right: 0px;
    }
    section>div>div{
        margin-bottom: 9px;
    }
    #map{
        display: none;
    }
    div>div>p{
        font-size: 18px;
    }
}
</style>