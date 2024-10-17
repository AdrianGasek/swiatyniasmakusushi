import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-full px-10 sm: flex justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center pt-[90px] sm:max-w-[1000px]">
        <h1 className="text-white text-[30px] sm:text-[64px] text-center pt-[60px]">
          Każdy kawałek sushi robimy z sercem i pasją!
        </h1>
        <div className="flex flex-row w-full justify-center">
          <p className="opacity-40 text-white text-[64px] leading-2 sm:text-[106px] tracking-tight">寿<br/>司</p>
          <Image src="/img/homeImage.png" width={500} height={500} alt="rolki sushi" className="sm: max-h-[300px] object-contain"/>
        </div>
        <p className="text-white text-[30px] sm:text-[40px] text-center">
          Składniki najwyższej jakości. Uczta dla oczu. Nieziemski smak.
        </p>
        <Button text="Zamów teraz" className="mt-6"/>
      </div>
    </div>
  );
}
