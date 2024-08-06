import { Link } from "@mui/material";
import { Typography } from "antd";

const SectionMain = () => {
  return (
    <div className="lg:flex w-full justify-center  lg:mt-14 p-2">
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="lg:w-[500px]">
          <Typography className="text-white text-5xl lg:text-6xl  roboto-condensed font-bold mt-5 lg:mt-0">
            SENIOR FRONT-END DEVELOPMENT WITH <br /> EXPERTICE IN
          </Typography>
          <Typography className="text-blue-400 text-5xl lg:text-7xl roboto-condensed font-bold">
            REACT.JS
          </Typography>
          <Typography className="text-4xl mt-9 text-white font-bold roboto-mono">
            Hola!!
          </Typography>
          <Typography className="text-blue-400 text-xl font-bold ">
            Soy Daniel Santiago Giraldo Gómez
          </Typography>
          <Typography className="text-white text-base">
            Estoy profundamente comprometido con mi trabajo y me esfuerzo
            constantemente por realizar mis mejores esfuerzos. Mantengo una
            actitud positiva hacia mis compañeros, fomentando un ambiente de
            colaboración y aprendizaje mutuo. Me entusiasma compartir mi
            experiencia y al mismo tiempo permanecer receptivo a nuevos
            conocimientos y perspectivas de los demás. Durante mi tiempo libre,
            me apasiona explorar tecnologías y metodologías emergentes que
            mejoren mis capacidades profesionales. Mi dedicación surge de un
            amor genuino por lo que hago
          </Typography>
          <Typography className="text-blue-400 text-xl font-bold mt-8">
            Contacto:
          </Typography>
          <Link
            href="mailto:danielsantiagono10@gmail.com"
            underline="none"
            target="_blank"
          >
            <Typography className="text-white text-base mt-3">
              Danielsantiagono10@gmail.com
            </Typography>
          </Link>
          <Link
            href="https://wa.me/3014611897"
            underline="none"
            target="_blank"
          >
            <Typography className="text-white text-base">3014611897</Typography>
          </Link>
        </div>
        <div className="mt-8">
          <img
            src="/images/mi foto.jpg"
            alt=""
            className="rounded-xl w-[400px] card-album-shadom"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 lg:mt-0 xl:w-[800px] 2xl:w-auto">
        <img
          src="/images/image1.jpeg"
          alt=""
          className="rounded-xl w-[400px] lg:w-[1200px] card-album-shadom"
        />
      </div>
    </div>
  );
};

export default SectionMain;
