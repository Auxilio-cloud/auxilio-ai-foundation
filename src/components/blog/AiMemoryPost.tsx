const doodleOne = String.raw`<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="sk1">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16161e"/>
    </marker>
    <marker id="arr-grey" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#a0a0b4"/>
    </marker>
  </defs>
  <circle cx="72" cy="82" r="20" fill="white" stroke="#16161e" stroke-width="2.2" filter="url(#sk1)"/>
  <path d="M54 110 Q72 100 90 110 L95 145 H49Z" fill="white" stroke="#16161e" stroke-width="2.2" filter="url(#sk1)"/>
  <text x="72" y="162" font-family="Inter,sans-serif" font-size="11" fill="#64647a" text-anchor="middle">you</text>
  <path d="M108 52 Q112 36 136 38 Q160 36 163 54 Q166 68 148 72 Q138 75 120 70 Q105 67 108 52Z" fill="#fef9f0" stroke="#c0bdb5" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="135" y="52" font-family="Lora,serif" font-size="9.5" fill="#64647a" text-anchor="middle" font-style="italic">health · salary</text>
  <text x="135" y="64" font-family="Lora,serif" font-size="9.5" fill="#64647a" text-anchor="middle" font-style="italic">relationships · plans</text>
  <path d="M132 88 C200 58 300 50 370 55" stroke="#16161e" stroke-width="2" fill="none" stroke-linecap="round" marker-end="url(#arr1)" filter="url(#sk1)"/>
  <path d="M133 102 C215 102 300 108 370 118" stroke="#16161e" stroke-width="2" fill="none" stroke-linecap="round" marker-end="url(#arr1)" filter="url(#sk1)"/>
  <path d="M132 116 C200 148 295 162 370 174" stroke="#16161e" stroke-width="2" fill="none" stroke-linecap="round" marker-end="url(#arr1)" filter="url(#sk1)"/>
  <rect x="370" y="33" width="108" height="42" rx="4" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk1)"/>
  <text x="424" y="52" font-family="Inter,sans-serif" font-size="11" fill="#16161e" text-anchor="middle" font-weight="600">ChatGPT</text>
  <text x="424" y="66" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">OpenAI servers</text>
  <rect x="370" y="97" width="108" height="42" rx="4" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk1)"/>
  <text x="424" y="116" font-family="Inter,sans-serif" font-size="11" fill="#16161e" text-anchor="middle" font-weight="600">Claude</text>
  <text x="424" y="130" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">Anthropic servers</text>
  <rect x="370" y="154" width="108" height="42" rx="4" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk1)"/>
  <text x="424" y="173" font-family="Inter,sans-serif" font-size="11" fill="#16161e" text-anchor="middle" font-weight="600">Gemini</text>
  <text x="424" y="187" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">Google servers</text>
  <path d="M479 54 C530 54 558 86 568 112" stroke="#a0a0b4" stroke-width="1.8" fill="none" stroke-dasharray="5 3" marker-end="url(#arr-grey)" filter="url(#sk1)"/>
  <path d="M479 118 C525 118 550 118 567 120" stroke="#a0a0b4" stroke-width="1.8" fill="none" stroke-dasharray="5 3" marker-end="url(#arr-grey)" filter="url(#sk1)"/>
  <path d="M479 175 C530 175 558 155 568 138" stroke="#a0a0b4" stroke-width="1.8" fill="none" stroke-dasharray="5 3" marker-end="url(#arr-grey)" filter="url(#sk1)"/>
  <path d="M562 90 Q558 74 572 66 Q587 56 604 64 Q618 54 635 62 Q652 54 658 70 Q670 66 672 81 Q680 86 678 101 Q682 116 668 124 Q672 140 656 145 Q656 160 639 160 Q631 172 614 166 Q600 176 588 164 Q573 168 567 154 Q553 152 552 138 Q543 128 546 115 Q544 103 562 90Z" fill="#fff5f5" stroke="#d63031" stroke-width="2" filter="url(#sk1)"/>
  <text x="613" y="104" font-family="Lora,serif" font-size="26" fill="#d63031" text-anchor="middle" font-weight="600">?</text>
  <text x="613" y="124" font-family="Inter,sans-serif" font-size="10" fill="#d63031" text-anchor="middle" font-weight="500">stored? trained on?</text>
  <text x="613" y="138" font-family="Inter,sans-serif" font-size="10" fill="#d63031" text-anchor="middle" font-weight="500">retained? shared?</text>
  <text x="350" y="16" font-family="Inter,sans-serif" font-size="11" fill="#64647a" text-anchor="middle" font-style="italic">Every session. Every provider. Every day.</text>
</svg>`;

