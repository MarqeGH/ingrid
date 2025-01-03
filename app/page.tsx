import Image from "next/image";
import heart from "@/images/heart.svg";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-50">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-pink-600 animate-[bounce_1.5s_infinite]">
          Gratulerer med dagen! ❤️❤️❤️
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-700">
          Til Ingrid
        </p>

        <div className="space-y-6 text-lg text-gray-600">
          <p>
            Jeg elsker deg og har det gøy med deg<br/>
            Helt fra dag én med deg på vei opp og ned akerselva har jeg visst at det er noe spesielt med deg
          </p>
          <p>
            Du er helt nydelig og jeg er glad for at vi møttes<br/>
            Det er så mange ting jeg liker ved deg, og det er så mange ting jeg ikke vet om deg <br/>
            Jeg gleder meg til alt
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Image
            className="rounded-full shadow-lg"
            src={heart} // You'll need to add this image
            alt="Heart"
            width={250}
            height={250}
            priority
          />
          
          <div className="animate-pulse text-2xl text-red-500">
            
          </div>
        </div>

        <div className="mt-8 p-6 bg-white/50 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-pink-600 mb-4">
            En liten side for deg, hvis du vil
          </h2>
          <p className="text-gray-700">
            Det her er egentlig bare en liten side for deg <br/>
            Hvis du har lyst til å lage en nettside om noe, så kan jeg hjelpe deg med det. <br/>
            Hva som helst.
          </p>
        </div>
      </main>
      
      <footer className="row-start-3 text-sm text-pink-400">
        Fra Tormod
      </footer>
    </div>
  );
}
