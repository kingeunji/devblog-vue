import axios from 'axios'

const domain = 'http://52.78.126.28:8080/v1/api/'
const Unauthorized = 401

const request = (method, url, data) => {
    return axios({
      method, 
      url: domain + url, 
      data
    }).then(result => result.data)
      .catch(result => {
        const {status} = result.response
        if (status === Unauthorized) 
            // 로그인 화면으로 
        throw result.response
      })
}

export const category = {
    fetch() {
        return request('GET', 'categorys')
    },
    create(category) {
        console.log(category)
        return request('POST', 'categorys', category)
    }
}

export const post = {
    create(form) {
        return request('POST', 'posts', form)
    }
}