import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefComponent } from './table-def.component';

describe('TableDefComponent', () => {
  let component: TableDefComponent;
  let fixture: ComponentFixture<TableDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDefComponent]
    });
    fixture = TestBed.createComponent(TableDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
