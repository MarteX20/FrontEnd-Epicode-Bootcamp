import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostsComponentComponent } from './active-posts-component.component';

describe('ActivePostsComponentComponent', () => {
  let component: ActivePostsComponentComponent;
  let fixture: ComponentFixture<ActivePostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePostsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
