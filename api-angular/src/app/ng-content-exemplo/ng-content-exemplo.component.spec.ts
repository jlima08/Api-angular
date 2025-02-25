import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExemploComponent } from './ng-content-exemplo.component';

describe('NgContentExemploComponent', () => {
  let component: NgContentExemploComponent;
  let fixture: ComponentFixture<NgContentExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentExemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