const doodleTwo = String.raw`<svg viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="sk2">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.1" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <line x1="80" y1="255" x2="598" y2="255" stroke="#16161e" stroke-width="2.5" stroke-linecap="round" filter="url(#sk2)"/>
  <line x1="80" y1="255" x2="80" y2="28" stroke="#16161e" stroke-width="2.5" stroke-linecap="round" filter="url(#sk2)"/>
  <polygon points="594,249 594,261 608,255" fill="#16161e"/>
  <polygon points="74,32 86,32 80,20" fill="#16161e"/>
  <text x="344" y="288" font-family="Inter,sans-serif" font-size="12.5" fill="#16161e" text-anchor="middle" font-weight="600">AI usefulness →</text>
  <text x="28" y="145" font-family="Inter,sans-serif" font-size="12.5" fill="#16161e" text-anchor="middle" font-weight="600" transform="rotate(-90,28,145)">What you expose →</text>
  <path d="M106 234 Q220 184 330 134 Q430 92 526 50" stroke="#d63031" stroke-width="2.5" fill="none" stroke-linecap="round" filter="url(#sk2)"/>
  <text x="380" y="110" font-family="Lora,serif" font-size="12" fill="#d63031" font-style="italic" transform="rotate(-26,380,110)">the accepted trade-off</text>
  <circle cx="516" cy="62" r="11" fill="#d63031" filter="url(#sk2)"/>
  <text x="537" y="57" font-family="Inter,sans-serif" font-size="12" fill="#16161e" font-weight="700">Today</text>
  <text x="537" y="71" font-family="Inter,sans-serif" font-size="11" fill="#64647a">useful. exposed.</text>
  <circle cx="120" cy="238" r="8" fill="#c0bdb5" filter="url(#sk2)"/>
  <text x="136" y="234" font-family="Inter,sans-serif" font-size="11" fill="#a0a0b4">no context shared</text>
  <text x="136" y="247" font-family="Inter,sans-serif" font-size="11" fill="#a0a0b4">not very useful</text>
  <rect x="340" y="140" width="224" height="100" rx="8" fill="#f0fffe" stroke="#16161e" stroke-width="1.8" stroke-dasharray="7 4" filter="url(#sk2)"/>
  <text x="452" y="176" font-family="Inter,sans-serif" font-size="13" fill="#16161e" text-anchor="middle" font-weight="700">Does this have to be the trade-off?</text>
  <text x="452" y="198" font-family="Lora,serif" font-size="12" fill="#64647a" text-anchor="middle" font-style="italic">Useful. Without the exposure.</text>
  <text x="452" y="216" font-family="Inter,sans-serif" font-size="11" fill="#00b894" text-anchor="middle" font-weight="600">This space is the question worth asking.</text>
  <text x="344" y="14" font-family="Inter,sans-serif" font-size="11" fill="#64647a" text-anchor="middle" font-style="italic">The assumption the entire industry has quietly accepted</text>
</svg>`;

