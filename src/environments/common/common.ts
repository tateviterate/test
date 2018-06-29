// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export function getHostName(): string {
    return window.location.hostname;
}

export const commonEnviroment = {
    gmt: ((new Date()).getTimezoneOffset() / -60),
    state: "platform",
    language: "en",
    languages: [
        {
            Id: "ar",
            Name: "Arabic"
        },
        {
            Id: "bs",
            Name: "Bosnian"
        },
        {
            Id: "en",
            Name: "English"
        },
        {
            Id: "fa",
            Name: "Farsi"
        },
        {
            Id: "hr",
            Name: "Croatian"
        },
        {
            Id: "hy",
            Name: "Հայերեն"
        },
        {
            Id: "ku",
            Name: "Kurdish"
        },
        {
            Id: "ru",
            Name: "Русский"
        },
        {
            Id: "sr",
            Name: "Serbian"
        },
        {
            Id: "tr",
            Name: "Türk"
        }
    ],
    smallWidthBreakpoint: 960,
    partnerStyles: []
}