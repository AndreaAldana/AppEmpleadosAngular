import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmpleadosComponent } from './count-empleados.component';

describe('CountEmpleadosComponent', () => {
  let component: CountEmpleadosComponent;
  let fixture: ComponentFixture<CountEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
