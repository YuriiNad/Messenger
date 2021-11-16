import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickSignComponent } from './tick-sign.component';

describe('TickSignComponent', () => {
  let component: TickSignComponent;
  let fixture: ComponentFixture<TickSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
