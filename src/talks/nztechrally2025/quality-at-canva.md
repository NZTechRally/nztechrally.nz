---
event: "NZ Tech Rally 2025"
speaker: Mark Hrynczak
speakerKey: mark-hrynczak
talkTitle: "Transformation at scale: tactics and implementation for levelling up our deployment process"
talkExcerpt: " 
<p>Over the past year, I’ve led a program to eliminate manual regression testing and accelerate deployment velocity at scale—over 2,000 engineers. This shift required tackling complex testing workflows, third-party integrations, and cultural change, making developers responsible for tests.</p>

<p>In this session, I’ll share key strategies for securing buy-in, coordinating across teams, and maintaining momentum. Attendees will learn how to drive large-scale change through stakeholder alignment, soft power, and effective program management.</p>
"
featuredImage: /assets/images/talks/2025/quality-at-canva.jpg
featuredImageAlt: "Mark's picture with text: NZ Tech Rally. Transformation at scale. A Talk by Mark Hrynczak, Head of Quality @ Canva "
featuredImageType: image/jpg
featuredImageWidth: 1280
featuredImageHeight: 720
talkRecordingID: eAchRbuYVk4
---


So, good morning everyone. Thanks for coming. I'm Mark, as Marcus said, and I'm here to talk to you all about driving a transformation at scale.

So again, Canva — it's a design software company with some big goals. Some of these goals are around enabling users all around the world — different languages, different locations, different use cases. We support small businesses, large enterprises, individual designers, students, teachers, and many more.

To realise the goals that we have, one of the most important things to the business is speed. You know, these are some of the charts representing what it's like to work at Canva. We see massive growth in lots of different numbers, and operating at speed is really hard as you grow, as you scale.

A lot of the numbers that I work with — the charts, like these S-shaped charts — are around the number of users we have, the volume of data we deal with, the rate of engineers making changes to the codebase, the number of features we support, and the number of use cases we have to care about when it comes to quality and testing.

So, in an environment like this, processes inevitably slow down — or, not inevitably, but processes will slow down as complexity increases, unless we're actively seeking to identify, improve, and remove those sources of friction.

My job is to be across quality — but it's not just solving quality problems. The highest-level goal that I have is: how can we go faster and faster? Improving dev speed, improving the way we ship features, without risking or reducing quality.

And when it comes to automated testing — which is what I'm talking about today — I have a really strong opinion. The key value proposition of automated testing is not so much preventing regressions. It's about enabling dev speed — enabling developer teams to go as fast as possible, safely. They know what they're doing, they have confidence in the safety net that exists, and they can commit code, go to production, move on. That’s what we want to happen.

So, when I started on this project, our release process looked kind of like this: it was in a pretty good state. It was stable, it was predictable, we were successfully deploying to production every single day. We had strong CI, we had reliable automated tests, we had that daily schedule going — so things were pretty good from many aspects.

But there were gaps in the automation coverage, and those gaps were filled by a manual regression testing phase. Our releases would go through the CI process, the builds would all be green, they'd get deployed to a staging environment, and then we'd hire — we'd contract with an outsourcing company to run a battery of scripted manual tests. The same tests. Regression testing the same features every single day. And when those tests were complete, we would be ready to deploy to production.

So this is probably familiar to a lot of you here — it's a fairly typical setup. And my challenge is also fairly typical: how can we speed up this process? How can we release more often? How can we do deployments in a better, faster way?

The blocker for going faster is that manual testing phase. And the cost of doing manual testing, from a dollar point of view, is fairly low — like, we're not spending much money. Contractors, outsourcing — it doesn't really cost that much in the scheme of things. So we weren’t looking to save dollars.
But the cost to speed was really high. That necessary step of running manual tests took half a day or more in the process. It blocked our path to more frequent deployments.

So the way forward was pretty clear: we needed to eliminate manual testing from the release process.
And something I really want to be clear on here — we're not looking to remove manual testing as a concept from the company altogether. It's still really important to have humans interacting with the new features you're building, making sure that they are functional, that the UX is good, that they do what the humans expect them to do. That’s a key part of the development process at Canva.

But repeating the same scripts over and over again, every day, on every release, on older features that haven't changed? That’s not where we’re adding value. That’s not where humans are useful in the process.

So automation is clearly the answer here. You should be automating those regression tests, not having humans run them. That was a key opportunity for us to improve the way that we deploy, improve the dev speed, improve the rate of deployments — by building automated solutions to that manual testing process.

But also by driving process changes and cultural changes across the company: the way we approach automated testing, the way we approach manual testing, and that high-level goal of speed.

The simplest thing to do? Delete the manual tests, replace them with automation. Easy.
But — the manual tests, we couldn’t just delete them. They were testing important user flows. Critical user flows in complex areas where it’s not easy to write automated tests.

