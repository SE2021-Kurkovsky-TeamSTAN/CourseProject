import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaimResultComponent } from './add-claim-result.component';

describe('AddClaimResultComponent', () => {
  let component: AddClaimResultComponent;
  let fixture: ComponentFixture<AddClaimResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClaimResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClaimResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
