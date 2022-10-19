/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(
    protected http: HttpClient,
    protected controller: String
  ) { }

  async httpGet() {
    try {
      return await this.http.get<Array<any>>(env.api + this.controller);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  async  httpGetId(id: number) {
    try {
      return await this.http.get(env.api+ this.controller + '/' + id).toPromise();

    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async httpPut(data: any) {
    let response;
    await this.http.put(env.api + this.controller, data, {observe: 'response'}).toPromise()
    .then(t => {response = t;}).catch(c => {response = c;});
    return response;
  }

  async httpPost(data: any) {
    try {
      let response;
      await this.http.post(env.api + this.controller, data, {observe: 'response'}).toPromise()
      .then(t => {response = t;}).catch(c => {response = c;});
      return response;
    }
    catch (e) {
      console.log(e);
    }
  }

  async httpDelete(id: number) {

    const  response = await this.http.delete(env.api + `${this.controller}/` + id, {observe: 'response'}).toPromise();

    return response;

  }
}
