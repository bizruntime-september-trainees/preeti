import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableeditingComponent } from './enableediting.component';

describe('EnableeditingComponent', () => {
  let component: EnableeditingComponent;
  let fixture: ComponentFixture<EnableeditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableeditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableeditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
