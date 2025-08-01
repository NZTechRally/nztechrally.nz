---
speaker: Edward Taylor
speakerKey: edward-taylor
talkTitle: How internal platform teams can help create resilient organisations
talkExcerpt: "<p>Learning from incidents, fostering community, leveraging & growing expertise, embracing transparency, and applying “product thinking” with a touch of metrics.</p> 
<p>This talk delves into these key areas, showcasing the principles and practices I use to lead a successful internal product team dedicated to enhancing the observability and resilience of Kiwibank.</p>
"
featuredImage: /assets/images/talks/2025/platform-teams.jpg
featuredImageAlt: "Ed's picture with text: NZ Tech Rally. How internal platform teams can help create resilient organisations. A talk by Edward Taylor, Product Person @ Kiwibank"
featuredImageType: image/jpg
featuredImageWidth: 1280
featuredImageHeight: 720
talkRecordingID: re65KC6WO2s
talkReferences:
---

The thing I'm most anxious about with this talk is the sound equipment and where to stand. So yeah, oh, see where we go. Cool!

Thanks for that introduction.

I'll just give you a quick outline of what I'm going to be talking about. You'll get a great introduction. We'll talk about how to grow your internal team's resilience. You'll get to talk about how to grow your internal customers' resilience. I'll summarize everything. And then I even put some secret bonus content in — kind of like credits at the end of the movie, you know, as you get there. That's pretty cool.

So, as Aaron said, I've had a pretty weird career — just like everyone has — so it's pretty cool. I started shooting lasers at tumors and looking at the immune cells in them. Sadly, I burnt out of that. Again, a slight theme of the conference.

And I decided to get into something different. I learned a ton of cool skills there, and I got into QA. Aaron Hodder was actually— I got in the Assurity Grad Program, and he trained me up in that. So that's pretty cool. Be introduced by him now.

In QA, I got to work at IRD with their big business transformation — that was very eye-opening. And at Xero as a QA lead, that was a lot of fun. At Xero, I got introduced to a huge number of really cool people. And those people knew lots of cool stuff that I had no idea about.

The thing that kind of stuck with me — and you’ll hear more about it in the talk — is incidents. And as a QA, I was really like: quality, right? And like, how do you measure quality? What on earth is quality? That could be a talk on its own. But I was like, oh, these incidents. When things go wrong in production, that's a really good feedback mechanism for me. So I was naturally really interested in that.

And there was a big community of people at Xero who were also interested in that. So I got to learn some really cool things from a lot of different people and learn about what resilience engineering is — which I’d never heard of before.

And then I decided that, in quality — slightly ironically — I found it quite hard to actually make that big a difference to quality. And I was like, hmm, it kind of seems like product has far more of an impact here. So why don’t I shift into product — first at Xero, and now at my current role in Kiwibank. Maybe I can have more of an impact there.

So as I said, I’m now at Kiwibank. I help run the observability team. We run an observability platform team. We’re a team of five people, and we support roughly 500 people in our digital and technology functions. So that’s not just engineers — it’s a whole range of product, project managers, etc., etc.

So you always gotta start off a talk with a bang. So: definitions!

Internal platform team.
Maybe you saw the title. What on earth does that mean? Internal means the people I’m looking after are members of the same organisation I am. They are software engineers. They’re the product people. They work for the same company I do.

Platform simply means something that people can build on top of. So I run the observability platform. People can build their alerts and monitors and synthetics and things like that on top of my platform to solve their problems.

Resilience and robustness.
So we’ve already heard a lot about resilience in some of the keynotes earlier. It’s a very loaded term these days. So I’ll cover my own definition. I like to contrast it against robustness.

Robustness is: how well can you respond to stuff you know about? Like, I know that my app needs to pace more scale. I know we’re gonna get more customers. Can I respond when their customer load doubles? I saw that coming. Can I make my, you know, my microservice — whatever — robust?

