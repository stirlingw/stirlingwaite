const Angular = require('angular');
require('oclazyload');

require('./states/home/homeModule')(Angular);
require('./states/about/aboutModule')(Angular);
require('./states/contact/contactModule')(Angular);
require('./states/blog/blogModule')(Angular);
require('./states/blogs/blogsModule')(Angular);


const ngModule = Angular.module('myApp', [require('angular-ui-router'), 'oc.lazyLoad', 'homeApp', 'aboutApp', 'contactApp', 'blogApp', 'blogsApp']);

require('./config')(ngModule, Angular);
require('./shared/services/superModel')(ngModule, Angular);
require('./components/BlogPosts/BlogPostsDirective')(ngModule, Angular);

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});