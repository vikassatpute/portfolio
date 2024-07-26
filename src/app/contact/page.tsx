import { ContactForm } from '@/components/ContactForm';
import React from 'react';

function ContactPage() {
  return (
    <section className="prose mx-auto pb-32 pt-20 dark:prose-invert">
      <h1>
        <span className="color-gradient">Contact</span>
      </h1>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