However, resilience by my definition is: how do we respond to what we didn’t know was gonna happen?
“Oh, I had no idea that my feature flags interacted with my technology that way.”
“I didn’t realise that I’m now faced with a situation I never saw coming.”
“I had no idea that regulatory requirement was coming.”
“I had no idea COVID was coming.”
“I had no idea — whatever.”

And the key thing to note is that both of these overlap. If you’re really robust, you’re probably pretty resilient. If you’re really resilient, you’re probably pretty robust — but there are differences.

The last bit of jargon I’ll touch on is socio-technical systems. We all work in socio-technical systems. If you're building resilience, it's key to think of our systems like that. It's not just the technology that matters.

Don't think of your technology as just like, “Oh, I write this really nice code and I put all these circuit breakers in and backups and blah, blah, blah. I'm gonna be able to respond to every situation now.” It's not that simple.

You've also got to think of the teams around it — the people who support those systems, how they interact, how you get in contact with them, what their pressures are. So when you're building resilience, don't just think of the technical. Think of the social as well, around it. And we call that a socio-technical system.

So, what builds resilience?

Again, loaded question! However, like all good 25-minute talks, I will dumb it down and strip away a lot of nuance and focus on what I think is super important. And that's expertise.

Have you ever been in an incident or in a difficult situation and you've just had someone walk into the room and you just kind of feel calm because you're like, ah, this person just knows everything about the system. They really understand the code, or they really know who I need to talk to to help me deal with this. And like, they just have so much expertise at solving a problem.

And it just really helps. It helps you deal with that unknown because you know they have all these base skills that really help you out.

So that’s what I think is one of the key aspects of building that. We need to build this expertise.

But expertise is a very broad term, right? Like, what do you mean when you say expertise? What are you talking about? And what expertise does a platform team need?

So I’ll put this into my context. I really like Venn diagrams.

What expertise does my platform team need — and I need?

Well, obviously, we need expertise in the platform itself. So I run observability platforms. I need to understand how they work. I need to understand what is the better practices to use for them. I need to understand where their limits are, what they can’t do, their weaknesses, what to use. I need that level of expertise to do my job.

As I said, we solve observability problems. So I need to understand observability. How do SOOs (Signals, Observations, and Outcomes) work? When do you use them? So you build them — and what do you do afterwards? When do I use a log, a metric, a trace?

All these kind of core things that I need to understand — the actual concepts and the theory behind it. Not just how to do it, but when to do it and why to do it.

And lastly, Kiwibank.

I need to understand the org that I work in. It's a very big, competent banking organisation. There's a huge range of technologies and pressures. There’s no one cookie-cutter solution that I can go and — it’s gonna work across that org.

So I need to spend time and effort gaining expertise in the different internal customers — their technology, the pressures they take. Are they on-prem? Are they Kubernetes? What are they doing? What are they facing?

So that’s the expertise that I need to have in myself and in my team.

So, how can I grow those areas of expertise?
That's a lot to learn. And what can I do about gaining those skills?

As you may have guessed from the introduction — learning from incidents. This is a major approach that me and my team use.

So what does this mean? And then I'll cover why it's important.

What do we do?
We get involved in every incident we can. If there's an incident on, I try to get involved in it — be part of the response, help out, and do all I can.

But then it doesn't end there. I want to get involved in the post-incident review. I want to be there with the teams and learn as they learn. I want to help run it if they need someone to help run it — because you're always trying to find someone to run these.

I do everything I can to be involved in these incidents — and my team to be involved.

So why? Why do we love incidents?

There's a really cool report called the Stella Report. It's just — I think — stellareport.io. Looking at Chris 'cause he might know. And they have this really cool description of incidents.
They say:

Incidents are highly encoded messages that tell us how our system really works.
It’s our job to decode those messages.

So what does that mean?

We’ve already heard mental models mentioned a few times in this conference. So every person in this room has a mental model of how their system works — and how their socio-technical system works.

So you can see up there — ooh, is it pointed? Yeah, that works.
You can see this person has this mental model, and it’s like:

“Oh, this is running Kubernetes, and then it goes over here and talks to the on-prem service, and then it goes over here and talks to the SaaS product. And then this team supports that and that team supports that.”

