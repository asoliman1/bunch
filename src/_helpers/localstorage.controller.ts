import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Localstorage {

    private _cache_user: any;
    user = "nothing";

    constructor(private storage: Storage) { }

    saveUsertype(User) {
        localStorage.setItem(this.user, User);
    }
    public addItemToUserForm = (key, value, success, reject?) => {
        this.storage.get('userForm').then(userFormStrng => {
            let userForm: any;
            try {
                userForm = JSON.parse(userFormStrng);
                userForm[key] = value;
                this.storage.set('userForm', JSON.stringify(userForm))
                    .then(res => {
                        this.setCacheUser(JSON.parse(res));
                        success(this._cache_user);
                    })
                    .catch(error => reject(error));
                success(userForm);
            } catch (e) {
                this.storage.clear().then(() => {
                    console.log('store cleared');
                    this.storage.set('userForm', JSON.stringify({ [key]: value }))
                        .then(res => success(res))
                        .catch(error => reject(error));
                })
            }
        }).catch(err => {
            this.generateEmptyUserForm((res) => success(res), null, { [key]: value });
        });
    }

    public getProductType = (success, reject?) => {
        try {
            this.storage.get('userForm').then(res => {
                let data = JSON.parse(res);
                if (data && data.type) success(data.type);
            }).catch(err => {
                reject(false)
            })
        } catch (e) {
            reject(false)
        }

    }



    public wipeStorageFromUserData = (cb) => {
        this.storage.clear().then(res => {
            this.storage.keys().then((keys) => {
                cb(keys);
            });
        });

    }

    private generateEmptyUserForm = (success, reject?, initData?) => {
        let err: any;
        let data: any;
        (initData) ? data = initData : data = {};
        this.storage.set('userForm', JSON.stringify(data)).then(res => success(res)).catch(error => err = error);
        if (reject) reject(err);
    }

    private setCacheUser = (userObj: Object) => {
        console.log('cache user ', this._cache_user);
        this._cache_user = userObj;
        console.log('cache user ', this._cache_user);
    }




}
