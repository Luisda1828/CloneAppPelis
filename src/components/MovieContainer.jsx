import { MainComponent } from "./MainComponent"
import { SecondComponet } from "./SecondComponent"
import { useState } from 'react';


export function MovieContainer() {
       const pelis = [
              {
                titulo: "The Last of Us",
                id: 0,
                descripcion: "Twenty years after modern civilization has been destroyed, Joel, a hardened survivorm is hired to smuggle Elliem a14-year-old girl, out of an opress...",
                poster: "https://m.media-amazon.com/images/I/61cwT2tdAFL._AC_SL1500_.jpg",
                banner: "https://hips.hearstapps.com/hmg-prod/images/the-last-of-us-2023-5120x2880-9422-1673819307.jpg"
              },
              {
                titulo: "Los fantasmas del vuelo 401",
                id: 1,
                descripcion: "Steve Shippy y Cindy Kaza se adentran en los Everglades para ponerse en contacto con los fantasmas de las víctimas del vuelo 401 de Eastern.",
                poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/10/w780/eSFCnkNbpML2AsbvUxDuyC2XMR4.jpg",
                banner: "https://static3.go3.tv/scale/go3/webuploads/rest/upload/vod/4690433/images/18636254?dsth=1080&dstw=1920&srcmode=0&quality=65&type=1&srcx=1&srcy=1&srcw=1/1&srch=1/1"
              },
              {
                titulo: "Posesión infernal: El despertar",
                id: 2,
                descripcion: "Historia de dos hermanas separadas cuyo reencuentro se ve interrumpido por el surgimiento de demonios poseedores de carne...",
                poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/4/w780/uwF8bBauJob5TISQ1cMHoVgIdWD.jpg",
                banner: "https://irs.www.warnerbros.es/hero-banner-jpeg/movies/media/browser/evil_dead_rise_hero.jpg"
              },
              {
                titulo: "Buscadores de fantasmas: Goldfield Hotel",
                id: 3,
                descripcion: "El equipo de Buscadores de fantasmas regresa donde empezó todo, para ajustar cuentas con los espíritus siniestros del infame hotel Goldfield.",
                poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/10/w780/ld9NuYYfFR4kqIDOX83BA5w7RRj.jpg",
                banner: "https://m.media-amazon.com/images/S/pv-target-images/beb28d439c8b9ba9528c8791b5f249971a4f77dcfdd8ce4ecd871dd420c39742._SX1920_FMwebp_.jpg"
              },
              {
                titulo: "La mala semilla regresa",
                id: 4,
                descripcion: "Varios años después de que los eventos asesinos de la primera película dejaran muerto a su padre, Emma ahora vive con su tía Angela y...",
                poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2022/9/w780/n7gVho5g4IFqnbBJL8ATqG53UH4.jpg",
                banner: "https://www.justwatch.com/images/backdrop/304621099/s640/the-bad-seed-returns.webp/the-bad-seed-returns.webp"
              },
              {
                titulo: "La monja II",
                id: 5,
                descripcion: "En 1956 en Francia, un sacerdote es asesinado y parece que un mal se está extendiendo. La hermana Irene una vez más se encuentra cara a cara con una fuerza demoníaca.",
                poster: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/9/w780/x0ryPlzZjpOojEAuGrre2lFuBv6.jpg",
                banner: "https://static.wixstatic.com/media/cd99d9_555e21679d394a79a4281122181edc59~mv2.png"
              }
            
            ];
           
            const [selectedMovie, setSelectedMovie] = useState(pelis[0]);

            // Esta función se usará para actualizar los valores en MainComponent
            function handleSelection(id) {
              const movie = pelis.find((peli) => peli.id === id);
              setSelectedMovie(movie);
          }
           
          
return (
       <>
              <MainComponent selectedMovie={selectedMovie} />
              <h2  className="text-white ml-8 text-[2rem] font-sans font-bold">New Releases</h2>

              <div className="flex gap-4 overflow-y-hidden px-8 py-8">
                     {[...Array(2)].map((_, index) => (
                            pelis.map((peli) => (
                                   <SecondComponet id={peli.id} poster={peli.poster} onSelect={() => handleSelection(peli.id)}   />
                            ))
                     ))}
              </div>

              <div>
    </div>
       </>
);

}