import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[gmpCourseCardBorder]'
})
export class CourseCardBorderDirective implements OnInit {

  @Input('gmpCourseCardBorder') public creationDate: string;

  constructor( private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const currentDate = new Date();
    const courseDate = new Date(this.creationDate);
    
    if(courseDate.getTime() < currentDate.getTime() && courseDate.getTime() >= (currentDate.getTime() - + ( 3600 * 1000 * 24 * 14))){
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
    }

    if(courseDate.getTime() > currentDate.getTime()){
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
    }
  }

}
