import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AESEncryptDecryptService } from '../aesencrypt-decrypt.service';
import { CategoryService } from '../category.service';
import { DataRequest } from '../model/request';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css'],
})
export class GetCategoryComponent implements OnInit {
  Categoryresponse: any;
  data = '{"category_id":7}';

  enc: any;
  dec: any;

  isclicked = false;
  formBuilder: any;

  categoryData!: string;
  getcategoryFormGroup!: FormGroup;
  fieldTextType!: boolean;

  decryptedText: any;

  constructor(
    private _AESEncryptDecryptService: AESEncryptDecryptService,
    private _categoryService: CategoryService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
    const dec = 'L5xUhHZgC7E15CU7RNu/8tWylmUTpcn9/TRl7Mds1Ig=';

    let str = this._AESEncryptDecryptService.decrypt(dec);
    console.log('str is:-' + str);
  }

  initLoginForm() {
    this.getcategoryFormGroup = new FormGroup({
      category_id: new FormControl(''),
    });
  }

  getCategory() {
    this.categoryData = this.getcategoryFormGroup.value;
    console.log('get category data:-' + this.categoryData);

    this.isclicked = true;

    const encryptedText = this._AESEncryptDecryptService.encrypt(
      this.categoryData
    );
    console.log('encrypted text is:-', encryptedText);

    // this.enc = encryptedText;

    this._categoryService.getCategory(encryptedText).subscribe(
      (data: string) => {
        this.Categoryresponse = data;
        console.log('data is in get category ts:-', data);
        console.log('Categoryresponse is :-', this.Categoryresponse);

        let str = this._AESEncryptDecryptService.decrypt(data);
        this.dec = str;
      },
      (error) => {
        console.log('Category error', error);
      }
    );
  }
}
