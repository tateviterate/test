import { ANTD_I18N } from './antd_i18n.provider';
import { AUTH_TOKEN_INTERCEPTOR } from './auth-token.provider';
import { HTTP_ERROR_HANDLING_INTERCEPTOR } from './http-error-handling.provider';
import { HTTP_URL_ENCODE_INTERCEPTOR } from './http-url-encode.porvider';
import { HTTP_PARAMETRIZE_INTERCEPTOR } from './http-parametrize.provider';

export const APP_INTERCEPTORS = [
    ANTD_I18N,
    AUTH_TOKEN_INTERCEPTOR,
    HTTP_URL_ENCODE_INTERCEPTOR,
    HTTP_PARAMETRIZE_INTERCEPTOR,
    HTTP_ERROR_HANDLING_INTERCEPTOR
];
