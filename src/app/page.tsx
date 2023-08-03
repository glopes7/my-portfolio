import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col font-Robot font-black p-36">
      <div>
        <h1 className="text-3xl leading-extra-loose pl-3">
          OLÁ, EU SOU O GUSTAVO
        </h1>
      </div>
      <div className="items-center flex gap-5 ">
        <h1 className="text-[180px] leading-extra-loose">REACT</h1>
        <div className="flex items-center gap-3 mt-3 ">
          <Link href="/gmail">
            <Image
              src="/images/github-icon.png"
              width={100}
              height={100}
              alt="github"
            />
          </Link>
          <Image
            src="/images/linkedin-icon.png"
            width={80}
            height={80}
            alt=""
          />
          <Image
            src="/images/gmail-icon1.png"
            width={120}
            height={120}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-[180px] leading-extra-loose">DEVELOPER</h1>
      </div>
    </div>
  );
}
