import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string = 'https://sunder-functions20190319082035.azurewebsites.net/api/SendEmail'
  
  constructor(private httpClient:HttpClient) { }

  send (contact:Contact) {
    return this.httpClient.post(this.url, contact)
  }
}
