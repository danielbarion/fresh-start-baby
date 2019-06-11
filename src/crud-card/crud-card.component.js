import { crudApp } from '../crud-app.module';
import template from './crud-card.component.html';
import './crud-card.component.scss';

class CrudCardController {
  static get $inject() {
    return ['$scope', '$element'];
  }

  constructor($scope, $element) {
    Object(this, { $scope, $: $element[0] });

    this.title = '';
    this.description = '';
  }
}

class CrudCard {
  constructor() {
    this.template = template;
    this.bindings = {
      title: '=?',
      description: '=?',
    };
    this.controller = CrudCardController;
  }
}

crudApp.component('crudCard', new CrudCard());
