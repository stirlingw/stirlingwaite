export default (ngModule, Angular) => {
    ngModule.service('SuperModelService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};

        var foundBlogs = [
            {
                id: 0,
                date: '2015-09-03',
                title: 'Marked Down With Marked, Angular, and Webpack Loaders',
                subTitle: '',
                name: "marked-down-with-marked",
                file: 'marked-down-with-marked.md',
                img: 'marked-down-with-marked.jpg'
            }
        ];

        Service.getBlog = function(blogName){
            var blog = _.findWhere(foundBlogs, {name: blogName});
            return blog;
        };

        Service.getBlogs = function(){
            return foundBlogs;
        };

        return Service;
    }]);
}