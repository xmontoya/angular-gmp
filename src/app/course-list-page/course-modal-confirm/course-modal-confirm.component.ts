import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gmp-course-modal-confirm',
  templateUrl: './course-modal-confirm.component.html',
  styleUrls: ['./course-modal-confirm.component.scss']
})
export class CourseModalConfirmComponent implements OnInit {

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
  }

}
