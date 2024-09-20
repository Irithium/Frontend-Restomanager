import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="w-1/2 mx-auto h-screen self-center flex flex-col text-center items-center gap-6 font-roboto text-xl justify-center"
    >
      {" "}
      <h1 className="text-4xl font-black">Oops!</h1>
      <p className="">Lo lamento, parece que ha ocurrido un error.</p>
      <p>Por favor escanee de nuevo el QR</p>
      <p className="opacity-80">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
