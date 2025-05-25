import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRoutineFormComponent } from './free-routine-form.component';

describe('FreeRoutineFormComponent', () => {
  let component: FreeRoutineFormComponent;
  let fixture: ComponentFixture<FreeRoutineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeRoutineFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeRoutineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
