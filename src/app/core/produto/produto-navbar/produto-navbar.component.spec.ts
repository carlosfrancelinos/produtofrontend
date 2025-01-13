import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNavbarComponent } from './produto-navbar.component';

describe('ProdutoNavbarComponent', () => {
  let component: ProdutoNavbarComponent;
  let fixture: ComponentFixture<ProdutoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
