import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentProcessedComponent } from './components/payment-processed/payment-processed.component';
import { FormsContainerComponent } from './components/forms-container/forms-container.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/en',
  },
  {
    path: 'main/:lang',
    pathMatch: 'full',
    component: FormsContainerComponent,
  },
  {
    path: 'payment-proceed/:lang',
    pathMatch: 'full',
    component: PaymentProcessedComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main/en',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
