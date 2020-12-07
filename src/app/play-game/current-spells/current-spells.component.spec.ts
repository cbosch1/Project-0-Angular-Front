import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSpellsComponent } from './current-spells.component';

describe('CurrentSpellsComponent', () => {
  let component: CurrentSpellsComponent;
  let fixture: ComponentFixture<CurrentSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSpellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
