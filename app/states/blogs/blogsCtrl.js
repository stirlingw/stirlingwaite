
var marked = require('marked');

export default ngModule => {
    ngModule.controller('BlogsCtrl', ['$scope', '$sce', '$state', 'SuperModelService',
        function($scope, $sce, $state, SuperModelService) {

            $scope.blog = SuperModelService.getBlog($state.params.name);

            //console.log($scope.blog);

            if($scope.blog !== undefined) {
                marked.setOptions({
                    renderer: new marked.Renderer(),
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: true,
                    smartLists: true,
                    smartypants: false
                });

                var fileContent = require("raw!./md/" + $scope.blog.file);
                var markedContent = marked(fileContent);
                $scope.fileContent = $sce.trustAsHtml(markedContent);
            }
        }
    ]);
}