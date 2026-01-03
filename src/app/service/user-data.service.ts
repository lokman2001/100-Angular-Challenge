import { Injectable } from '@angular/core';
import { UserData } from '../interface/user-data';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public userData: any[] = [
    { name: 'Kaung Myat Kyaw', age: 23, phone: '09123456788' },
    { name: 'Kaung Myat Kyax', age: 25, phone: '09123456789' },
    { name: 'Kaung Myat Kyaz', age: 27, phone: '09123456790' },
  ];

  public get getData(): UserData[] {
    return this.userData;
  }
}
