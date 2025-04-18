<script setup>

const props = defineProps({
    on: Boolean
});

</script>
<template>
    <button :class="{active:on}" aria-label="Arrow">
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
    </button>
</template>
<style scoped>
span{
    height: 2px;
    background: #A5A5A5;
    position: absolute;
    transition: 0.5s;
    
}
button.active>span{
    height: 2px;
    background: red;
    position: absolute;
}

#span1{
    top: 18px;
    left: 9px;
    width: 20px;
}
#span2{
    height: 2px;
    top: 14px;
    left: 20px;
    width: 11px;
    transform: rotate(45deg);
}
#span3{
    height: 2px;
    top: 22px;
    left: 20px;
    width: 11px;
    transform: rotate(135deg);
}
button{
    background: none;
    width: 40px;
    height: 40px;
    position: relative;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
}
@media  (max-width: 649px) {
    button{
        width: 27px;
        height: 27px;
    }
    #span1{
        top: 11px;
        left: 5px;
        width: 16px;
    }
    #span2{
        top: 8px;
        left: 13px;
        width: 7px;
    }
    #span3{
        top: 14px;
        left: 13px;
        width: 7px;
    }
}
</style>