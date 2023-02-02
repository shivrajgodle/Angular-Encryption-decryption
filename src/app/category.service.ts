import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  admin_token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2NzYwMzM5NTh9.9yeT3mk8yg8DLfBbGRQBI3hQq3-i2wJaUF8hlQ3Hppt4W-iEPlXljiWRDlWYln9l5ZNg4u35B-b8fGy_BzhEKA";

  public httpOptions = {};


  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.admin_token,
        'operating_system': "windows 11",
        'browser': "chrome"
      })
    };
   }


  createCategory(data: any) {

    console.log("data in create category is:-",data);
    //calling backed API  
  return this.http.post(`${environment.baseUrl}/api/category/encrypt/create/category`,data, { ...this.httpOptions, responseType: 'text' })
}

}
