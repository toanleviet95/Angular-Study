import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../../models/question-base';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  providers: [ QuestionControlService ]
})
export class FormListComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}