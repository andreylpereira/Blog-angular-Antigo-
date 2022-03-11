import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSlugComponent } from './articles-slug.component';

describe('ArticlesSlugComponent', () => {
  let component: ArticlesSlugComponent;
  let fixture: ComponentFixture<ArticlesSlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesSlugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
