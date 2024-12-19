import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarplatilloComponent } from './editarplatillo.component';

describe('EditarplatilloComponent', () => {
  let component: EditarplatilloComponent;
  let fixture: ComponentFixture<EditarplatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarplatilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarplatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
