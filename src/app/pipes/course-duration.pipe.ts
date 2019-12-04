import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(duration: number): string {
    const hours = Math.floor(duration / 60);  
    const minutes = duration % 60;

    return (hours > 0 ? hours + "h " : "") + minutes + "m";   
  }

}
