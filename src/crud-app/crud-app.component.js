import { crudApp } from '../crud-app.module';
import template from './crud-app.component.html';
import './crud-app.component.scss';

class CrudAppController {
  static get $inject() {
    return ['$scope', '$element', '$http'];
  }

  constructor($scope, $element, $http) {
    Object.assign(this, { $scope, $http, $: $element[0] });

    this.crudList = [];
  }

  $onInit() {
    if (this.$.hasAttribute('unresolved')) this.$.removeAttribute('unresolved');

    // this.$http().then();
    this.crudList = [{ title: 'Default', description: 'Olá Mundo' }];
  }

  createItem() {
    console.log('Create Item');
  }
}

class CrudApp {
  constructor() {
    this.template = template;
    this.bindings = {};
    this.controller = CrudAppController;
  }
}

crudApp.component('crudApp', new CrudApp());
