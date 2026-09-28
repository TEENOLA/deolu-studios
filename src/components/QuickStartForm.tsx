import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

/**
 * DeoluStudio Quick Start form (Tailwind)
 * One question per screen. Answers are sent to WhatsApp as a pre-filled message.
 *
 * Props (all optional):
 *  - whatsappNumber: international format, digits only
 *  - displayNumber:  how the number is shown to clients
 *  - logoSrc:        path to your logo mark; falls back to the text wordmark
 *  - homeHref:       if set, the wordmark links back to the main site
 */

// ---------- Types ----------

type TextKey =
  | "name"
  | "biz"
  | "what"
  | "customers"
  | "goalsOther"
  | "siteLink"
  | "inspo"
  | "whenNote"
  | "extra";
type SingleKey = "hasSite" | "when" | "budget";
type MultiKey = "goals" | "assets";

type Answers = Partial<Record<TextKey | SingleKey, string>> &
  Partial<Record<MultiKey, string[]>>;

interface BaseTextField {
  key: TextKey;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  showIf?: (answers: Answers) => boolean;
}

interface InputField extends BaseTextField {
  type: "text";
  autoComplete?: string;
  inputMode?: "url";
}

interface TextareaField extends BaseTextField {
  type: "textarea";
}

interface SingleField {
  key: SingleKey;
  type: "single";
  options: string[];
  showIf?: (answers: Answers) => boolean;
}

interface MultiField {
  key: MultiKey;
  type: "multi";
  options: string[];
  exclusive?: string;
  showIf?: (answers: Answers) => boolean;
}

type Field = InputField | TextareaField | SingleField | MultiField;

interface Step {
  title: string;
  hint: string;
  fields: Field[];
}

interface SummaryRow {
  label: string;
  step: number;
  get: (answers: Answers) => string | undefined;
}

// ---------- Constants ----------

// Brand gradient, reused across the component
const BRAND_GRADIENT =
  "bg-[linear-gradient(120deg,#4F7BFF_0%,#7A5BFA_50%,#A23CF2_100%)]";
const DISPLAY_FONT = "font-['Outfit',_'Figtree',_system-ui,_sans-serif]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#4F7BFF]";

const STEPS: Step[] = [
  {
    title: "First, who are we talking to?",
    hint: "Your name and your business name.",
    fields: [
      {
        key: "name",
        type: "text",
        label: "Your name",
        placeholder: "e.g. Amaka",
        autoComplete: "name",
      },
      {
        key: "biz",
        type: "text",
        label: "Business name",
        placeholder: "e.g. Amaka's Kitchen",
        autoComplete: "organization",
      },
      {
        key: "what",
        type: "textarea",
        label: "What do you do, in a sentence or two?",
        placeholder:
          "e.g. We cater small events and parties around Lekki and VI.",
      },
    ],
  },
  {
    title: "Who are your customers?",
    hint: "Think of the people who buy from you most. Where they are, what they're like.",
    fields: [
      {
        key: "customers",
        type: "textarea",
        ariaLabel: "Who are your customers",
        placeholder:
          "e.g. Young professionals in Lagos planning birthdays and office parties.",
      },
    ],
  },
  {
    title: "What should your website help you do?",
    hint: "Pick as many as you like.",
    fields: [
      {
        key: "goals",
        type: "multi",
        options: [
          "Get more WhatsApp messages or calls",
          "Take bookings",
          "Sell products online",
          "Look more professional and build trust",
        ],
      },
      {
        key: "goalsOther",
        type: "text",
        label: "Something else?",
        placeholder: "Optional",
      },
    ],
  },
  {
    title: "Do you have a website right now?",
    hint: "Totally fine either way.",
    fields: [
      { key: "hasSite", type: "single", options: ["Yes", "No, not yet"] },
      {
        key: "siteLink",
        type: "text",
        label: "What's the link?",
        placeholder: "e.g. mybusiness.com",
        inputMode: "url",
        showIf: (answers) => answers.hasSite === "Yes",
      },
    ],
  },
  {
    title: "Which of these do you already have?",
    hint: "Missing some? That's completely normal. We can help with all of them.",
    fields: [
      {
        key: "assets",
        type: "multi",
        exclusive: "None yet, and that's fine",
        options: [
          "Logo",
          "Brand colours",
          "Good photos",
          "Domain name",
          "None yet, and that's fine",
        ],
      },
    ],
  },
  {
    title: "Any websites you love the look of?",
    hint: "From any industry. Paste one or two links, or just describe what you like.",
    fields: [
      {
        key: "inspo",
        type: "textarea",
        ariaLabel: "Websites you like",
        placeholder: "e.g. I like how clean apple.com feels",
      },
    ],
  },
  {
    title: "When would you love to launch?",
    hint: "A rough idea is enough.",
    fields: [
      {
        key: "when",
        type: "single",
        options: [
          "As soon as possible",
          "Within a month",
          "1 to 3 months",
          "No rush",
        ],
      },
      {
        key: "whenNote",
        type: "text",
        label: "Is there a date behind it? (optional)",
        placeholder: "e.g. We're launching a new product in December",
      },
    ],
  },
  {
    title: "What budget range works for you?",
    hint: "This just helps us suggest the right package. Nothing is fixed yet.",
    fields: [
      {
        key: "budget",
        type: "single",
        options: [
          "Under ₦150k",
          "₦150k to ₦300k",
          "₦300k to ₦600k",
          "₦600k and above",
          "Not sure yet",
        ],
      },
      {
        key: "extra",
        type: "textarea",
        label: "Anything else we should know? (optional)",
        placeholder: "Questions, worries, ideas. Anything.",
      },
    ],
  },
];

