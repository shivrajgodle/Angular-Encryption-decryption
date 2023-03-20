import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AESEncryptDecryptService } from '../aesencrypt-decrypt.service';
import { CategoryService } from '../category.service';
import { DataRequest } from '../model/request';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css'],
})
export class DeleteCategoryComponent implements OnInit {
  Categoryresponse: any;
  data = '{"category_id":7}';

  enc: any;
  dec: any;

  isclicked = false;
  formBuilder: any;

  categoryData!: string;
  getcategoryFormGroup!: FormGroup;
  fieldTextType!: boolean;

  encryptedText: any;
  decryptedText: any;

  constructor(
    private _AESEncryptDecryptService: AESEncryptDecryptService,
    private _categoryService: CategoryService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
    const dec =
      'e6EHhDPZd+06wmDr+S6HA1vkaC9W/4ASkUfy0+pP0zKtluXgAvLqFDj4TkHW7tUF2FHtMkeen1cyJrsabA5l8Ax9RndbkiHzjK0FLyruWv0cj+zJ5AddQ183J8XpF4zZprgUkWBv9u5oMVkY4aY72KUIBLqCa6RpwtqXhyzICFWY6yS/yWeVVBCBZ+F7uvvjuQ1sBop4MvjOcIn3lMPn2DJLlBr/Z8wCoG+Uqb2zZxnnHpgapGUuZskbiTGfnbQQqFJRFhVr2uwkLlyxcEJzRsqL5YC+Igcf4BaTJz4s3Kk5AwzJfZYJLWOODjLXwWTukaswONO+1EGzZc0D9vBlbTBK+NmU7thtPX/SLy+Pw+k=';

    let str = this._AESEncryptDecryptService.decrypt(dec);
    console.log('str is:-' + str);
  }

  initLoginForm() {
    this.getcategoryFormGroup = new FormGroup({
      category_id: new FormControl(''),
    });
  }

  req: DataRequest = new DataRequest();

  deleteCategory() {
    this.categoryData = this.getcategoryFormGroup.value;
    console.log('get category data:-' + this.categoryData);

    this.isclicked = true;

    const encryptedText = this._AESEncryptDecryptService.encrypt(
      this.categoryData
    );
    console.log('encrypted text is:-', this.encryptedText);

    this.enc = encryptedText;

    this._categoryService.deleteCategory(encryptedText).subscribe(
      (data: string) => {
        this.Categoryresponse = data;

        console.log('Categoryresponse is :-', this.Categoryresponse);

        let str = this._AESEncryptDecryptService.decrypt(data);
        console.log('str is:-' + str);
        this.dec = str;
      },
      (error: any) => {
        console.log('Category error', error);
      }
    );
  }
}
