<template>
  <main class="main">
    <div class="container">
      <div class="cart">
        <h1 class="cart__title">سبد خرید</h1>
        <form>
          <p style="text-align:center" v-if="cart.length < 1">YOUR CART IS EMPTY</p>
          <div class="cart__item" v-for="item in cart" :key="item.id">
            <div class="cart__row">
              <div class="cart__image">
                <a href="" class="cart__image-link"><img :src="require(`../assets/img/slider/${item.id}.jpg`)" alt="" class="cart__image-img"/></a>
              </div>
              <div class="cart__details">
                <h5 class="cart__details-h5">
                  <a href="" target="_blank" class="cart__details-link">{{ item.name }}</a>
                </h5>
                
                <div class="cart__deatils-code">تعداد :{{ item.quantity }}</div>
              </div>
              <div class="cart__amounts">
                <div class="cart__amounts-div">
                  <input
                    type="number"
                    class="txt"
                    placeholder="تعداد"
                    v-model.number="item.quantity"
                    max="1000"
                    min="1"
                    v-on:input="changeQuantity(item)"
                  />
                  <a href="#" onclick="removeCartItem(this)" class="cart__amounts-remove" v-on:click="removeProduct(item)">حذف</a>
                </div>
              </div>
              <div class="cart__total">
                <div class="cart__total-div">
                  <h6 class="cart__total-title">جمع</h6>
                  {{ new Intl.NumberFormat().format(item.price * item.quantity) }} تومان
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="cart__info">
          <div class="cart__coupon">
            <form action="">
              <div class="cart__coupon-div">
                <input type="text" placeholder="کوپن خود را بنویسد" class="cart__coupon-input" />
                <button @click.prevent class="btn-coupon">اعمال</button>
              </div>
            </form>
          </div>
          <div class="cart__table">
            <table>
              <tbody>
                <tr>
                  <th>جمع کل</th>
                  <td>{{ new Intl.NumberFormat().format(subtotal) }} تومان</td>
                </tr>
                <tr>
                  <th>وزن</th>
                  <td>700 گرم</td>
                </tr>
                <tr>
                  <th>مالیات</th>
                  <td>{{ new Intl.NumberFormat().format(tax) }} تومان</td>
                </tr>
                <tr>
                  <th>تخفیف</th>
                  <td class="text-red">0 تومان</td>
                </tr>
                <tr>
                  <th>قابل پرداخت</th>
                  <td class="text-blue">{{ new Intl.NumberFormat().format(total) }} تومان</td>
                </tr>
              </tbody>
            </table>
            <button class="btn btn--brand btn--boxshadow">ثبت سفارش</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["cart"]),
    subtotal() {
      return this.cart.reduce((prev, current) => {
        return (current.price * current.quantity) + prev;
      }, 0);
    },
    tax(){
      return this.subtotal * 0.02;
    },
    total() {
      return this.subtotal + this.tax;
    },
  },
  methods: {
    changeQuantity(item) {
      this.$store.commit("CHANGE_QUANTITY", item);
    },
    ...mapActions(["removeProduct"]),
  },
};
</script>

<style></style>
