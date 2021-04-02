import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClaimComponent } from './get-claim.component';

describe('GetClaimComponent', () => {
  let component: GetClaimComponent;
  let fixture: ComponentFixture<GetClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
