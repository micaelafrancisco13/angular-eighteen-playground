import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomDialogOverviewComponent} from './custom-dialog-overview.component';

describe('CustomDialogOverviewComponent', () => {
  let component: CustomDialogOverviewComponent;
  let fixture: ComponentFixture<CustomDialogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDialogOverviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
