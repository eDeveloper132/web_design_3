import Image, { StaticImageData } from "next/image";

export default function Shop_List_Card({
  title,
  image,
  // paragraph,
  // discountedPrice,
  // originalPrice,
}: {
  title: string;
  image: StaticImageData;
  // paragraph: string;
  // discountedPrice: number;
  // originalPrice: number;
}) {
  return (
    <>
        <div className="sm:hidden md:hidden lg:block xl:block 2xl:block shadow-lg shadow-[#F6F6FD80]/50 w-[1100px] h-auto flex gap-4 px-4 my-8 py-4">
            <span>
              <Image src={image} width={313} alt={title}></Image>
            </span>
        </div>
    </>
  );
}
