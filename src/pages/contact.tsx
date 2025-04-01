import ContactForm from '../components/contact-form';
import { SEO } from '../components/seo';

export function Contact() {
  return (
    <>
      <SEO title="Contato" />

      <section className="m-5">
        <h1 className="font-bold text-2xl md:text-3xl pb-4">
          Entre em contato comigo
        </h1>

        <ContactForm />
      </section>
    </>
  );
}
