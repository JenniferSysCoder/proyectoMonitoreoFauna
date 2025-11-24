import "../../styles/about.css";
import {
  InformationCircleIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export function AboutPage() {
  return (
    <div className="about-container">
      {/* TITULO */}
      <h1 className="about-title">Acerca de EcoWatch</h1>
      <p className="about-subtitle">
        Información del sistema, versión del dispositivo y detalles del
        desarrollador.
      </p>

      {/* TARJETA PRINCIPAL */}
      <div className="about-card">
        <InformationCircleIcon className="about-icon" />
        <h2>EcoWatch — Sistema de Monitoreo de Fauna</h2>
        <p>Versión de la aplicación: v1.0.0</p>
        <p>Firmware del dispositivo (SIM800L): v1.1</p>
      </div>

      {/* SECCIÓN DISPOSITIVO */}
      <div className="about-section">
        <h3 className="section-title">Información del Dispositivo</h3>

        <div className="section-card">
          <CpuChipIcon className="section-icon" />
          <div>
            <p>
              <strong>ID del dispositivo:</strong> SENSOR-001-A
            </p>
            <p>
              <strong>Estado:</strong> Conectado
            </p>
            <p>
              <strong>Última sincronización:</strong> Hace 5 min
            </p>
            <p>
              <strong>Número SIM:</strong> +503 7000-0000
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN DESARROLLADOR */}
      <div className="about-section">
        <h3 className="section-title">Desarrollador</h3>

        <div className="section-card">
          <DevicePhoneMobileIcon className="section-icon" />
          <div>
            <p>
              <strong>Nombre:</strong> Jennifer Tatiana Guerra
            </p>
            <p>
              <strong>Proyecto:</strong> EcoWatch — Monitoreo de Fauna
            </p>
            <p>
              <strong>Correo:</strong> jennifer@example.com
            </p>
          </div>
        </div>
      </div>

      {/* BOTÓN CONTACTO */}
      <button className="contact-button">
        <EnvelopeIcon className="btn-icon" />
        Contactar Soporte
      </button>

      {/* FOOTER */}
      <footer className="about-footer">
        © {new Date().getFullYear()} EcoWatch. Todos los derechos reservados.
        <br />
        Política de Privacidad · Términos de Servicio
      </footer>
    </div>
  );
}
