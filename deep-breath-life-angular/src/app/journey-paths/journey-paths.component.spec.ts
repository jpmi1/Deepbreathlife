import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPathsComponent } from './journey-paths.component';

describe('JourneyPathsComponent', () => {
  let component: JourneyPathsComponent;
  let fixture: ComponentFixture<JourneyPathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JourneyPathsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
