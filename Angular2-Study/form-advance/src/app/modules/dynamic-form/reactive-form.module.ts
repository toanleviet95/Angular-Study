import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactFormRoutingModule } from './reactive-form.routing';

import { ReactiveFormComponent } from './reactive-form.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

import { HeroService } from './services/hero.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReactFormRoutingModule
    ],
    declarations: [
        ReactiveFormComponent,
        HeroDetailComponent,
        HeroListComponent
    ],
    providers: [HeroService]
})

export class ReactFormModule { }
