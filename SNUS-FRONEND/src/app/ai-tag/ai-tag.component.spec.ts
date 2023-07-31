import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTagComponent } from './ai-tag.component';

describe('AiTagComponent', () => {
  let component: AiTagComponent;
  let fixture: ComponentFixture<AiTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
