import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaordenComponent } from './nuevaorden.component';

describe('NuevaordenComponent', () => {
  let component: NuevaordenComponent;
  let fixture: ComponentFixture<NuevaordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaordenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
