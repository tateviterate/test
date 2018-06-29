// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { commonEnviroment, getHostName } from './common/common';

// admin test urls
const adminUrls = {
	old: {
        alfa: 'betadmin.alfadigitain.com',
        beta: 'betadmin.betadigitain.com',
    },
    new: {
        alfa: 'admintestnew.alfadigitain.com',
        beta: 'admintestnew.betadigitain.com',
    },
    local: 'localhost'
};

// admin test web apis
const webApis = {
	alfa: 'https://adminwebapi.alfadigitain.com',
	beta: 'https://adminwebapi.betadigitain.com',
	local: 'http://localhost:61197' 
}

function appHost(): string {
    const hostname = getHostName();

    switch(hostname){
        case adminUrls.new.alfa:  
            return adminUrls.old.alfa;
        case adminUrls.new.beta:
            return adminUrls.old.beta
        case adminUrls.local:  
			return adminUrls.new.alfa //adminUrls.old.alfa;
		default:
			return hostname;
    }
}

function apiUrl(): string {
	const hostname: any = getHostName();

	switch (true) {

		// alfa test api url
		case hostname.indexOf('alfadigitain.com') !== -1:
		case hostname === adminUrls.new.alfa:
			return webApis.alfa;

		// beta test api url
		case hostname.indexOf('betadigitain.com') !== -1:
		case hostname === adminUrls.new.beta:
			return webApis.beta;

		// local test api url
		case hostname.indexOf(adminUrls.local) !== -1:
			return webApis.alfa;
	}
}

export const environment = Object.assign(commonEnviroment, {
	production: true,
	apiUrl: (): string => apiUrl(),
	appHost: (): string => appHost()
});