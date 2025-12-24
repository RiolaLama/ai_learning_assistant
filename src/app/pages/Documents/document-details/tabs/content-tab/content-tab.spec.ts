import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTab } from './content-tab';

describe('ContentTab', () => {
  let component: ContentTab;
  let fixture: ComponentFixture<ContentTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