const TOTAL_STEPS = STEPS.length;

const SUMMARY_ROWS: SummaryRow[] = [
  { label: "Name", step: 1, get: (answers) => answers.name },
  { label: "Business", step: 1, get: (answers) => answers.biz },
  { label: "What we do", step: 1, get: (answers) => answers.what },
  { label: "Customers", step: 2, get: (answers) => answers.customers },
  {
    label: "Website goals",
    step: 3,
    get: (answers) =>
      [...(answers.goals || []), answers.goalsOther].filter(Boolean).join(", "),
  },
  {
    label: "Current website",
    step: 4,
    get: (answers) =>
      answers.hasSite === "Yes" && answers.siteLink
        ? `Yes: ${answers.siteLink}`
        : answers.hasSite,
  },
  {
    label: "Already have",
    step: 5,
    get: (answers) => (answers.assets || []).join(", "),
  },
  { label: "Websites I like", step: 6, get: (answers) => answers.inspo },
  {
    label: "Launch timing",
    step: 7,
    get: (answers) =>
      answers.when && answers.whenNote
        ? `${answers.when} (${answers.whenNote})`
        : answers.when || answers.whenNote,
  },
  { label: "Budget", step: 8, get: (answers) => answers.budget },
  { label: "Anything else", step: 8, get: (answers) => answers.extra },
];

// ---------- Helpers ----------

function buildMessage(answers: Answers): string {
  const lines = ["Hi DeoluStudio! Here are my Quick Start answers:", ""];
  SUMMARY_ROWS.forEach(({ label, get }) => {
    const value = (get(answers) || "").trim();
    if (value) lines.push(`${label}: ${value}`);
  });
  return lines.join("\n");
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      /* ignore */
    }
    document.body.removeChild(textarea);
    return copied;
  }
}

function Wordmark({
  logoSrc,
  homeHref,
}: {
  logoSrc?: string;
  homeHref?: string;
}) {
  const content = (
    <>
      {logoSrc && (
        <img src={logoSrc} alt="" className="block h-[34px] w-auto" />
      )}
      <span
        className={`${DISPLAY_FONT} text-[22px] font-medium tracking-[-0.01em]`}
      >
        <span className={`${BRAND_GRADIENT} bg-clip-text text-transparent`}>
          deo
        </span>
        lustudio
      </span>
    </>
  );

  return homeHref ? (
    <a href={homeHref} className={`${FOCUS_RING} flex items-center gap-2.5`}>
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-2.5">{content}</div>
  );
}

