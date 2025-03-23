import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitionErrorComponent } from './submition-error.component';

describe('SubmitionErrorComponent', () => {
  let component: SubmitionErrorComponent;
  let fixture: ComponentFixture<SubmitionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitionErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
