import Vue from 'vue';
import Book from './Book';

Vue.config.productionTip = false;
const app = new Vue(Book);
app.$mount();

export default{
  config: {
    enablePullDownRefresh: true
  }
}
