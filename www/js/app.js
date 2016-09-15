/**
 * Created by lin on 2016/9/15.
 */
angular.module('todo', ['ionic'])

    .controller('TodoCtrl', function($scope) {
        $scope.tasks = [
            { title: 'aaaa' },
            { title: 'bbbb' },
            { title: 'cccc' },
            { title: 'dddd' }
        ];
    });