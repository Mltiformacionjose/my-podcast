import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          La dirección que buscas no existe o cambió de lugar. Puedes volver al
          inicio o seguir explorando el podcast.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/episodios" variant="secondary">
            Ver episodios
          </ButtonLink>
          <ButtonLink href="/preguntas-frecuentes" variant="ghost">
            Preguntas frecuentes
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
