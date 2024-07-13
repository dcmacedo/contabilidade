import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhasComponent } from './planilhas.component';

describe('PlanilhasComponent', () => {
  let component: PlanilhasComponent;
  let fixture: ComponentFixture<PlanilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanilhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
