import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta property="og:type" content="website" key="og:type" />,
    <meta property="og:title" content="윤석현❤오수연 결혼식에 초대합니다" key="og:title" />,
    <meta property="og:description" content="2025년 4월 5일 (토) 오후 2시🤵👰 까사그랑데 센트로 6층 에떼르노홀" key="og:description" />,
    <meta property="og:image" content="https://seoklipse.github.io/wedding-invitation/KakaoThumbnail.png" key="og:image" />,
    <meta property="og:url" content="https://seoklipse.github.io/wedding-invitation/" key="og:url" />,
    <meta name="twitter:card" content="summary_large_image" key="twitter:card" />,
  ]);
};
