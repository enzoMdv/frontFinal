import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoplatilloComponent } from './nuevoplatillo.component';

describe('NuevoplatilloComponent', () => {
  let component: NuevoplatilloComponent;
  let fixture: ComponentFixture<NuevoplatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoplatilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoplatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
