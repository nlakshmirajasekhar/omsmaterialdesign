import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIComponent } from './order-i.component';

describe('OrderIComponent', () => {
  let component: OrderIComponent;
  let fixture: ComponentFixture<OrderIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