const inputClassName =
  "mb-[18px] w-full rounded-xl border-[1.5px] border-[#262633] bg-[#111118] px-4 py-3.5 text-[17px] text-[#F3F3F7] " +
  "placeholder:text-[#9C9CB0]/70 transition-colors hover:border-[#353545] " +
  "focus:border-[#4F7BFF] focus:outline-none focus:ring-[3px] focus:ring-[#4F7BFF]/30";

const primaryButtonClassName =
  `${BRAND_GRADIENT} ${FOCUS_RING} rounded-full px-7 py-[15px] text-[17px] font-semibold text-white ` +
  "shadow-[0_8px_28px_-10px_rgba(122,91,250,0.7)] transition hover:brightness-110 active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:brightness-100";

const textButtonClassName = `${FOCUS_RING} bg-transparent px-2 py-[15px] text-[#9C9CB0] transition-colors hover:text-[#F3F3F7]`;

// ---------- Component ----------

interface QuickStartFormProps {
  whatsappNumber?: string;
  displayNumber?: string;
  logoSrc?: string;
  homeHref?: string;
}

export default function QuickStartForm({
  whatsappNumber = "2348120511818",
  displayNumber = "0812 051 1818",
  logoSrc,
  homeHref,
}: QuickStartFormProps) {
  const [step, setStep] = useState(0); // 0 = intro, 1..TOTAL_STEPS = questions, TOTAL_STEPS+1 = review
  const [answers, setAnswers] = useState<Answers>({});
  const [toast, setToast] = useState("");
  const firstInputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null
  );

  const isQuestion = step >= 1 && step <= TOTAL_STEPS;
  const isReview = step > TOTAL_STEPS;
  const canContinue =
    step !== 1 ||
    Boolean((answers.name || "").trim() || (answers.biz || "").trim());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      isQuestion &&
      firstInputRef.current &&
      window.matchMedia("(hover: hover)").matches
    ) {
      firstInputRef.current.focus({ preventScroll: true });
    }
  }, [step, isQuestion]);

  useEffect(() => {
    if (!toast) return;
    const timeoutId = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(timeoutId);
  }, [toast]);

  const setAnswer = (key: keyof Answers, value: string | string[]) =>
    setAnswers((previous) => ({ ...previous, [key]: value }));

  const toggleMulti = (field: MultiField, option: string) => {
    const currentSelection = answers[field.key] || [];
    let nextSelection: string[];
    if (currentSelection.includes(option)) {
      nextSelection = currentSelection.filter(
        (selectedOption) => selectedOption !== option
      );
    } else if (field.exclusive && option === field.exclusive) {
      nextSelection = [option];
    } else {
      nextSelection = [
        ...currentSelection.filter(
          (selectedOption) => selectedOption !== field.exclusive
        ),
        option,
      ];
    }
    setAnswer(field.key, nextSelection);
  };

  const goToStep = (targetStep: number) =>
    setStep(Math.max(0, Math.min(targetStep, TOTAL_STEPS + 1)));
  const goToNextStep = () => {
    if (canContinue) goToStep(step + 1);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      goToNextStep();
    }
  };

  const sendToWhatsApp = async () => {
    const message = buildMessage(answers);
    const whatsappWindow = window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
    if (!whatsappWindow) {
      await copyText(message);
      setToast(
        `Answers copied. Open WhatsApp and send them to ${displayNumber}.`
      );
    } else {
      setToast("Opening WhatsApp…");
    }
  };

  const copyAnswers = async () => {
    const copied = await copyText(buildMessage(answers));
    setToast(
      copied
        ? "Copied. Paste it into WhatsApp or email."
        : "Couldn't copy. Select the answers above and copy them manually."
    );
  };

  // Callback ref so one handler can serve both <input> and <textarea>
  const setFirstInputRef = (
    element: HTMLInputElement | HTMLTextAreaElement | null
  ) => {
    firstInputRef.current = element;
  };

  const renderField = (field: Field, index: number) => {
    if (field.showIf && !field.showIf(answers)) return null;
    const inputRef = index === 0 ? setFirstInputRef : undefined;
    const fieldId = `quick-start-${field.key}`;

    if (field.type === "text" || field.type === "textarea") {
      const sharedInputProps = {
        id: fieldId,
        ref: inputRef,
        placeholder: field.placeholder,
        "aria-label": field.ariaLabel,
        value: answers[field.key] || "",
        onChange: (
          event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => setAnswer(field.key, event.target.value),
      };
      return (
        <div key={field.key}>
          {field.label && (
            <label
              htmlFor={fieldId}
              className="mb-1.5 block text-[15px] font-semibold"
            >
              {field.label}
            </label>
          )}
          {field.type === "textarea" ? (
            <textarea
              {...sharedInputProps}
              className={`${inputClassName} min-h-[110px] resize-y`}
            />
          ) : (
            <input
              {...sharedInputProps}
              type="text"
              autoComplete={field.autoComplete}
              inputMode={field.inputMode}
              onKeyDown={handleKeyDown}
              className={inputClassName}
            />
          )}
        </div>
      );
    }

    const selectedList = field.type === "multi" ? answers[field.key] || [] : [];
    const selectedOne =
      field.type === "single" ? answers[field.key] : undefined;

    return (
      <div
        key={field.key}
        role={field.type === "multi" ? "group" : "radiogroup"}
        className="mb-5 flex flex-wrap gap-2.5"
      >
        {field.options.map((option) => {
          const isSelected =
            field.type === "multi"
              ? selectedList.includes(option)
              : selectedOne === option;
          return (
            <button
              key={option}
              type="button"
              role={field.type === "multi" ? "checkbox" : "radio"}
              aria-checked={isSelected}
              onClick={() =>
                field.type === "multi"
                  ? toggleMulti(field, option)
                  : setAnswer(field.key, isSelected ? "" : option)
              }
              className={
                `${FOCUS_RING} rounded-full border-[1.5px] px-[18px] py-3 text-[17px] transition active:scale-[0.97] ` +
                (isSelected
                  ? `${BRAND_GRADIENT} border-transparent font-semibold text-white`
                  : "border-[#262633] bg-[#111118] font-medium text-[#F3F3F7] hover:border-[#3B3B4E]")
              }
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };

  const headingClassName = `${DISPLAY_FONT} mb-3 text-[clamp(26px,6vw,34px)] font-semibold leading-[1.12] tracking-[-0.025em]`;
  const hintClassName = "mb-[26px] max-w-[46ch] text-[#9C9CB0]";

  return (
    <div
      className={
        "box-border min-h-screen min-h-dvh pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] " +
        "font-['Figtree',_system-ui,_-apple-system,_'Segoe_UI',_Roboto,_sans-serif] text-[17px] leading-normal text-[#F3F3F7] antialiased " +
        "bg-[#07070B] " +
        "bg-[radial-gradient(600px_400px_at_110%_-10%,rgba(162,60,242,0.16),transparent_70%),radial-gradient(500px_360px_at_-20%_110%,rgba(79,123,255,0.12),transparent_70%)]"
      }
    >
      <div className="mx-auto max-w-[620px] px-5 pb-12 pt-5">
        <header className="mb-7 flex items-center justify-between gap-3">
          <Wordmark logoSrc={logoSrc} homeHref={homeHref} />
          <span
            aria-live="polite"
            className="text-sm tabular-nums text-[#9C9CB0]"
          >
            {isQuestion
              ? `${step} of ${TOTAL_STEPS}`
              : isReview
              ? "All done"
              : ""}
          </span>
        </header>

        <div
          aria-hidden="true"
          className="mb-10 h-1.5 overflow-hidden rounded-full bg-[#262633]"
        >
          <div
            className={`${BRAND_GRADIENT} h-full rounded-full transition-[width] duration-300 ease-out motion-reduce:transition-none`}
            style={{
              width: `${(Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100}%`,
            }}
          />
        </div>

        <main>
          {step === 0 && (
            <section>
              <h1
                className={`${DISPLAY_FONT} mb-3 text-[clamp(36px,8.5vw,52px)] font-semibold leading-[1.04] tracking-[-0.025em]`}
              >
                Let's get to know your business
              </h1>
              <p className={hintClassName}>
                8 quick questions, about 5 minutes. Tap what fits, skip what
                doesn't. There are no wrong answers.
              </p>
              <button
                className={primaryButtonClassName}
                onClick={() => goToStep(1)}
              >
                Let's start
              </button>
            </section>
          )}

          {isQuestion && (
            <section key={step}>
              <h2 className={headingClassName}>{STEPS[step - 1].title}</h2>
              <p className={hintClassName}>{STEPS[step - 1].hint}</p>
              {STEPS[step - 1].fields.map(renderField)}

              <div className="mt-3 flex items-center gap-3">
                <button
                  className={textButtonClassName}
                  onClick={() => goToStep(step - 1)}
                >
                  Back
                </button>
                <button
                  className={primaryButtonClassName}
                  onClick={goToNextStep}
                  disabled={!canContinue}
                >
                  {step === TOTAL_STEPS ? "Review answers" : "Next"}
                </button>
                {step !== 1 && (
                  <button
                    className={`${textButtonClassName} ml-auto underline underline-offset-[3px]`}
                    onClick={() => goToStep(step + 1)}
                  >
                    Skip
                  </button>
                )}
              </div>
              <p className="mt-3.5 hidden text-[13px] text-[#9C9CB0] [@media(hover:hover)]:block">
                Press Enter to continue
              </p>
            </section>
          )}

          {isReview && (
            <section>
              <h2 className={headingClassName}>Looks good?</h2>
              <p className={hintClassName}>
                Check your answers, then send them to us on WhatsApp. We'll
                reply within a day.
              </p>

              <dl className="mb-6 rounded-2xl border-[1.5px] border-[#262633] bg-[#111118] px-5 py-1">
                {SUMMARY_ROWS.map(({ label, step: targetStep, get }) => {
                  const value = (get(answers) || "").trim();
                  return (
                    <div
                      key={label}
                      className="border-b border-[#262633] py-3.5 last:border-b-0"
                    >
                      <dt className="mb-0.5 flex justify-between gap-3 text-sm text-[#9C9CB0]">
                        {label}
                        <button
                          onClick={() => goToStep(targetStep)}
                          aria-label={`Edit ${label}`}
                          className={`${FOCUS_RING} text-sm font-semibold text-[#8FA8FF] hover:underline`}
                        >
                          Edit
                        </button>
                      </dt>
                      <dd
                        className={`m-0 whitespace-pre-wrap [overflow-wrap:anywhere] ${
                          value ? "font-medium" : "italic text-[#9C9CB0]"
                        }`}
                      >
                        {value || "Skipped"}
                      </dd>
                    </div>
                  );
                })}
              </dl>

              <div className="flex flex-wrap gap-3">
                <button
                  className={primaryButtonClassName}
                  onClick={sendToWhatsApp}
                >
                  Send on WhatsApp
                </button>
                <button
                  onClick={copyAnswers}
                  className={`${FOCUS_RING} rounded-full border-[1.5px] border-[#262633] bg-transparent px-6 py-3.5 font-semibold text-[#F3F3F7] transition-colors hover:border-[#3B3B4E]`}
                >
                  Copy my answers
                </button>
              </div>
              <p
                role="status"
                className="mt-3.5 min-h-[1.5em] font-semibold text-[#8FA8FF]"
              >
                {toast}
              </p>
              <p className="mt-[18px] text-[15px] text-[#9C9CB0]">
                WhatsApp not opening? Copy your answers and send them to{" "}
                {displayNumber}.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
