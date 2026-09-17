---
title: "AI can read every word and still miss the point"
standfirst: "The same document. Four AI models. Similar risks. A very different conclusion once the map of the real-world system changed."
published: 2026-09-17
format: article
series: general
tags: [artificial-intelligence, reasoning, risk, systems, decision-making]
featured: true
status: published
heroImage: "/images/social/ai-can-read-every-word-and-still-miss-the-point.jpg"
heroAlt: "An Installation Agreement beside four AI risk assessments, contrasted with a mapped apartment building system showing technology, operations and people."
heroCaption: "The document can stay the same while the map behind the assessment changes."
contactPrompt: general
---

A few months ago, a strata manager came back to me with a series of
concerns about an Installation Agreement we'd been discussing.

Some were reasonable.

Some didn't make sense to me.

Not because I thought the agreement was perfect. I just couldn't follow
the mechanism between what the agreement actually said and some of the
risks being attributed to it.

In one case, the information that substantially answered the objection
was sitting later in the same clause.

I responded at the time, we moved on, but something about it stayed with
me.

About four weeks later, I decided to try an experiment.

I opened a fresh incognito chat with Claude, gave it the same agreement
and asked it to assess the risks as though it were advising a strata
manager considering signing it.

Its opening line was:

“Straight answer: don't sign this as-is.”

Then I read the objections.

That was when things got interesting.

The structure, the clauses it focused on and even parts of the reasoning
were remarkably similar to the concerns I'd received weeks earlier.

That isn't proof of where the original concerns came from, and it
doesn't really matter.

What mattered was this:

Claude had independently arrived at much the same map.

So I started arguing with it.

Not because I wanted it to agree with me.

I wanted it to explain how it got there.

## I started asking what would actually have to happen

Take security.

A contractual provision allowed additional delivery providers to be
given access after notice.

On first reading, that sounds straightforward:

More providers → more people with access → greater security risk.

Reasonable.

Except that isn't actually a causal mechanism.

So I started filling in the blanks.

What does “access” actually mean?

Does a driver receive a reusable credential?

Can they return whenever they want?

How long does the access last?

What happens after the delivery?

Can the building restrict providers?

What would the same courier do if this system wasn't installed?

Once those questions were answered, the picture changed.

The driver doesn't receive a reusable building credential.

Access occurs through the delivery workflow. The driver needs to be
logged in, assigned to the relevant stop and physically near the access
point. Once the delivery is completed, that access is gone.

The agreement also contained a right for the building to restrict any or
all additional providers.

The risk wasn't imaginary.

But the original chain:

more providers → less security

wasn't enough.

Claude started walking things back.

At one point it replied:

“You're right, and I overstated that.”

Later:

“Two fair hits.”

And eventually:

“Yes, and it closes most of the gap I raised. Let me update the
assessment rather than hunt for a way to keep it alive.”

That last sentence interested me.

Because that was exactly what I wanted it to do.

Don't defend the first answer.

Rebuild the answer.

By the end of the conversation, Claude had moved from:

“don't sign this as-is”

to:

“sign it, but go in with eyes open.”

Same agreement.

Same AI.

Very different conclusion.

The document hadn't changed.

The map had.

## So I tried it again

One model changing its mind doesn't tell you much.

Maybe Claude had simply been persuaded by the way I argued.

Maybe I was feeding it information selectively.

Maybe I'd found an elaborate way of getting an AI to tell me what I
wanted to hear.

So I repeated the exercise.

I opened fresh incognito chats with Grok, Gemini Pro Extended and
ChatGPT.

Each model started with zero context about me, the agreement, the
product or the situation.

They received the same underlying document and were asked to assess it
from the perspective of a strata manager considering whether to sign.

The exact answers differed.

But something unexpected happened.

They kept finding the same families of risk.

Third-party access.

Building credentials.

Liability limitations.

Indemnities.

Authority to sign.

Equipment failure.

Installation risk.

Common-property issues.

Warranties.

Termination.

At first, that felt like corroboration.

Four sophisticated models looking independently at the same document and
identifying similar problems.

Surely that makes the problems more credible?

Maybe.

But there's another possibility.

AI consensus can still be consensus around an incomplete map.

So I started interrogating the maps.

## A risk isn't a mechanism

One of the recurring concerns was a \$10,000 contractual liability cap.

That sounds scary when you're talking about equipment installed in an
apartment building worth tens or hundreds of millions of dollars.

The models could easily imagine losses exceeding \$10,000.

But that's the wrong comparison.

The relevant question was:

What realistic event could this system cause where Amazon itself would
otherwise owe more than \$10,000, but the agreement would reduce the
building's recovery to \$10,000?

