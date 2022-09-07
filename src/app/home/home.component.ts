import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { BailleurComponent } from '../bailleur/bailleur.component';
import { ZoneComponent } from '../zone/zone.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  open(){
    this.dialog.open(BailleurComponent);
  }
  open_zone(){
    this.dialog.open(ZoneComponent,{
      height:'400px',
      width: '400px'
    })
  }
}
