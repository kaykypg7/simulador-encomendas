import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ShipmentData {
  originZipCode: string;
  destinationZipCode: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  serviceType: string;
  declaredValue?: number;
}

interface ShippingResult {
  serviceName: string;
  price: number;
  deliveryTime: number;
  distance: number;
}

@Component({
  selector: 'app-price-simulator',
  imports: [FormsModule, CommonModule],
  templateUrl: './price-simulator.component.html',
  styleUrl: './price-simulator.component.css',
  standalone: true
})
export class PriceSimulatorComponent {
  shipmentData: ShipmentData = {
    originZipCode: '',
    destinationZipCode: '',
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    serviceType: ''
  };

  shippingResult: ShippingResult | null = null;

  calculateShipping() {
    // Em um projeto real, aqui você faria uma chamada a uma API de frete
    // Implementando um cálculo simulado para demonstração
    if (this.validateForm()) {
      // Simulação de cálculo
      const distance = this.calculateDistance(
        this.shipmentData.originZipCode,
        this.shipmentData.destinationZipCode
      );

      const volumetricWeight = this.calculateVolumetricWeight(
        this.shipmentData.length,
        this.shipmentData.width,
        this.shipmentData.height
      );

      const finalWeight = Math.max(volumetricWeight, this.shipmentData.weight);

      let baseCost: number;
      let deliveryDays: number;
      let serviceName: string;

      switch (this.shipmentData.serviceType) {
        case 'PAC':
          baseCost = 15 + (finalWeight * 2) + (distance * 0.01);
          deliveryDays = Math.ceil(distance / 150) + 3;
          serviceName = 'PAC - Econômico';
          break;
        case 'SEDEX':
          baseCost = 25 + (finalWeight * 2.5) + (distance * 0.02);
          deliveryDays = Math.ceil(distance / 300) + 1;
          serviceName = 'SEDEX - Expresso';
          break;
        case 'SEDEX10':
          baseCost = 40 + (finalWeight * 3) + (distance * 0.03);
          deliveryDays = Math.ceil(distance / 500) + 1;
          serviceName = 'SEDEX 10 - Entrega até às 10h';
          break;
        default:
          baseCost = 0;
          deliveryDays = 0;
          serviceName = '';
      }

      // Adicionar seguro se tiver valor declarado
      if (this.shipmentData.declaredValue && this.shipmentData.declaredValue > 0) {
        baseCost += this.shipmentData.declaredValue * 0.01; // 1% do valor como seguro
      }

      this.shippingResult = {
        serviceName: serviceName,
        price: parseFloat(baseCost.toFixed(2)),
        deliveryTime: deliveryDays,
        distance: distance
      };
    }
  }

  validateForm(): boolean {
    // Implementação básica de validação
    return (
      !!this.shipmentData.originZipCode &&
      !!this.shipmentData.destinationZipCode &&
      this.shipmentData.weight > 0 &&
      this.shipmentData.length > 0 &&
      this.shipmentData.width > 0 &&
      this.shipmentData.height > 0 &&
      !!this.shipmentData.serviceType
    );
  }

  calculateDistance(origin: string, destination: string): number {
    // Em um projeto real, você usaria uma API de geocodificação
    // Simulando uma distância baseada no CEP
    const originNum = parseInt(origin.replace('-', ''));
    const destNum = parseInt(destination.replace('-', ''));

    // Simulação simples baseada na diferença numérica dos CEPs
    const distance = Math.abs(originNum - destNum) / 1000;
    return Math.min(Math.max(distance, 50), 3000); // Limita entre 50 e 3000 km
  }

  calculateVolumetricWeight(length: number, width: number, height: number): number {
    // Fórmula comum: (comprimento x largura x altura) / 6000
    return (length * width * height) / 6000;
  }

  resetForm() {
    this.shipmentData = {
      originZipCode: '',
      destinationZipCode: '',
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      serviceType: ''
    };
    this.shippingResult = null;
  }
}
