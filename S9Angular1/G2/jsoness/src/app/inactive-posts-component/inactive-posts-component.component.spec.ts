import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostsComponentComponent } from './inactive-posts-component.component';

describe('InactivePostsComponentComponent', () => {
  let component: InactivePostsComponentComponent;
  let fixture: ComponentFixture<InactivePostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivePostsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactivePostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
