import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {FileRequest} from '../model/model.fileRequest';
import {WscpRequest} from '../model/model.wscpRequest';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
  private subject = new Subject<any>();
  //private endpointUrl = 'https://77.55.216.72:8080/toulbar2rest';
  //private endpointUrl = 'http://80241e64.ngrok.io';
  //private endpointUrl = 'http://app.test:8080/toulbar2rest';
  private endpointUrl = 'https://toulbar2rest.tk:8081/toulbar2rest';


  sendSolveExampleRequest(exampleNum) {
    return this.http.get(this.endpointUrl + '/example/' + exampleNum).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendSolveFileRequest(fileContent, fileType) {
    const request = new FileRequest(fileType, fileContent);
    const requestJSON = JSON.stringify(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(requestJSON);
    return this.http.post(this.endpointUrl + '/file' , requestJSON, httpOptions).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendSolveWscpRequest(json) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.endpointUrl + '/problemloader/wcsp' , json, httpOptions).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendSolveWcnfRequest(json) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(this.endpointUrl + '/problemloader/wcnf' , json, httpOptions).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendMessage(message: any) {
    this.subject.next({ text: message });
  }

  sendError(error: any) {
    this.subject.error(error);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
