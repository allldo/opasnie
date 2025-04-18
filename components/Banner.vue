<script setup>
import { ref, onMounted } from 'vue';

const animateNumbers = () => {
  const numbers = document.querySelectorAll('.number');
  
  const duration = 3000; // Общее время анимации
  let maxEndValue = 0;

  // Находим максимальное значение среди всех чисел
  numbers.forEach(number => {
    const endValue = parseInt(number.textContent, 10);
    if (endValue > maxEndValue) {
      maxEndValue = endValue;
    }
  });

  numbers.forEach(number => {
    let startValue = 0;
    const endValue = parseInt(number.textContent, 10);
    
    const stepTime = Math.abs(duration / maxEndValue) * (maxEndValue / endValue);

    const increment = () => {
      startValue += 1;
      number.textContent = startValue;
      if (startValue < endValue) {
        setTimeout(increment, stepTime);
      }
    };
    
    increment();
  });
};

onMounted(() => {
  const section = document.querySelector('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.unobserve(section);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(section);
});
</script>

<template>
  <section>
    <div>
      <img width="50%" height="100%" loading="lazy" src="/banner.webp" alt="banner">
      <div>
        <h2>О НАС</h2>
        <p>Наш детектив - профессионал с <u>многолетним стажем</u> в правоохранительных органах. Опыт и квалификация наших сотрудников обеспечивают исключительное качество работы и гарантированные результаты.</p>
        <u><p class="number">10</p></u>
        <p class="half"><b>лет</b> успешной работы в сфере детективных услуг</p>
        <u><p class="number">645</p></u>
        <p class="half"><b>завершенных дел</b> с отличным результатом</p>
        <u><p class="number">5</p></u>
        <p class="half"><b>дней</b> - cредний срок решения вопроса</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
u{
  font-weight: 700;
}
u>p{
    color: #FF0606;
}
.half{
    width: 265px;
}
h2{
    font-size: 45px;
    font-weight: 800;
    line-height: 54.86px;
    text-align: center;
    margin-bottom: 19px;
}
p{
    font-size: 20px;
    font-weight: 400;
    line-height: 24.38px;
    text-align: center;
    width: 516px;
}
section>div{
    display: flex;
    justify-content: center;
    border-radius: 50px;
    height: 732px;
    background: #060405;
    overflow: hidden;
}
div>div{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
img{
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.number{
    font-size: 50px;
    font-weight: 800;
    line-height: 60.95px;
    margin: 13px 0;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
  .half{
    width: 192px;
  }
  h2{
      font-size: 34px;
      line-height: 41px;
      margin-bottom: 14px;
  }
  p{
      font-size: 15px;
      line-height: 19px;
      width: 387px;
  }
  section>div{
      border-radius: 38px;
      height: 549px;
  }
  .number{
      font-size: 38px;
      line-height: 46px;
      margin: 10px 0;
  }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
    section>div{
        border-radius: 30px;
        height: 425px;
    }
    h2{
        font-size: 25px;
        font-weight: 800;
        line-height: 30.48px;
        text-align: center;
        margin-bottom: 7px;
    }
    p{
        font-size: 13px;
        font-weight: 400;
        line-height: 15.85px;
        text-align: center;
        width: 298px;
    }
    .number{
        font-size: 22px;
        font-weight: 800;
        line-height: 26.82px;
        margin: 13px 0;
    }
}
@media  (max-width: 649px) {
  
    div>div{
        width: 100%;
    }
    .number{
        font-size: 25px;
        line-height: 30.48px;
        margin: 3px 0;
    }
    img{
        width: 100%;
        height: auto;
    }
    section>div{
        border-radius: 20px;
        min-height: 634px;
        height: auto;
        padding-bottom: 20px;

        flex-direction: column;
        justify-content: flex-start;
    }
    h2{
        font-size: 20px;
        line-height: 24.38px;
        margin-bottom: 6px;
        margin-top: 10px;
    }
    p{
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        width: 256px;
    }
}
</style>