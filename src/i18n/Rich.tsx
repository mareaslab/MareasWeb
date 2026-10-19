import { Fragment } from "react";

/**
 * Pinta un texto del diccionario donde **esto** se muestra en negrita.
 * Permite mantener los énfasis dentro de la frase traducida, sin partirla en trozos.
 */
export function Rich({ text, strongClassName }: { text: string; strongClassName?: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
