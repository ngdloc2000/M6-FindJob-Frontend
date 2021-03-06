import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RecruitmentNew} from '../../model/recruitmentNew';
import {Observable} from 'rxjs';
import {StatusRequest} from '../../model/statusRequest';
import {SearchJob} from '../../model/SearchJob';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentNewService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getRecruitmentNewById(id: number): Observable<RecruitmentNew> {
    return this.http.get<RecruitmentNew>(`${this.apiServerUrl}/recruitment/${id}`);
  }

  createRecruitmentNew(recruitmentNew: RecruitmentNew): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/recruitment`, recruitmentNew)
  }

  updateRecruitment(id: number, recruitment: RecruitmentNew): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/recruitment/${id}`, recruitment)
  }

  showAllListRecruitmentNew(id: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/recruitment/showAll/${id}`)
  }

  deleteRecruitmentNewById(id: number): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/recruitment/${id}`);
  }

  pageRecruitmentNew(request) {
    const params = request;
    return this.http.get(`${this.apiServerUrl}/recruitment/showPageRecuitmentNew`, {params});
  }

  changeStatusById(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put(`${this.apiServerUrl}/recruitment/editStatus/${id}`);
  }
  searchByObj(searchJob: SearchJob): Observable<any>{
    return this.http.post(`${this.apiServerUrl}/recruitment/findByObj`,searchJob);
  }
  getAll(): Observable<any []>{
    return this.http.get<any []>(`${this.apiServerUrl}/recruitment/list`)
  }
}
