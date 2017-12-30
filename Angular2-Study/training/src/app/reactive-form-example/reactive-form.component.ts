import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class FormReactiveComponent implements OnInit {
  formReactive: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.formReactive = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   subjects: new FormGroup({
    //     nodejs: new FormControl(false),
    //     angular: new FormControl(false),
    //     reactjs: new FormControl(false)
    //   })
    // })

    this.formReactive = this.formBuilder.group({
      email: ['', [Validators.required, gmailValidator]],
      password: ['', Validators.required],
      subjects: this.formBuilder.group({
          nodejs: false,
          angular: false,
          reactjs: false
        })
    });
  }

  onSubmit() {
    console.log(this.formReactive.value);
  }
}

function gmailValidator(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
