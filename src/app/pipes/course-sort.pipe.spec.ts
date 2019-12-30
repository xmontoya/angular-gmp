import { CourseSortPipe } from './course-sort.pipe';
import { PipeResolver } from '@angular/compiler';

describe('CourseSortPipe', () => {
  it('create an instance', () => {
    const pipe = new CourseSortPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const pipe = new CourseSortPipe();
    expect(pipe.transform([{date: '2019-10-10'}, {date: '2020-10-10', }])).toEqual([{date: '2020-10-10'}, {date: '2019-10-10', }]);
  });
});
