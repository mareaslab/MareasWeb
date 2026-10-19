import { LEGAL } from "@/lib/legal";
import { localePath } from "@/i18n/config";

function AvisLegal() {
  return (
    <>
      <h2>1. Dades identificatives</h2>
      <p>
        En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la
        Informació i de Comerç Electrònic (LSSI-CE), s'informa de les dades del titular d'aquest lloc web:
      </p>
      <ul>
        <li><strong>Titular:</strong> {LEGAL.nombre}</li>
        <li><strong>NIF:</strong> {LEGAL.nif}</li>
        {LEGAL.domicilio && <li><strong>Domicili social:</strong> {LEGAL.domicilio}</li>}
        <li><strong>Inscripció:</strong> {LEGAL.registro.ca}</li>
        <li><strong>Correu electrònic:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Telèfon:</strong> {LEGAL.telefono}</li>
        <li><strong>Lloc web:</strong> {LEGAL.dominio}</li>
      </ul>

      <h2>2. Objecte</h2>
      <p>
        Aquest lloc web té com a finalitat donar a conèixer l'activitat de l'associació, els seus projectes, serveis
        i publicacions, i facilitar el contacte amb les persones i organitzacions interessades. L'accés i l'ús del
        lloc atribueix la condició de persona usuària i implica l'acceptació d'aquest avís legal.
      </p>

      <h2>3. Condicions d'ús</h2>
      <p>
        La persona usuària es compromet a fer un ús adequat dels continguts i a no emprar-los per a activitats
        il·lícites, contràries a la bona fe o que puguin danyar el lloc web, els seus sistemes o terceres persones.
        Les dades facilitades mitjançant els formularis han de ser veraces.
      </p>

      <h2>4. Propietat intel·lectual i industrial</h2>
      <p>
        Els textos, imatges, logotips, disseny i publicacions d'aquest lloc són titularitat de {LEGAL.nombre} o
        s'utilitzen amb autorització dels seus titulars. Queda prohibida la seva reproducció, distribució o
        transformació amb finalitats comercials sense autorització expressa. Se'n permet l'ús amb finalitats
        educatives o divulgatives sense ànim de lucre, citant-ne la font.
      </p>

      <h2>5. Enllaços externs</h2>
      <p>
        El lloc pot incloure enllaços a pàgines de tercers (per exemple, xarxes socials). L'associació no es fa
        responsable dels seus continguts ni de les seves polítiques de privacitat, que es regeixen per les seves
        pròpies condicions.
      </p>

      <h2>6. Responsabilitat</h2>
      <p>
        L'associació treballa perquè la informació publicada sigui correcta i estigui actualitzada, però no garanteix
        l'absència d'errors ni la disponibilitat ininterrompuda del lloc, i no es fa responsable dels danys derivats
        del seu ús, tret dels casos previstos per la llei.
      </p>

      <h2>7. Protecció de dades i cookies</h2>
      <p>
        El tractament de dades personals s'explica a la <a href={localePath("ca", "/privacidad")}>Política de Privacitat</a> i
        l'ús de cookies i tecnologies similars a la <a href={localePath("ca", "/cookies")}>Política de Cookies</a>.
      </p>

      <h2>8. Legislació aplicable</h2>
      <p>
        Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts se sotmeten
        als jutjats i tribunals que corresponguin d'acord amb la normativa aplicable.
      </p>
    </>
  );
}

