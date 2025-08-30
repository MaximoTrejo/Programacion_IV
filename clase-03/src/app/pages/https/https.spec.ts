import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Https } from './https';

describe('Https', () => {
  let component: Https;
  let fixture: ComponentFixture<Https>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Https]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Https);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
