import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Mareas Lab",
  description: "Información sobre el uso de cookies y tecnologías similares en el sitio web de Mareas.",
};

import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export default function Cookies() {
  return (
    <LegalPage title="Política de Cookies">
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
    </LegalPage>
  );
}