That question forces you to separate things that initially get bundled
together.

A courier damages something.

A resident slips over.

An existing access-control system fails.

A delivery driver steals something.

An installer drills through something.

The device itself fails.

The software authorises someone incorrectly.

Those aren't one category of risk simply because Amazon Key happens to
be installed in the building.

Different events have different causes, different responsible parties
and different liability pathways.

Grok initially rated the liability cap High.

Once those categories were separated, it moved to Medium.

Then I supplied another piece of operational information that wasn't in
the agreement.

The device connects using a dry-contact relay.

It doesn't inject operating voltage into the access-control system. It
simply changes the state of a contact.

Installation is also performed by licensed and insured technicians.

That killed one of the larger hypothetical mechanisms the models had
been entertaining: an electrical event propagating through the
access-control system and causing expensive damage.

Grok moved the residual risk again.

Medium → Low.

Gemini independently followed a remarkably similar path.

High → Moderate → Low.

ChatGPT's cold assessment rated the cap Medium–High. After being forced
to distinguish an Amazon-caused loss from every other imaginable
building loss, it described this as its “largest correction” and moved
the residual risk to Low to Low–Medium.

The cap never disappeared.

A genuine Amazon-caused loss above \$10,000 remains conceivable.

But that's different from treating every \$50,000 thing that could
happen in an apartment building as evidence that a \$10,000 contractual
cap creates a \$40,000 exposure.

The risk had to survive its own causal chain.

## Sometimes the missing information wasn't missing

This was the part I hadn't expected.

I'd assumed the problem would mostly be that an agreement can't explain
everything about the real-world system behind it.

And that was certainly happening.

The agreement doesn't explain the full delivery workflow.

It doesn't explain every technical characteristic of the device.

It doesn't explain exactly how an installation is performed.

It doesn't explain the physical constraints created by an existing door
controller.

The models had to reason without that information.

But sometimes the information they needed was already sitting in front
of them.

One concern involved the building supplying a physical access credential
for installation.

The models treated that as a meaningful credential/security exposure.

Except the same clause also said the credential would be returned after
installation.

The information wasn't hidden in another document.

It wasn't specialist knowledge.

It wasn't something I needed to explain from experience.

It was in the clause being analysed.

ChatGPT eventually acknowledged that it had “underweighted the final
sentence.”

That distinction matters.

The model didn't lack the information.

It failed to connect or weight the information correctly.

That's a different kind of missing map.

## Then Gemini did something even stranger

During the Gemini experiment, termination became a point of discussion.

The agreement says either party can terminate on 10 days' written
notice.

Gemini had actually understood this correctly earlier.

Later, during a fresh reassessment, it said termination required 30
days.

Thirty days was a real number from the document.

It just belonged to a different provision concerning notice before
additional delivery providers could be enabled.

So I challenged it.

Gemini recognised that it had conflated the two provisions.

Good.

Then I asked it to reread the termination clause.

It came back with another answer.

This time it said there was no minimum notice period and termination
could effectively be immediate.

It then produced a perfectly sensible analysis of what immediate
termination meant.

There was only one problem.

The agreement still said 10 days.

I challenged it again and asked for the complete operative sentence from
the source.

That's when Gemini said it couldn't do that because it didn't currently
have access to the original agreement or the previous conversation
context.

That stopped me.

Because moments earlier it had answered as though it had reread the
provision.

So I supplied the original document again.

Gemini found the clause.

Ten days.

It then acknowledged that its previous answer had been a
document-reading failure.

And this exposed something more important than getting a number wrong.

The reasoning after the mistake was perfectly sensible.

The premise it was reasoning from was wrong.

Headings, careful language, clause analysis and logical reasoning don't
protect you from that.

If the premise is wrong, sophisticated reasoning can simply make the
wrong answer look better.

## Four models weren't four independent experts

This changed how I thought about the apparent agreement between the
models.

When four people independently identify the same problem, we naturally
give the problem more weight.

I found myself doing the same thing with AI.

Claude saw it.

Grok saw it.

Gemini saw it.

ChatGPT saw it.

That feels like independent validation.

But these models don't necessarily represent four genuinely independent
ways of understanding a system.

They may be applying similar learned patterns to the same information.

Give them an agreement and ask them to behave like professional risk
reviewers and they are very good at recognising things that look like
contractual risks.

Broad indemnity?

Flag it.

Liability cap?

Flag it.

Third-party access?

Flag it.

Warranty disclaimer?

Flag it.

Authority representation?

Flag it.

That's useful.

I'd rather have AI notice those provisions than miss them.

The problem comes one step later.

Identifying a risk pattern isn't the same thing as understanding the
risk.

