import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
  private subject = new Subject<any>();

  sendSolveExampleRequest(exampleNum) {
    return this.http.get('https://ae82ba16-c999-4987-969e-315808cd15b5.mock.pstmn.io/TOULBAR2REST/Example/' + exampleNum).subscribe(
      (response) => this.sendMessage(response),
      (error) => this.sendError(error)
    );
  }

  sendSolveFileRequest(fileContent) {
    console.log(fileContent);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain'
      })
    };
    return this.http.post('https://ae82ba16-c999-4987-969e-315808cd15b5.mock.pstmn.io/TOULBAR2REST/File' , fileContent).subscribe(
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
