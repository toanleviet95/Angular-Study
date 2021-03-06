import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'reactive-form',
      pathMatch: 'full'
    },
    {
        path: 'reactive-form',
        loadChildren: './modules/reactive-form/reactive-form.module#ReactFormModule'
    },
    {
        path: 'dynamic-form',
        loadChildren: './modules/dynamic-form/dynamic-form.module#DynamicFormModule'
    },
    {
        path: 'validator-form',
        loadChildren: './modules/validator-form/validator-form.module#ValidatorFormModule'
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
