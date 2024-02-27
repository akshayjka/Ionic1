import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  sendMail(formData:any):Observable<any>{
    return this.http.post("http://localhost:4000/users/submit-form",formData)
  }

  // emailjs.send("service_qcba45w","template_z942xkp",{
  //   from_name: "kevin",
  //   to_name: "Akshay",
  //   message: "Hey just a test message",
  //   });
}
