import Image from "next/image";
import shopImg from "@/../public/shop.png";

type HeaderPictureProps = {
  topTitle: string;
  bottomRoute: string;
};

function HeaderPicture({ topTitle, bottomRoute }: HeaderPictureProps) {
  return (
    <div className="w-full relative">
      <Image
        src={shopImg}
        alt="shop"
        width={shopImg.width}
        height={shopImg.height}
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
        <h1 className="font-bold text-5xl">{topTitle}</h1>
        <p className="text-base">
          <span className="font-bold">Home &gt;</span> {bottomRoute}
        </p>
      </div>
    </div>
  );
}

export default HeaderPicture;
