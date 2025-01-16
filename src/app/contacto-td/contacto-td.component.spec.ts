import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoTDComponent } from './contacto-td.component';

describe('ContactoTDComponent', () => {
  let component: ContactoTDComponent;
  let fixture: ComponentFixture<ContactoTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoTDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
