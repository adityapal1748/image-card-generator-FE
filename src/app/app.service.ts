import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private uploadUrl = "http://51.20.65.146:3000/upload"
  constructor(private http:HttpClient) { }

  saveUerDets(payload:any){
    return this.http.post(this.uploadUrl+"/image",payload)
  }
}
