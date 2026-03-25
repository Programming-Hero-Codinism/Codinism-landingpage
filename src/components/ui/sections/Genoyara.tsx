import Image from "next/image";
import Stats from "./Stats";

export default function GenyoraSection() {
  return (
    <>
      {/* MAIN HERO SECTION */}
      <section className="relative w-full py-24 flex flex-col items-center justify-center text-white z-[1] bg-black ">
        {/* ✅ Main image wrapper (keeps the layout responsive & centered) */}
        <div className="relative rounded-3xl shadow-[0_0_30px_rgba(0,122,255,0.3)] bg-gradient-to-b from-[#c8f1d3] to-white w-[1000%] max-w-5xl overflow-hidden">
          <Image
            src="/layer/Edulavo.png"
            alt="Edulavo UI"
            width={1980}
            height={1080}
            className="rounded-2xl"
          />
        </div>

        {/* Reflection container + text overlay */}
        <div className="relative">
          {/*  CENTERED RESPONSIVE TEXT (text remains centered across all screens) */}
          <div className="absolute w-full flex justify-center">
            <p className="text-center text-xl mt-6 leading-relaxed md:text-2xl">
              With codinism,{" "}
              <a href="https://www.edulavo.com" target="_blank">
                Edulavo
              </a>{" "}
              <br /> just brought to life
            </p>
          </div>

          {/*  Reflection image — uses mask to fade out smoothly */}
          <div
            className="relative max-w-5xl h-40 mt-2 pointer-events-none select-none overflow-hidden lg:w-full w-[80%] mx-auto"
            style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), transparent)" }}
          >
            <Image
              src="/layer/Edulavo.png"
              alt="Reflection"
              width={1920}
              height={1080}
              className="scale-y-[-1] object-cover opacity-50 rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* STAT SECTION */}
      <Stats />
    </>
  );
}
