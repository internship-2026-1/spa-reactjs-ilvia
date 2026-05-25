import { useNavigate } from "react-router-dom";
import "./success.css";

export default function SuccessPage() {

  const navigate = useNavigate();

  const orderId =
    sessionStorage.getItem("lastOrderId");

  return (

    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          ¡Pedido Confirmado!
        </h1>

        <p>
          Gracias por tu compra.
          Recibirás un correo de confirmación
          con los detalles de tu pedido.
        </p>

        <div className="success-order">

          <span>
            NÚMERO DE PEDIDO
          </span>

          <strong>
            {orderId || "—"}
          </strong>

        </div>

        <button
          className="btn-primary"
          onClick={() => navigate("/")}
        >
          SEGUIR COMPRANDO
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/pedidos")}
        >
          VER MIS PEDIDOS
        </button>

      </div>

    </div>

  );

}