const doodleThree = String.raw`<svg viewBox="0 0 700 295" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="sk3">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <marker id="arr3r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#d63031"/>
    </marker>
    <marker id="arr3g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#00b894"/>
    </marker>
    <marker id="arr3b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16161e"/>
    </marker>
  </defs>
  <line x1="350" y1="16" x2="350" y2="270" stroke="#e4e2db" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="175" y="28" font-family="Inter,sans-serif" font-size="12" fill="#d63031" text-anchor="middle" font-weight="700" letter-spacing="0.06em">THE DEFAULT</text>
  <circle cx="58" cy="90" r="18" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk3)"/>
  <path d="M42 115 Q58 106 74 115 L79 143 H37Z" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk3)"/>
  <text x="58" y="158" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">you</text>
  <text x="130" y="74" font-family="Lora,serif" font-size="10.5" fill="#d63031" font-style="italic">real data ↗</text>
  <path d="M86 102 L168 80" stroke="#d63031" stroke-width="2.2" fill="none" stroke-linecap="round" marker-end="url(#arr3r)" filter="url(#sk3)"/>
  <rect x="168" y="60" width="104" height="48" rx="5" fill="white" stroke="#d63031" stroke-width="2" filter="url(#sk3)"/>
  <text x="220" y="81" font-family="Inter,sans-serif" font-size="11" fill="#d63031" text-anchor="middle" font-weight="700">AI Server</text>
  <text x="220" y="96" font-family="Inter,sans-serif" font-size="10" fill="#d63031" text-anchor="middle">cloud · external</text>
  <path d="M168 117 L86 125" stroke="#16161e" stroke-width="1.6" fill="none" stroke-dasharray="5 3" marker-end="url(#arr3b)" filter="url(#sk3)"/>
  <text x="118" y="137" font-family="Lora,serif" font-size="10" fill="#64647a" font-style="italic">← answer</text>
  <text x="287" y="74" font-family="Inter,sans-serif" font-size="16">☁</text>
  <text x="290" y="88" font-family="Inter,sans-serif" font-size="9.5" fill="#d63031">stored</text>
  <rect x="28" y="174" width="290" height="86" rx="6" fill="#fff5f5" stroke="#d63031" stroke-width="1.4" stroke-dasharray="5 3"/>
  <text x="42" y="195" font-family="Inter,sans-serif" font-size="11" fill="#d63031" font-weight="700">Your data leaves your device.</text>
  <text x="42" y="213" font-family="Lora,serif" font-size="11" fill="#64647a">→ logged on external servers</text>
  <text x="42" y="229" font-family="Lora,serif" font-size="11" fill="#64647a">→ subject to provider policy</text>
  <text x="42" y="245" font-family="Lora,serif" font-size="11" fill="#64647a">→ you do not control retention</text>
  <text x="525" y="28" font-family="Inter,sans-serif" font-size="12" fill="#00b894" text-anchor="middle" font-weight="700" letter-spacing="0.06em">THE ALTERNATIVE</text>
  <circle cx="412" cy="90" r="18" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk3)"/>
  <path d="M396 115 Q412 106 428 115 L433 143 H391Z" fill="white" stroke="#16161e" stroke-width="2" filter="url(#sk3)"/>
  <text x="412" y="158" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">you</text>
  <path d="M460 60 L508 60 L520 65 L520 104 Q520 120 490 128 Q460 120 460 104 Z" fill="#f0fff9" stroke="#00b894" stroke-width="2.2" filter="url(#sk3)"/>
  <text x="490" y="90" font-family="Inter,sans-serif" font-size="10" fill="#00b894" text-anchor="middle" font-weight="700">on device</text>
  <text x="490" y="105" font-family="Inter,sans-serif" font-size="10" fill="#00b894" text-anchor="middle">transforms</text>
  <path d="M440 104 L457 100" stroke="#00b894" stroke-width="2" fill="none" marker-end="url(#arr3g)" filter="url(#sk3)"/>
  <path d="M522 90 L572 90" stroke="#16161e" stroke-width="1.8" fill="none" marker-end="url(#arr3b)" filter="url(#sk3)"/>
  <text x="547" y="82" font-family="Lora,serif" font-size="10" fill="#00b894" font-style="italic" text-anchor="middle">protected form</text>
  <rect x="572" y="70" width="90" height="40" rx="5" fill="white" stroke="#16161e" stroke-width="1.8" filter="url(#sk3)"/>
  <text x="617" y="88" font-family="Inter,sans-serif" font-size="11" fill="#16161e" text-anchor="middle" font-weight="600">AI</text>
  <text x="617" y="102" font-family="Inter,sans-serif" font-size="10" fill="#64647a" text-anchor="middle">cloud</text>
  <path d="M572 100 L524 110" stroke="#16161e" stroke-width="1.5" fill="none" stroke-dasharray="4 3" marker-end="url(#arr3b)" filter="url(#sk3)"/>
  <rect x="382" y="174" width="290" height="86" rx="6" fill="#f0fff9" stroke="#00b894" stroke-width="1.4" stroke-dasharray="5 3"/>
  <text x="396" y="195" font-family="Inter,sans-serif" font-size="11" fill="#00b894" font-weight="700">Your data stays on your device.</text>
  <text x="396" y="213" font-family="Lora,serif" font-size="11" fill="#64647a">→ AI sees protected representation</text>
  <text x="396" y="229" font-family="Lora,serif" font-size="11" fill="#64647a">→ same answer quality</text>
  <text x="396" y="245" font-family="Lora,serif" font-size="11" fill="#64647a">→ you remain in control</text>
  <text x="350" y="280" font-family="Inter,sans-serif" font-size="11" fill="#64647a" text-anchor="middle" font-style="italic">Same intelligence. Different trust model.</text>
</svg>`;

function EditorialFigure({
  svg,
  title,
  caption,
}: {
  svg: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="not-prose my-10 rounded-3xl border border-border bg-card/90 p-5 md:p-8">
      <div
        className="rounded-2xl border border-stone-200 bg-[#fcfaf4] p-4 md:p-5 [&_svg]:h-auto [&_svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <p className="mt-5 text-center text-sm leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{title}</span>
        <br />
        {caption}
      </p>
    </div>
  );
}

