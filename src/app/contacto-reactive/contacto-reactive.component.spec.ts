import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoReactiveComponent } from './contacto-reactive.component';

describe('ContactoReactiveComponent', () => {
  let component: ContactoReactiveComponent;
  let fixture: ComponentFixture<ContactoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
