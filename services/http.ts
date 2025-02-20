import axios from "axios";
import axiosRetry from "axios-retry";

/**
 * axios 인스턴스 생성
 */
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 20000,
});

/**
 * axios retry 설정
 * retry 횟수 : 3
 * retry 간 delay : 1000ms
 * 500, 501 status code일 때 retry 시도
 */
axiosRetry(http, {
  retries: 3,
  retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000),
  retryCondition(err) {
    switch (err?.response?.status) {
      case 500:
      case 501:
        return true;
      default:
        return false;
    }
  },
  onRetry: (retryCount, err, requestConfig) => {
    console.log("Retry Count: ", retryCount);
  },
});

/**
 * axios request 인터셉터 설정
 */
http.interceptors.request.use(
  (config) => {
    /**
     * Mock API로 전환
     * request headers에 isMock이라는 이름의 key가 true일 경우, Mock API를 작동시킴
     */
    if (config.headers.isMock) {
      config.baseURL = process.env.NEXT_PUBLIC_MOCK_API_URL;
    }

    return config;
  },
  (err) => {
    console.error(err);

    return Promise.reject(err);
  },
);

/**
 * axios response 인터셉터 설정
 */
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.error(err);

    return Promise.reject(err);
  },
);

export default http;
