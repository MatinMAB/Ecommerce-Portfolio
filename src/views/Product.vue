<template>
  <div>
    <div id="modal__gallery" class="modal" v-show="isShowingModal">
      <div class="modal__content">
        <span class="modal__close" @click="closeModal">&times;</span>
        <div class="modal__body" tabindex="0" @focusout="closeModal">
          <img :src="modalImage" class="show__gallery" />
        </div>
      </div>
    </div>
    <main class="main">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb__item breadcrumb__item--hide">
            <a href="" class="breadcrumb__link"><span class="breadcrumb__span">صفحه اصلی</span></a>
          </li>
          <li class="breadcrumb__item">
            <a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
          </li>
          <li class="breadcrumb__item">
            <a href="" class="breadcrumb__link"><span class="breadcrumb__span">محصول</span></a>
          </li>
        </ul>
        <div class="product">
          <div class="product__header">
            <div class="product__expiration">
              <div class="count-down__timer" id="count-dowm__timer">
                {{ diff }}
              </div>
            </div>
            <div class="product__row">
              <div class="prodcut__gallery">
                <div class="gallery">
                  <div class="gallery__slideshow">
                    <span class="gallery__count">
                      <span class="gallery__number1">{{ slideIndex + 1 }}</span>
                      <span class="gallery__number2">{{ gallerySlides.length }}</span>
                    </span>
                    <div class="gallery__slides">
                      <div class="gallery__slide">
                        <img
                          class="gallery__img"
                          :src="require(`../assets/img/slider/${$route.params.id}.jpg`)"
                          alt=""
                          v-for="(slide, index) in gallerySlides"
                          :key="index"
                          :style="slideIndex === index ? 'display:block;' : 'display:none;'"
                          @click="showModal(`../assets/img/slider/${$route.params.id}.jpg`)"
                        />
                      </div>
                    </div>
                    <a @click.prevent="move(-1)" class="gallery__prev">&#10094;</a>
                    <a @click.prevent="move(1)" class="gallery__next">&#10095;</a>
                  </div>
                  <div class="gallery__content">
                    <div class="gallery__items">
                      <div
                        class="gallery__item"
                        :class="{ 'gallery__item--is-acitve': slideIndex === index }"
                        v-for="(slide, index) in gallerySlides"
                        :key="`item-${index}`"
                      >
                        <img :src="slide.img" @click="currentSlide(index)" class="gallery__item-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__left">
                <div class="product__category">محصول انتخابی شما</div>
                <div class="product__info">
                  <h1 class="product__title">{{ product?.name }}</h1>
                  
                  <div class="rating">
                    <div class="rating__star">
                      <span
                        class="rating__rate"
                        :data-title="rate.title"
                        v-for="rate in ratings"
                        :key="rate.title"
                        @click="rateWidth = rate.width"
                        @mouseover="handleMouseover"
                        @mouseleave="handleMouseleave"
                      ></span>
                    </div>
                    <div class="rating__fstar" :style="showRate ? `width: ${rateWidth}%` : ''">
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                      <span class="rating__frate"></span>
                    </div>
                  </div>
                  
                  <div class="rating-star">
                    4.5
                    <span class="rating__num">(65)</span>
                  </div>
                  
                </div>
                <h2 class="product__price-item">{{new Intl.NumberFormat().format(product?.price)}} تومان</h2>
                <div class="controls">
                  <!-- <Multiselect
                            :options="colorsOptions"
                            v-model="selectedColor"
                            placeholder="گزینه خود را انتخاب کنید"
                          />
                          <Multiselect
                            :options="langOptions"
                            v-model="selectedLang"
                            :multiple="true"
                            label="name"
                            placeholder="گزینه خود را انتخاب کنید"
                          /> -->
                </div>
                <div>
                  <button class="btn btn--boxshadow btn--brand" v-on:click="addToCart(product)">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SwiperSlider>
          <template v-slot:title>
            محصولات مرتبط
          </template>
          <router-link :to="{ name: 'Product', params: { id: item.id } }" class="swiper-slide" v-for="item in slideShow" :key="item">
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
        <div class="product-details">
          <div class="tab">
            <div class="tab__items">
              <span class="tab__item tab__item--compare" :class="{ 'tab__item--is-active': activeTab === 'compare' }" @click="activeTab = 'compare'"
                >نقد و بررسی</span
              >
              <span
                class="tab__item tab__item--featrues"
                :class="{ 'tab__item--is-active': activeTab === 'featrues' }"
                @click="activeTab = 'featrues'"
                >ویژیگی ها</span
              >
              <span
                class="tab__item tab__item--comments"
                :class="{ 'tab__item--is-active': activeTab === 'comments' }"
                @click="activeTab = 'comments'"
                >نظرات</span
              >
            </div>
            <div class="tab__sections">
              <CompareTab :style="activeTab === 'compare' ? 'display:block;' : 'display:none;'" />
              <FeaturesTab :style="activeTab === 'featrues' ? 'display:block;' : 'display:none;'" />
              <CommentsTab :style="activeTab === 'comments' ? 'display:block;' : 'display:none;'" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SwiperSlider from "../components/SwiperSlider";
import CompareTab from "../components/Tabs/CompareTab";
import CommentsTab from "../components/Tabs/CommentsTab";
import FeaturesTab from "../components/Tabs/FeaturesTab";
import moment from "moment";

import axios from "axios";

import { mapMutations, mapState, mapActions } from "vuex";

import "../assets/css/modal.css";

