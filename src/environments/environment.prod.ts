// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { commonEnviroment, getHostName } from './common/common';

// admin urls start
const captainwinUrls = [
    'admin.captainwin.com',
    'betadmin.captainwin.com',
    '999bet.admindigi.com',
    'admin.cpwin777.com'
];

const totogamingUrls = [
    'admincasino.totogaming.am',
    'admindigitain.totogaming.am'
];

const irbetUrls = [
    'betadmin.irbet365.com',
    'admin.irbet365.com',
    '1xfa.admindigi.com',
    'winstar90.admindigi.com',
    'betnama.admindigi.com',
    'cr7ir.admindigi.com',
    'irbet365.admindigi.com',
    'betfa.admindigi.com',
    'takbet.admindigi.com',
    'irtoto.admindigi.com',
    'vbetstars.admindigi.com'
];

const xlivebetUrls = [
    'admin.xlivebet.com',
    'betadmin.xlivebet.com'
];
// admin urls end

// admin web apis
const webApis = {
    shared: 'https://adminwebsd.apidigi.com',
    dedicated: {
        xlivebet: 'https://adminwebapi.xlivebet.com',
        toto: 'https://adminwebapi.totogaming.am',
        irbet: 'https://adminwebir.apidigi.com',
        captainwin: 'https://adminwebcw.apidigi.com'
    }
}

function appHost(): string {
    const hostname = getHostName();
    return hostname;
}

function apiUrl(): string {
    const hostname: any = getHostName();

    switch (true) {

        // captainwin dedicated api url
        case captainwinUrls.indexOf(hostname) !== -1:
            return webApis.dedicated.captainwin;

        // totogaming dedicated api url
        case totogamingUrls.indexOf(hostname) !== -1:
            return webApis.dedicated.toto;
            
        // irbet dedicated api url
        case irbetUrls.indexOf(hostname) !== -1:
            return webApis.dedicated.irbet;

        // xlivebet dedicated api url
        case xlivebetUrls.indexOf(hostname) !== -1:
            return webApis.dedicated.xlivebet;

        // shared api url 
        default:
            return webApis.shared;
    }
}

export const environment = Object.assign(commonEnviroment, {
    production: true,
    apiUrl: (): string => apiUrl(),
    appHost: (): string => appHost()
});
