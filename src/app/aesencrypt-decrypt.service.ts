import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptService {

  

  tokenFromUI: string = "1234567812345678";
 

  constructor() { }

  encrypt(value : any) : string{

    console.log("Value is:-",value);

    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);


    return CryptoJS.AES.encrypt(
      JSON.stringify(value), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
  
  }

  decrypt(textToDecrypt : string){

    let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

    return CryptoJS.AES.decrypt(
      textToDecrypt, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
  }

}
