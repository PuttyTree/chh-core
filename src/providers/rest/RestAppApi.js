/**
 * Created by yongli.chen on 2017/4/14.
 */
let _ = require('lodash');

export default class RestApi {
    constructor() {
        this.setOpt({});
        this.init();
    }

    init() {
        //this.requestInterceptor()
        this.responseInterceptor();
    }

    setOpt(opt = {}) {
        this.path = opt.path || '';
        this.baseUrl = 'http://10.16.65.138:8080';
        this.hideErrorRequest = false;
        this.hideErrorResponse = false;
        this.hideLoader = false;
        this.headers = {
            'Content-Type': 'application/json'
        };
        this.options = {
            before: opt.beforeSend,
            complete: opt.complete,
            cache: opt.cache || false,
            dataType: opt.dataType || 'json',
            timeout: opt.timeout || 60000,
            headers: opt.headers || this.headers,
        }
    }

    getOpt() {
        return this.options
    }

    get(url, hideLoader = false, hideErrorRequest = false, hideErrorResponse = true) {
        this.hideLoader = hideLoader;
        this.hideErrorRequest = hideErrorRequest;
        this.hideErrorResponse = hideErrorResponse;

        let params = _.merge({
            method: 'get',
            url: this.baseUrl + url
        }, this.options);

        return this.ajax(params)
    }

    post(url, data, hideLoader = false, hideErrorRequest = false, hideErrorResponse = true) {
        this.hideLoader = hideLoader;
        this.hideErrorResponse = hideErrorResponse;
        this.hideErrorRequest = hideErrorRequest;

        let params = _.merge({
            method: 'post',
            url: this.baseUrl + url,
            data: {
                body: data
            }
        }, this.options);


        return this.ajax(params);
    }

    ajax(params) {
        return new Promise((resolve, reject) => {
            api.ajax(params, function (ret, err) {
                if (ret) {
                    resolve(ret);
                } else {
                    reject(err);
                }
            });
        });

    }

    requestInterceptor() {
        let vm = this;

    }

    responseInterceptor() {
        let vm = this;
    }

    showResponseError(err) {
        if (!err.response || !err.response.status) {
            return;
        }
        let txt = '';
        switch (err.response.status) {
            case 404:
                txt = err.response.statusText;
                this.toastService.addMessage(txt, 'error');
                break;
            default:
                break
        }

        console.log(txt)
    }

}

