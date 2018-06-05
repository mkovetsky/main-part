import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as layouts from '../mock/profile-modal-layouts';
import * as response from '../mock/profile-modals-data';

@Injectable()
export class ProfileModalService {

    constructor(private http: HttpClient) {}

    public getData() {
        return response.data;
    }

    public getLayouts() {
        return layouts.modalLayouts;
    }
}