To understand the risk, you need the mechanism.

What would actually have to happen?

That became the most useful question in the entire experiment.

For every significant concern, I started asking some version of:

What exactly would have to happen for this to cause the loss you're
describing?

Then:

What causes the next step?

Who controls it?

Which part is actually supported by the document?

Which part are you assuming?

Does the agreement create the risk, or did the risk already exist?

Would the same exposure exist if we didn't sign?

Who would actually be liable?

What information would change your conclusion?

Suddenly, very impressive sounding risks started separating into
different buckets.

Some disappeared.

Some narrowed.

Some remained.

Some turned out to be ordinary governance requirements that existed
regardless of the agreement.

Some were implementation questions rather than contractual risks.

Some were genuinely worth keeping.

And some couldn't be answered until the model understood how the
real-world system worked.

That's the important bit.

The objective wasn't to make the AI agree with me.

If you challenge an AI until it gives you the answer you want, you've
learned nothing.

The objective was to challenge it until it could explain the mechanism
behind its answer.

If the mechanism survived scrutiny, keep the concern.

If it depended on an unsupported assumption, expose the assumption.

If the information was already in the document but hadn't been connected
properly, rebuild the map.

If information was genuinely missing, go and find it.

## The document wasn't enough

After the experiment I looked at another document we could theoretically
have supplied to the models: the device specification sheet.

That would have helped.

It specifies the device's power inputs, cellular or Ethernet
connectivity and relay rating.

But even that wouldn't have provided the whole picture.

It doesn't explicitly say the relay is dry contact.

It doesn't explain the complete driver-authorisation workflow.

It doesn't explain the relationship between an installation credential
and operational access.

It doesn't explain how the relevant access-control hardware constrains
the physical installation location.

It doesn't explain every liability pathway around installation.

So another question emerged:

How confident should an AI be in its assessment of a system when it has
a document describing the contractual relationship but not the system
the contract governs?

In this experiment, the models generally didn't stop and say:

I don't understand enough about the underlying system to rate this yet.

They reasoned.

And where information was missing, reasonable assumptions could fill the
gaps.

That's what makes this difficult.

The assumptions weren't necessarily stupid.

They were plausible.

## AI doesn't need to hallucinate to mislead you

“Hallucination” gets most of the attention when we talk about AI
reliability.

And Gemini certainly gave me a spectacular example of something close to
it during the termination discussion.

But I came away more interested in something quieter.

An AI can:

read the correct document,

identify real clauses,

spot legitimate risk patterns,

make reasonable assumptions,

construct a coherent causal story,

and produce a professionally written conclusion...

while still having the wrong map of the system.

There may not be one ridiculous sentence you can point to.

No invented court case.

No imaginary clause.

No obvious nonsense.

Every individual step can look reasonable.

The problem is the relationship between the steps.

And that may be harder to detect precisely because the reasoning sounds
intelligent.

## Contradiction might be useful information

This experiment also changed something about how I want AI to respond to
me.

When I tell an AI something that conflicts with information it already
has, I don't necessarily want:

“Ben is wrong.”

I want it to consider:

“What am I missing that would make both of these things make sense?”

That doesn't mean treating every contradiction as proof that the user
secretly knows better.

Sometimes I'm simply wrong.

Sometimes the AI is wrong.

Sometimes the source is wrong.

But contradiction itself is information.

It tells you the current map doesn't reconcile.

And before choosing which piece to throw away, it may be worth asking
whether another piece is missing.

That's not just an AI lesson.

It's a pretty useful human one too.

## What I think the experiment actually showed

This wasn't a scientific study.

Four models isn't a statistically meaningful sample.

The prompts weren't perfectly identical throughout the interrogation.

The models changed as I introduced new information.

And I was an active participant with my own knowledge, assumptions and
commercial interest in the agreement.

Those limitations matter.

So I'm not claiming I've proved some universal law about artificial
intelligence.

But as a practical experiment, it changed how I use these tools.

I no longer treat a sophisticated first-pass answer as the finished
analysis.

I don't treat agreement between several models as automatic independent
corroboration.

And I don't assume that because all the necessary information appears
somewhere in the context, the AI has necessarily assembled it into the
right model.

Instead, I'm becoming much more interested in the question underneath
the answer:

What mechanism are you actually describing?

Show me the chain.

Show me which parts come from evidence.

Show me which parts are assumptions.

Show me the counterfactual.

Tell me what information you're missing.

Then tell me what still worries you.

Because that's what happened here.

Some risks disappeared.

Some narrowed.

Some survived.

The first-pass analysis didn't reliably tell me which was which.

The document never changed.

The map did.
