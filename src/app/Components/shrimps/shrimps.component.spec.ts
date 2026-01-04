import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrimpsComponent } from './shrimps.component';

describe('ShrimpsComponent', () => {
  let component: ShrimpsComponent;
  let fixture: ComponentFixture<ShrimpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShrimpsComponent]
    });
    fixture = TestBed.createComponent(ShrimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
