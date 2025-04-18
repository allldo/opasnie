<template>
<Header :isMenuOpen="isMenuOpen" @update:isMenuOpen="handleMenuOpen" />
  <CallButton/>
  <MainBlock  :isMenuOpen="isMenuOpen"  />
  <WhyUs/>
  <Banner/>
  <SliderServices/>
  <Reviews/>
  <Contacts/>
  <Footer/>
</template>
<script setup>
useHead({
   link: [
      {
         rel: "stylesheet",
         href: "/fonts.css",
      },
      {
         rel: "stylesheet",
         href: "/style.css",
      },
      {
         rel: "icon",
         href: "/icon3.ico",
      },
   ],
   titleTemplate: '%s',
   title: "Опасные связи | Частный детектив в Алматы",
   script:[
   {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Опасные связи",
        "image": "https://opasniesvyazi.kz/icon3.ico",
        "url": "https://opasniesvyazi.kz/",
        "telephone": "+7 706 847-82-27",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Примерная, д. 13",
          "addressLocality": "Алматы",
          "postalCode": "101000",
          "addressCountry": "KZ"
        },
        "description": "Частное детективное агентство «Опасные связи» — круглосуточные профессиональные расследования, слежка, поиск людей, сбор доказательств и проверка информации.",
        "priceRange": "$$$",
        "openingHours": [
          "Mo-Su 00:00-23:59"
        ],
        "founder": {
          "@type": "Person",
          "name": "Руслан"
        },
        "areaServed": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KZ"
          }
        },
        "makesOffer": [
          { "@type": "Offer", "name": "Выявление супружеской неверности" },
          { "@type": "Offer", "name": "Поиск должников и мошенников" },
          { "@type": "Offer", "name": "Анализ поведения несовершеннолетних и членов семьи" },
          { "@type": "Offer", "name": "Выявление брачных аферистов и мошенников" },
          { "@type": "Offer", "name": "Определение условий проживания ребенка" },
          { "@type": "Offer", "name": "Наблюдение и проверка информации" },
          { "@type": "Offer", "name": "Поиск пропавших без вести" },
          { "@type": "Offer", "name": "Розыск пропавших родственников" },
          { "@type": "Offer", "name": "Сотрудничество с волонтёрскими объединениями" },
          { "@type": "Offer", "name": "Сбор информации о человеке" },
          { "@type": "Offer", "name": "Адрес регистрации и номера телефонов" },
          { "@type": "Offer", "name": "Фактическое место жительства" },
          { "@type": "Offer", "name": "Место работы, образ жизни и контакты" },
          { "@type": "Offer", "name": "Состав семьи" },
          { "@type": "Offer", "name": "Детали биографии" },
          { "@type": "Offer", "name": "Наличие судимости и административных штрафов" },
          { "@type": "Offer", "name": "Организация случайных встреч" },
          { "@type": "Offer", "name": "Сбор сведений по гражданским и уголовным делам" },
          { "@type": "Offer", "name": "Консультации по вопросам личной безопасности" }
        ]
      })
    }
   ],
   meta: [
      { hid: 'description', name: 'description', content: "Частное детективное агентство 'Опасные связи' в Алматы предоставляет услуги по расследованиям, сбору информации и поиску людей. Наша команда детективов поможет вам в решении любых задач конфиденциально." },
      { property: 'og:site_name', content: 'Опасные связи | Частный детектив в Алматы' },
      { property: 'og:url', content: 'https://opasniesvyazi.kz/' },
      { name: 'robots', content: 'index, follow' },
    ],
})

const isMenuOpen = ref(false);

const handleMenuOpen = (value) => {
    isMenuOpen.value = value;
};
</script>