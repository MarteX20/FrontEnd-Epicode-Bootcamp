import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPoteriComponent } from './super-poteri.component';

describe('SuperPoteriComponent', () => {
  let component: SuperPoteriComponent;
  let fixture: ComponentFixture<SuperPoteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPoteriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPoteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
