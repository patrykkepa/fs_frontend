import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFeaturePageComponent } from './example-feature-page.component';

describe('ExampleFeaturePageComponent', () => {
  let component: ExampleFeaturePageComponent;
  let fixture: ComponentFixture<ExampleFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFeaturePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
