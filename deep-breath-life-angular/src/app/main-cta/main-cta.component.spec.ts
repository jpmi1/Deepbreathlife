import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCTAComponent } from './main-cta.component';

describe('MainCTAComponent', () => {
  let component: MainCTAComponent;
  let fixture: ComponentFixture<MainCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