And then — the next thing you’ll notice is: okay, they all have mental models, and they’re all different.
And I guarantee that every person’s mental model is different across your team. Even if you work in this close, tight-knit team — you all have differences in your mental model.

Because we work in these highly evolving, rapidly changing, complex systems. And to keep up with that, you have to continually refresh your mental model.

And that’s what incidents allow us to do. They allow us the time and the space to strip away, look at what actually happened, and refresh this with reality. So our mental models are more accurate with each other, and — importantly — they’re more accurate with what’s actually real.

And once you're doing that, you're building all your expertise up. That is a process of gaining expertise.

Luckily, incidents give not just that value.
One of my favourite things about them — I’ve been in a lot of incidents, like I’ve lost count of how many I’ve been in — so I find them kind of fun.

That’s not a normal attitude. For lots of people, these are majorly stressful and scary situations. And they find this like, you know — especially if you’re the engineer who triggered the change or whatever — you can be quite traumatised by what’s happened and the impact of the change.

But if you have someone come in and you're really positive and you're like:
“Oh, this is such a cool week to learn all this cool information,”
and “Yeah, like, I’ve been here for myself” — and you see this as this real positive thing rather than a negative thing — it helps you build a really strong relationship with them.

They talk, and you get to build that relationship. It’s kind of like being, you know, bonded by this negative event — and treating it positively really lets you have that far easier way to influence across the org when you have those relationships.

That’s a really good way. I’m an internal platform team. I cannot be successful in isolation. The only way I’m successful is if the people using the platform are successful. I have to be able to influence them — and I have to have those relationships to do that.

So you may be thinking — or maybe not — you're like:
"Okay, that's great, but we don’t have that many incidents."
You may be thinking, "We have too many incidents."

But that’s okay. Like, what else can I do?
I can’t just rely on incidents.

I mean, you obviously have background in incidents. But they're still a bit scary to me.
What else can I do?

So, I can guarantee you what every internal platform team has — and that is: interrupts.

What do I mean by interrupts?
I mean, you have users coming up to you and you're like:
“Hey, how do I do this?”
“Hey, I see a problem here.”
“Hey, can I have this feature?”

Or one of a million different questions that come in every day.

And a lot of teams I’ve been part of, they're like:
“Oh, so annoying. The users come and talk to me. Like, please — I’ve got quarterly planning and I’ve got plans and I’ve got to hit those milestones because I’m getting a lot of pressure. So how can we automate those away, reduce total?”
You know?

But our team doesn’t see it like that.
We don’t see interrupts as a bug. We see it as a feature.

We see it as an opportunity - to talk to our customers, to understand the context, to influence them at a micro level and learn from them, more particularly.

So we’ve found that we dedicate a lot of time to having engineers available to talk and respond to these kinds of pictures.
And we put a lot of effort into making sure they’re done in a transparent way that everyone can learn from (I’ll touch more on that later).

I’ll just say again — just that simple mindset shift, of seeing interrupts as,
“No, not something I want to get away from — but something that I really value” — is really powerful.

And in saying that — you need to be careful what you automate.
Because I think it’s a slight anti-pattern.

I’ve seen teams that put a lot of barriers between those interactions, like:
“Hey, you have to do everything using a ticket.”
“I want a SNOW (ServiceNow) ticket. I want a JIRA ticket. Talk to me through the ticket. And now you can’t have this human interaction anymore.”

Or,
“I’m going to make an AI Slack bot that will tell you the answer to the question before you can even dare talk to one of my valuable platform engineers.”

So — just be careful about that.

But you’d probably be like,
“You’re just talking about the internal platform team itself.
And you said you don’t really care about them, because we’re only the successors of your customers.”

And I’d be like,
“Yes, I did say that.”
And that’s true.

Like, if I have more expertise, I’ll make better decisions and build a better internal platform that’s more resilient.
But I must also focus on building the expertise of my organisation — for me, in observability.

So how can I do that?

That is a much harder challenge.

So the focus we did is — we focused on creating community.

