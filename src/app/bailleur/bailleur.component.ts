import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ZoneComponent } from '../zone/zone.component';
import countries from 'src/app/bailleur/countries.json';
import posts from 'db.json';
/** importation of model needed to save data in json file */
import { FormBuilder, FormControlName, FormGroup, NgSelectOption } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CountryService } from '../services/country.service';


@Component({
  selector: 'app-bailleur',
  templateUrl: './bailleur.component.html',
  styleUrls: ['./bailleur.component.css']
})
export class BailleurComponent implements OnInit {
  public formgroup!: FormGroup;
  constructor(private dialog:MatDialog,
    public formduilder:FormBuilder,
    public http : HttpClient,
    public http1 : HttpClient,
    public service : CountryService
    ) { }

 
    
  public countrylist:{name:string,dial_code:string,code:string}[] = countries;
  
  public zoneList= posts["profile"];
  text:string | undefined;

posts :any;
  public get(url: string, options?: any) { 
    return this.http1.get(url, options); 
    } 
    public post(url: string, data: any, options?: any) { 
    return this.http1.post(url, data, options); 
    } 
    public put(url: string, data: any, options?: any) { 
    return this.http1.put(url, data, options); 
    } 
    public delete(url: string, options?: any) { 
    return this.http1.delete(url, options); 
    }
    ngOnInit(): void {
    /* initializing the forgroup and declare the variable to be used as formcontrolname*/
    this.formgroup= this.formduilder.group({
      firstname:[''],
      lastname:[''],
      phonecode:[''],
      mobile:[''],
      nationality: [''],
      desription:[''],
      id:0
      
    })

   

     /** this  code part is for api call of the countries name */  

  this.service.getcountry().subscribe(response => {
        this.posts = response;}
        );
  /*********************************** */
    
  
  }

  changeme(ch:any){
    alert(this.text);
    var z=document.getElementById('phone')?.nodeValue;
    z=this.text;

  }


/*   save in json server function */
save(){
  this.http.post<any>("http://localhost:3000/posts",
  this.formgroup.value)
  .subscribe(res=>{
    alert("bailleur added successfully");
    this.formgroup.reset();
  })
}


  add(){
    this.dialog.open(ZoneComponent,{
      width:'400px',
      height:'400px'
    })
  }

  /** close function of the matdialog */
  /** am not using it because this will close all opened dialog */
  /** and I just want to close the zone dialog  */
  /*
  close(){
    this.dialog.closeAll();
  }
  */
}
