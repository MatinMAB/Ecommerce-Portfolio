<template>
  <main class="main">
    <div class="container">
      <div class="header__top">
        <div class="header__top-content">
          <h1 class="header__top-h1">سایت فروشگاهی</h1>
          <p class="header__top-p">این سایت صرفا یک سایت به عنوان نمونه کاری برای رزومه است.</p>
        </div>
        <form class="header__form">
          <div class="header__search">
            <input type="text" class="header__serach-input" placeholder="جستجو کنید..." />
            <button class="header__search-btn btn btn--brand btn--boxshadow"></button>
          </div>
        </form>
      </div>
      <div class="slideshow">
        <a
          href=""
          class="slideshow__slide"
          v-for="(slide, index) in slides"
          :key="slide.img"
          :style="index === slideShowIndex ? 'display:block;' : 'display:none;'"
        >
          <img :src="slide.img" class="slideshow__img" />
        </a>

        <a @click="move(-1)" class="slideshow__prev">&#10095;</a>
        <a @click="move(1)" class="slideshow__next">&#10094;</a>

        <div class="slideshow__items">
          <div class="slideshow__item" v-for="(slide, index) in slides" :key="slide.img">
            <div class="slideshow__item-inner" :style="index === slideShowIndex ? `width: ${progressWidth}%` : ''"></div>
          </div>
        </div>
      </div>
      <SwiperSlider>
        <template v-slot:title>
          موبایل
        </template>
        <router-link :to="{ name: 'Product', params: { id: 1 } }" class="swiper-slide" v-for="item in slideShowMobile" :key="item">
          <div class="slider__box">
            <div class="slider__image"><img :src="item.img" alt="" class="slider__img" /></div>
            <div class="slider__title2">
              {{ item.name }}
            </div>
            <div class="slider__price">
              <span class="slider__total-price">{{ item.price }}</span>
            </div>
            <div class="slider__icons">
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                  /></svg
              ></span>
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  /></svg
              ></span>
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z" /></svg
              ></span>
            </div>
          </div>
        </router-link>
      </SwiperSlider>
      <SwiperSlider>
        <template v-slot:title>
          لپ تاپ
        </template>
        <router-link :to="{ name: 'Product', params: { id: item.id } }" class="swiper-slide" v-for="item in slideShowLaptop" :key="item">
          <div class="slider__box">
            <div class="slider__image"><img :src="item.img" alt="" class="slider__img" /></div>
            <div class="slider__title2">
              {{ item.name }}
            </div>
            <div class="slider__price">
              <span class="slider__total-price">{{ item.price }}</span>
            </div>
            <div class="slider__icons">
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                  /></svg
              ></span>
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  /></svg
              ></span>
              <span
                ><svg style="width:32px;height:32px;color:#46B1EF;" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z" /></svg
              ></span>
            </div>
          </div>
        </router-link>
      </SwiperSlider>
    </div>
  </main>
</template>

<script>
import SwiperSlider from "../components/SwiperSlider";
export default {
  name: "Home",

  components: {
    SwiperSlider,
  },

  data: () => ({
    slides: [
      { img: require("../assets/img/slideshow/1.png") },
      { img: require("../assets/img/slideshow/2.png") },
      { img: require("../assets/img/slideshow/3.png") },
      { img: require("../assets/img/slideshow/4.png") },
    ],

    slideShowMobile: [
      { id: 1, img: require("../assets/img/slider/1.jpg"), name: "گوشی موبایل شیائومی مدل POCO X3 Pro", price: "6,779,000 تومان" },
      { id: 2, img: require("../assets/img/slider/2.jpg"), name: "گوشی موبایل اپل مدل iPhone 13 A2634", price: "26,390,000 تومان" },
      { id: 3, img: require("../assets/img/slider/3.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy A12 Nacho", price: "3,700,000 تومان" },
      { id: 4, img: require("../assets/img/slider/4.jpg"), name: "گوشی موبایل شیائومی مدل Redmi 9A M2006C3LG", price: "2,700,000 تومان" },
      { id: 5, img: require("../assets/img/slider/5.jpg"), name: "گوشی موبایل اپل مدل iPhone 12 A2404 ZAA", price: "23,700,000 تومان" },
      { id: 6, img: require("../assets/img/slider/6.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy S20 FE SM-G780", price: "12,300,000 تومان" },
      { id: 7, img: require("../assets/img/slider/7.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy Note 20 Ultra", price: "29,299,000 تومان" },
    ],
    slideShowLaptop: [
      { id: 8, img: require("../assets/img/slider/8.jpg"), name: "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15IGL05 - Z", price: "8,400,000 تومان" },
      { id: 9, img: require("../assets/img/slider/9.jpg"), name: "لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020", price: "31,440,000 تومان" },
      {
        id: 10,
        img: require("../assets/img/slider/10.jpg"),
        name: "لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LH-US53",
        price: "25,000,000 تومان",
      },
      { id: 11, img: require("../assets/img/slider/11.jpg"), name: "لپ تاپ 15.6 اينچی الین ویر مدل M15 R3", price: "79,600,000 تومان" },
      { id: 12, img: require("../assets/img/slider/12.jpg"), name: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 UM425IA-AM035", price: "26,800,000 تومان" },
    ],
    slideShowIndex: 0,
    sliderInterval: null,
    progressWidth: 0,
  }),

  methods: {
    move(n) {
      this.progressWidth = 0;
      if (this.slides.length <= this.slideShowIndex + n) {
        this.slideShowIndex = 0;
      } else if (this.slideShowIndex + n < 0) {
        this.slideShowIndex = this.slides.length - 1;
      } else {
        this.slideShowIndex += n;
      }
    },
  },

  created() {
    this.sliderInterval = setInterval(() => {
      if (this.progressWidth >= 100) {
        this.progressWidth = 0;
        this.move(1);
      } else {
        this.progressWidth++;
      }
    }, 15);

    console.log(this.$store.state.products);
  },

  unmounted() {
    clearInterval(this.sliderInterval);
  },
};
</script>

<style></style>
