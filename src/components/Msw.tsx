import { Link } from "@mui/material";
import { Image, Typography } from "antd";

const Msw = () => {
  return (
    <>
      <div className="lg:flex w-full justify-evenly mt-10 p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[700px]  mt-2">
            Para esta segunda parte de la implementación, utilizaremos
            <Link href="https://mswjs.io/" target="_black" underline="none">
              <strong className="text-blue-600 ml-2">
                Mock Service Worker (MSW)
              </strong>
            </Link>
            en sus dos modalidades: browser y server. Estas herramientas nos
            ayudarán a simular nuestras peticiones tanto en las pruebas de
            componentes como en el navegador. De esta manera, podremos trabajar
            en la implementación de interfaces sin realizar peticiones
            innecesarias al backend o, si aún estamos desarrollando esa parte,
            avanzar con datos simulados.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[700px] mt-2">
            En cuanto a la organización de carpetas, crearemos una carpeta para
            la configuración de MSW. Prefiero separar esta configuración en tres
            archivos para mayor claridad sobre sus funciones. Luego, en cada
            módulo específico de la aplicación, guardaremos los mocks
            correspondientes a las peticiones.En cuanto a la estructuración de
            carpetas, organizaremos toda la lógica de las peticiones en una
            única carpeta llamada API. En esta carpeta, incluiremos los
            endpoints, los servicios y, si es necesario, los transforms. Esto
            nos permitirá mantener una organización clara y accesible de nuestro
            código relacionado con las peticiones.
          </Typography>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/carpetas.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/main.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Comencemos con el archivo main.tsx, en el que modificaremos el
            código para envolver nuestro punto de entrada de la aplicación con
            una función que determinará si trabajamos con datos mockeados o si
            realizamos peticiones reales a la API.
          </Typography>
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Ahora, pasemos a uno de los archivos que definimos en la carpeta
            mocks, específicamente handlers.ts. En este archivo, simularemos las
            peticiones, listándolas en un array para los distintos métodos HTTP
            que necesitemos, como GET, POST, etc.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            A este método le pasaremos dos parámetros:
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2 xl:mt-14">
            <strong>1. URL de la API:</strong> La importación desde el archivo
            .env, que contiene la URL del backend. Como habrán notado, al
            modificar esta URL en el archivo .env, estamos actualizando varias
            partes de nuestra aplicación sin mucho esfuerzo.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            <strong>2. Función de simulación:</strong> Esta función simula la
            llamada a la API, como se puede ver en la segunda imagen.
          </Typography>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/handlers.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
          <Image
            src="/images/explicacionmsw/mockCountries.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/browser.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
          <Image
            src="/images/explicacionmsw/server.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Ahora revisemos los dos archivos restantes: browser.ts y server.ts.
            En estos archivos, cargaremos las configuraciones definidas en el
            archivo handlers.ts. Desde Mock Service Worker (MSW), importaremos
            los métodos necesarios para registrar nuestras peticiones en el
            entorno adecuado.
          </Typography>
        </div>
      </div>
      <div className="flex justify-center">
        <Typography className="text-center text-white roboto-condensed text-5xl font-bold px-2 max-w-[800px]">
          Hemos terminado. Ahora solo queda probar que todo esté funcionando
          correctamente tanto en nuestros tests como en el navegado
        </Typography>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/testServer.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/resultTest.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/browserResult.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacionmsw/consolaResult.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
      </div>
    </>
  );
};

export default Msw;
