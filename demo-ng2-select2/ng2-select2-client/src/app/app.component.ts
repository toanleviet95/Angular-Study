import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: Select2Options;

  ngOnInit() {
    this.options = {
      ajax: {
        url: 'http://localhost:3000/api/accounts/search',
        dataType: 'json',
        delay: 1000,
        data: (param) => {
          return {
            searchText: param.term
          };
        },
        processResults: (data, params) => {
          const result = [];
          for (let i = 0; i < data.length; i++) {
            result.push({
              id: i,
              text: data[i].username + ' - ' + data[i].email
            });
          }
          return {
            results: result,
          };
        },
        cache: true
      },
      placeholder: 'Search Username or Email',
      minimumInputLength: 3
    };
  }

}
