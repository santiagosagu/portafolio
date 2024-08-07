import { Link } from "@mui/material";
import { Image, Typography } from "antd";

const SectionDemo = () => {
  return (
    <>
      <div className="mt-12">
        <Typography className="text-center text-white roboto-condensed text-5xl font-bold px-2">
          Que tal si vemos un par de{" "}
          <strong className="text-blue-400">Demos</strong>
        </Typography>
      </div>
      <div className="flex justify-center px-2 xl:px-96 mt-4">
        <Typography className="text-white text-lg text-center xl:mx-20">
          En este espacio, quiero presentar dos proyectos que he desarrollado.
          Más que ser proyectos finalizados o listos para uso comercial, estos
          son proyectos base diseñados para mostrar cómo he planteado su
          implementación. Además, compartiré un poco de código que podría ser
          útil para otros programadores.
        </Typography>
      </div>
      <div className="md:flex p-8 justify-center gap-4 2xl:gap-40 2xl:px-96 2xl:mt-12">
        <div className="">
          <Typography className="text-3xl font-bold text-white mt-8">
            Portal de Administracion
          </Typography>
          <Link
            href="https://saguadmin.netlify.app/dashboard"
            underline="none"
            target="_blanck"
          >
            <Typography className="text-2xl font-bold text-blue-400 ">
              Ir al Demo
            </Typography>
          </Link>
          <Typography className="text-xl text-slate-300">
            User: admin / Password: admin
          </Typography>
          <Typography className="text-base text-slate-300 mb-8">
            Usa el preview de la primer imagen para ver el video
          </Typography>
          <div className="flex gap-2 w-full mb-4 rounded-xl">
            <Image
              src="/images/demo1/desktop.png"
              width={"100%"}
              alt=""
              className="rounded-xl object-contain w-full card-album-shadom"
              preview={{
                destroyOnClose: true,
                imageRender: () => (
                  <div className="2xl flex justify-center w-[1000px]">
                    <video
                      width="100%"
                      controls
                      src="/images/demo1/demo1.mp4"
                    />
                  </div>
                ),
                toolbarRender: () => null,
              }}
            />
          </div>
          <div className="flex w-full justify-center gap-8">
            <Image
              src="/images/demo1/tablet.png"
              width={"70%"}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/demo1/mobile.png"
              width={"30%"}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
        <div className="">
          <Typography className="text-3xl font-bold text-white mt-8">
            App de Musica (PWA)
          </Typography>
          <Link
            href="https://sagumusic.netlify.app/dashboard"
            underline="none"
            target="_blanck"
          >
            <Typography className="text-2xl font-bold text-blue-400 ">
              Ir al Demo
            </Typography>
          </Link>
          <Typography className="text-xl text-slate-300">
            User: admin / Password: admin
          </Typography>
          <Typography className="text-base text-slate-300 mb-8">
            Usa el preview de la primer imagen para ver el video
          </Typography>
          <div className="flex gap-2 w-full mb-4 rounded-xl">
            <Image
              src="/images/demo2/desktop.png"
              width={"100%"}
              alt=""
              className="rounded-xl object-contain w-full card-album-shadom"
              preview={{
                destroyOnClose: true,
                imageRender: () => (
                  <div className="2xl flex justify-center w-[1000px]">
                    <video
                      width="100%"
                      controls
                      src="/images/demo2/demo2.mp4"
                    />
                  </div>
                ),
                toolbarRender: () => null,
              }}
            />
          </div>
          <div className="flex w-full justify-center gap-8">
            <Image
              src="/images/demo2/tablet.png"
              width={"70%"}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/demo2/mobile.png"
              width={"30%"}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDemo;
