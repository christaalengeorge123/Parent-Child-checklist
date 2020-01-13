import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentchildComponent} from './parentchild/parentchild.component';


const routes: Routes = [{
  path:'parentchild',
  component:ParentchildComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