With design software, we’re looking at scenarios like visual content, video content, supporting different mobile platforms, and lots of third-party integrations. These are complicated problems — genuinely hard to automate.
But a large number of the tests weren’t that complicated. They were just easier to write manually than as automated tests at the time they were written. In some cases, the reason why we had manual tests was just lack of attention. They were written to meet a deadline. They were written to go fast — but they weren’t necessarily the best way of doing things.

So, our first step was to really understand the reasons why manual tests existed, see whether those reasons were still valid, and then build solutions to those problems.
Some of the challenges were technical — we just didn’t have a framework that supported the scenario that needed to be tested.
Sometimes, it was lack of knowledge. Team members didn’t know the best way of doing testing. They didn’t have the experience, they didn’t have the expertise.

Often, it was just a factor of tight timelines. The team knew automated testing was the right thing to do — the pragmatic way forward. But writing manual test scripts was just easier, faster, and allowed them to meet tight deadlines, even if it meant long-term ongoing cost.

And finally, sometimes it was just inertia. The tests were being run every day by an outsourcing company. So once we had written them inside the company, we kind of forgot about them. They were just there. They ran day after day. We didn’t interact with them. We didn’t change them. They weren’t necessarily testing what was most valuable anymore — they were testing something that was valuable three, four, five years ago.
So, they were not providing much value. But we didn’t have a driver to review, revisit, or improve. They just… existed.

So now, at this point, we have a pretty good understanding of the journey ahead of us — the problem to solve. But the question is: how do we do that? How do we fix it across a system that is large and complex?

The codebase has more than a hundred different components, owned by different teams. The dependencies are deeply interconnected. And the testing? It’s covering end-to-end scenarios — complex steps, complex journeys through the product, covering lots of different visual, audio, and video-type content.

The stakes are also really high. We have more than 200 million active users all around the world. And if we break something — if something breaks — the cost is reputational and operational, and it could potentially be massive.
So, if we removed the manual tests, and as a result we shipped a high-impact bug — that would be the opposite of success for our project.

The other reason why the complexity exists is because all of these teams want to deploy to production on their own schedule. They want to make a change they’re confident in, ship it to production, get their results, and iterate on that as fast as possible.

But they couldn’t do that. They all relied on this manual safety net. They all relied on this daily process. Even if they didn’t have manual tests, they still had to go through the wait — 24 hours on staging, lots of testing, get the green light — before their change could go to production.

So, the vision is not just “remove manual regression tests” — that’s almost the easy bit. The real goal was to enable independent deployments across all teams, and to do that in a safe, reliable way. Teams being able to ship at their own pace, not being blocked by shared release gates.
To do that, we needed to identify, classify, and remove the reasons why the manual tests existed — not just the past reasons why they were written, but also the reasons why we were still writing them. The reasons why we would write them in the future.

From a technical point of view, we needed to:
* Build new automation frameworks to support the various scenarios,
* Remove the old scripted tests without dropping coverage, and
* Address the prioritisation and planning that goes into how teams build their work — how they approach their features and how they build their tests.
  
So the real challenge we were solving was: changing the culture of testing and quality across all of the dev teams — again, more than 2,000 engineers.
So that was the vision — pretty clear at this point.
Now, this is the structured approach of how we drove that change across the organisation. Talking about buy-in, visibility, execution, culture — and how it evolved over time.

The culture change was the most important thing.

We weren’t going to solve this by having a small team of superstars writing automated tests for everyone else — that wasn’t even an option. We wanted to solve it by making it possible and easy for all teams to own and write their own automated tests at the right time in their processes.

Teams that have the context of the features they’re building — they have the deep understanding of what their users expect — those are the teams that should be writing and owning the automated and manual tests.

So the high-level approach we followed was:
* Get buy-in for this vision — for what we were trying to do,
* Break the problem down into manageable pieces, and
* Really work on the ownership of those pieces.
We made that ownership explicit. We made it visible. We made it clear. And we gave the data to the decision-makers — made the journey ahead, and the progress we were making, visible.

My job was then to communicate around that — get the buy-in, build momentum, drive the momentum, and deliver the results by clearly defining expectations.

This played out over many months — more than a year — across several planning cycles, several org changes, and of course, the ongoing pressure to actually build and ship features.
We weren’t ever going to stop development to focus entirely on writing automated tests. That work needed to happen in parallel.

So step one was aligning the stakeholders.
We had top-level support. We had leadership buy-in for the goal of unlocking faster deployments — full buy-in.
But we needed to translate that into actual support from the teams doing the work — the engineering managers, the product teams, the engineers, the QAs — and frame it in terms of roadmap priorities they could accept, plan for, and build into their work.

