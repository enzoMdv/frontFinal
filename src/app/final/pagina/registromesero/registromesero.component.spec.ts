import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistromeseroComponent } from './registromesero.component';

describe('RegistromeseroComponent', () => {
  let component: RegistromeseroComponent;
  let fixture: ComponentFixture<RegistromeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistromeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistromeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
