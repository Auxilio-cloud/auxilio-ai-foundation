import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const DemoSummariser = () => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarise = async () => {
    if (!inputText.trim()) {
      toast({
        title: "No text provided",
        description: "Please paste or type some text to summarise.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSummary("");

    try {
      const { data, error } = await supabase.functions.invoke("summarise", {
        body: { text: inputText },
      });

      if (error) {
        throw new Error(error.message || "Failed to summarise");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setSummary(data.summary);
    } catch (error) {
      console.error("Summarise error:", error);
      toast({
        title: "Summarisation failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setSummary("");
  };

  const sampleText = `Artificial intelligence (AI) is transforming industries across the globe, from healthcare to finance to transportation. Machine learning algorithms can now diagnose diseases with accuracy rivaling human doctors, while natural language processing enables computers to understand and generate human language with unprecedented sophistication.

In the business world, AI is being used to automate repetitive tasks, analyse vast amounts of data for insights, and personalise customer experiences at scale. Companies that adopt AI effectively are seeing significant improvements in productivity and competitive advantage.

However, the rise of AI also raises important ethical questions. Concerns about job displacement, algorithmic bias, and privacy must be addressed as these technologies become more prevalent. Experts argue that responsible AI development requires collaboration between technologists, policymakers, and civil society.

Looking ahead, the integration of AI into daily life is expected to accelerate. From smart homes that anticipate our needs to autonomous vehicles that could revolutionise transportation, the potential applications are vast. The key challenge will be ensuring that these benefits are distributed equitably and that AI systems remain aligned with human values and interests.`;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Free Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              AI Document Summariser
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Paste any text—articles, reports, research papers—and get a clear, concise summary in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Tool */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* How to use */}
            <div className="mb-8 p-6 rounded-2xl bg-secondary/50 border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                How to use
              </h2>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">1</span>
                  <span>Paste your text in the box below (articles, reports, meeting notes, research papers)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">2</span>
                  <span>Click "Summarise" and wait a few seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">3</span>
                  <span>Review your AI-generated summary with key points highlighted</span>
                </li>
              </ol>
            </div>

            {/* Input area */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">
                  Your text
                </label>
                <button
                  onClick={() => setInputText(sampleText)}
                  className="text-sm text-primary hover:underline"
                >
                  Try sample text
                </button>
              </div>
              <Textarea
                placeholder="Paste your article, report, or any text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[200px] resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {inputText.length.toLocaleString()} characters
                </span>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    disabled={!inputText && !summary}
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={handleSummarise}
                    disabled={isLoading || !inputText.trim()}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Summarising...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Summarise
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Output area */}
            {summary && (
              <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Summary
                </h3>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                    {summary}
                  </p>
                </div>
              </div>
            )}

            {/* Limitations */}
            <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-muted-foreground" />
                Demo Limitations
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Maximum input: ~15,000 characters (about 10 pages)</li>
                <li>• Text only—no PDF or file uploads in this demo</li>
                <li>• Best results with English-language content</li>
                <li>• Rate limited to prevent abuse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Need more powerful solutions?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our enterprise platform offers PDF processing, batch summarisation, custom prompts, API access, and integration with your existing tools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/platforms">
                  Explore Our Platform
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoSummariser;
