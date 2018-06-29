import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    private storage;

    constructor() {
        this.storage = window.localStorage;
    };

    public get(storageName: string, isObject: boolean = false) {
        let storageItem = this.storage.getItem(storageName);

        if (isObject) {
            return JSON.parse(storageItem)
        } else {
            return storageItem;
        }
    }

    public set(storageName: string, storageData: any, isObject: boolean = false): void {
        let storageItem = storageData;

        if (isObject) {
            storageItem = JSON.stringify(storageData);
        }

        this.storage.setItem(storageName, storageItem);
    }

    public remove(storageName: string): void {
        this.storage.removeItem(storageName);
    }

    public keyExist(storageKey: string): boolean {
        let storageKeys = Object.keys(this.storage);
        return storageKeys.indexOf(storageKey) !== -1;
    }

    public keysExists(storageKeys: Array<string>): boolean {
        let keyExist = true;

        storageKeys.forEach(storageKey => {
            if (!keyExist) return keyExist;
            keyExist = this.keyExist(storageKey);
        });

        return keyExist;
    }
    public removeUserData() {
        let keys=this.getKeys();
        keys.map((key:string)=>{
            if(!key.includes('grid'))
                this.remove(key);
        })
    }
    private getKeys(){
        let array=[];
        for (var i = 0; i < this.storage.length; i++) {
            array.push(this.storage.key(i));
        }
        return array;
    }
    
    public clear(): void {
        this.storage.clear();
    }
}
