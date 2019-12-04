import { CourseCardBorderDirective } from './course-card-border.directive';
import { Renderer2 } from '@angular/core';

describe('CourseCardBorderDirective', () => {
  let renderer: Renderer2;

  it('should create an instance', () => {
    let el = {
      nativeElement: document.createElement('div')
    };

    const directive = new CourseCardBorderDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
