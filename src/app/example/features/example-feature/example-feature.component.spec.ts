import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFeatureComponent } from './example-feature.component';

describe('ExampleFeatureComponent', () => {
  let component: ExampleFeatureComponent;
  let fixture: ComponentFixture<ExampleFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
