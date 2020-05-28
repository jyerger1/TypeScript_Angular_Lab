import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';

const routes: Routes = [
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: CompTwoComponent },
  { path: 'three', component: CompThreeComponent },
  { path: '', component: CompOneComponent },
  // empty path sets default page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
