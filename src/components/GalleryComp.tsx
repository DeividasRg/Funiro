"use client";
import picture1 from "../../public/Rectangle 24.png";
import picture2 from "../../public/Rectangle 25.png";
import picture5 from "../../public/Rectangle 38.png";
import picture6 from "../../public/Rectangle 39.png";
import picture7 from "../../public/Rectangle 40.png";
import picture8 from "../../public/Rectangle 41.png";
import picture9 from "../../public/Rectangle 43.png";
import picture10 from "../../public/Rectangle 44.png";
import picture11 from "../../public/Rectangle 45.png";
import Gallery from "react-photo-gallery";

function GalleryComp() {
  const photos = [
    picture1,
    picture2,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
    picture11,
  ].map((picture) => ({
    src: picture.src,
    width: (picture.width as number) || 1,
    height: (picture.height as number) || 1,
  }));

  return <Gallery photos={photos} direction="column" columns={4} margin={20} />;
}

export default GalleryComp;
