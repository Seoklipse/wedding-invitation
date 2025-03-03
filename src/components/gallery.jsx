import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";
import GalleryPhoto7 from "../assets/Gallery_Photo_7.webp";
import GalleryPhoto8 from "../assets/Gallery_Photo_8.webp";
import GalleryPhoto9 from "../assets/Gallery_Photo_9.webp";
import GalleryPhoto10 from "../assets/Gallery_Photo_10.webp";
import GalleryPhoto11 from "../assets/Gallery_Photo_11.webp";
import GalleryPhoto12 from "../assets/Gallery_Photo_12.webp";
import GalleryPhoto13 from "../assets/Gallery_Photo_13.webp";
import GalleryPhoto14 from "../assets/Gallery_Photo_14.webp";
import GalleryPhoto15 from "../assets/Gallery_Photo_15.webp";
import GalleryPhoto16 from "../assets/Gallery_Photo_16.webp";
import GalleryPhoto17 from "../assets/Gallery_Photo_17.webp";
import GalleryPhoto18 from "../assets/Gallery_Photo_18.webp";
import GalleryPhoto19 from "../assets/Gallery_Photo_19.webp";
import GalleryPhoto20 from "../assets/Gallery_Photo_20.webp";
import GalleryPhoto21 from "../assets/Gallery_Photo_21.webp";
import GalleryPhoto22 from "../assets/Gallery_Photo_22.webp";
import GalleryPhoto23 from "../assets/Gallery_Photo_23.webp";
import GalleryPhoto24 from "../assets/Gallery_Photo_24.webp";
import GalleryPhoto25 from "../assets/Gallery_Photo_25.webp";
import GalleryPhoto26 from "../assets/Gallery_Photo_26.webp";
import GalleryPhoto27 from "../assets/Gallery_Photo_27.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20,
  },
  {
    original: GalleryPhoto21,
    thumbnail: GalleryPhoto21,
  },
  {
    original: GalleryPhoto22,
    thumbnail: GalleryPhoto22,
  },
  {
    original: GalleryPhoto23,
    thumbnail: GalleryPhoto23,
  },
  {
    original: GalleryPhoto24,
    thumbnail: GalleryPhoto24,
  },
  {
    original: GalleryPhoto25,
    thumbnail: GalleryPhoto25,
  },
  {
    original: GalleryPhoto26,
    thumbnail: GalleryPhoto26,
  },
  {
    original: GalleryPhoto27,
    thumbnail: GalleryPhoto27,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
