import { ListItemText } from "@mui/material";
import { Typography } from "antd";
import ReactQuery from "./ReactQuery";
import Msw from "./Msw";

const SectionExplicacion = () => {
  return (
    <>
      <div className="lg:flex w-full justify-evenly lg:mt-20 p-2 bg-slate-400 py-24">
        <div>
          <Typography className="text-black roboto-condensed text-5xl font-bold">
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
                <Typography className="text-[#1e223e] font-bold text-xl lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2 roboto-condensed">
                  1. Creación de un Hook Personalizado para peticiones Fetch:
                </Typography>
                <Typography className="text-white text-lg lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2">
                  Aprenderemos a crear un custom hook que nos permita manejar
                  nuestras peticiones fetch de una manera más ordenada y fácil
                  de reutilizar. Esto nos ayudará a simplificar la gestión de
                  datos y a mantener un código más limpio y eficiente.
                </Typography>
                <Typography className="text-[#1e223e] font-bold text-xl lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2 roboto-condensed">
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

                <Typography className="text-[#1e223e] font-bold text-2xl lg:w-[500px] 2xl:w-[600px] lg:pl-3 mt-2 roboto-condensed">
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
      <ReactQuery />
      <Msw />
    </>
  );
};

export default SectionExplicacion;
