'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var $ = require('../shims/jquery');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// var Fixedsticky = require('../../bower_components/filament-fixed/fixedfixed.js');
>>>>>>> Change menubar.
=======
>>>>>>> Finish homepage v2 mockup no 1.
=======
=======
// var Fixedsticky = require('../../bower_components/filament-fixed/fixedfixed.js');
>>>>>>> Change menubar.
>>>>>>> Change menubar.
=======
>>>>>>> Finish homepage v2 mockup no 1.
// var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());

    // this.quoteBoxView = new QuoteBoxView({
    //   model: new Backbone.Model({
    //     content: 'Monica Macovei, apărătoarea iconică a libertăților românilor.',
    //     author: 'Le Monde',
        // authorLogo: 'assets/img/logo-le-monde.png'
    //   }),
    //   el: this.$('[role="quote-box"]')
    // });

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Change menubar.
    $(window).scroll(function() {
      var scrollPos = $(this).scrollTop();
      if(scrollPos > 350) {
          $(".navbar").addClass('navbar-dimmed') // ->> css('background-color', '#232A50');
      } else {
          $(".navbar").removeClass('navbar-dimmed') // ->> css('background-color', '#232A50');
=======
    $(document).scroll(function() {
=======
    $(window).scroll(function() {
>>>>>>> Refactoring.
      var scrollPos = $(this).scrollTop();
      if(scrollPos > 350) {
          $(".navbar").addClass('navbar-dimmed') // ->> css('background-color', '#232A50');
      } else {
<<<<<<< HEAD
<<<<<<< HEAD
          $(".navbar").css('background-color', 'rgba(0,0,0,0.25)');
>>>>>>> Finish homepage v2 mockup no 1.
=======
          $(".navbar").css('background-color', 'rgba(0,0,0,0.50)');
>>>>>>> Update the photoStripe.
=======
          $(".navbar").removeClass('navbar-dimmed') // ->> css('background-color', '#232A50');
>>>>>>> Refactoring.
=======
    $(document).scroll(function() {
=======
=======
>>>>>>> Finish homepage v2 mockup no 1.
    $(window).scroll(function() {
>>>>>>> Refactoring.
      var scrollPos = $(this).scrollTop();
      if(scrollPos > 350) {
          $(".navbar").addClass('navbar-dimmed') // ->> css('background-color', '#232A50');
      } else {
<<<<<<< HEAD
<<<<<<< HEAD
          $(".navbar").css('background-color', 'rgba(0,0,0,0.25)');
>>>>>>> Finish homepage v2 mockup no 1.
=======
          $(".navbar").css('background-color', 'rgba(0,0,0,0.50)');
>>>>>>> Update the photoStripe.
=======
          $(".navbar").removeClass('navbar-dimmed') // ->> css('background-color', '#232A50');
>>>>>>> Refactoring.
=======
    var container = this.$('#posts')[0];
      var x = new window.Masonry( container, {
        itemSelector: '.item',
        columnWidth: 20,
      });

      if ($(window).width() > 768) {
        x.gutter = 10;
>>>>>>> Create special page for Posts.
      }
      else {
        x.gutter = 90;
        }
      x.bindResize();
      setTimeout(function () {
        x.layout();
      }, 100);
    return this;
  }
});
