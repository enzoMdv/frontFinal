import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmeseroComponent } from './editarmesero.component';

describe('EditarmeseroComponent', () => {
  let component: EditarmeseroComponent;
  let fixture: ComponentFixture<EditarmeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarmeseroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarmeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
