import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseItem } from '../../models/course-item-model';
import { CourseModalConfirmComponent } from '../course-modal-confirm/course-modal-confirm.component';

@Component({
  selector: 'gmp-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseItem;

  @Output('onDeleteCourse') onDelete: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private _modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  public delete(): void{
    this.onDelete.emit(this.item.id);
  }

  public edit(): void{
    this.router.navigate(['courses/'+this.item.id]);
  }
  
  /* istanbul ignore next */
  public open(): void{
    const modalRef = this._modalService.open(CourseModalConfirmComponent);
    
    modalRef.result.then((userResponse) => {
      if(userResponse) {
        return this.delete();
      }
    });   
  }     
}
