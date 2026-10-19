import { LEGAL } from "@/lib/legal";

function AvisoLegal() {
  return (
    <>
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Titular:</strong> {LEGAL.nombre}</li>
        <li><strong>NIF:</strong> {LEGAL.nif}</li>
        {LEGAL.domicilio && <li><strong>Domicilio social:</strong> {LEGAL.domicilio}</li>}
        <li><strong>Inscripción:</strong> {LEGAL.registro.es}</li>
        <li><strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Teléfono:</strong> {LEGAL.telefono}</li>
        <li><strong>Sitio web:</strong> {LEGAL.dominio}</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene como finalidad dar a conocer la actividad de la asociación, sus proyectos, servicios
        y publicaciones, y facilitar el contacto con las personas y organizaciones interesadas. El acceso y uso
        del sitio atribuye la condición de persona usuaria e implica la aceptación de este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        La persona usuaria se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para
        actividades ilícitas, contrarias a la buena fe o que puedan dañar el sitio web, sus sistemas o a
        terceras personas. Los datos facilitados a través de los formularios deben ser veraces.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Los textos, imágenes, logotipos, diseño y publicaciones de este sitio son titularidad de {LEGAL.nombre} o
        se utilizan con autorización de sus titulares. Queda prohibida su reproducción, distribución o
        transformación con fines comerciales sin autorización expresa. Se permite su uso con fines educativos o
        divulgativos sin ánimo de lucro, citando la fuente.
      </p>

      <h2>5. Enlaces externos</h2>
      <p>
        El sitio puede incluir enlaces a páginas de terceros (por ejemplo, redes sociales). La asociación no se
        responsabiliza de sus contenidos ni de sus políticas de privacidad, que se rigen por sus propias condiciones.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        La asociación trabaja para que la información publicada sea correcta y esté actualizada, pero no garantiza
        la ausencia de errores ni la disponibilidad ininterrumpida del sitio, y no se hace responsable de los daños
        derivados de su uso, salvo en los casos previstos por la ley.
      </p>

      <h2>7. Protección de datos y cookies</h2>
      <p>
        El tratamiento de datos personales se explica en la <a href="/privacidad">Política de Privacidad</a> y el uso
        de cookies y tecnologías similares en la <a href="/cookies">Política de Cookies</a>.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a
        los juzgados y tribunales que correspondan conforme a la normativa aplicable.
      </p>
    </>
  );
}

function Privacidad() {
  return (
    <>
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
    </>
  );
}

function Cookies() {
  return (
    <>
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies y tecnologías similares (como el almacenamiento local del navegador) son pequeños archivos o
        datos que un sitio web guarda en tu dispositivo para recordar información sobre tu visita.
      </p>

      <h2>2. Qué usamos en este sitio</h2>
      <p>
        Este sitio <strong>no utiliza cookies de analítica, publicidad ni de seguimiento</strong>, propias ni de
        terceros. Únicamente usamos el siguiente elemento técnico:
      </p>
      <ul>
        <li>
          <strong>theme</strong> (almacenamiento local del navegador, propio): recuerda si prefieres el modo claro u
          oscuro. Se guarda solo si cambias el tema y permanece hasta que borres los datos del navegador.
        </li>
      </ul>
      <p>
        Al ser un elemento estrictamente necesario para ofrecer una función que tú solicitas, está exento del deber
        de consentimiento según el artículo 22.2 de la LSSI-CE, por lo que no mostramos un aviso de cookies.
      </p>

      <h2>3. Enlaces a terceros</h2>
      <p>
        Los enlaces a redes sociales (por ejemplo, Instagram) te llevan a sitios externos que pueden usar sus propias
        cookies. Consulta sus políticas al visitarlos.
      </p>

      <h2>4. Cómo gestionarlas</h2>
      <p>
        Puedes eliminar o bloquear las cookies y el almacenamiento local desde la configuración de tu navegador.
        Si lo haces, el sitio seguirá funcionando, pero no recordará tu preferencia de tema.
      </p>

      <h2>5. Cambios</h2>
      <p>
        Si en el futuro incorporamos cookies que requieran tu consentimiento (por ejemplo, de analítica), lo
        indicaremos aquí y te pediremos permiso antes de usarlas. Para cualquier duda, escríbenos a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </>
  );
}

export const legalEs = {
  avisoLegal: { title: "Aviso Legal", Content: AvisoLegal },
  privacidad: { title: "Política de Privacidad", Content: Privacidad },
  cookies: { title: "Política de Cookies", Content: Cookies },
};
