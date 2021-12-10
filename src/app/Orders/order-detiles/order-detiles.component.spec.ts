import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetilesComponent } from './order-detiles.component';

describe('OrderDetilesComponent', () => {
  let component: OrderDetilesComponent;
  let fixture: ComponentFixture<OrderDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
