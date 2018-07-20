import http from 'axios'
import qs from 'qs'
import Vue from 'vue'
//请求带上cookie
// http.defaults.withCredentials = true;

// let base = 'http://120.78.69.178:2902/';
// Vue.prototype.base = 'http://120.78.69.178:2902/';    //正式服地址

let base = 'http://120.27.21.136:2798/';
Vue.prototype.base = 'http://120.27.21.136:2798/';  //测试服地址

const doPost = function (url) {
  return function (params) {
    return params ? http.post(`${base}/${url}`, qs.stringify(params)) : http.post(`${base}/${url}`);
  }
}
const doGet = function (url) {
  return function (params) {
    return params ? http.get(`${base}/${url}`, { params: params }) : http.get(`${base}/${url}`);
  }
}

const fileUpload = (url, params) => { return http.post(`${base}/${url}`, params, { headers: { 'Content-Type': 'multipart/form-data' } }); }

//返回拦截器
http.interceptors.response.use(function (res) {
  if (res.data.code == 200) {
  }
  else if (res.data.code == 201) {
    Vue.prototype.$message({ type: 'error', message: '由于您长时间没有操作, 登录已过期, 请重新登录' });
    location.href = base;

  } else {
    if (res.data.msg) {
      Vue.prototype.$message({ type: 'error', message: res.data.msg });
    } else {
      Vue.prototype.$message({ type: 'error', message: "服务器异常，请联系管理员" });
    }
  }
  return res.data;
});
// token拦截器
http.interceptors.request.use(function (req) {
  let token = localStorage.getItem('token');
  if (token != '') {
    req.headers["ACCESS-ROLE"] = 'company';
    req.headers["ACCESS-TOKEN"] = token;
  }
  return req;

});

let api = {
  // 登陆
  gitCode: doPost('company/user/login'),

  // 协议上传
  // uploadBrokerCommission: (params) => { return fileUpload(`company/distribution/uploadBrokerAgreement`, params) },

}

export default api; 
