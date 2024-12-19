import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevacategoriaComponent } from './nuevacategoria.component';

describe('NuevacategoriaComponent', () => {
  let component: NuevacategoriaComponent;
  let fixture: ComponentFixture<NuevacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevacategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
