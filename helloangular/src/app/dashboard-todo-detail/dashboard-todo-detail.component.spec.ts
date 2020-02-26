import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTodoDetailComponent } from './dashboard-todo-detail.component';

describe('DashboardTodoDetailComponent', () => {
  let component: DashboardTodoDetailComponent;
  let fixture: ComponentFixture<DashboardTodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTodoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
