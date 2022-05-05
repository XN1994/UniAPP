import Vue from "vue";
import Vuex from "vuex";

// 班级信息
import classes from './modules/classes.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    classes,
  }
});