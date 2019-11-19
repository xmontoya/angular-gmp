import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseListItem } from '../course-list/course-list-item-model';
import { CourseModalConfirmComponent } from '../course-modal-confirm/course-modal-confirm.component';

@Component({
  selector: 'gmp-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseListItem;

  @Output('onDeleteCourse') onDelete: EventEmitter<string> = new EventEmitter<string>();

  @Output('onEditCourse') onEdit: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  public delete(): void{
    this.onDelete.emit(this.item.id);
  }

  public edit(): void{
    this.onEdit.emit(this.item.id);
  }

  public open(): void{
    const modalRef = this._modalService.open(CourseModalConfirmComponent);
    
    modalRef.result.then((userResponse) => {
      if(userResponse) {
        return this.delete();
      }
    });   
  }     
}
