import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChildComponent } from './output-example/child.component';
import { ParentComponent } from './output-example/parent.component';
import { ViewChildComponent } from './view-child-example/child.component';
import { ViewParentComponent } from './view-child-example/parent.component';
import { ContentComponent } from './ng-content-example/content.component';
import { PipesComponent } from './pipes/pipes.component';
import { IpComponent } from './http-example/ip.component';
import { FormComponent } from './form-example/form.component';
import { FormReactiveComponent } from './reactive-form-example//reactive-form.component';

import { RoundPipe } from './custom-pipes/round.pipes';

import { IpService } from './http-example/ip.service';



@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    PersonComponent,
    ListPersonComponent,
    ChildComponent,
    ParentComponent,
    ViewChildComponent,
    ViewParentComponent,
    ContentComponent,
    PipesComponent,
    IpComponent,
    FormComponent,
    FormReactiveComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
