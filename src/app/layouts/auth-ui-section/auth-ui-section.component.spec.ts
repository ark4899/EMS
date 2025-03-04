import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUiSectionComponent } from './auth-ui-section.component';

describe('AuthUiSectionComponent', () => {
  let component: AuthUiSectionComponent;
  let fixture: ComponentFixture<AuthUiSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUiSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
