import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `<h3>{{value}}</h3>`
})

export class ViewChildComponent {
  value = 0;
}




