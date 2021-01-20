import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Component
import { VmComponent } from "./vm/vm.component";
import { VmListComponent } from "./vm-list/vm-list.component";
import { VmViewComponent } from "./vm-view/vm-view.component";

const routes: Routes = [{
    path: '',
    component: VmComponent,
    children: [
        {
            path: 'list',
            component: VmListComponent
        },
        {
            path: 'view',
            component: VmViewComponent
        },
        {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
        }
    ]
}];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VmRoutingModule { }

export const VmComponents = [
    VmComponent,
    VmListComponent,
    VmViewComponent
];
