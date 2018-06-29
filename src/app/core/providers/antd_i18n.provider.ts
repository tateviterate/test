import { Provider } from '@angular/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

export const ANTD_I18N: Provider = {
    provide: NZ_I18N, 
    useValue: en_US 
}
