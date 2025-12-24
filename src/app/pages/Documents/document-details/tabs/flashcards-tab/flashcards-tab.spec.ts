import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsTab } from './flashcards-tab';

describe('FlashcardsTab', () => {
  let component: FlashcardsTab;
  let fixture: ComponentFixture<FlashcardsTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
