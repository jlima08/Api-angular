import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustonsComponent } from './diretivas-custons.component';

describe('DiretivasCustonsComponent', () => {
  let component: DiretivasCustonsComponent;
  let fixture: ComponentFixture<DiretivasCustonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasCustonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
