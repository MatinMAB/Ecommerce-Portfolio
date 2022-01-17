import { createStore } from "vuex";
import axios from "axios";
// import state from "./state.js";
// import getters from "./getters.js";
// import mutations from "./mutations.js";
// import actions from "./actions.js";

// import user from "./modules/user";
// import product from "./modules/product";

const store = createStore({
  // START STATES OF VUEX
  state() {
    return {
      products: [],
      cart: JSON.parse(localStorage.getItem("Cart"))?.cart || [],
    };
  },
  // END STATES OF VUEX

  // START GETTERS OF VUEX
  getters: {
    getProduct: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
  // END GETTERS OF VUEX

  // START MUTATIONS OF VUEX
  mutations: {
    SET_PRODUCT(state, data) {
      state.products = data;
    },
    ADD_PRODUCT_TO_CART(state, item) {
      if (
        state.cart.find((product) => {
          return product.id === item.id;
        })
      ) {
        state.cart.find((product) => {
          if (product.id === item.id) product.quantity++;
        });
      } else {
        console.log("1");
        state.cart.push({ ...item, quantity: 1 });
      }

      // state.cart.find((product) => {
      //   if (product.id !== item.id) {
      //     console.log(true);
      //   }
      // });
    },
    CHANGE_QUANTITY(state, data) {
      state.cart.find((product) => {
        if (product.id === data.id) {
          product.quantity = data.quantity;
          localStorage.setItem("Cart", JSON.stringify(state));
        }
      });
    },
    REMOVE_PRODUCT(state, item) {
      state.cart = state.cart.filter((product) => product.id !== item.id);
    },
  },
    // END MUTATIONS OF VUEX
    
    // START ACTIONS OF VUEX
  actions: {
    async getProducts(context) {
      try {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/MatinMAB/89d1061493743b1a8b89c45534b1f0c4/raw/f0ecb1207da4a6cbeb42786403798deb950a6367/Products"
        );
        context.commit("SET_PRODUCT", data);
      } catch (error) {
        console.log(error.message);
      }
    },
    addToCart(context, payload) {
      context.commit("ADD_PRODUCT_TO_CART", payload);
      localStorage.setItem("Cart", JSON.stringify(context.state));
    },
    removeProduct(context, payload) {
      context.commit("REMOVE_PRODUCT", payload);
      localStorage.setItem("Cart", JSON.stringify(context.state));
    },
  },
 // END ACTIONS OF VUEX

  // modules: {
  //   product,
  //   user,
  // },
});

export default store;
