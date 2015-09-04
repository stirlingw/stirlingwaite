
export default (ngModule, Angular) => {
    ngModule.directive('blogPostsDirective', ['$http', 'SuperModelService', function ($http, SuperModelService) {
        'use strict';
        return {
            restrict: 'EA',
            scope: true,
            replace: true,
            templateUrl: './components/BlogPosts/BlogPostsView.html',
            //template: '<div>hi</div>',
            link: function (scope, element, attrs) {
                scope.foundBlogs = SuperModelService.getBlogs();
            }
        };
    }]);
}