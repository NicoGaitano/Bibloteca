import { useForm } from "react-hook-form";
import swal from "sweetalert";

const Orders = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const obtenerdatos = () => {
    swal("Solicitud completa.");
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(obtenerdatos)}>
        <h1 className="title-Orders">PEDIDOS</h1>
        <input
          className="field"
          placeholder="Nombre"
          type="text"
          {...register("nombre", { required: true, minLength: 3 })}
        />

        {errors.nombre && (
          <strong className="message-error">
            Nombre obligatorio debe contener al menos tres carateres{" "}
          </strong>
        )}
        <br />
        <input
          className="field"
          placeholder="Apellido"
          type="text"
          {...register("apellido", { required: true, minLength: 3 })}
        />
        {errors.apellido && (
          <>
            <strong className="message-error">
              Apellido obligatorio debe contener al menos tres caracteres
            </strong>
          </>
        )}
        <br />
        <input
          className="field"
          placeholder="Correo Electronico"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <>
            <strong className="message-error">Email obligatorio</strong>
          </>
        )}
        <br />
        <input
          className="field"
          placeholder="Libro"
          type="text"
          {...register("libro", { required: true, minLength: 3 })}
        />
        {errors.libro && (
          <>
            <strong className="message-error">
              Debe ingresar el nombre de un libro
            </strong>
          </>
        )}
        <br />
        <input className="button" type="submit" />
      </form>
    </>
  );
};
export default Orders;
