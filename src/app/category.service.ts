import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AESEncryptDecryptService } from './aesencrypt-decrypt.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  admin_token =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhdmVyeS5oYXJyaXMuMDgyNDE0QGV4YW1wbGUuY29tIiwiZXhwIjoxNjgwMTc2Njk3fQ.xEMiXN0q-Rtsgn58EUHz76gdWPT85h6O5nYUb0tlUtZUclkM3TbzR7DPuwSVOkSTG9sSDGknw0gGlYqDFijruA';

  public httpOptions = {};

  constructor(
    private http: HttpClient,
    private _AESEncryptDecryptService: AESEncryptDecryptService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.admin_token,
        operating_system: 'windows 11',
        browser: 'chrome',
      }),
    };
  }

  createCategory(data: any) {
    console.log('data in create category is:-', data);
    //calling backed API

    return this.http.post(
      `${environment.baseUrl}/api/category/create/category`,
      data,
      { ...this.httpOptions, responseType: 'text' }
    );
  }

  getCategory(data: any) {
    console.log('data in get category is:-', data);

    //calling backed API
    return this.http.post(
      `${environment.baseUrl}/api/category/encrypt/get/category`,
      data,
      { ...this.httpOptions, responseType: 'text' }
    );
  }

  getAllCategory(data: any) {
    console.log('data in get all category is:-', data);
    //calling backed API
    return this.http.post(
      `${environment.baseUrl}/api/category/encrypt/get/categories`,
      data,
      { ...this.httpOptions, responseType: 'text' }
    );
  }

  deleteCategory(data: any) {
    console.log('data in delete category is:-', data);
    //calling backed API
    return this.http.post(
      `${environment.baseUrl}/api/category/encrypt/delete/category`,
      data,
      { ...this.httpOptions, responseType: 'text' }
    );
  }
}
