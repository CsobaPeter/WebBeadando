import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvekComponent } from './konyvek.component';

describe('KonyvekComponent', () => {
  let component: KonyvekComponent;
  let fixture: ComponentFixture<KonyvekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
