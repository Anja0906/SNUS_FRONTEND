import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTagComponent } from './di-tag.component';

describe('DiTagComponent', () => {
  let component: DiTagComponent;
  let fixture: ComponentFixture<DiTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
