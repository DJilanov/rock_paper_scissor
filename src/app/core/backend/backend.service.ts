import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { environment } from 'environments/environment';
@Injectable()
export class BackendService {

	constructor(
		private http: Http
	) { 

	}

	backendRequest(requestTarget, requestType, requestData,) {
		if (requestType === 'post') {
			return this.http.post(environment.apiUrl + requestTarget, requestData);
		} else if (requestType === 'get') {
			return this.http.get(environment.apiUrl + requestTarget, {
				params: requestData 
			});
		}
	}

}
