import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { IBaseService } from "../../interfaces/services.interface";

export class BaseService implements IBaseService {
    protected readonly baseUrl: string = environment.baseURL;
    constructor(
        public readonly http: HttpClient
    ) {}
}