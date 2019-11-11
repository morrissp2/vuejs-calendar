import './style.scss';
import Vue from 'vue';
Vue.config.devtools = true;

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
});

import VueCalendar from './entry.js'
VueCalendar(events).$mount('#app');
