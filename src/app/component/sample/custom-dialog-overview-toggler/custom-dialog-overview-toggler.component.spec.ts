import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialogOverviewTogglerComponent } from './custom-dialog-overview-toggler.component';

describe('CustomDialogOverviewTogglerComponent', () => {
  let component: CustomDialogOverviewTogglerComponent;
  let fixture: ComponentFixture<CustomDialogOverviewTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDialogOverviewTogglerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDialogOverviewTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
