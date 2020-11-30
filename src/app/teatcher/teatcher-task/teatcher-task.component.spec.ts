import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatcherTaskComponent } from './teatcher-task.component';

describe('TeatcherTaskComponent', () => {
  let component: TeatcherTaskComponent;
  let fixture: ComponentFixture<TeatcherTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeatcherTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatcherTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