We did this by talking a lot about the why. Framing it in terms of benefit for you as a development team. Like: this is something that benefits you. It helps you ship faster. It helps your team move quicker.
What we found was — in general — teams were very supportive of that goal. It’s a win-win.
But their concerns were mostly in the details. “It’s impossible for us.” “We can’t do that because of this reason… or that reason.”

So we really listened to those concerns — especially when someone said it was impossible to automate a particular scenario. Our job was to make it possible before we could ask teams to commit to the goal.

Step two is about ownership.

Our model at Canva is that all feature teams are accountable for the quality of the work they do — the features they own, the tests, as well as the production code. So, from the start, the strategy was that we needed all teams to buy into this and make their own decisions on the way forward to realise the goal.
In many cases, that just meant committing to writing automated tests — the simple bit — replacing manual tests with automated ones.

But there were other options too. We offered teams different recommendations — like testing and monitoring outside of the CI loop, or breaking down ownership so that instead of end-to-end flows covering multiple journeys and components, each team would test only the parts they were responsible for.
We made it clear: every team that owned manual regression tests had some work to do. And our job, as the project team, was to support them in getting it done.

Part of that was just raising tickets for the work to be done. That was helpful for the teams — it gave them clarity on what was expected. And it was helpful for us as the project team, because we could track how we were doing — the progress we were making, the work that was flowing through, and the work that was getting stuck.
We were able to offer guidance, tools, and new frameworks to help teams follow through. Our job was to make the path clear — and then unblock that path, so that they could move forward.

Step three was around data and dashboards.

Building the dashboards was possibly the thing that accelerated progress the most. Showing the data, breaking it down by team, by department, by leader — so that everyone knew where things stood. Everyone could understand the work to be done, the volume of it, but also who was responsible for doing it.

And just by providing that data to decision-makers — making it visible to teams — it encouraged them to take action. In many cases, they corrected ownership. They updated the tests to be more valuable. They removed tests that were no longer needed or had become obsolete.

In many cases, teams came to us and said they didn’t even know they owned these manual tests. They didn’t know they existed. They weren’t providing any value.
So giving them the data, the dashboards, putting it in front of people — that sparked action. It got the ball rolling.

As time passed, my job became more about tracking progress, celebrating wins, and sharing with stakeholders how we were doing.

We spent a lot of time syncing every week — looking at the data, identifying blockers, and sending out comms to the business. Repeating and emphasising the message:
* Why we’re doing this,
* Why it matters,
* What needs to happen, and
* What the expectations are — all backed up with charts and visuals.
  
We used company meetings. We used Slack channels — especially when delivering something new and exciting like a framework that allowed us to test something previously complicated.

We also used personal networks — regular catchups with people who had responsibilities. We sought their support, flagged concerns, and kept visibility high.
We celebrated the small wins and tracked incremental progress, but we also identified challenges and leaned in to help solve them.

There was a bit of a game aspect to this too.
Often we celebrated the teams making progress — but in a subtle way, we also put pressure on the teams that weren’t. Because we had charts. We had leaderboards. And nobody wanted to be at the bottom of that leaderboard — the one not making progress toward the shared goal.

Our goal wasn’t just to solve the immediate problem, or build frameworks, or move tests. It was to change the culture going forward. To make sure test automation was seen as an important, valuable goal for everyone. And to discourage the quick-win solution of just adding a new manual test as a crutch.

So how did we do that?
First, we set up a notification rule in the codebase so that every time someone added a new manual test, we got notified. We knew it was happening and could go talk to them and understand why.
Over time, that alert turned into an approval step. We said, “If you want to add a manual test, you need to talk to us first.”

Eventually, that evolved into strong guidance: adding new manual tests is no longer permitted. We left room for exceptions — and if a team came to me, we were open to a conversation.
But interestingly, no one asked for exceptions. Teams adapted. They found a new way of doing things — using automation, monitoring, or other solutions to get the coverage they needed.

The biggest challenge I faced wasn’t technical. It wasn’t resistance to the goal. It was priority.
Teams had their own roadmaps, their own deliverables. They agreed with the high-level outcome we wanted, but had to balance it with deadlines and pressures.

And we weren’t top-down enforcers. We weren’t handing out mandates. We were one voice among many others, asking teams to take on meaningful — but non-trivial — work.
So we had to be respectful of that. Persistent about what we wanted. Clear about why it mattered. And we had to show that we were supporting teams — not just asking them to do our work.

Since it was a long-running project, we allowed teams space to make their own choices — to set their own schedules, accommodate other deadlines, and juggle other priorities — while still continually driving attention to this goal.

