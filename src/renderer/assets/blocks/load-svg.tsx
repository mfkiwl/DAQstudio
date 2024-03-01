import { memo } from "react";
import { resolveBlockSVG } from "./svg-helper";

const DefaultLoadSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="-230 620 120 120"
  >
    <rect width="100%" height="100%" fill="transparent"></rect>
    <rect
      width="120"
      height="120"
      x="-60"
      y="-60"
      fill="#FFF"
      rx="0"
      ry="0"
      transform="translate(60 60)"
      vectorEffect="non-scaling-stroke"
      visibility="hidden"
    ></rect>
    <path
      className="fill-accent2"
      fillRule="evenodd"
      d="M196.998 35.311c-2.231.679-4.263 2.519-19.106 17.307-18.155 18.088-17.718 17.54-17.722 22.215C160.164 80.821 164.315 85 170.267 85c3.678 0 4.718-.701 12.57-8.477L190 69.43v103.13l1.019 2.04c3.679 7.361 14.364 7.274 18.017-.147l.797-1.62.167-51.572.167-51.572 6.666 6.654c7.977 7.962 8.803 8.493 13.167 8.473 7.254-.034 11.836-6.692 9.325-13.549-1.073-2.928-31.284-33.499-34.829-35.244-2.145-1.056-5.363-1.361-7.498-.712M126.5 190.407c-8.111 2.876-8.813 14.719-1.101 18.573l2.041 1.02h144.935l1.795-.849c7.609-3.6 7.866-14.416.43-18.132L272.56 190l-72.53.026c-50.333.019-72.836.135-73.53.381m30 30.001c-2.509.892-5.25 3.683-6.115 6.225-.257.757-.385 4.416-.385 11.03v9.897l1.019 2.04c3.751 7.507 14.508 7.229 18.149-.467l.867-1.833-.101-10.233c-.111-11.253-.109-11.243-2.431-14.003-2.137-2.54-7.613-3.861-11.003-2.656m40 0c-2.509.892-5.25 3.683-6.115 6.225-.286.842-.385 17.795-.385 66.03v64.897l1.019 2.04c3.743 7.49 14.508 7.23 18.135-.437l.853-1.802-.087-65.264-.087-65.264-.734-1.372c-2.395-4.478-7.951-6.706-12.599-5.053m39.333.394c-1.965.938-4.177 3.035-5.046 4.784-.597 1.201-.62 3.347-.62 58.247v57l.904 2.769c1.579 4.83 3.517 8.169 6.809 11.724 1.789 1.932 5.798 5.341 6.282 5.341.13 0 .633.281 1.12.625 4.775 3.377 19.156 5.097 23.888 2.859 7.432-3.516 7.888-14.089.774-17.99-1.675-.919-2.074-.988-6.944-1.202-6.732-.297-9.204-1.347-11.353-4.824-1.689-2.732-1.634-.809-1.643-58.311-.005-32.818-.131-54.104-.324-54.778-1.636-5.703-8.498-8.797-13.847-6.244m-80 44.986c-9.552 4.476-6.846 18.61 3.667 19.151 11.056.569 14.753-14.659 4.644-19.13-2.52-1.114-5.959-1.123-8.311-.021m.667 29.62c-2.251.801-4.932 3.362-6.027 5.759-.168.366-.385 8.541-.483 18.166-.216 21.207-.369 21.84-5.919 24.565l-1.904.935L92 345c-56.537.188-51.176-.089-54.032 2.787-4.939 4.972-3.688 13.176 2.47 16.208l2.068 1.017 51.497-.098c48.348-.092 51.619-.134 53.497-.694 11.608-3.463 18.871-10.873 21.804-22.244 1.05-4.073.876-39.495-.205-41.515-2.395-4.478-7.951-6.706-12.599-5.053m134.333 50.38c-9.552 4.476-6.846 18.61 3.667 19.151 11.056.569 14.753-14.659 4.644-19.13-2.52-1.114-5.959-1.123-8.311-.021m30.667-.381c-8.111 2.876-8.813 14.719-1.101 18.573l2.041 1.02h34.935l1.795-.849c7.609-3.6 7.866-14.416.43-18.132L357.56 345l-17.53.026c-11.47.018-17.876.149-18.53.381M-25 0h20vNaNz"
      transform="matrix(0 0) translate(-170.01 -182.58)"
    ></path>
    <path
      className="fill-accent2"
      d="M26.988-147.269c-2.231.679-4.263 2.519-19.106 17.307-18.155 18.088-17.718 17.54-17.722 22.215C-9.846-101.759-5.695-97.58.257-97.58c3.678 0 4.718-.701 12.57-8.477l7.163-7.093v103.13l1.019 2.04c3.679 7.361 14.364 7.274 18.017-.147l.797-1.62.167-51.572.167-51.572 6.666 6.654c7.977 7.962 8.803 8.493 13.167 8.473 7.254-.034 11.836-6.692 9.325-13.549-1.073-2.928-31.284-33.499-34.829-35.244-2.145-1.056-5.363-1.361-7.498-.712M-43.51 7.827c-8.111 2.876-8.813 14.719-1.101 18.573l2.041 1.02h144.935l1.795-.849c7.609-3.6 7.866-14.416.43-18.132l-2.04-1.019-72.53.026c-50.333.019-72.836.135-73.53.381m30 30.001c-2.509.892-5.25 3.683-6.115 6.225-.257.757-.385 4.416-.385 11.03v9.897l1.019 2.04c3.751 7.507 14.508 7.229 18.149-.467l.867-1.833-.101-10.233c-.111-11.253-.109-11.243-2.431-14.003-2.137-2.54-7.613-3.861-11.003-2.656m40 0c-2.509.892-5.25 3.683-6.115 6.225-.286.842-.385 17.795-.385 66.03v64.897l1.019 2.04c3.743 7.49 14.508 7.23 18.135-.437l.853-1.802-.087-65.264-.087-65.264-.734-1.372c-2.395-4.478-7.951-6.706-12.599-5.053m39.333.394c-1.965.938-4.177 3.035-5.046 4.784-.597 1.201-.62 3.347-.62 58.247v57l.904 2.769c1.579 4.83 3.517 8.169 6.809 11.724 1.789 1.932 5.798 5.341 6.282 5.341.13 0 .633.281 1.12.625 4.775 3.377 19.156 5.097 23.888 2.859 7.432-3.516 7.888-14.089.774-17.99-1.675-.919-2.074-.988-6.944-1.202-6.732-.297-9.204-1.347-11.353-4.824-1.689-2.732-1.634-.809-1.643-58.311-.005-32.818-.131-54.104-.324-54.778-1.636-5.703-8.498-8.797-13.847-6.244m-80 44.986c-9.552 4.476-6.846 18.61 3.667 19.151 11.056.569 14.753-14.659 4.644-19.13-2.52-1.114-5.959-1.123-8.311-.021m.667 29.62c-2.251.801-4.932 3.362-6.027 5.759-.168.366-.385 8.541-.483 18.166-.216 21.207-.369 21.84-5.919 24.565l-1.904.935-50.167.167c-56.537.188-51.176-.089-54.032 2.787-4.939 4.972-3.688 13.176 2.47 16.208l2.068 1.017 51.497-.098c48.348-.092 51.619-.134 53.497-.694 11.608-3.463 18.871-10.873 21.804-22.244 1.05-4.073.876-39.495-.205-41.515-2.395-4.478-7.951-6.706-12.599-5.053m134.333 50.38c-9.552 4.476-6.846 18.61 3.667 19.151 11.056.569 14.753-14.659 4.644-19.13-2.52-1.114-5.959-1.123-8.311-.021m30.667-.381c-8.111 2.876-8.813 14.719-1.101 18.573l2.041 1.02h34.935l1.795-.849c7.609-3.6 7.866-14.416.43-18.132l-2.04-1.019-17.53.026c-11.47.018-17.876.149-18.53.381m-346.5-345.407h20lNaN NaNz"
      transform="matrix(.36 0 0 .35 -181.75 674.37)"
      vectorEffect="non-scaling-stroke"
    ></path>
  </svg>
);

export const blockNameToSvgMap = {
  default: DefaultLoadSVG,
};

export default memo(resolveBlockSVG(blockNameToSvgMap));
