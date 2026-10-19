import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Mareas Lab",
  description: "Cómo trata Mareas, Lab de innovación social y digital tus datos personales y cómo ejercer tus derechos.",
};

import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export default function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad">
      <p>
        Esta política explica cómo tratamos los datos personales que nos facilitas a través de este sitio web,
        conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 de Protección de Datos Personales
        y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> {LEGAL.nombre}</li>
        <li><strong>NIF:</strong> {LEGAL.nif}</li>
        {LEGAL.domicilio && <li><strong>Domicilio:</strong> {LEGAL.domicilio}</li>}
        <li><strong>Email de contacto:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Teléfono:</strong> {LEGAL.telefono}</li>
      </ul>

      <h2>2. Qué datos tratamos y para qué</h2>
      <ul>
        <li>
          <strong>Formularios de contacto (asociarse, servicios y colaborar):</strong> nombre u organización, email,
          área de interés, forma de colaboración y el mensaje que nos escribas. Los usamos para responder a tu
          solicitud, gestionar tu alta como persona asociada o preparar la propuesta de servicios que nos pidas.
        </li>
        <li>
          <strong>Newsletter:</strong> tu email, para enviarte de forma periódica novedades, recursos y convocatorias
          de la asociación.
        </li>
      </ul>
      <p>
        Te pedimos solo los datos necesarios. Por favor, no incluyas en el mensaje datos especialmente sensibles
        (salud, situación administrativa, etc.) salvo que sea imprescindible para tu consulta.
      </p>

      <h2>3. Base jurídica</h2>
      <ul>
        <li>
          Tu <strong>consentimiento</strong> (art. 6.1.a RGPD), que das al marcar la casilla de aceptación antes de
          enviar cualquier formulario. Puedes retirarlo en cualquier momento sin que afecte a la licitud del
          tratamiento previo.
        </li>
        <li>
          Cuando solicitas asociarte o contratar un servicio, la <strong>aplicación de medidas precontractuales</strong>{" "}
          a petición tuya (art. 6.1.b RGPD).
        </li>
      </ul>

      <h2>4. Cuánto tiempo conservamos los datos</h2>
      <ul>
        <li>Solicitudes de contacto: el tiempo necesario para atenderlas y, como máximo, un año después.</li>
        <li>Newsletter: hasta que te des de baja o retires tu consentimiento.</li>
        <li>
          Si pasas a ser persona asociada o se formaliza un servicio, los plazos que exija la normativa aplicable
          (asociativa, fiscal o contable).
        </li>
      </ul>

      <h2>5. Destinatarios y transferencias internacionales</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio contamos con proveedores
        que actúan como encargados del tratamiento, con contrato que garantiza la confidencialidad y seguridad de
        los datos:
      </p>
      <ul>
        <li>
          <strong>Formspree, Inc.</strong> (Estados Unidos), que recibe los envíos de los formularios y nos los
          reenvía por correo electrónico. Esta transferencia internacional se ampara en las garantías previstas en
          el RGPD (cláusulas contractuales tipo de la Comisión Europea y, en su caso, el Marco de Privacidad de Datos
          UE-EE. UU.).
        </li>
        <li>El proveedor de alojamiento del sitio web y el proveedor de correo electrónico de la asociación.</li>
      </ul>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, así como retirar tu consentimiento, escribiendo a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> e indicando qué derecho quieres ejercer. Podemos pedirte
        que acredites tu identidad. Te responderemos en el plazo máximo de un mes.
      </p>
      <p>
        Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la
        Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Personas menores de edad</h2>
      <p>
        Si tienes menos de 14 años, necesitas el consentimiento de tu madre, padre o persona tutora para enviarnos
        tus datos (art. 7 LOPDGDD).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a pérdida, uso indebido
        o acceso no autorizado. Las comunicaciones con este sitio se cifran mediante HTTPS.
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para adaptarla a cambios legales o en nuestros servicios. La fecha de la
        última actualización figura al inicio de esta página.
      </p>
    </LegalPage>
  );
}
