import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaTerminal } from 'react-icons/fa';
import { useAuth } from '../../../context/AuthContext.jsx';
import './login.css';

export default function LoginPage() {

  const { login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    login({
      token: 'demo-token',
      user: {
        email: data.email,
        name: data.email.split('@')[0],
      },
    });

    navigate('/dashboard');
  };

  return (
    <div className="auth-page">

      {/* LEFT PANEL */}
      <section className="auth-panel auth-panel--left">

        <span className="auth-brand">
          TECHSPEC
        </span>

        <div className="auth-left-content">

          <h1>
            Ingeniería para el
            <br />
            rendimiento extremo.
          </h1>

          <p>
            Accede a tu panel de configuración técnica y
            gestiona tus componentes con precisión quirúrgica.
          </p>

        </div>

        <footer className="auth-left-footer">
          <span>CONTROL TOTAL</span>
          <span>ALTA VELOCIDAD</span>
        </footer>

      </section>

      {/* RIGHT PANEL */}
      <section className="auth-panel auth-panel--right">

        <div className="auth-card">

          <h2>Iniciar Sesión</h2>

          <p className="auth-subtitle">
            Introduce tus credenciales para acceder a tu cuenta profesional.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* EMAIL */}
            <label className="auth-label">
              Correo Electrónico
            </label>

            <input
              className="auth-input"
              type="email"
              placeholder="nombre@techspec.com"
              {...register('email', {
                required: 'Correo obligatorio',
              })}
            />

            {errors.email && (
              <span className="auth-error">
                {errors.email.message}
              </span>
            )}

            {/* PASSWORD */}
            <div className="password-row">

              <label className="auth-label">
                Contraseña
              </label>

              <a href="#" className="auth-forgot">
                ¿Olvidaste tu contraseña?
              </a>

            </div>

            <input
              className="auth-input"
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Contraseña obligatoria',
              })}
            />

            {errors.password && (
              <span className="auth-error">
                {errors.password.message}
              </span>
            )}

            {/* REMEMBER */}
            <label className="remember-row">
              <input type="checkbox" />
              <span>Mantener sesión iniciada</span>
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="button-primary"
            >
              Entrar al Sistema →
            </button>

          </form>

          {/* DIVIDER */}
          <div className="divider">
            <span>O CONTINUAR CON</span>
          </div>

          {/* SOCIAL */}
          <div className="social-buttons">

            <button className="social-button">
              <FcGoogle size={20} />
              Google
            </button>

            <button className="social-button">
              <FaTerminal size={16} />
              SSH Key
            </button>

          </div>

          {/* REGISTER */}
          <p className="register-text">
            ¿No tienes una cuenta?
            <Link to="/register">
              Solicitar acceso
            </Link>
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="auth-right-footer">

        <div>
          <strong>TECHSPEC</strong>
          <span>© 2024 TECHSPEC</span>
          <span>ENGINEERED FOR PERFORMANCE</span>
        </div>

        <div>
          <strong>Legal</strong>
          <span>PRIVACY POLICY</span>
          <span>TERMS OF SERVICE</span>
        </div>

        <div>
          <strong>Soporte</strong>
          <span>TECHNICAL SPECS</span>
          <span>SUPPORT</span>
        </div>

      </footer>

    </div>
  );
}