import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Form7Component, Form2Component } from '../../components';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    constructor(public dialog : MatDialog) { }

    ps_datas : any = null;
    is_datas : any = null;

    ngOnInit() {
    }

    edit_is(){
        let dialogRef = this.dialog.open(Form7Component);
        if(this.is_datas)
          dialogRef.componentInstance.courses = this.is_datas;
        dialogRef.afterClosed().subscribe((res) => {
          if(res)
            this.is_datas = res;
        });
    }

    edit_ps(){
        let dialogRef = this.dialog.open(Form2Component);
        if(this.ps_datas)
          dialogRef.componentInstance.courses = this.ps_datas;
        dialogRef.afterClosed().subscribe((res) => {
          if(res)
            this.ps_datas = res;
        });
    }
}