And the most obvious way that you’d be like:
“Okay, I need to create community around something — community around a practice?
Hmm, I should create an observability community of practice.”
Problem solved.

…Not quite that simple.

We put a bunch of work into getting this regularly two-weekly community of practice.
And I had all these dreams about it being this wonderful forum where everyone volunteers to speak and there’s tons of interaction and everyone’s arguing and having a great time.

That didn’t happen, sadly.

What did happen is this was a really good regular forum — that me and my team had to do a lot of work chasing people up to present — and presenting a really good show-and-tell forum, we found.

But sadly, actually — not a very good interaction forum.

It was okay. We got a few people who were the usual people who would interact.
And lots of people told me afterwards that they really enjoyed it.
But there was a huge amount of:

someone saying something
someone saying “any questions?”
and then just sitting there blankly.

So again, I think this was very valuable.
It was really cool. I got to promote lots of people’s cool work.
We got to talk about incidents and the observability of them.
And we got to showcase everyone’s awesome work at a wide forum — so the cool stuff people were doing in Team A could be seen across the organisation. That was really cool.

But it didn’t quite create the community.
It created a place to show off.
But it didn’t create that kind of natural interaction that you need if you’re going to create a community.

So what actually did and helped us a lot more, surprisingly, was our public health channels.

So I mentioned this before. So when I got there, when I got into Kiwibank, one of the first things I did is I was like, I don't want requests in SNOW (ServiceNow) tickets. I don't want them in JIRA. Well, some of that stuff that's very generic still stays in there. But if people are coming to us, I want them to post in a public health channel.

I don't want DMC engineers. I want them to post in a public health channel. I want all those requests to be transparent.

And to be honest, the reason I did that is, as someone in product, I was like, this is data for me, where the pain points of my customers are. I want to look at that data.

But what I noticed happened was even cooler. We had these channels, people would post a question. And then people from other teams would start answering them and be like, hey, this is where I saw the problem. It's here. Or like, oh, hey, I'm also seeing this. And I tried this and it didn't work.

And I was like, oh, I couldn't get people to engage in this big meeting with a bunch of people and saying stuff. But when you put a specific problem in a health channel and let anyone answer, suddenly people from different teams were engaging, or they were tagging other people who they thought could answer. And it wasn't my team. It was amazing.

I was seeing other people do my job — build this community around these public health channels. Something about the specific of the questions and their ability to help others out attracted them to engage. So I was really quite surprised and it was really cool.

Having this forum, having it, no automation blocking them from the interaction and having it all be transparent, they knew where to look — really helped us build community.

That's not enough.

I need to build community. That's not enough to help build expertise.

What else my team also focuses on — as we heard earlier on the platform team — all my customers have a huge amount of demands on them. They have stakeholders yelling at them for new features. They have incidents, they're firefighting. They have tech debt, they're trying to reduce. They have a part of JIRA — or we don't use JIRA, we use ADO sadly — but they have a pile of tickets, this big.

And if I'm like, "Hey, I want you to do one more thing," and now they have 101 tickets, you know — like it's very hard for me to be effective like that. There's ways, it's been demonstrated, but it is very, very hard.

So I need to focus on making the things that I know they have to do as easily as humanly possible. So they have certain regulations or whatever that they have to meet. I need to make that super easy for them so they have more time in their day. I need to really focus on creating as much slack for my customers as possible.

And very rarely will I go and try and impose stuff that has more work, could cost more work for them.

And then also it's exploiting slack.

So what do I mean by exploiting slack?

I just talked about how busy all these teams are. However, like work isn't constantly, "I'm 100% busy all the time," right? You have ebbs and flows of work. And sometimes you have events like incidents — they're great ones — where suddenly you really wanted to do something, you really wanted to improve your test automation, or you really wanted to improve your observability, your alerting, or whatever you wanted to improve.

Incident comes along and suddenly that pushes back other priorities and you have a little bit of slack to actually do that work. Or it could just be I got lucky and the right JIRA ticket got prioritised on the queue.

