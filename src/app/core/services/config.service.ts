import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ConfigService {

    public production: boolean;

    public apiUrl: string;
    public requestUrl: string;
    public appHost: string;

    public gmt: number;
    public state: string;

    public language: string;
    public languages: any[];
    public showedLanguages: string[];

    public smallWidthBreakpoint: number;

    public partnerStyles: number[];

    constructor() {

        this.production = environment.production;

        this.apiUrl = environment.apiUrl();
        this.requestUrl = `${this.apiUrl}/api/Main`;
        this.appHost = environment.appHost();

        this.gmt = environment.gmt;
        this.state = environment.state;

        this.language = environment.language;
        this.languages = environment.languages;
        this.showedLanguages = ['en', 'ru'];

        this.smallWidthBreakpoint = environment.smallWidthBreakpoint;

        this.partnerStyles = environment.partnerStyles;
    }
}


