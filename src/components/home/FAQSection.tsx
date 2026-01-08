import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Auxilio do?",
    answer:
      "Auxilio is an AI development company that builds custom AI applications and provides hands-on AI consulting services. We help businesses design, develop, and deploy intelligent software that automates workflows, surfaces insights, and integrates into existing operations.",
  },
  {
    question: "Who is Auxilio for?",
    answer:
      "We work with organisations across industries—healthcare, legal, finance, and beyond—who want to apply AI to real business problems. Our clients range from mid-sized companies exploring their first AI project to enterprises scaling existing capabilities.",
  },
  {
    question: "How does Auxilio help organisations use AI?",
    answer:
      "We offer end-to-end AI development services: from initial strategy and scoping, through application design and development, to deployment and ongoing support. Whether you need a standalone AI solution or help integrating intelligence into your current systems, we handle the full process.",
  },
  {
    question: "What makes Auxilio different from other AI companies?",
    answer:
      "We're a small team focused on building working software, not selling ideas. Our internal platforms help us move faster, and we stay involved through deployment—not just handoff.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Common questions about our AI solutions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