export function AiMemoryPost() {
  return (
    <>
      <p className="lead">
        Every app is quietly building a profile of you. Most people do not know
        what is in it. And we have somehow decided that is normal.
      </p>

      <p className="text-foreground">
        The biggest risk in AI systems is not the model.
      </p>

      <p>
        It is memory. What gets stored. How long. In what form. Under whose
        control.
      </p>

      <p>
        Most systems treat memory as a convenience layer, a feature that makes
        the product feel smarter. In reality, it is the primary risk surface.
        And we are building it before we have seriously thought about what that
        means.
      </p>

      <EditorialFigure
        svg={doodleOne}
        title="Your most sensitive context can end up distributed across systems you do not control."
        caption="Under policies you have not read, for purposes that are not entirely yours."
      />

      <h2>Memory Is the Architecture</h2>
      <p>Think about what you have typed into an AI assistant in the last 30 days.</p>
      <p>
        Not the casual queries. The real ones. The thing you were working
        through at 11pm. The email you were not sure how to write. The financial
        decision you were modelling. The HR situation you needed to think out
        loud about.
      </p>
      <p>Now ask: where did that go?</p>
      <p>
        Most people do not know. And for a while, that was almost fine because
        the AI forgot too. You asked. It answered. The session ended. Everything
        disappeared.
      </p>
      <p>That era is ending.</p>
      <p>
        Memory features are shipping at every major lab. The ability to import
        your documents, your notes, and your project history to build something
        that genuinely knows your context is already here or very close across
        major platforms.
      </p>
      <p>
        And the more the AI remembers, the more the question of where that
        memory lives matters.
      </p>

      <EditorialFigure
        svg={doodleTwo}
        title="The industry has accepted this as a fixed constraint."
        caption="It is not. It is an architectural default."
      />

      <h2>The Question Is Not Access. It Is Precision.</h2>
      <p>
        We tend to think about privacy in AI as a control problem. Limit access.
        Restrict usage. Block sensitive data.
      </p>
      <p>But there is another way to think about it.</p>
      <p className="text-foreground">
        Privacy does not mean blocking AI. It means controlling precision.
      </p>
      <p>
        An AI system reasoning about your situation does not always need the
        exact values. It needs something consistent enough to think with.
      </p>
      <p>
        Sometimes <strong>late 30s</strong> is smarter than{" "}
        <strong>15 March 1985</strong>. Same reasoning quality. Completely
        different exposure.
      </p>

      <div className="not-prose my-8 rounded-2xl border-l-4 border-foreground bg-card px-6 py-5">
        <p className="text-base leading-relaxed text-foreground">
          The question is not: "Can the AI see this?"
          <br />
          It is: "How precisely does it actually need to?"
        </p>
      </div>

      <p>
        Most AI systems never ask that question. They just take the real data,
        pass it to the model, and call it context.
      </p>
      <p>
        What if changing the form of the data before it ever leaves your device
        was the architectural answer? Same usefulness. Different exposure.
      </p>

      <EditorialFigure
        svg={doodleThree}
        title="The difference is not which AI you use."
        caption="It is where the processing happens before the AI sees anything."
      />

      <h2>The Window to Ask These Questions Is Narrow</h2>
      <p>
        A year ago, AI personalisation was mostly theoretical. Today it is a
        roadmap priority at every major lab.
      </p>
      <p>
        Memory features are live. Document libraries are shipping. The ability
        to hand your entire knowledge base to an AI assistant is not a 2027
        feature. It is this quarter.
      </p>

      <div className="not-prose my-8 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6">
        <p className="text-lg font-semibold text-foreground">
          We accepted the social media data bargain without fully understanding
          it. We accepted the smartphone location bargain the same way.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Each time, by the time the consequences were clear, the infrastructure
          was already built and the habits were already formed.
        </p>
        <p className="mt-4 text-base font-semibold text-foreground">
          Is AI memory going to be the same story?
        </p>
      </div>

      <p>
        The patterns being established right now, where memory lives, how it
        flows, what happens to it, will shape AI's relationship with personal
        data for a long time.
      </p>
      <p>The question is not whether AI should be personal. It should be.</p>
      <p className="text-foreground">
        The question is whether personal has to mean exposed.
      </p>
      <p>
        Trust must be structural. Not a privacy policy you agreed to without
        reading. Not a setting buried three menus deep. Architecture. Systems
        designed so that the breach scenario is already accounted for, so your
        users do not have to assume trust.
      </p>
      <p>
        We have been working on what that architecture looks like. We do not
        think the trade-off is as fixed as the industry assumes.
      </p>
      <p>
        But that is a question worth every builder in this space sitting with
        before the defaults are set.
      </p>

    </>
  );
}
