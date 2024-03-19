import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubscriptionsComponent } from './active-subscriptions.component';

describe('ActiveSubscriptionsComponent', () => {
  let component: ActiveSubscriptionsComponent;
  let fixture: ComponentFixture<ActiveSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveSubscriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
