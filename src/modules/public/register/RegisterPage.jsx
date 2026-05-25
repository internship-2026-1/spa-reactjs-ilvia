import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaCheckCircle } from 'react-icons/fa';
import { Button, Input } from 'lib-components-react';
import './register.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/login'); 
  };

  return (
    <div className="register-page">
      
      {/* TOP BAR */}
      <header className="register-topbar">
        <span className="register-logo">TECHSPEC</span>
        <Link to="/" className="register-back">
          ← Volver al inicio
        </Link>
      </header>

      {/* CARD INTERMEDIA */}
      <div className="register-wrapper">
        
        {/* LEFT COMPONENT */}
        <div className="register-info">
          <div className="register-info-content">
            <h1>Potencia tu<br />ingeniería.</h1>
            <p>
              Únete a la comunidad de élite para entusiastas del hardware y profesionales del rendimiento técnico.
            </p>

            <div className="register-feature-box">
              <div className="register-feature">
                <FaCheckCircle />
                <div>
                  <strong>Configuraciones de Vanguardia</strong>
                  <span>Acceso a las especificaciones más recientes.</span>
                </div>
              </div>

              <div className="register-feature">
                <FaCheckCircle />
                <div>
                  <strong>Optimización Extrema</strong>
                  <span>Herramientas de análisis para benchmarking.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT */}
        <div className="register-form-side">
          <h2>Crear cuenta</h2>
          <p className="register-subtitle">
            Ingresa tus datos para comenzar tu experiencia técnica.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="register-grid">
              <div>
                <label>Nombre</label>
                <Input type="text" placeholder="Ej: Juan" {...register('name')} />
              </div>
              <div>
                <label>Apellido</label>
                <Input type="text" placeholder="Ej: Pérez" {...register('lastname')} />
              </div>
            </div>

            <label>Correo Electrónico</label>
            <Input   type="email" placeholder="usuario@techspec.com" {...register('email')} />

            <label>Contraseña</label>
            <Input   type="password" placeholder="••••••••" {...register('password')} />

            <label className="register-checkbox">
              <Input   type="checkbox" />
              <span>
                Acepto los <a href="#">Términos de Servicio</a> y la <a href="#">Política de Privacidad</a> de TECHSPEC.
              </span>
            </label>

            <button type="submit">
              Registrar Cuenta →
            </button>
          </form>

          <p className="register-login">
            ¿Ya tienes una cuenta? 
            <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>

      {/* FOOTER PRINCIPAL CORREGIDO */}
      <footer className="register-footer">
        <div className="register-footer-col brand-col">
          <strong>TECHSPEC</strong>
          <span>
            Plataforma avanzada para la gestión y adquisición de componentes de alto rendimiento.
          </span>
        </div>
        <div className="register-footer-col">
          <strong>Legal</strong>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Returns</a>
        </div>
        <div className="register-footer-col">
          <strong>Soporte</strong>
          <a href="#">Support</a>
          <a href="#">Shipping</a>
          <a href="#">Technical Specs</a>
        </div>
      </footer>

      {/* CREDITS BOTTOM */}
      <div className="register-bottom">
        <span>© 2024 TECHSPEC. ENGINEERED FOR PERFORMANCE.</span>
        <div className="register-bottom-icons">
          <span>🌐</span>
          <span>🛡️</span>
        </div>
      </div>

    </div>
  );
}