import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AESEncryptDecryptService } from '../aesencrypt-decrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
 
  

   data = '{"category_id":7}';

//   data =  "Hello World";

  key = CryptoJS.enc.Latin1.parse('1234567812345678');
  iv = CryptoJS.enc.Latin1.parse('1234567812345678');

  enc: any;
  dec:any;

  isclicked = false;
  formBuilder: any;
   

  constructor(private _AESEncryptDecryptService: AESEncryptDecryptService) { 
    this.initLoginForm();
  }

  ngOnInit(): void {
    
  }
  encryptedText: any
  
  decryptedText: any

  

  get()
  {
    // console.log("login data:-"+this.profileForm.value);
    this.loginData = this.loginFormGroup.value;
    console.log("Login data:-"+this.loginData);

   this.isclicked = true;
 
    this.encryptedText = this._AESEncryptDecryptService.encrypt(this.loginData);
    console.log("encrypted text is:-",this.encryptedText);
    
    this.enc = this.encryptedText;

     this.decryptedText = this._AESEncryptDecryptService.decrypt(this.encryptedText);
    
    this.dec = this.decryptedText;
  }

  loginData!: string;
  loginFormGroup!: FormGroup;
  fieldTextType!: boolean;

  initLoginForm() {
    
    this.loginFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  userLogin() {
    this.loginData = this.loginFormGroup.value;
    console.log("Login data:-"+this.loginData);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


}
