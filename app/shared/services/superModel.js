export default (ngModule, Angular) => {
    ngModule.service('SuperModelService', ['$http','$q',
    function( $http, $q) {
        'use strict';
        var Service = {};

        var foundBlogs = [
            {
                id: 0,
                date: '2015-08-05',
                title: 'It was a dark',
                subTitle: 'and stormy knight!',
                name: "stormy-knight",
                file: 'stormy-knight.md',
                img: 'stormy-knight.jpg'
            },
            {
                id: 1,
                date: '2015-08-07',
                title: 'Stirling Is Awesome',
                subTitle: 'Really awesome!',
                name: "stirling-awesome",
                file: 'stirling-awesome.md',
                img: 'stirling-awesome.jpg'
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