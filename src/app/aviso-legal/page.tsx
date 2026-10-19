import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Mareas Lab",
  description: "Aviso legal e información identificativa de Mareas, Lab de innovación social y digital.",
};

import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso Legal">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Titular:</strong> {LEGAL.nombre}</li>
        <li><strong>NIF:</strong> {LEGAL.nif}</li>
        {LEGAL.domicilio && <li><strong>Domicilio social:</strong> {LEGAL.domicilio}</li>}
        <li><strong>Inscripción:</strong> {LEGAL.registro}</li>
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
    </LegalPage>
  );
}
