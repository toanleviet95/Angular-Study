import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormRoutingModule } from './dynamic-form.routing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormDetailComponent } from './components/form-detail/form-detail.component';
import { FormListComponent } from './components/form-list/form-list.component';

import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormRoutingModule
    ],
    declarations: [
        DynamicFormComponent,
        FormDetailComponent,
        FormListComponent
    ],
    providers: [QuestionControlService, QuestionService]
})

export class DynamicFormModule { }
