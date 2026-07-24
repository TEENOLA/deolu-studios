import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Reveal from "./Reveal";

const projectTypes = [
  "Custom Business Website",
  "Landing Page",
  "Website Redesign",
  "E-commerce Site",
  "Ongoing Maintenance",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000+",
  "Not sure yet",
];

/** Encodes form fields the way Netlify's form-handling endpoint expects. */
function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "contact" };
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(payload),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setIsSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-ink-900/40">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's start your project
          </h2>
          <p className="mt-4 text-mist-400">
            Tell us a bit about your business and what you're looking for —
            we'll get back to you within one business day. Every project starts
            with a conversation about your goals, and we'll shape a package that
            fits your budget, whether you're just getting started or ready for a
            full rebuild.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="card-surface flex h-full flex-col justify-between p-8">
              <div>
                <h3 className="text-lg font-semibold text-mist-50">
                  Contact information
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">
                  Prefer to reach out directly? Use any of the details below.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href="mailto:hello@deolustudios.com"
                    className="flex items-center gap-3 text-sm text-mist-200 hover:text-brand-blueLight"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-soft">
                      <Mail size={17} className="text-brand-blueLight" />
                    </span>
                    hello@deolustudios.com
                  </a>
                  <a
                    href="tel:+10000000000"
                    className="flex items-center gap-3 text-sm text-mist-200 hover:text-brand-blueLight"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-soft">
                      <Phone size={17} className="text-brand-blueLight" />
                    </span>
                    +1 (000) 000-0000
                  </a>
                  <div className="flex items-center gap-3 text-sm text-mist-200">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-soft">
                      <MapPin size={17} className="text-brand-blueLight" />
                    </span>
                    Remote — working with clients worldwide
                  </div>
                </div>
              </div>

              <p className="mt-10 text-xs text-mist-500">
                Typical response time: within 1 business day.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="card-surface p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={40} className="text-brand-blueLight" />
                  <h3 className="mt-4 text-lg font-semibold text-mist-50">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-mist-400">
                    Thanks for reaching out — we'll get back to you within one
                    business day.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  {/* Required so Netlify's endpoint knows which registered form this is */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Honeypot — hidden from real visitors, catches basic bots */}
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@business.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Business Name"
                      name="business"
                      type="text"
                      placeholder="Your business"
                    />
                    <SelectField
                      label="Project Type"
                      name="projectType"
                      options={projectTypes}
                    />
                  </div>

                  <SelectField
                    label="Budget (optional)"
                    name="budget"
                    options={budgetRanges}
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-mist-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking to build..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-blue/50 focus:outline-none"
                    />
                  </div>

                  {hasError && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} />
                      Something went wrong sending your message. Please try
                      again, or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={16} />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type, required, placeholder }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-mist-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 focus:border-brand-blue/50 focus:outline-none"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
}

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-mist-300"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-mist-100 focus:border-brand-blue/50 focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
