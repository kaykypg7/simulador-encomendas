import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriceSimulatorComponent } from './price-simulator/price-simulator.component';
import { PriceTableComponent } from './price-table/price-table.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'price-simulator', component: PriceSimulatorComponent },
    { path: 'price-table', component: PriceTableComponent },
    { path: '**', redirectTo: '' } // Redireciona qualquer rota não encontrada para a home
];
