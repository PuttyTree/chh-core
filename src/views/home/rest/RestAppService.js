/**
 * Created by yongli.chen on 2017/10/23.
 */
import RestApi from '../../../providers/rest/RestAppApi';

export default class RestAppService extends RestApi {
    constructor() {
        super();
        // this.baseUrl = '';
        this.requestInterceptor();
    }

    requestInterceptor() {
        let vm = this;
    }

    testPost(data, hideLoader = false, hideErrorRequest = false, hideErrorResponse = true, url = '/users/list') {
        return this.post(url, data, hideLoader, hideErrorRequest, hideErrorResponse);
    }

    testGet(hideLoader = false, hideErrorRequest = false, hideErrorResponse = true, url = '/users/members') {
        return this.get(url, hideLoader, hideErrorRequest, hideErrorResponse);
    }


}
