import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevomeseroComponent } from './nuevomesero.component';

describe('NuevomeseroComponent', () => {
  let component: NuevomeseroComponent;
  let fixture: ComponentFixture<NuevomeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevomeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevomeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
