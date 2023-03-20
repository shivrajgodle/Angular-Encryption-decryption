import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCategoroiesComponent } from './get-all-categoroies.component';

describe('GetAllCategoroiesComponent', () => {
  let component: GetAllCategoroiesComponent;
  let fixture: ComponentFixture<GetAllCategoroiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllCategoroiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllCategoroiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
