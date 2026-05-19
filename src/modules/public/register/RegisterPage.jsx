import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import './register.css';

export default function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-page">

      {/* TOP BAR */}
      <header className="register-topbar">

        <span className="register-logo">
          TECHSPEC
        </span>

        <Link to="/" className="register-back">
          ← Volver al inicio
        </Link>

      </header>

      {/* CARD */}
      <div className="register-wrapper">

        {/* LEFT */}
        <div className="register-info">

          <h1>
            Potencia tu
            <br />
            ingeniería.
          </h1>

          <p>
            Únete a la comunidad de alto rendimiento
            para profesionales del rendimiento técnico.
          </p>

          <div className="register-feature">
            <FaCheckCircle />
            <div>
              <strong>Configuraciones de Vanguardia</strong>
              <span>
                Acceso a los especificadores más recientes
              </span>
            </div>
          </div>

          <div className="register-feature">
            <FaCheckCircle />
            <div>
              <strong>Optimización Extrema</strong>
              <span>
                Herramientas de análisis para benchmarking
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="register-form-side">

          <h2>Crear cuenta</h2>

          <p className="register-subtitle">
            Ingresa tus datos para comenzar tu experiencia técnica.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="register-grid">

              <div>
                <label>Nombre</label>

                <input
                  type="text"
                  placeholder="Ej: Juan"
                  {...register('name')}
                />
              </div>

              <div>
                <label>Apellido</label>

                <input
                  type="text"
                  placeholder="Ej: Pérez"
                  {...register('lastname')}
                />
              </div>

            </div>

            <label>Correo Electrónico</label>

            <input
              type="email"
              placeholder="usuario@techspec.com"
              {...register('email')}
            />

            <label>Contraseña</label>

            <input
              type="password"
              placeholder="••••••••"
              {...register('password')}
            />

            <label className="register-checkbox">

              <input type="checkbox" />

              <span>
                Acepto los
                <a href="#"> Términos de Servicio </a>
                y
                <a href="#"> Política de Privacidad </a>
                de TECHSPEC
              </span>

            </label>

            <button type="submit">
              Registrar Cuenta →
            </button>

          </form>

          <p className="register-login">

            ¿Ya tienes una cuenta?
            <Link to="/login">
              Inicia sesión aquí
            </Link>

          </p>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="register-footer">

        <div>
          <strong>TECHSPEC</strong>
          <span>
            Plataforma avanzada para la gestión y adquisición
            de componentes de alto rendimiento.
          </span>
        </div>

        <div>
          <strong>Legal</strong>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Returns</span>
        </div>

        <div>
          <strong>Soporte</strong>
          <span>Support</span>
          <span>Shipping</span>
          <span>Technical Specs</span>
        </div>

      </footer>

      <div className="register-bottom">

  <span>
    © 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.
  </span>

  <div className="register-bottom-icons">
    <span>🌐</span>
    <span>🛡️</span>
  </div>

</div>

    </div>
  );
}