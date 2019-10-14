import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteallmovieComponent } from './deleteallmovie.component';

describe('DeleteallmovieComponent', () => {
  let component: DeleteallmovieComponent;
  let fixture: ComponentFixture<DeleteallmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteallmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteallmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
