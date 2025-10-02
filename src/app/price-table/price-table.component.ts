import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface PricingEntry {
  origin: string;
  originRegion: string;
  destination: string;
  destinationRegion: string;
  serviceType: string;
  maxWeight: number;
  basePrice: number;
  deliveryTime: string;
}

interface FilterOptions {
  originRegion: string;
  destinationRegion: string;
  serviceType: string;
}

@Component({
  selector: 'app-price-table',
  imports: [CommonModule, FormsModule, CurrencyPipe, RouterLink],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.css',
  standalone: true
})
export class PriceTableComponent implements OnInit {
  // Lista completa de preços
  allPrices: PricingEntry[] = [];

  // Lista filtrada para exibição
  filteredPrices: PricingEntry[] = [];

  // Filtros
  filters: FilterOptions = {
    originRegion: 'all',
    destinationRegion: 'all',
    serviceType: 'all'
  };

  ngOnInit() {
    // Carregando dados (em um app real, isso viria de um serviço)
    this.loadPricingData();
    this.applyFilters();
  }

  loadPricingData() {
    // Dados mockados para demonstração
    this.allPrices = [
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Rio de Janeiro - RJ',
        destinationRegion: 'sudeste',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 25.50,
        deliveryTime: '2-3'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Rio de Janeiro - RJ',
        destinationRegion: 'sudeste',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 45.80,
        deliveryTime: '1'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Rio de Janeiro - RJ',
        destinationRegion: 'sudeste',
        serviceType: 'SEDEX10',
        maxWeight: 10,
        basePrice: 69.90,
        deliveryTime: '1 (até 10h)'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Belo Horizonte - MG',
        destinationRegion: 'sudeste',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 29.90,
        deliveryTime: '3-4'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Belo Horizonte - MG',
        destinationRegion: 'sudeste',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 52.40,
        deliveryTime: '1-2'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Salvador - BA',
        destinationRegion: 'nordeste',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 42.80,
        deliveryTime: '5-6'
      },
      {
        origin: 'São Paulo - SP',
        originRegion: 'sudeste',
        destination: 'Salvador - BA',
        destinationRegion: 'nordeste',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 79.90,
        deliveryTime: '2-3'
      },
      {
        origin: 'Rio de Janeiro - RJ',
        originRegion: 'sudeste',
        destination: 'Fortaleza - CE',
        destinationRegion: 'nordeste',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 49.90,
        deliveryTime: '6-8'
      },
      {
        origin: 'Rio de Janeiro - RJ',
        originRegion: 'sudeste',
        destination: 'Fortaleza - CE',
        destinationRegion: 'nordeste',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 89.90,
        deliveryTime: '2-3'
      },
      {
        origin: 'Porto Alegre - RS',
        originRegion: 'sul',
        destination: 'Florianópolis - SC',
        destinationRegion: 'sul',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 22.50,
        deliveryTime: '2'
      },
      {
        origin: 'Porto Alegre - RS',
        originRegion: 'sul',
        destination: 'Florianópolis - SC',
        destinationRegion: 'sul',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 39.90,
        deliveryTime: '1'
      },
      {
        origin: 'Manaus - AM',
        originRegion: 'norte',
        destination: 'Belém - PA',
        destinationRegion: 'norte',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 59.90,
        deliveryTime: '7-10'
      },
      {
        origin: 'Manaus - AM',
        originRegion: 'norte',
        destination: 'Belém - PA',
        destinationRegion: 'norte',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 109.90,
        deliveryTime: '3-4'
      },
      {
        origin: 'Brasília - DF',
        originRegion: 'centro-oeste',
        destination: 'Goiânia - GO',
        destinationRegion: 'centro-oeste',
        serviceType: 'PAC',
        maxWeight: 30,
        basePrice: 19.90,
        deliveryTime: '1-2'
      },
      {
        origin: 'Brasília - DF',
        originRegion: 'centro-oeste',
        destination: 'Goiânia - GO',
        destinationRegion: 'centro-oeste',
        serviceType: 'SEDEX',
        maxWeight: 30,
        basePrice: 35.50,
        deliveryTime: '1'
      }
    ];
  }

  applyFilters() {
    this.filteredPrices = this.allPrices.filter(price => {
      // Filtra por região de origem
      const originMatches = this.filters.originRegion === 'all' ||
        price.originRegion === this.filters.originRegion;

      // Filtra por região de destino
      const destMatches = this.filters.destinationRegion === 'all' ||
        price.destinationRegion === this.filters.destinationRegion;

      // Filtra por tipo de serviço
      const serviceMatches = this.filters.serviceType === 'all' ||
        price.serviceType === this.filters.serviceType;

      // Retorna true se todos os filtros forem atendidos
      return originMatches && destMatches && serviceMatches;
    });
  }
}
