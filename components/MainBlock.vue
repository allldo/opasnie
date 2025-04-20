<script setup>

import { ref, onMounted, nextTick, onUnmounted } from 'vue';


const imgsize = ref('34px');
const imgsize2 = ref('34px');
const props = defineProps({
    isMenuOpen: Boolean,
});


const isMobile = ref(false);
const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
};
onMounted(async () => {
  await nextTick();
  isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  window.addEventListener('resize', handleResize);
  if(isMobile.value){
    imgsize.value = '25px';
    imgsize2.value = '25px';
  }
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
const goToWhatsApp = () => {
    window.open('https://wa.me/87068478227', '_blank');
};

const makeCall = () => {
    window.location.href = 'tel:87078490445';
};
</script>
<template>
    <main>
    <section id="main">
        <h1 v-show="!isMenuOpen ||!isMobile">
            <u v-show="!isMenuOpen ||!isMobile">Детектив</u> Алматы — частный сыщик и услуги 24/7</h1>
        <p v-show="!isMenuOpen ||!isMobile">Частный детектив в Алматы, услуги детектива и сыщика для решения любых задач. Детективное агентство работает круглосуточно. Оставьте заявку!</p>
        
        <div v-show="!isMenuOpen ||!isMobile" @click="makeCall"><img loading="lazy" :width="imgsize" :height="imgsize" src="/phone.webp" alt="phone number"> <p>+7 (707) 849 04 45</p></div>
        <div v-show="!isMenuOpen ||!isMobile" @click="goToWhatsApp"><img loading="lazy" :width="imgsize2" :height="imgsize2" src="/whatsapp.webp" alt="whatsapp"> <p>+7 (706) 847 82 27</p></div>
    </section>
</main>
</template>
<style scoped>
div{
    display: flex;
    align-items: center;
    cursor: pointer;
    max-width:  300px;
}
div>p{
    margin: 0;
    width: auto;
    margin-right: 20px;
    font-size: 18px;
}
img{
    margin:5px 10px;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url(/main_img1.webp);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100dvh;
}
h1{
    font-size: 90px;
    font-weight: 700;
    line-height: 90px;
    text-align: left;
    width: 1020px;
}
p{
    font-size: 18px;
    font-weight: 400;
    line-height: 21.94px;
    text-align: left;
    width: 486px;
    margin: 28px 0;
}
button{
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
button:hover{
    background: #fff;
    color: #2A3848;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    h1{
        font-size: 68px;
        line-height: 68px;
        width: 750px;
    }
    p{
        font-size: 14px;
        line-height: 17px;
        width: 365px;
        margin: 21px 0;
    }
    button{
        font-size: 19px;
        line-height: 23px;
        border-radius: 30px;
        width: 276px;
        height: 57px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
    h1{
        font-size: 40px;
        font-weight: 700;
        line-height: 40px;
        width: 432px;
    }
    p{
        font-size: 15px;
        font-weight: 400;
        line-height: 18.29px;
        width: 382px;
        margin: 21px 0;
    }
    button{
        font-size: 17px;
        font-weight: 700;
        line-height: 20.72px;

        border-radius: 40px;
        width: 236px;
        height: 41px;
    }
    section{
        height: 536px;
        background-position: right;
    }
}
@media  (max-width: 649px) {
    section{
        height: auto;
        min-height: 326px;
        align-items: center;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(/main_img_mobile.webp);
        background-position: right;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 40px 0 10px;
    }
    button{
        font-size: 11px;
        font-weight: 700;
        line-height: 13.41px;

        border-radius: 40px;
        width: 144px;
        height: 28px;
    }
    h1{
        font-size: 25px;
        font-weight: 700;
        line-height: 25px;
        text-align: center;
        width: 280px;
    }
    p{
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        text-align: center;
        width: 297px;
        margin: 13px 0;
    }
}
</style>