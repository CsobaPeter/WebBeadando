import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvComponent } from './konyv.component';

describe('KonyvComponent', () => {
  let component: KonyvComponent;
  let fixture: ComponentFixture<KonyvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
