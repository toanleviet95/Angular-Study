import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    Example ng-content:<br/>
    <div class="card">
      <div class="header">
        <ng-content select=".card-header"></ng-content>
      </div>
      <div class="body">
        <ng-content select=".card-body"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.card-header{
      font-size: 15px;
      font-weight: bold;
    }`
  ]
})

export class ContentComponent {

}
