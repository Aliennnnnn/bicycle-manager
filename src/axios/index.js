import JsonP from 'jsonp'
import axios from 'axios'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url,{
                param: 'callback'
            },function (err, response){
                if(response.status === 'success'){
                    resolve(response);
                }else {
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options) {
        let baseApi = 'https://www.easy-mock.com/mock/5b6abfbef594902f063a3c07/bicycleapi'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 10000,
                params:( options.data && options.data.params) || ''
            }).then(response => {
                if(response.status === 200){
                    let res = response.data;
                    if( res.code === 0 ){
                        resolve(res)
                    }
                }else {
                    reject(response.data)
                }
            })
        });
    }
}