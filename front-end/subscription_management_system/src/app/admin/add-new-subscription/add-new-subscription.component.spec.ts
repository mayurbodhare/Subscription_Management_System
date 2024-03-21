import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubscriptionComponent } from './add-new-subscription.component';

describe('AddNewSubscriptionComponent', () => {
  let component: AddNewSubscriptionComponent;
  let fixture: ComponentFixture<AddNewSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