export default {
  name: "Product",

  components: {
    SwiperSlider,
    CompareTab,
    CommentsTab,
    FeaturesTab,
  },

  data() {
    return {
      dateCountDown: moment("2022-02-07 00:00:00"),
      diff: null,
      countDownInterval: null,
      gallerySlides: [
        { img: require("../assets/img/slider/1.jpg") },
        { img: require("../assets/img/slider/2.jpg") },
        { img: require("../assets/img/slider/3.jpg") },
        { img: require("../assets/img/slider/4.jpg") },
        { img: require("../assets/img/slider/5.jpg") },
        { img: require("../assets/img/slider/6.jpg") },
        { img: require("../assets/img/slider/7.jpg") },
        { img: require("../assets/img/slider/8.jpg") },
        { img: require("../assets/img/slider/9.jpg") },
        { img: require("../assets/img/slider/10.jpg") },
        { img: require("../assets/img/slider/11.jpg") },
        { img: require("../assets/img/slider/12.jpg") },
      ],
      ratings: [
        { width: 100, title: "عالی" },
        { width: 80, title: "خوب" },
        { width: 60, title: "معمولی" },
        { width: 40, title: "ضعیف" },
        { width: 20, title: "بد" },
      ],
      slideIndex: 0,
      isShowingModal: false,
      modalImage: null,
      rateWidth: 0,
      showRate: true,
      selectedColor: "",
      colorsOptions: ["قرمز", "سبز", "آبی"],
      selectedLang: [],
      langOptions: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
      slides: [
        { img: require("../assets/img/slideshow/1.png") },
        { img: require("../assets/img/slideshow/2.png") },
        { img: require("../assets/img/slideshow/3.png") },
        { img: require("../assets/img/slideshow/4.png") },
      ],
      slideShow: [
        { id: 1, img: require("../assets/img/slider/1.jpg"), name: "گوشی موبایل شیائومی مدل POCO X3 Pro", price: "6,779,000 تومان" },
        { id: 2, img: require("../assets/img/slider/2.jpg"), name: "گوشی موبایل اپل مدل iPhone 13 A2634", price: "26,390,000 تومان" },
        { id: 3, img: require("../assets/img/slider/3.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy A12 Nacho", price: "3,700,000 تومان" },
        { id: 4, img: require("../assets/img/slider/4.jpg"), name: "گوشی موبایل شیائومی مدل Redmi 9A M2006C3LG", price: "2,700,000 تومان" },
        { id: 5, img: require("../assets/img/slider/5.jpg"), name: "گوشی موبایل اپل مدل iPhone 12 A2404 ZAA", price: "23,700,000 تومان" },
        { id: 6, img: require("../assets/img/slider/6.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy S20 FE SM-G780", price: "12,300,000 تومان" },
        { id: 7, img: require("../assets/img/slider/7.jpg"), name: "گوشی موبایل سامسونگ مدل Galaxy Note 20 Ultra", price: "29,299,000 تومان" },

        { id: 8, img: require("../assets/img/slider/8.jpg"), name: "لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15IGL05 - Z", price: "8,400,000 تومان" },
        { id: 9, img: require("../assets/img/slider/9.jpg"), name: "لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020", price: "31,440,000 تومان" },
        {
          id: 10,
          img: require("../assets/img/slider/10.jpg"),
          name: "لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX506LH-US53",
          price: "25,000,000 تومان",
        },
        { id: 11, img: require("../assets/img/slider/11.jpg"), name: "لپ تاپ 15.6 اينچی الین ویر مدل M15 R3", price: "79,600,000 تومان" },
        {
          id: 12,
          img: require("../assets/img/slider/12.jpg"),
          name: "لپ تاپ 14 اینچی ایسوس مدل ZenBook 14 UM425IA-AM035",
          price: "26,800,000 تومان",
        },
      ],
      activeTab: "compare",
      product: {},
    };
  },

  computed: {
    ...mapState(["cart"]),
  },

  methods: {
    move(n) {
      if (this.gallerySlides.length <= this.slideIndex + n) {
        this.slideIndex = 0;
      } else if (this.slideIndex + n < 0) {
        this.slideIndex = this.gallerySlides.length - 1;
      } else {
        this.slideIndex += n;
      }
    },
    currentSlide(index) {
      this.slideIndex = index;
    },
    showModal(image) {
      this.isShowingModal = true;
      this.modalImage = image;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.isShowingModal = false;
      document.body.style.overflow = "unset";
    },
    handleMouseover() {
      this.showRate = false;
    },
    handleMouseleave() {
      this.showRate = true;
    },
    ...mapMutations(["SET_PRODUCT"]),
    ...mapActions(["addToCart"]),
  },

  created() {
    this.countDownInterval = setInterval(() => {
      let diffTime = this.dateCountDown.diff(moment());
      let durationTime = moment.duration(diffTime);
      this.diff = `${Math.floor(durationTime.asDays())}:${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`;
    }, 1000);

    this.product = this.$store.getters.getProduct(parseInt(this.$route.params.id));

    if (!this.product) {
      // this.$store.dispatch("getProducts")
      //   .then(() => (this.product = this.$store.getters.getProduct(parseInt(this.$route.params.id))));

      axios
        .get("https://gist.githubusercontent.com/MatinMAB/89d1061493743b1a8b89c45534b1f0c4/raw/f0ecb1207da4a6cbeb42786403798deb950a6367/Products")
        .then(({ data }) => {
          // this.$store.commit("SET_PRODUCT", data);
          this.SET_PRODUCT(data);
        })
        .then(() => {
          this.product = this.$store.getters.getProduct(parseInt(this.$route.params.id));
        });
    }
  },

  unmounted() {
    clearInterval(this.countDownInterval);
  },
};
</script>
