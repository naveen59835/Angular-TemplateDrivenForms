import { Country } from './../models/Country';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  firstName:string='';
  lastName:string='';
  Number:number | undefined;
  location:string='';
  email = new FormControl('', [Validators.required, Validators.email]);
  countriess:Country[]=[
    {id:1001,countryName:'Hunts Ville'},
    {id:1002,countryName:'Spring Dale'},
    {id:1003,countryName:'Orlando'},
    {id:1004,countryName:'Augusta'},
    {id:1005,countryName:'New York​'}
  ]

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
addCustomer(customer:NgForm){
  console.log(customer);
  
}
constructor(private _snackBar: MatSnackBar) {}

openSnackBar() {
 
  this._snackBar.open('Feedback submitted successfully', 'success', {​
    duration: 5000,​
    panelClass: ['mat-toolbar', 'mat-primary']​
    })

}
}
