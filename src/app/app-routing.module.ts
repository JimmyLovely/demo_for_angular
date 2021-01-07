import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'vm',
    loadChildren: () => import('./vm/vm.module').then(m => m.VmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }