import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiActionsTab } from './ai-actions-tab';

describe('AiActionsTab', () => {
  let component: AiActionsTab;
  let fixture: ComponentFixture<AiActionsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiActionsTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiActionsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
