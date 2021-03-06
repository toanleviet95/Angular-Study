import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../../models/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './form-detail.component.html'
})
export class FormDetailComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
