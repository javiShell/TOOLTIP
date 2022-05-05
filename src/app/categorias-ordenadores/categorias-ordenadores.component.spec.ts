import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasOrdenadoresComponent } from './categorias-ordenadores.component';

describe('CategoriasOrdenadoresComponent', () => {
  let component: CategoriasOrdenadoresComponent;
  let fixture: ComponentFixture<CategoriasOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasOrdenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
