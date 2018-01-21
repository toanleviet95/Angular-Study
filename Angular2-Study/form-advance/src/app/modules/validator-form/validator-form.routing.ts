import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidatorFormComponent } from './validator-form.component';

const routes: Routes = [
    {
        path: '',
        component: ValidatorFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ValidatorFormRoutingModule {}
