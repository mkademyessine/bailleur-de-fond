import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  /*the formgroup variable*/
  public formgroup!: FormGroup;
  constructor(private dialog:MatDialog,
    private formbuilder:FormBuilder,
    public http:HttpClient
    ) { }

  ngOnInit(): void {
    this.formgroup = this.formbuilder.group({
      zone_name:[''],
      description:[''],
      id:0
    })
    
  }
/**** the save function to save the input data from our formgroup */

save(){
  this.http.post<any>("http://localhost:3000/profile",
  this.formgroup.value).
  subscribe(res=>{
    alert("this zone is added successfully");
    this.formgroup.reset();
  })
}

/***** close function to close the dialog zone */
  close(){
    this.dialog.closeAll();
  }

}
