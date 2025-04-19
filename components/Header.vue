<script setup>

import { ref, onMounted, nextTick, onUnmounted  } from 'vue';
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
const props = defineProps({
    isMenuOpen: Boolean,
});
const emit = defineEmits(['update:isMenuOpen'])
const openMenu = () => {
    emit('update:isMenuOpen', true); // Передача значения true в родительский компонент
};
const closeMenu = () => {
    emit('update:isMenuOpen', false); // Передача значения true в родительский компонент
};
const isMobile = ref(false);
const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
};
onMounted(async () => {
  await nextTick();
  isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  
  window.addEventListener('resize', handleResize);
  openMenu();
  if(isMobile.value){
    closeMenu();
  }
});
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<template>
    <header>
    <nav v-show="!isMenuOpen" id="mobile" v-if="isMobile">
        <img width="278px" height="49px" loading="lazy" id="img2" src="/logo.webp" alt="logo">
        <div>
            <button @click="openMenu" aria-label="Burger_button">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
    <button v-show="isMenuOpen && isMobile" id="close" @click="closeMenu"></button>
    <nav v-show="isMenuOpen" id="desctop">
        <img width="278px" height="49px" loading="lazy" src="/logo.webp" alt="logo">
        <span v-if="isMobile" class="line"></span>
        <div>
            <p @click="scrollTo(1)">ГЛАВНАЯ</p>
            <p @click="scrollTo(2)">О НАС</p>
            <p @click="scrollTo(3)">УСЛУГИ</p>
            <p @click="scrollTo(4)">ОТЗЫВЫ</p>  
            <span v-if="isMobile" class="line"></span>
            <a class="header_button" href="https://wa.me/+77068478227" target="_blank">СВЯЗАТЬСЯ С НАМИ</a>
        </div>
    </nav>
</header>
</template>
<style scoped>
.line{
    display: block;
    height: 1px;
    min-width: 270px;
    max-width: 300px;
    background: #fff;
    margin-bottom: 17px;
    margin-top: 17px;
}
#img2{
    margin-bottom: 0;
}
#close{
    position: absolute;
    top: 40px;
    right: 30px;
    z-index: 2;
}
#close::before{
 display: block;
 content: '';
 width: 18px;
 height: 1px;
 background: #fff;
 transform: rotate(45deg);
}
#close::after{
 display: block;
 content: '';
 margin-top:-1px;
 width: 18px;
 height: 1px;
 background: #fff;
 transform: rotate(135deg);
}
button{
    background: none;
    outline: none;
    border: none;
}
button>span{
    content: '';
    display: block;
    background: #fff;
    width: 21px;
    height: 1px;
    margin-bottom: 5px;
}
nav{
    position: absolute;
    top: 30px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
div, header{
    display: flex;
    align-items: center;
}
p{
    font-size: 18px;
    font-weight: 400;
    line-height: 21.94px;
    text-align: left;
    text-decoration: none;
    margin-right: 45px;
    cursor: pointer;
    transition: 0.3s;
    min-width: 95px;
}
p:hover{
    font-weight: 700;
}
.header_button{
    margin-left: 75px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 260px;
    background: #FFFFFF;
    border-radius: 27px;
    color: #17242C;
    transition: 0.75s;
}
.header_button:hover{
    color: #fff;
    background: #FF0606;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    nav{
        top: 23px;
    }
    p{
        font-size: 14px;
        line-height: 17px;
        margin-right: 34px;
    }
    .header_button{
        font-size: 14px;
        margin-left: 56px;
        height: 44px;
        width: 195px;
        border-radius: 20px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
    .header_button{
        display: none;
    }
    img{
        width: 175px;
        height: 31px;
        margin-bottom: 17px;
    }
    p{
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        min-width: auto;
    }
}
@media  (max-width: 649px) {
    
    img{
        width: 175px;
        height: 31px;
    }
    nav{
        top: 24px;
    }
    #desctop{
        flex-direction: column;
        align-items: flex-start;
    }
    #desctop>div{
        flex-direction: column;
        align-items: flex-start;
    }
    p{
        font-size: 17px;
        font-weight: 400;
        line-height: 20.72px;
        margin-right: 0;
        margin-top: 15px;
    }
    p:first-child{
        margin-top: 0px;
    }
    .header_button{
        margin-left: 0;font-size: 11px;
        height: 28px;
        width: 144px;
        border-radius: 27px;
    }
}
</style>