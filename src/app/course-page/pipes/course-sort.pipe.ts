import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseSort'
})
export class CourseSortPipe implements PipeTransform {

  transform(courses: any[]): any {
    return courses.sort(function(a,b){
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  }

}
