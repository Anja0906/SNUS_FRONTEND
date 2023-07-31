import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoTagComponent } from './do-tag.component';

describe('DoTagComponent', () => {
  let component: DoTagComponent;
  let fixture: ComponentFixture<DoTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
