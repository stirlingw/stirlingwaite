export default (ngModule, Angular) => {
    ngModule.directive('blogPostsDirective', ['$http', 'SuperModelService', function ($http, SuperModelService) {
        'use strict';
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: './components/BlogPosts/blogPostsView.html',
            link: function (scope, element, attrs) {
                scope.foundBlogs = SuperModelService.getBlogs();
            }
        };
    }]);
}