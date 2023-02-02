import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AESEncryptDecryptService } from '../aesencrypt-decrypt.service';
import { CategoryService } from '../category.service';
import { Login } from '../model/login';
import { DataRequest } from '../model/request';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Categoryresponse: any
  data = '{"category_id":7}';

  enc: any;
  dec:any;

  isclicked = false;
  formBuilder: any;

  categoryData!: string;
  categoryFormGroup!: FormGroup;
  fieldTextType!: boolean;

  encryptedText: any
  decryptedText: any

   

  constructor(private _AESEncryptDecryptService: AESEncryptDecryptService , private _categoryService:CategoryService) { 
    this.initLoginForm();
  }

  ngOnInit(): void {
    
  }


  
  // get()
  // {
  //   // console.log("login data:-"+this.profileForm.value);
  //   this.categoryData = this.categoryFormGroup.value;
  //   console.log("Login data:-"+this.categoryData);

  //  this.isclicked = true;
 
  //   this.encryptedText = this._AESEncryptDecryptService.encrypt(this.categoryData);
  //   console.log("encrypted text is:-",this.encryptedText);
    
  //   this.enc = this.encryptedText;

  //    this.decryptedText = this._AESEncryptDecryptService.decrypt(this.encryptedText);
    
  //   this.dec = this.decryptedText;
  // }

  
  initLoginForm() {
    
    this.categoryFormGroup = new FormGroup({
      category_name: new FormControl(''),
      status: new FormControl('')
    });
  }

  userLogin() {
    this.categoryData = this.categoryFormGroup.value;
    console.log("Login data:-"+this.categoryData);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  req: DataRequest = new DataRequest;

  createCategory(){

    this.categoryData = this.categoryFormGroup.value;
    console.log("Login data:-"+this.categoryData);

    this.isclicked = true;
 
    this.encryptedText = this._AESEncryptDecryptService.encrypt(this.categoryData);
    console.log("encrypted text is:-",this.encryptedText);
    
    this.enc = this.encryptedText;

    this.req.data = this.encryptedText;
    this.req.encrypted = true;

    console.log("The req is:-"+this.req);

    console.log("The req data is:-"+this.req.encrypted);
    

    this._categoryService.createCategory(this.req).subscribe((data:any)=>{

      this.Categoryresponse = data;
      console.log("data is in category ts:-",data);

       this.decryptedText = this._AESEncryptDecryptService.decrypt(this.Categoryresponse);
    
       this.dec = this.decryptedText;

    },
    (error)=>{
      console.log("Category error",error);
    })
    
  }

  

}
