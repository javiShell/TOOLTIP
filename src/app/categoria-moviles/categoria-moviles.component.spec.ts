import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMovilesComponent } from './categoria-moviles.component';

describe('CategoriaMovilesComponent', () => {
  let component: CategoriaMovilesComponent;
  let fixture: ComponentFixture<CategoriaMovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaMovilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaMovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
