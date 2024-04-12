import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendMail(formData:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post("http://localhost:4000/users/submit-form",formData, {headers})
  }

  // emailjs.send("service_qcba45w","template_z942xkp",{
  //   from_name: "kevin",
  //   to_name: "Akshay",
  //   message: "Hey just a test message",
  //   });
}
