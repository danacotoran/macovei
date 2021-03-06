'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Posts = require('./models/posts-collection');
var Router = require('./router');
var loadcss = require('./lib/loadcss');
var browser = require('bowser').browser;
var templates = require('./lib/posts-json.json');

module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    var posts = [];
    for (var key in templates) {
      if (templates.hasOwnProperty(key)) {
        posts.push({ slug: key });
      }
    }

    // Create our global 'posts' object.
    this.posts = new Posts(posts);

    // Init our URL handlers and the history tracker.
    this.router = new Router();

    $(document).ready(function () {
      if (browser.msie) {
        $('html').addClass('msie');
      }
      if (browser.android || browser.windowsphone || browser.ios || browser.blackberry) {
        $('.photoStripe video').remove();
      }

      // Asynchronously load our main CSS file.
      loadcss('/css/main.css');
      loadcss('http://fonts.googleapis.com/css?family=Open+Sans:' +
              '300italic,400italic,700italic,400,700,300|Source+Serif+Pro:400,600&subset=latin,latin-ext');

      // Initialize our main view.
      var mainView = self.view = new MainView({
        el: document.body
      });

      // Render it.
      mainView.render();

      // Listen for new pages from the router.
      self.router.on('newPage', mainView.setPage, mainView);

      var isLocal = false;
      if (window.location.host.indexOf('localhost') !== -1) {
        // Use non-pushState URLs for localhost dev for BrowserSync.
        isLocal = true;
      }
      var usePushState = !isLocal;

      // Start our router and show the appropriate page.
      // If start method returns false, it means the route was not found.
      if (!self.router.history.start({ pushState: usePushState, root: '/' })) {
        self.navigate('404');
      }
    });
  }),
  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true });
  }
};

module.exports.launch();
