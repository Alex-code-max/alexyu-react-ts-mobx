import axios from "axios";
// import mark from "../utils/mark";
// import { MockId, passportId } from "../config/localconfig";
let platform = "we_mobile";
axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "/" : "https://www.confucius.mobi/";
// axios.defaults.headers.platform = platform;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.validateStatus = function(status) {
  return (status >= 200 && status < 300) || status == 700;
};
if (process.env.NODE_ENV === "development") {
  // axios.defaults.headers.mockId = MockId;
  // axios.defaults.headers.passportId = passportId;
}
axios.interceptors.request.use(request => {
  return request;
});

axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 700 || response.data.code === 700) {
      window.location.href =
        decodeURI(
          `${window.location.protocol}//${window.location.host}/wx/oauth/auth/1?callbackUrl=`
        ) + encodeURIComponent(window.location.href);
    } else if (response.data.code !== 0 && response.data.code !== 200) {
    }
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { default as evaluation } from "./evaluation/evaluation";
