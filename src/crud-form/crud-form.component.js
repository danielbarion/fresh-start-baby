import { crudApp } from '../crud-app.module';
import template from './crud-form.component.html';
import './crud-form.component.scss';

class CrudFormController {
  static get $inject() {
    return ['$scope', '$element'];
  }

  constructor($scope, $element) {
    Object.assign(this, { $scope, $: $element[0] });

    this.open = false;
    this.title = '';
    this.description = '';
  }

  $onInit() {
    Object.assign(this.$, { toggle: this.toggle.bind(this) });
  }

  toggle() {
    this.open = !this.open;

    if (this.open) {
      this.$.setAttribute('open', '');

      setTimeout(() => this.$.querySelector('#title').focus(), 700);
    } else this.$.removeAttribute('open');
  }

  clean() {
    this.title = '';
    this.description = '';
  }

  cancel() {
    if (this.open) this.toggle();
    this.clean();
  }

  confirm() {
    this.onFinish({ title: this.title, description: this.description });
    if (this.open) this.toggle();
    this.clean();
  }
}

class CrudForm {
  constructor() {
    this.template = template;
    this.bindings = {
      title: '=?',
      description: '=?',
      onFinish: '&?',
    };
    this.controller = CrudFormController;
  }
}

crudApp.component('crudForm', new CrudForm());
