import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSubscriptionComponent } from './available-subscription.component';

describe('AvailableSubscriptionComponent', () => {
  let component: AvailableSubscriptionComponent;
  let fixture: ComponentFixture<AvailableSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
