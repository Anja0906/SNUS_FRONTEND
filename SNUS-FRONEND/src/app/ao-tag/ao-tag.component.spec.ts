import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoTagComponent } from './ao-tag.component';

describe('AoTagComponent', () => {
  let component: AoTagComponent;
  let fixture: ComponentFixture<AoTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AoTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
