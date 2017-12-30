import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  Example Output:<br/>
  {{value}}<br/>
  <app-child (myClick)="changeValue($event)"></app-child>
  `
})

export class ParentComponent {
  value = 0;
  changeValue(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
}
