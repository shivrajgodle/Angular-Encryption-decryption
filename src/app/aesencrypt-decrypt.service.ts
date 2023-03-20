import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Login } from './model/login';
import { DataRequest } from './model/request';

@Injectable({
  providedIn: 'root',
})
export class AESEncryptDecryptService {
  tokenFromUI: string = '1234567812345678';
  req: DataRequest = new DataRequest();

  constructor() {}

  encrypt(value: any): string {
    if (environment.encryptionStatus == true) {
      console.log('Value is:-', value);

      let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
      let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

      return CryptoJS.AES.encrypt(JSON.stringify(value), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
    } else {
      return value;
    }
  }

  decrypt(textToDecrypt: string) {
    if (environment.encryptionStatus == true) {
      let _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
      let _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

      return CryptoJS.AES.decrypt(textToDecrypt, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }).toString(CryptoJS.enc.Utf8);
    } else {
      return textToDecrypt;
    }
  }

  createEncryptedRequest(rst: string) {
    this.req.data = rst;
    this.req.encrypted = true;
    return this.req;
  }
}