function Privacitat() {
  return (
    <>
      <p>
        Aquesta política explica com tractem les dades personals que ens facilites a través d'aquest lloc web,
        d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 de Protecció de Dades Personals
        i garantia dels drets digitals (LOPDGDD).
      </p>

      <h2>1. Responsable del tractament</h2>
      <ul>
        <li><strong>Responsable:</strong> {LEGAL.nombre}</li>
        <li><strong>NIF:</strong> {LEGAL.nif}</li>
        {LEGAL.domicilio && <li><strong>Domicili:</strong> {LEGAL.domicilio}</li>}
        <li><strong>Correu electrònic de contacte:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Telèfon:</strong> {LEGAL.telefono}</li>
      </ul>

      <h2>2. Quines dades tractem i per a què</h2>
      <ul>
        <li>
          <strong>Formularis de contacte (associar-se, serveis i col·laborar):</strong> nom o organització, correu
          electrònic, àrea d'interès, forma de col·laboració i el missatge que ens escriguis. Les fem servir per
          respondre a la teva sol·licitud, gestionar la teva alta com a persona associada o preparar la proposta de
          serveis que ens demanis.
        </li>
        <li>
          <strong>Butlletí (newsletter):</strong> el teu correu electrònic, per enviar-te de manera periòdica novetats,
          recursos i convocatòries de l'associació.
        </li>
      </ul>
      <p>
        Et demanem només les dades necessàries. Si us plau, no incloguis en el missatge dades especialment sensibles
        (salut, situació administrativa, etc.) tret que sigui imprescindible per a la teva consulta.
      </p>

      <h2>3. Base jurídica</h2>
      <ul>
        <li>
          El teu <strong>consentiment</strong> (art. 6.1.a RGPD), que dónes en marcar la casella d'acceptació abans
          d'enviar qualsevol formulari. Pots retirar-lo en qualsevol moment sense que afecti la licitud del
          tractament previ.
        </li>
        <li>
          Quan sol·licites associar-te o contractar un servei, l'<strong>aplicació de mesures precontractuals</strong>{" "}
          a petició teva (art. 6.1.b RGPD).
        </li>
      </ul>

      <h2>4. Quant de temps conservem les dades</h2>
      <ul>
        <li>Sol·licituds de contacte: el temps necessari per atendre-les i, com a màxim, un any després.</li>
        <li>Butlletí: fins que et donis de baixa o retiris el teu consentiment.</li>
        <li>
          Si passes a ser persona associada o es formalitza un servei, els terminis que exigeixi la normativa
          aplicable (associativa, fiscal o comptable).
        </li>
      </ul>

      <h2>5. Destinataris i transferències internacionals</h2>
      <p>
        No cedim les teves dades a tercers tret d'obligació legal. Per prestar el servei comptem amb proveïdors que
        actuen com a encarregats del tractament, amb contracte que garanteix la confidencialitat i seguretat de
        les dades:
      </p>
      <ul>
        <li>
          <strong>Formspree, Inc.</strong> (Estats Units), que rep els enviaments dels formularis i ens els
          reenvia per correu electrònic. Aquesta transferència internacional s'empara en les garanties previstes en
          el RGPD (clàusules contractuals tipus de la Comissió Europea i, si escau, el Marc de Privacitat de Dades
          UE-EUA).
        </li>
        <li>El proveïdor d'allotjament del lloc web i el proveïdor de correu electrònic de l'associació.</li>
      </ul>

      <h2>6. Els teus drets</h2>
      <p>
        Pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació del tractament i
        portabilitat, així com retirar el teu consentiment, escrivint a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> i indicant quin dret vols exercir. Et podem demanar
        que acreditis la teva identitat. Et respondrem en el termini màxim d'un mes.
      </p>
      <p>
        Si consideres que no hem atès correctament els teus drets, pots presentar una reclamació davant l'Agència
        Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Persones menors d'edat</h2>
      <p>
        Si tens menys de 14 anys, necessites el consentiment de la teva mare, pare o persona tutora per enviar-nos
        les teves dades (art. 7 LOPDGDD).
      </p>

      <h2>8. Seguretat</h2>
      <p>
        Apliquem mesures tècniques i organitzatives adequades per protegir les teves dades davant de pèrdua, ús
        indegut o accés no autoritzat. Les comunicacions amb aquest lloc es xifren mitjançant HTTPS.
      </p>

      <h2>9. Canvis en aquesta política</h2>
      <p>
        Podem actualitzar aquesta política per adaptar-la a canvis legals o en els nostres serveis. La data de la
        darrera actualització figura a l'inici d'aquesta pàgina.
      </p>
    </>
  );
}

function Cookies() {
  return (
    <>
      <h2>1. Què són les cookies</h2>
      <p>
        Les cookies i tecnologies similars (com l'emmagatzematge local del navegador) són petits fitxers o
        dades que un lloc web guarda al teu dispositiu per recordar informació sobre la teva visita.
      </p>

      <h2>2. Què fem servir en aquest lloc</h2>
      <p>
        Aquest lloc <strong>no utilitza cookies d'analítica, publicitat ni de seguiment</strong>, pròpies ni de
        tercers. Únicament fem servir el següent element tècnic:
      </p>
      <ul>
        <li>
          <strong>theme</strong> (emmagatzematge local del navegador, propi): recorda si prefereixes el mode clar o
          fosc. Es guarda només si canvies el tema i es manté fins que esborris les dades del navegador.
        </li>
      </ul>
      <p>
        En ser un element estrictament necessari per oferir una funció que tu sol·licites, està exempt del deure
        de consentiment segons l'article 22.2 de la LSSI-CE, per la qual cosa no mostrem cap avís de cookies.
      </p>

      <h2>3. Enllaços a tercers</h2>
      <p>
        Els enllaços a xarxes socials (per exemple, Instagram) et porten a llocs externs que poden fer servir les
        seves pròpies cookies. Consulta-ne les polítiques quan els visitis.
      </p>

      <h2>4. Com gestionar-les</h2>
      <p>
        Pots eliminar o bloquejar les cookies i l'emmagatzematge local des de la configuració del teu navegador.
        Si ho fas, el lloc continuarà funcionant, però no recordarà la teva preferència de tema.
      </p>

      <h2>5. Canvis</h2>
      <p>
        Si en el futur incorporem cookies que requereixin el teu consentiment (per exemple, d'analítica), ho
        indicarem aquí i et demanarem permís abans d'utilitzar-les. Per a qualsevol dubte, escriu-nos a{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </>
  );
}

export const legalCa = {
  avisoLegal: { title: "Avís Legal", Content: AvisLegal },
  privacidad: { title: "Política de Privacitat", Content: Privacitat },
  cookies: { title: "Política de Cookies", Content: Cookies },
};
