import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarordenComponent } from './editarorden.component';

describe('EditarordenComponent', () => {
  let component: EditarordenComponent;
  let fixture: ComponentFixture<EditarordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarordenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
