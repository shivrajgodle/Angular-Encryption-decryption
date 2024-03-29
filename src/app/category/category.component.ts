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
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  Categoryresponse: any;
  data = '{"category_id":7}';

  enc: any;
  dec: any;

  isclicked = false;
  formBuilder: any;

  categoryData!: string;
  categoryFormGroup!: FormGroup;
  fieldTextType!: boolean;

  decryptedText: any;

  constructor(
    private _AESEncryptDecryptService: AESEncryptDecryptService,
    private _categoryService: CategoryService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {}

  initLoginForm() {
    this.categoryFormGroup = new FormGroup({
      category_name: new FormControl(''),
      status: new FormControl(''),
    });
  }

  userLogin() {
    this.categoryData = this.categoryFormGroup.value;
    console.log('Login data:-' + this.categoryData);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  createCategory() {
    this.categoryData = this.categoryFormGroup.value;
    console.log('Login data:-' + this.categoryData);

    this.isclicked = true;

    const encryptedText = this._AESEncryptDecryptService.encrypt(
      this.categoryData
    );
    console.log('encrypted text is:-', encryptedText);

    this.enc = encryptedText;

    this._categoryService.createCategory(this.enc).subscribe(
      (data: any) => {
        this.Categoryresponse = data;
        console.log('data is in category ts:-', data);
        console.log('Categoryresponse is:-' + this.Categoryresponse);

        let str = this._AESEncryptDecryptService.decrypt(data);
        console.log('str is:-' + str);
        this.dec = str;
      },
      (error) => {
        console.log('Category error', error);
      }
    );
  }
}
