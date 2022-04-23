import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/components/admin/components/admin-dashboard/model/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  addQueURL : string;
  getQueURL : string;
  updateQueUrl : string;
  deleteQueUrl : string;

  constructor(private http : HttpClient) {

    this.addQueURL = 'http://localhost:8080/questions/add';
    this.getQueURL = 'http://localhost:8080/questions/get';
    this.updateQueUrl = 'http://localhost:8080/questions/updateQuestion';
    this.deleteQueUrl = 'http://localhost:8080/questions/deleteQuestion';

   }

   addQuestion(que : Question): Observable<Question> {
     return this.http.post<Question>(this.addQueURL,que);
   }

   getAllQuestion(): Observable<Question[]>{
     return this.http.get<Question[]>(this.getQueURL);
   }

   updateQuestion(que :Question) : Observable<Question>{
     return this.http.put<Question>(this.updateQueUrl, que);
   }

   deleteQuestion(que : Question) : Observable<Question> {
     return this.http.delete<Question>(this.deleteQueUrl+'/'+que.questionID);
   }

}
