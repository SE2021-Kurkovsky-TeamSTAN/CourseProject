import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClaimResultComponent } from './get-claim-result.component';

describe('GetClaimResultComponent', () => {
  let component: GetClaimResultComponent;
  let fixture: ComponentFixture<GetClaimResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClaimResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClaimResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
