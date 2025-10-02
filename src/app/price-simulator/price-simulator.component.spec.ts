import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSimulatorComponent } from './price-simulator.component';

describe('PriceSimulatorComponent', () => {
  let component: PriceSimulatorComponent;
  let fixture: ComponentFixture<PriceSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
