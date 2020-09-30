import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfbindingComponent } from './selfbinding.component';

describe('SelfbindingComponent', () => {
  let component: SelfbindingComponent;
  let fixture: ComponentFixture<SelfbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
