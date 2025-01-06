import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoianeComponent } from './loiane.component';

describe('LoianeComponent', () => {
  let component: LoianeComponent;
  let fixture: ComponentFixture<LoianeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoianeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoianeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
