import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirImagenComponent } from './consumir-imagen.component';

describe('ConsumirImagenComponent', () => {
  let component: ConsumirImagenComponent;
  let fixture: ComponentFixture<ConsumirImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumirImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumirImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
