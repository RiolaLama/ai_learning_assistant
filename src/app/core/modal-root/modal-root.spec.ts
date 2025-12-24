import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRoot } from './modal-root';

describe('ModalRoot', () => {
  let component: ModalRoot;
  let fixture: ComponentFixture<ModalRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRoot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
