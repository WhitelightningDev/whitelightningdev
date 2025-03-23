import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitionSuccessComponent } from './submition-success.component';

describe('SubmitionSuccessComponent', () => {
  let component: SubmitionSuccessComponent;
  let fixture: ComponentFixture<SubmitionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitionSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
