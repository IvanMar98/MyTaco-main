import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaIniComponent } from './pantalla-ini.component';

describe('PantallaIniComponent', () => {
  let component: PantallaIniComponent;
  let fixture: ComponentFixture<PantallaIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
