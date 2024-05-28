export interface Translate {
    responseData:    ResponseData;
    quotaFinished:   boolean;
    mtLangSupported: null;
    responseDetails: string;
    responseStatus:  number;
    responderId:     null;
    exception_code:  null;
    matches:         Match[];
}

export interface Match {
    id:                 string;
    segment:            string;
    translation:        string;
    source:             string;
    target:             string;
    quality:            number;
    reference:          null;
    "usage-count":      number;
    subject:            null | string;
    "created-by":       string;
    "last-updated-by":  string;
    "create-date":      Date;
    "last-update-date": Date;
    match:              number;
}

export interface ResponseData {
    translatedText: string;
    match:          number;
}