import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentProcessedComponent } from './components/payment-processed/payment-processed.component';
import { FormsContainerComponent } from './components/forms-container/forms-container.component';
import { AvailableLangGuard } from './guards/available-lang.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'payment-proceed/en', canActivate: [AvailableLangGuard] },
  { path: 'main/:lang/:hash', pathMatch: 'full', component: FormsContainerComponent, canActivate: [AvailableLangGuard] },
  { path: 'payment-proceed/:lang', pathMatch: 'full', component: PaymentProcessedComponent, canActivate: [AvailableLangGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'payment-proceed/en', canActivate: [AvailableLangGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
