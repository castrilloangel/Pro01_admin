import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  constructor() { }

  /**
   * Standard AES encryption for string data
   * @param stringData 
   * @returns encrypted string
   */
  private encrypt(stringData: string): string {
    const ciphertext = CryptoJS.AES.encrypt(stringData, environment.encryptionKey).toString();
    return ciphertext;
  }

  /**
   * Standard AES decryption for string data
   * @param ciphertext 
   * @returns decrypted string
   */
  private decrypt(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, environment.encryptionKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }

  /**
   * First JSON.stringify the data so objects and arrays can be passed as parameters, then encrypt the data as a string
   * @param data data to pass to a router as a query parameter
   * @returns encrypted string
   */
  public encryptRouteParameter(data: any): string {
    const stringData = JSON.stringify(data);
    const ciphertext = this.encrypt(stringData);
    return ciphertext;
  }

  /**
   * Decrypt string data and parse said data to what it should be originally (an Object, Array, boolean, number, etc)
   * @param ciphertext 
   * @returns decrypted and parsed data
   */
  public decryptRouteParameter<T>(ciphertext: string): T {
    const decryptedData = this.decrypt(ciphertext);
    const parsedData = JSON.parse(decryptedData);
    return parsedData;
  }
}
