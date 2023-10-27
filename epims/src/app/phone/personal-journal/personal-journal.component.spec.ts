import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalJournalComponent } from './personal-journal.component';

describe('PersonalJournalComponent', () => {
  let component: PersonalJournalComponent;
  let fixture: ComponentFixture<PersonalJournalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalJournalComponent]
    });
    fixture = TestBed.createComponent(PersonalJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
