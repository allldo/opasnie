
<script setup>
import { ref } from 'vue';

const expanded = ref(false);

const toggleButtons = () => {
    expanded.value = !expanded.value;
};

const goToWhatsApp = () => {
    window.open('https://wa.me/+77068478227', '_blank');
};

const makeCall = () => {
    window.location.href = 'tel:87078490445';
};
</script>
<template>
    <div class="button-container">
        <button class="button green sub-button" @click="goToWhatsApp">
            <img loading="lazy" height="50px" width="50px" src="/whatsapp_icon.webp" alt="whatsapp_icon">
        </button>
        <button class="button dark sub-button" @click="makeCall">
            <img loading="lazy" height="50px" width="50px" src="/phone_icon.webp" alt="phone_icon">
        </button>
    </div>
</template>
<style scoped>
.button-container {
    position: fixed;
    top:90dvh;
    right: 5dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 200;
}

.button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: transform 0.3s ease;
}

.button.red {
    background-color: #ff3b30;
    color: white;
}

.button.green {
    background-color: #25d366;
    color: white;
}

.button.dark {
    background-color: #2c3e50;
    top:-60px;
    color: white;
}

.main-button {
    position: relative;
    z-index: 110;
}

.sub-button {
    position: absolute;
    z-index: 105;
    transform: translateY(0);
}

.slide-up-enter-active, .slide-up-leave-active {
    transition: all 0.3s ease;
}

.slide-up-enter-from, .slide-up-leave-to {
    transform: translateY(50px);
    opacity: 0;
}

@media  (max-width: 649px) {
    
.button-container {
    right: 10dvw;
}
}
</style>
  