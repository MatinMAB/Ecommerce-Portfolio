<template>
  <main class="main">
    <div class="container">
      <div class="page">
        <div class="page__sidebar">
          <div class="box" v-show="selectedFilters.length > 0">
            <div class="box-filters">
              <div class="box-filters__header">
                <span class="box-filters__title">فیلتر های اعمال شده</span>
                <a class="box-filters__clear" @click.prevent="removeAll">حذف همه</a>
              </div>
              <ul class="box-filters__ul">
                <li class="box-filters__li" v-for="filter in selectedFilters" :key="filter">
                  <button class="box-filters__button" @click="removeFilter(filter)"></button>
                  <span class="box-filters__name">{{ filter }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">
            <div class="box__row">
              <div class="box__header" :class="{ 'box--togglable': !isBrandOpen }" @click="isBrandOpen = !isBrandOpen">برند ها</div>
              <div class="box__filter" v-show="isBrandOpen">
                <div class="box__content-container">
                  <div class="box__content">
                    <ul class="box__ul">
                      <li class="box__li">
                        <label class="ui-checkbox" data-fa="سامسونگ" data-en="Sumsung" data-serach="Sumsung سامسونگ">
                          <input type="checkbox" class="ui-checkbox__input" value="سامسونگ" v-model="selectedFilters" />
                          <span class="ui-checkbox__mark"></span>
                          سامسونگ
                        </label>
                      </li>
                      <li class="box__li">
                        <label class="ui-checkbox" data-fa="سونی" data-en="sony" data-serach="sony سونی">
                          <input type="checkbox" class="ui-checkbox__input" value="سونی" v-model="selectedFilters" />
                          <span class="ui-checkbox__mark"></span>
                          سونی
                        </label>
                      </li>
                      <li class="box__li">
                        <label class="ui-checkbox" data-fa="اپل" data-en="apple" data-serach="apple اپل">
                          <input type="checkbox" class="ui-checkbox__input" value="اپل" v-model="selectedFilters" />
                          <span class="ui-checkbox__mark"></span>
                          اپل
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box__row">
              <div class="box__header" :class="{ 'box--togglable': !isColorOpen }" @click="isColorOpen = !isColorOpen">رنگ ها</div>
              <div class="box__filter" v-show="isColorOpen">
                <div class="box__content-container">
                  <div class="box__content">
                    <ul class="box__ul">
                      <li class="box__li">
                        <label class="ui-checkbox" data-fa="مشکی" data-serach="balck مشکی">
                          <input type="checkbox" class="ui-checkbox__input" value="مشکی" v-model="selectedFilters" />
                          <span class="ui-checkbox__mark"></span>
                          مشکی
                          <span class="filter__color" style="background: rgb(0,0,0)"></span>
                        </label>
                      </li>
                      <li class="box__li">
                        <label class="ui-checkbox" data-fa="آبی" data-serach="blue آبی">
                          <input type="checkbox" class="ui-checkbox__input" value="آبی" v-model="selectedFilters" />
                          <span class="ui-checkbox__mark"></span>
                          آبی
                          <span class="filter__color" style="background: rgb(0,0,255)"></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="box box--switcher">
            <label class="ui-switcher">
              <input type="checkbox" class="ui-switcher__input" />
              <span class="ui-switcher__slider">
                <span class="ui-switcher__toggle"></span>
              </span>
              فقط کالای های موجود
            </label>
          </div>
        </div>
        <div class="page__content">
          <ul class="breadcrumb">
            <li class="breadcrumb__item breadcrumb__item--hide">
              <a href="" class="breadcrumb__link"><span class="breadcrumb__span">صفحه اصلی</span></a>
            </li>
            <li class="breadcrumb__item">
              <a href="" class="breadcrumb__link"><span class="breadcrumb__span">فهرست محصولات</span></a>
            </li>
          </ul>
          <div class="products">
            <router-link :to="{ name: 'Product', params: { id: item.id } }" v-for="item in mahsol" :key="item.id" class="products__item">
              <div class="card">
                <div class="card__image"><img :src="require(`../assets/img/slider/${item.id}.jpg`)" alt="" class="card__img" /></div>
                <div class="card__title">
                  {{ item.name }}
                </div>
                <div class="card__price">
                  <span class="card__total-price">{{ new Intl.NumberFormat().format(item.price) }} تومان</span>
                </div>
              <div class="card__icons">
                <span
                  ><svg style="width:32px;height:32px;color:#302E2F;" viewBox="0 0 24 24">
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Category",

  metaInfo: {
    title: "صفحه دسته بندی محصولات",
  },

  data: () => ({
    isBrandOpen: true,
    isColorOpen: true,
    selectedFilters: [],
  }),

  computed: {
    // products() {
    //   return this.$store.state.products;
    // },

    // ...mapState(["products"]),

    ...mapState({
      mahsol: "products",
    }),

    // nameOfUser(){
    //   return this.$store.getters.userName;
    // },

    NumberingOne() {
      return 1;
    },
  },

  methods: {
    removeAll() {
      this.selectedFilters = [];
    },
    removeFilter(filter) {
      this.selectedFilters = this.selectedFilters.filter((item) => item !== filter);
    },
    ...mapActions(["getProducts"]),
  },

  created() {
    // this.$store.dispatch("getProducts",'payload');
    this.getProducts();
  },
};
</script>

<style></style>
