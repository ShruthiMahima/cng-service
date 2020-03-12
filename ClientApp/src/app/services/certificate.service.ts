import { Injectable } from '@angular/core';
import { AppConfig } from '../config/config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private pathAPI;
  private pathSeperator;
  private headers;

  constructor(private http: HttpClient, private config: AppConfig) {
    this.pathAPI = this.config.setting["REST_ENDPOINT"];
    this.pathSeperator = this.config.setting["PATH_SEPARATOR"];
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public getCertificates(filter) {
    let params = new HttpParams();
    params = params.append("pageNo", filter.pageNo);
    params = params.append("pageSize", filter.pageSize);
    params = params.append("pattern", filter.certificationScheme.toUpperCase());
    const options = {
      headers: this.headers,
      params: params
    };
    const url = [
      this.pathAPI,
      "CertificationSchemes"
    ].join(this.pathSeperator);

    return this.http.get(url, options);
  }

  /*public getCertificates(query: CollectionsSearchQuery): angular.
    IPromise<Collections.CollectionSummary[]> {
    // Primitive URL builder
    const url = [// /Collections/?query=string&goes=here
      this.config.REST_ENDPOINT,
      "Asset",
      "CollectionSummary",
    ].join("/");


    return this
      .$http
      .get<CollectionSummaryResponse>(url,
        {
          params: query.toObject()
        })
      .then(
        success => {
          if (success.data.code === HttpStatus.OK) {
            return success.data.data.collection.map(
              (collectionStub: ICollectionSummary) => new Collections
                .CollectionSummary(collectionStub));
          } else {
            return [];
          }

        });
  }*/
}
