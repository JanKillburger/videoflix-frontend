import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBgImageContainerComponent } from './full-bg-image-container.component';

describe('FullBgImageContainerComponent', () => {
  let component: FullBgImageContainerComponent;
  let fixture: ComponentFixture<FullBgImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullBgImageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullBgImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
