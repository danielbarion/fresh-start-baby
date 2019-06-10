import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';

export const crudApp = angular.module('crudApp', [
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngResource',
  'ngSanitize',
]);
