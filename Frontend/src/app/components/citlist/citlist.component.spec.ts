import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitlistComponent } from './citlist.component';

describe('CitlistComponent', () => {
  let component: CitlistComponent;
  let fixture: ComponentFixture<CitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
