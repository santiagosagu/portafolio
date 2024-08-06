import { Link, ListItemText } from "@mui/material";
import { Image, Typography } from "antd";

const SectionExplicacion = () => {
  return (
    <>
      <div className="lg:flex w-full justify-evenly lg:mt-20 p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white roboto-condensed text-5xl font-bold">
            Explicacion
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] mt-2">
            Me encantaría explicar en detalle toda la estructura de los
            proyectos, pero hacerlo por escrito podría resultar extenso. En
            cambio, prefiero centrarme en dos temas específicos que podrían ser
            de gran ayuda para sus propios proyectos:
          </Typography>
          <ListItemText
            primary={
              <>
                <Typography className="text-slate-900 font-bold text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  1. Creación de un Hook Personalizado para peticiones Fetch:
                </Typography>
                <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  Aprenderemos a crear un custom hook que nos permita manejar
                  nuestras peticiones fetch de una manera más ordenada y fácil
                  de reutilizar. Esto nos ayudará a simplificar la gestión de
                  datos y a mantener un código más limpio y eficiente.
                </Typography>
                <Typography className="text-slate-900 font-bold text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  2. Uso de Mock Service Worker (MSW) en Entornos de Desarrollo:
                </Typography>
                <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  Exploraremos cómo utilizar Mock Service Worker para simular
                  peticiones al backend en nuestro entorno de desarrollo. Esto
                  es especialmente útil si aún no tenemos disponibles los
                  endpoints que necesitamos para nuestras interfaces o si
                  queremos evitar realizar peticiones innecesarias mientras
                  trabajamos en el frontend. Además, MSW es ideal para nuestras
                  pruebas, permitiendo simular datos que deben llegar a través
                  de peticiones.
                </Typography>
                <Typography className="text-slate-900 font-bold text-xl lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  Sin más preámbulos, comencemos.
                </Typography>
              </>
            }
          />
        </div>
        <div className="flex justify-end mt-4 lg:mt-0 xl:w-[800px]">
          <img
            src="/images/bannerExplicacion.jpeg"
            alt=""
            className="rounded-xl w-[400px] lg:w-[1200px] card-album-shadom"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly mt-10 p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[700px]  mt-2">
            Para este ejemplo, utilizaremos la biblioteca,
            <Link
              href="https://tanstack.com/query/v3"
              target="_black"
              underline="none"
            >
              <strong className="text-blue-600">TanStack Query</strong>
            </Link>
            , que nos permite manejar los distintos estados de nuestras
            peticiones, como errores y estados de carga, entre otros. Basándonos
            en esta funcionalidad que nos proporciona, centralizaremos nuestras
            peticiones para optimizar su manejo y reutilización.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[700px] mt-2">
            En cuanto a la estructuración de carpetas, organizaremos toda la
            lógica de las peticiones en una única carpeta llamada API. En esta
            carpeta, incluiremos los endpoints, los servicios y, si es
            necesario, los transforms. Esto nos permitirá mantener una
            organización clara y accesible de nuestro código relacionado con las
            peticiones.
          </Typography>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/image1.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/app.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            En nuestro archivo App.tsx, crearemos nuestro queryClient y lo
            pasaremos al componente que envuelve todos nuestros componentes. En
            este caso, ese componente es RouterProvider, que forma parte de la
            configuración de react-router-dom. Sin embargo, en esta ocasión, no
            profundizaremos en las rutas. Con esto, tendremos todo listo en el
            archivo App.tsx.
          </Typography>
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Ahora, vamos al archivo fetchGet ubicado en la carpeta endpoints,
            donde realizaremos una función fetch normal. Esta función estará
            preparada para recibir el resource y los params que requiera cada
            llamada, lo que hará que la implementación sea más dinámica. La URL
            base se almacenará en el archivo .env, de modo que, si más adelante
            es necesario cambiarla, solo habrá que modificarla en un solo lugar
            para que todo siga funcionando correctamente.
          </Typography>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/fetchGet.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/useGetList.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Después de haber generado nuestra petición fetch, crearemos un nuevo
            archivo en la carpeta service. En este archivo, consumiremos el hook
            de React Query y, además, verificaremos que, si logramos obtener los
            datos de la petición, estos pasen por el transform, el cual nos
            devolverá la lista de datos listos para mostrar en nuestras
            interfaces. Este custom hook recibe parámetros que nos permiten
            usarlo de forma dinámica, adaptándose a diferentes necesidades según
            los datos requeridos.
          </Typography>
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Ahora tenemos un paso opcional: pasar los datos de la petición a
            través de un transform para facilitar su acceso. En este caso,
            podemos observar que hay una clave keyResults, que es el nombre del
            array principal de los datos. Dado que estamos consumiendo la API de
            Rick and Morty, la información de paginación se encuentra en la
            posición info, donde se generan los datos necesarios para la
            paginación y los estoy guardando en metaData.
          </Typography>
        </div>
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/transform.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom mt-3 lg:mt-0"
          />
        </div>
      </div>
      <div className="lg:flex w-full justify-evenly p-2 bg-[#1d2124] py-24">
        <div className="max-w-[500px]">
          <Image
            src="/images/explicacion/dashboard1.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
          <Image
            src="/images/explicacion/dashboard.png"
            width={"100%"}
            alt=""
            className="object-contain card-album-shadom"
          />
        </div>
        <div>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            ¡Listo! Hemos finalizado. Ahora solo nos queda consumir el custom
            hook de services para cada una de las peticiones que necesitemos.
            Nuestro hook requiere algunos parámetros para funcionar
            correctamente:
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            1. Key: Es necesaria para que React Query indexe nuestras
            peticiones.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            2. Resource: Son los complementos de nuestro path. Por ejemplo, si
            https://rickandmortyapi.com es nuestra ruta principal, en resource
            le enviaremos character para completar la petición.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            3. Parámetros: Aquí enviamos un objeto con valores como name,
            status, id, etc.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            4. Posición de la respuesta: Este parámetro indica cómo se encuentra
            estructurada la respuesta. En este caso, la API nos trae los datos
            en la posición results.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            5. Enabled (opcional): Esto es para evitar peticiones innecesarias.
            Por ejemplo, si no hay un usuario, no se realiza la petición.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            Con estos pasos, podemos reutilizar nuestro custom hook de manera
            eficiente y dinámica.
          </Typography>
          <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
            En la segunda imagen, podemos ver cómo utilizar el custom hook con
            varios llamados dentro de una interfaz.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SectionExplicacion;
