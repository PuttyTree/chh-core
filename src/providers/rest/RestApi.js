/**
 * Created by yongli.chen on 2017/4/14.
 */
import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
let _ = require('lodash');

export default class RestApi {
    constructor() {
        this.setOpt({});
        this.axios = axios;
        this.init()
    }

    init() {
        //this.requestInterceptor()
        this.responseInterceptor();
    }

    setOpt(opt = {}) {
        this.path = opt.path || '';
        this.baseUrl = '';
        this.hideErrorRequest = false;
        this.hideErrorResponse = false;
        this.hideLoader = false;
        this.options = {
            success: opt.success,
            fail: opt.fail,
            before: opt.beforeSend,
            complete: opt.complete,
            cache: opt.cache || false,
            emulateJSON: opt.emulateJSON || false,
            redirect: opt.redirect || false
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
        return this.ajax(params);
    }

    post(url, data, hideLoader = false, hideErrorRequest = false, hideErrorResponse = true) {
        this.hideLoader = hideLoader;
        this.hideErrorResponse = hideErrorResponse;
        this.hideErrorRequest = hideErrorRequest;
        return this.ajax({
            method: 'post',
            url: this.baseUrl + url,
            data: data
        });
    }

    ajax(config) {
        return this.axios(config)
    }

    requestInterceptor() {
        let vm = this;
        vm.axios.interceptors.request.use(
            config => {
                if (!vm.hideErrorRequest) {
                    let token = window.localStorage.getItem('AuthToken')
                    if (token !== null && token.length > 0) {
                        config.headers.AuthToken = token;
                    } else {
                        return Promise.reject('没有授权码');
                    }
                }
                vm.hideErrorRequest = false;
                return config;
            },
            err => {
                vm.hideErrorRequest = false;
                return Promise.reject(err);
            });

    }

    responseInterceptor() {
        let vm = this;
        this.axios.interceptors.response.use((res) => {
            if (!vm.hideLoader) {
                // vm.loaderService.hide();
            }
            vm.hideLoader = false;
            vm.hideErrorResponse = false;
            return res.data || {};
        }, (err) => {
            if (!vm.hideLoader) {
                // vm.loaderService.hide()
            }
            if (err.response && err.response.status === 401) {
            }
            if (!vm.hideErrorResponse) {
                vm.showResponseError(err);
            }
            vm.hideLoader = false;
            vm.hideErrorResponse = false;
            return Promise.reject(err);

        })
    }

    showResponseError(err) {
        if (!err.response || !err.response.status) {
            return;
        }
        let txt = '';
        switch (err.response.status) {
            case 404:
                txt = err.response.statusText;
                alert("错误代码：404，" + txt);
                // this.toastService.addMessage(txt, 'error');
                break;
            default:
                break
        }

    }

}

