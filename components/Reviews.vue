<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import ArrowButton from './ArrowButton.vue'

const imgUrl = ref('/review.webp');
const counter = ref(0);
const LbuttonOn = ref(false);
const RbuttonOn = ref(true);
const arr = ref([
  { 'name': '', 'text': 'Ребята профессионалы своего дела, всё по полочкам, чётко и ясно. Будем работать дальше!' },
  { 'name': '', 'text': 'Всем советую, профессионалы своего дела, помогут и найдут. Обращайтесь без сомнений!' },
  { 'name': '', 'text': 'Отличная работа. Думала так могут работать только в кино. Но нет, здесь показали свой профессионализм в решении моего вопроса.' },
  { 'name': '', 'text': 'Ребята профессионалы своего дела, помогли быстро найти мошенников, очень благодарна за работу.' }
]);

const next = () => {
  LbuttonOn.value = true;
  if (isMobile.value) {
    if (counter.value < 3) {
      counter.value += 1;
    }
    if (counter.value < 3) {
      RbuttonOn.value = true;
    }else{
      RbuttonOn.value = false;
    }
  } else {
    if (counter.value < 2) {
      counter.value += 2;
    }
    if (counter.value < 2) {
      RbuttonOn.value = true;
    }else{
      RbuttonOn.value = false;
    }
  }
};

const back = () => {
  RbuttonOn.value = true;
  if (isMobile.value) {
    if (counter.value > 0) {
      counter.value -= 1;
    }
    if (counter.value > 0) {
      LbuttonOn.value = true;
    }else{
      LbuttonOn.value = false;
    }
  } else {
    if (counter.value > 0) {
      counter.value -= 2;
    }
    if (counter.value > 0) {
      LbuttonOn.value = true;
    }else{
      LbuttonOn.value = false;
    }
  }
};

const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  };
const isMobile = ref(false);
onMounted(async () => {
  await nextTick();
  isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section id="reviews">
    <h2>Отзывы Наших <u>Клиентов</u></h2>
    <div :style="{
      background: `url(${imgUrl})`,
      'background-position': 'center',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
    }">
      <transition name="fade" mode="out-in">
        <div :key="counter">
          <h3>{{ arr[counter].name }}</h3>
          <p>{{ arr[counter].text }}</p>
        </div>
      </transition>
      <transition v-if="!isMobile" name="fade" mode="out-in">
        <div :key="counter+1">
          <h3>{{ arr[counter+1].name }}</h3>
          <p>{{ arr[counter+1].text }}</p>
        </div>
      </transition>
    </div>
    <div>
      <ArrowButton style="transform: rotate(180deg);" :on="LbuttonOn" @click="back"/>
      <ArrowButton :on="RbuttonOn" @click="next"/>
    </div>
  </section>
</template>

<style scoped>
h2{
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #2A3848;
  margin: 42px 0 68px;
}
h3{
  font-size: 35px;
  font-weight: 600;
  line-height: 35px;
  text-align: left;
  margin-bottom: 19px;
  transition: 1s;
}
p{
  font-size: 20px;
  font-weight: 400;
  line-height: 24.38px;
  text-align: left;
  max-width: 380px;
  transition: 1s;
}
section > div{
  height: 423px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 615px;
}
section > div:last-child{
  margin-top: 67px;
  height: auto;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
}
button{
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  background: none;
  margin-left: 14px;
}
@media (min-width: 1200px) and (max-width: 1850px) {
  h2{
    font-size: 30px;
    line-height: 30px;
    margin: 31px 0 51px;
  }
  h3{
    font-size: 26px;
    line-height: 26px;
    margin-bottom: 14px;
  }
  p{
    font-size: 15px;
    line-height: 18px;
    max-width: 285px;
  }
  section > div{
    height: 317px;
    border-radius: 38px;
    padding-left: 461px;
  }
  section > div:last-child{
    margin-top: 50px;
  }
  button{
    border-radius: 4px;
    margin-left: 11px;
  }
}
@media (min-width: 650px) and (max-width: 1199px) {
  section > div:last-child{
    margin-top: 12px;
  }
  img{
    width: 13.4px;
    height: 8.25px;
  }
  h2{
    font-size: 20px;
    line-height: 20px;
    color: #2A3848;
    margin: 30px 0 27px;
  }
  h3{
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 8px;
  }
  p{
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
    max-width: 180px;
  }
  section > div{
    height: 222px;
    border-radius: 20px;
    padding-left: 250px;
    background-position: left !important;
  }
}
@media (max-width: 649px) {
  section > div:last-child{
    margin-top: 12px;
  }
  img{
    width: 13.4px;
    height: 8.25px;
  }
  h2{
    font-size: 20px;
    line-height: 20px;
    color: #2A3848;
    margin: 30px 0 27px;
  }
  h3{
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 8px;
  }
  p{
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
    max-width: 160px;
  }
  section > div{
    height: 170px;
    border-radius: 20px;
    padding-left: 190px;
    background-position: left !important;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
