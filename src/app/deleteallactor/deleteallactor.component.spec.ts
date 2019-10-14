import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteallactorComponent } from './deleteallactor.component';

describe('DeleteallactorComponent', () => {
  let component: DeleteallactorComponent;
  let fixture: ComponentFixture<DeleteallactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteallactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteallactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
