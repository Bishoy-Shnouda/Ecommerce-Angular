import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserProductComponent } from './inser-product.component';

describe('InserProductComponent', () => {
  let component: InserProductComponent;
  let fixture: ComponentFixture<InserProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
