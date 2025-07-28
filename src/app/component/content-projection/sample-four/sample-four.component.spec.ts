import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SampleFourComponent} from './sample-four.component';

describe('SampleFourComponent', () => {
  let component: SampleFourComponent;
  let fixture: ComponentFixture<SampleFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleFourComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SampleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
