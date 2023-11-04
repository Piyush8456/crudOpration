import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-conformation',
  templateUrl: './delete-conformation.component.html',
  styleUrls: ['./delete-conformation.component.css'],
})
export class DeleteConformationComponent implements OnInit {
  constructor(private dialog: MatDialogRef<DeleteConformationComponent>) {}

  ngOnInit(): void {}

  removeEmployee() {
    this.dialog.close(true);
  }
}
