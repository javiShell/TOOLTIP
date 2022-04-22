import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaOrdenadoresComponent } from './categoria-ordenadores.component';

describe('CategoriaOrdenadoresComponent', () => {
  let component: CategoriaOrdenadoresComponent;
  let fixture: ComponentFixture<CategoriaOrdenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaOrdenadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaOrdenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
