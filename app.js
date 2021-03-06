Vue.use(VueCarousel);

new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    discordURL: 'https://chat.vuejs.org',
    forumURL: 'http:/a/forum.vuejs.org/'
  },
  methods: {
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    }
  }
});