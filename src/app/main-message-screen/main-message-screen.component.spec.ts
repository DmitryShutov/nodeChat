import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMessageScreenComponent } from './main-message-screen.component';

describe('MainMessageScreenComponent', () => {
  let component: MainMessageScreenComponent;
  let fixture: ComponentFixture<MainMessageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMessageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMessageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
