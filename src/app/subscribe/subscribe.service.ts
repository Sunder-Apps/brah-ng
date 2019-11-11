import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  url:string = 'https://sunder-functions20190319082035.azurewebsites.net/api/BrahSubscribe?code=aZXodW9PLSECOChgSpl1jYvZ3zRhTddxgRAmWML/wz0lsdqS1EScBw=='

  constructor(private httpClient:HttpClient) { }

  send (email:string) {
    return this.httpClient.post(this.url, JSON.stringify({ 
      email: email 
    }))
  }
}
