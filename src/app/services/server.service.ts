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
  private endpointUrl = 'https://ae82ba16-c999-4987-969e-315808cd15b5.mock.pstmn.io/TOULBAR2REST';

  sendSolveExampleRequest(exampleNum) {
    return this.http.get(this.endpointUrl + '/Example/' + exampleNum).subscribe(
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
    return this.http.post(this.endpointUrl + '/File' , requestJSON).subscribe(
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
    return this.http.post(this.endpointUrl + '/wcsp' , json).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendSolveWcnfRequest(json) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.endpointUrl + '/wcnf' , json).subscribe(
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
