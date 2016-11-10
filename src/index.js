import angular from 'angular';
import appModule from 'config';

angular.bootstrap(document, [appModule.name]);

const testLog = 'Dev-Server running!';
console.log(testLog);
