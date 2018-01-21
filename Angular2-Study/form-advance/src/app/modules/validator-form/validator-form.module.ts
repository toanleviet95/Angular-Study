import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFormRoutingModule } from './validator-form.routing';

import { ValidatorFormComponent } from './validator-form.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

import { ForbiddenValidatorDirective } from '../../shared/forbidden-name.directive';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ValidatorFormRoutingModule
    ],
    declarations: [
        HeroFormComponent,
        ValidatorFormComponent,
        ForbiddenValidatorDirective
    ],
    providers: []
})

export class ValidatorFormModule { }