I know that that is like a small microcosm. And I need to take advantage of that as a platform team. Because I know if I say, "Hey mate, my quarterly plan is very, you know, I got a lot of work to get done, I got a lot of demands — wait one month and I will help you out." Oh, I can — if I go back to them in that month's time, that moment's gone. And now they're all fully busy on their normal initiatives.

So my team needs to be probably the true definition of agile. And we need to be like, okay, I'm okay with pushing back on my quarterly plans because my customer has a moment that I need to use. So we need to focus on exploiting that slack when it appears.

Cool. So key takeaways:

Resilience is the ability to respond to the unexpected.

You want to focus on building your team and your internal customers' expertise.

Incidents can be your superpower. Please use them.
They are very valuable unplanned investments that you've made.
You might as well get as big a return on them as you humanly possibly can.

Put a lot of effort into nurturing your community.
You'll probably be surprised by the different ways that work and don't — but it definitely pays off.

Focus on creating slack for your internal customers so they have that space to build their expertise.

Bonus content.

Now, I don't have Ryan Gosling or anything sadly. But I was going to talk — and I mentioned in my abstract when I submitted this talk (but I assume everyone just submits an abstract but they haven't written the talk, so then it kind of has to organically grow) — but I mentioned I was going to talk about metrics.

I was going to say AI — like there's been not a huge amount of AI, AI's thoughts compared to advertising at the moment. I will just say one thing about AI:

Think of AI in the context of expertise. And what expertise do I lose by using that AI to do it for me?

And be careful when you use AI because by using it, you're not building your own expertise in that area. So just be careful what you use it for.

But yeah, that's that, I think. But what about metrics?

Like I'm in product — we're metric driven. We're outcomes over outputs. We love metrics.

What do I think about success metrics? I haven't really talked about it. Metrics are really hard.

By their nature, they take something and they strip away context.

"Oh, I'm going to strip away everything that happened in an incident to an MTTR (Mean Time to Recovery) number. Okay, you recovered in five minutes. Good. You recovered in six hours. Bad."

There's so much more to that story, but it strips it away. And it now becomes super easy to understand.

What it is, is also misleading, if you don't understand that you've stripped away all this context.

MTTR — like the DORA (DevOps Research and Assessment) numbers made it famous — but there's a lot of research that shows it's not actually a very useful thing to base decisions on. And the reason why is there's so much noise in that number. It's just not normally distributed. It's so out of whack that you can't really see improvement that well. So things could look like they're going better, but they're not actually going better because of your decisions. It's because there's so much random variation that sometimes they go better, sometimes they go worse.

So I'm naturally cautious with metrics. They're still useful, but you need to take them with caution.

So I prefer metrics that I can fail by.

What does that mean?

I think of a metric like: how many people are using my platform? How many people are logging into my platform?

If no one is logging in, I promise you I'm not doing a good job. If you're not logging into any of my platforms, I am failing.

However, if you're logging in tons, am I succeeding? Like maybe you have to log in so often to do the thing that you want to do that's actually really annoying. Like maybe I'm getting lots of logins because that's the only way — you had to log in six times to create that one alert.

That's not me succeeding. That's me failing as well.

So again, I prefer metrics that I can fail by. I'm not boasting about my login numbers, but I am tracking them — because if no one in those teams are logging in whatsoever, I know that's a problem. But I don't know it's a success.

So yeah, that was my bit of bonus content.

I'd like to say a massive thank you to the organisers. Like, coming from academic science, it's amazing — this kind of conference and how they do it. Like how they make it so accessible and giving the speakers money, and stuff like that. It's so unusual. It's really, really cool.

Massive shout out to my wife and my kids. Whenever I give a talk and I get nervous, I always just think of people that don't care if the talk bombs and they won't think any different. And when you have a two and a five year old, I promise you they do not care if this talk bombs whatsoever.

And all the people who still teach me and taught me a lot.

And I'll give a special shout out to Danesh here, who I think he must have heard this talk like six times and yet still sat here and heard it a seventh time. So thank you very much, Danesh. I appreciate it.

Cheers!
