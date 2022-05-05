import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMovilesComponent } from './categorias-moviles.component';

describe('CategoriasMovilesComponent', () => {
  let component: CategoriasMovilesComponent;
  let fixture: ComponentFixture<CategoriasMovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasMovilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
