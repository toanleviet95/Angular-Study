import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './child.component';

@Component({
  selector: 'app-view-parent',
  template: `
  Example View Child:<br/>
  <button (click)="addChild()">Add</button>
  <app-view-child></app-view-child>
  `
})

export class ViewParentComponent {
  @ViewChild(ViewChildComponent)
  myChild: ViewChildComponent;

  addChild() {
    this.myChild.value++;
  }
}
