export class Language {
    static readonly type = '[UI] Language';
    constructor(public payload: any) { }
}

export class LanguageSuccess {
    static type = '[UI] LanguageSuccess';
    constructor(public user: any) { }
}

export class LanguageFailed {
    static type = '[UI] LanguageFailed';
    constructor(public error: any) { }
}
