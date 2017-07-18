import {ModuleWithProviders, NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {
      path: 'index',
      component: IndexComponent
    },{
      path: 'about',
      component: AboutComponent
    },{
      path: 'detail',
      component: DetailComponent
    },{
      path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    }
];

const routing: ModuleWithProviders  = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    routing
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
