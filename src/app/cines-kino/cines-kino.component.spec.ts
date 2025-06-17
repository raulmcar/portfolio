import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesKinoComponent } from './cines-kino.component';

describe('CinesKinoComponent', () => {
  let component: CinesKinoComponent;
  let fixture: ComponentFixture<CinesKinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinesKinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinesKinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
