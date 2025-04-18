<script setup>

const props = defineProps({
    imgUrl: String,
    title: String,
    textArray: Array,
    altImg: String,
});

</script>
<template>
    <div>
        <img width="348px" height="250px" :src="imgUrl" loading="lazy" :alt="altImg">
        <p class="servise_title">{{ title }}</p>
        <ul>
            <li v-for="(item, index) in textArray" :key="index">{{ item.text }}</li>
        </ul>
    </div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-height: 426px;
    width: 370px;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
}
div:hover{
    border: 1px solid rgba(0,0,0,0);
    box-shadow: 0px 1.21px 2.06px 0px #44444406, 0px 5.33px 4.26px 0px #4444440A, 0px 13.07px 8.5px 0px #4444440D, 0px 25.18px 16.65px 0px #4444440F, 0px 42.36px 30.62px 0px #44444413, 0px 65.36px 52.29px 0px #4444441A;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

ul>li {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #2f2f2f;
}
img{
    height: 250px;
    width: 348px;
    border-radius: 5px;
}
.servise_title{
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #1a232f;
}
p{
    font-size: 16px;
    font-weight: 400;
    line-height: 17.6px;
    color: #828282;
    margin: 20px 0 10px;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
    div{
        padding: 8px;
        min-height: 320px;
        width: 278px;
        border-radius: 8px;
    }
    div:hover{
        box-shadow: 0px 1px 2px 0px #44444406, 0px 4px 3px 0px #4444440A, 0px 10px 7px 0px #4444440D, 0px 19px 13px 0px #4444440F, 0px 32px 23px 0px #44444413, 0px 49px 39px 0px #4444441A;
    }
    ul {
        padding-left: 15px;
    }
    ul>li {
        font-size: 12px;
        line-height: 16px;
    }
    img{
        height: 188px;
        width: 260px;
        border-radius: 4px;
    }
    .servise_title{
        font-size: 14px;
        line-height: 14px;
    }
    p{
        font-size: 12px;
        line-height: 13px;
        margin: 15px 0 8px;
    }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
    img{
        height: 180px;
        width: 249px;
        border-radius: 5px;
    }
    div{
        padding: 7px;
        min-height: 342px;
        width: 265px;
    }
    p{
        font-size: 15px;
        line-height: 15px;
        margin: 12px 0 13px;
    }
    ul>li {
        font-size: 14px;
        line-height: 17px;
    }
    div:hover{
        border: 1px solid #DDDDDD;
        box-shadow: none;
    }
}
@media  (max-width: 649px) {
  
    img{
        height: 180px;
        width: 249px;
        border-radius: 5px;
    }
    div{
        padding: 7px;
        min-height: 342px;
        width: 265px;
    }
    p{
        font-size: 15px;
        line-height: 15px;
        margin: 12px 0 13px;
    }
    ul>li {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 7px;
    }
    div:hover{
        border: 1px solid #DDDDDD;
        box-shadow: none;
    }
}
</style>