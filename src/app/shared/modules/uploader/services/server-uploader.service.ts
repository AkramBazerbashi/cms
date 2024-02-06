import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ISuccessResponse } from '../../../interfaces/response.interface';
import { NgxFileUploaderModule } from '../uploader.module';

@Injectable({
    providedIn: NgxFileUploaderModule
})
export class ServerUploaderService {
    private readonly baseUrl: string = environment.baseURL;
    constructor(
        private readonly http: HttpClient
    ) { }
    
    public upload(formData: FormData): Observable<ISuccessResponse<{ url: string }>> {
        return this.http.post<ISuccessResponse<{ url: string }>>(
            `${this.baseUrl}/uploadFile`, formData
        )
    }
}