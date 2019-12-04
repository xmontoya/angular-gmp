import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseSearchComponent } from './course-search.component';

class RouterMock {
  navigateByUrl(url: string) {
    return url;
  }
  serializeUrl(url: string) {
     return url;
  }
  navigate(urls: []) {
    return urls;
  }
}

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:      [ FormsModule ],
      declarations: [ CourseSearchComponent ],
      providers: [ {provide: Router, useClass: RouterMock} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute search method', () => {
    expect(component.search()).toEqual();
  });

  it('should execute create method', () => {
    expect(component.addCourse()).toEqual();
  });
});
