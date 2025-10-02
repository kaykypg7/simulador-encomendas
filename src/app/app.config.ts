import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withComponentInputBinding(), // Permite binding de parâmetros de rota aos inputs do componente
      // Removendo o withHashLocation para usar navegação de URL limpa
    )
    // Removida a hidratação para resolver problemas de incompatibilidade
  ]
};