We made requests. We created tickets. We kept the discussion alive — but always let teams make the decision.
Internally, we knew we were going to remove the manual testing phase. We even had a pretty good idea of when.
But we didn’t start by telling teams, “Here’s the deadline.” Instead, we started soft — and escalated over time.
We weren’t asking teams to drop their work to meet our deadline. We worked alongside them.

On the technical side:
We weren’t writing automated tests for feature teams, but we did need to support them.
So we set up a new team — Quality Platform. Their mission: to uplift and enable other teams in automation.
That team delivered the frameworks, supported various flows, tested sound, video, mobile devices. One by one, we removed the blockers teams said made their tasks “impossible.”
We didn’t throw solutions at teams — we worked with them. We paired with them. We filled technical gaps and gave strong, confident, opinionated guidance.

Often, the issue wasn’t that the test was “impossible” to automate. The problem was that the test covered too much. It was end-to-end, covering third-party integrations, checking everything.
That’s fine for manual testing — you can do that. But automated testing? You want to avoid brittle end-to-end flows.

You want to:
* Test in isolation,
* Use mocks and monitoring, and
* Recognise that CI is not the right place to test full integrations.
  
Test components. Test boundaries. And then trust the system-level coverage as a sum of well-tested parts.
We documented this guidance. We taught teams how to break down complex flows. We invested in getting them to adopt these practices.

Test what matters.

As a dev team, you want to prevent your own code from breaking. What other teams or third parties are doing — you can’t control that, so don’t try to test it in your CI pipeline.
Teams are responsible for testing what they own — and they trust other teams to do the same.

The feedback from teams was incredibly positive.
They appreciated the support, the attention to their use cases, the tailored solutions — and the trust to make their own decisions to meet the goal.

The final step was how we evolved the approach over time.

We intentionally used a phased strategy in how we communicated expectations.
Phase one: We asked for help. We shared data. We offered support. We gave teams space to prioritise.
In many cases, that was enough. Teams took action just because we asked — and because the data backed it up.
Phase two: We set a timeline — a target six months away. We asked teams to commit to it and tell us what help they needed.

Some made it. Some didn’t. But it helped us deeply understand their challenges and build better solutions.
Final phase: Once we were confident we had removed blockers and built the necessary frameworks — then we set a hard deadline.

We said:"On this date, the manual testing phase will be removed. If you haven’t automated your tests or found a solution, your features will go untested — and that’s a risk you own."
No flexibility on that date. But full support to help teams succeed before then.

In a few cases, we escalated to leadership — and leadership cared, because they were accountable.
That final “stick” approach wouldn’t have worked at the beginning. It would’ve been counterproductive. We had to build trust, provide solutions, and then set the fixed timeline.

My role as the leader of this change was mostly about:
* Keeping momentum,
* Reinforcing the message,
* Celebrating wins,
* Flagging blockers, and
* Staying respectful of other business priorities — while being persistent about this goal.
  
I shared monthly progress updates. I tied the program into roadmaps and delivery plans. I kept key leaders in the loop — both when things were going well, and when they weren’t.
There were curveballs. We faced surprises — things we hadn’t considered: org changes, feature ownership shifts, unexpected technical or cost challenges.

But I always came back to this question:
Can we remove the manual testing phase on time? If not — what needs to change to make it possible?
That clarity helped me make fast decisions, offer realistic projections, and get high-level support when needed.

So — what does success look like?
We measured it with data and charts.
We tracked timelines. We projected future states.
We had one chart showing the blockers we were solving — work owned by the project team.
And another showing the work teams needed to do — outside our control.

That second chart started with a scary-high number. It reflected high uncertainty. But over time, both lines moved in the right direction.
We hit our milestone of removing all the blockers.

But actual success had one very clear definition:
Zero manual tests in the release process.
That was our north star.

And while we’re not quite at zero yet — the line is approaching zero. I know the rate. I know the steps ahead. I have high confidence we’ll meet the target.

We’ve faced a few curveballs recently. Probably more ahead. But now we have a strong team, a solid process, and a track record of solving every problem thrown our way.
And once again, the feedback has been overwhelmingly positive. Teams love that we’re driving change through data, empowering them to improve code and tests they own.

So, to wrap up — here are the key takeaways from this project:
1. Capture the why. Convince people this is a worthwhile goal. You can’t drive change unless the organisation wants to change.
2. Make it visible. Use dashboards and metrics. Drive action. Give stakeholders clear progress signals.
3. Offer support. You can’t do it all yourself. Listen. Solve real problems. Don’t just tell teams what to do.
4. Make ownership explicit. Don’t centralise the work. Break it down. Help every team take responsibility.
5. Communicate and drive momentum. Keep it high level, but dig deep when needed. Reinforce the message. Respect teams’ realities — but keep driving forward.

I'll finish there — thank you so much for listening. 
And come and talk to me rest of today — I’d love to hear if you’ve faced similar challenges.

