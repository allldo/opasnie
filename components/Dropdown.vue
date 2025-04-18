<script setup>
import { ref } from 'vue';

const placeholder = 'Выберите услугу';

const categories = ['Для физических лиц', 'Для юридических лиц'];

const subCategories = {
  'Для физических лиц': ['Розыск людей', 'Помощь в решении проблем', 'Сбор информации', 'Другие услуги'],
  'Для юридических лиц': ['Юридическое консультирование', 'Финансовый аудит', 'Заключение контрактов'],
};


const emit = defineEmits(['update:service'])
const selectedCategory = ref('');
const selectedSubCategory = ref('');
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
function showDropdown() {
  isOpen.value = true;
}

function selectCategory(category) {
  selectedCategory.value = category;
  isOpen.value = true;
}

function selectSubCategory(subCategory) {
  selectedSubCategory.value = subCategory;
  emit('update:service', selectedSubCategory.value);
  setTimeout(() => {
    selectedCategory.value = '';
    isOpen.value = false;
  }, 100);
}

</script>

<template>
    <div class="dropdown" @click="showDropdown">
      <div class="dropdown-header" :class="{ 'active': isOpen, 'sub':selectedSubCategory}">
        {{ selectedSubCategory || selectedCategory || placeholder }}
        <span :class="{ 'arrow-up': isOpen, 'arrow-down': !isOpen }"></span>
      </div>
      <div v-if="isOpen" class="dropdown-list">
        <div v-if="!selectedCategory">
          <div 
            v-for="option in categories" 
            :key="option" 
            class="dropdown-item" 
            @click="selectCategory(option)">
            {{ option }}
          </div>
        </div>
        <div v-else>
          <div 
            v-for="option in subCategories[selectedCategory]" 
            :key="option" 
            class="dropdown-item" 
            @click="selectSubCategory(option)">
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </template>
<style scoped>

.active {
  border-radius:20px 20px 0 0;
  border: 1px solid #2A3848;
}

.dropdown {
  position: relative;
  width: 600px;
  cursor: pointer;
}

.dropdown-header {
  padding: 25px 27px;
  border-bottom: 1px solid #2A3848;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  line-height: 23px;
  color: #BBBBBB;
  width: 600px;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #2A3848;
  border-top: none;
  border-radius:0 0 20px 20px;
  background-color: #fff;
  z-index: 1000;
  overflow: hidden;
}

.dropdown-item {
  padding: 26px;
  font-size: 23px;
  color: #2A3848;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.dropdown-item.back {
  font-weight: bold;
}

.arrow-up {
  border: solid #999;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.arrow-down {
  border: solid #999;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.sub {
  color: #2A3848;
}
@media  (min-width: 1200px) and (max-width: 1850px) {
  .active {
    border-radius:15px 15px 0 0;
  }
  .dropdown {
    width: 450px;
  }
  .dropdown-header {
    padding: 19px 20px;
    font-size: 17px;
    line-height: 17px;
    width: 450px;
  }
  .dropdown-list {
    border-radius:0 0 15px 15px;
  }
  .dropdown-item {
    padding: 20px;
    font-size: 17px;
  }
}
@media  (min-width: 650px) and (max-width: 1199px) {
  
  .dropdown {
    width: 300px;
  }

  .dropdown-item {
    padding: 11px;
    font-size: 14px;
  }

  .dropdown-header {
    width: 300px;
    font-size: 14px;
    line-height: 14px;
    padding: 11px;
  }
}
@media  (max-width: 649px) {
  
  .dropdown {
    width: 336px;
  }

  .dropdown-item {
    padding: 11px;
    font-size: 14px;
  }

  .dropdown-header {
    width: 336px;
    font-size: 14px;
    line-height: 14px;
    padding: 11px;
  }
}
</style>