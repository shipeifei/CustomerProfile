import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
    }
}

const parseJSON = (response) => {
    return response.json();
}
export default {
    jsonp(url, cb, errorCb) {
            fetchJsonp(url, {
                credentials: 'same-origin'
            }).then(function(response) {
                cb(response.json());
            }).then(function(data) {
                cb(data);
            }).catch(function(error) {
                errorCb(error);
            })
        },
        form(url, datas, cb, errorCb) {
            fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                body: new FormData(datas)
            }).then(function(response) {
                cb(response);
            }).catch(function(error) {
                errorCb(error);
            })
        },
        post(url, datas, cb, errorCb) {
            fetch(url, {
                credentials: 'same-origin',
                method: 'POST',
                body: datas
            }).then(function(response) {
                return response.json();
            }).then(function(json) {
                cb(json);
            }).catch(function(ex) {
                errorCb(ex);
            })
        },
        get(url, datas, cb, errorCb) {
            fetch(url, {
                    credentials: 'same-origin'
                })
                .then(checkStatus)
                .then(parseJSON)
                .then(function(data) {
                    cb(data);
                }).catch(function(error) {
                    errorCb(error);
                })
        }
}
