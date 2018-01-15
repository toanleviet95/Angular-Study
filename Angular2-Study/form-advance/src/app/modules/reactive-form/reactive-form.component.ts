import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address, states } from '../../models/data-model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.createForm();
  }

  createForm() {
    // this.heroForm = new FormGroup({
    //   name: new FormControl()
    // });
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: this.formBuilder.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

}
