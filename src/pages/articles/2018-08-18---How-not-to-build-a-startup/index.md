---
title: "How (not) to build a startup"
date: "2018-08-18"
layout: post
draft: false
path: "/posts/how-not-to-build-a-startup"
category: "Bootstrapping"

description: "The story about importance of research and idea validation. The story about how I ignored everything I new about startups. The story about how it worked out in the end."
---

### This is the story of how I built FeedBear. It's my first real project I take seriously as a real business. I can’t say that its start was unusual, but I would 100% advise not to repeat my mistakes.

![sunset.jpg](./sunset.jpg)

_Beautiful sunset in Ko Lanta, Thailand_

It has become a common practice for founders to write about their journey of how they built a product. How they got that first customer. Sprinkle some missteps here and there to keep it real and interesting.

This story is different. My path was different. I did many things wrong. Yet despite that, **I still managed to build something useful** and get that first, happy, paying customer. That was the one thing I did well for sure.

## Knowledge is important, but it's not everything

The name of my college's masters program I studied was "Service science". That included marketing, sales, business, finance, everything. I've read many books about startups, endless medium articles, blog posts, success stories, failure stories, you name it. All this indicates I should be as ready to build something useful _the proper way_ as I can possibly be.

But that doesn't mean I followed that advice.

Having all that knowledge in my head – when it came to action – didn't seem to matter. I guess I need to experience things myself and come up with my own recipe for success. To learn from my own mistakes was always the way for me.

Now, there are two angles we can look at this. The first is _"Look! You can succeed even if you don't know what you're doing!"_. And the second is the _"Let's all try to learn from my mistakes"_ one. **I'm going with the second one**. If you're anything like me, you won't apply what you learn here on your first try. But it may at least help guide your decisions down the road.

## The not so lean startup 🐖

Everybody knows what is the lean way to build businesses. How you should have customers waiting with the money at your door before you even write the first line of code.

So I built a quick landing page, sent it to some people and got a positive response. There was no selling involved, no price tag attached. The responses were somewhere along the lines of _"Yes, I totally need this."_, or _"I needed this so bad I built it myself!"_.

You can imagine how this was completely enough for me to start building FeedBear. My plan was to create the most basic version and get some beta users to grow it further. That sounds like a good plan, but my definition of _"the most basic version"_ started to shift as I worked.

I'm sure you can relate to this. You think of a possible feature. You think about it more. After a while, it grows into **THIS IS ABSOLUTELY ESSENTIAL, MY PRODUCT IS GARBAGE WITHOUT IT**. And don't even get me started about when you find out that your competition has that feature. It's simply not possible to escape the maze then.

I always felt that simple 'MVP' is not enough. The idea of MLP ([Minimum lovable product](https://medium.com/the-happy-startup-school/beyond-mvp-10-steps-to-make-your-product-minimum-loveable-51800164ae0c)) feels much better. That may be the reason why it was hard for me to decide what features were necessary for the initial product.

> "Build a product that completes ONE user story and does it well."

**Actionable takeaway:** Build a product that completes ONE user story and does it well. You must solve a real problem for your customer and it should leave them asking for more. Take your time with that one task. Everything else can wait.

For FeedBear this was completing the feedback loop:

1.  Letting users leave feedback easily
2.  Showing that feedback in an organized fashion to a manager
3.  Allowing them to update their customers with progress on their ideas

This was not a small feat and it took about two months to do. Obviously, being me, I slipped a few extra features here and there. Some of them harmless – like comments. Some ended up delaying the whole project significantly. For example custom subdomains. Managing a multi-tenant app is not fun and it will introduce extra bugs – avoid if at all possible.

## The competition 🤺

The fact that I'm writing about the competition this far in the article means something by itself. My competition research was very weak. Googling "feedback management tool" gave me mostly bloated enterprise solutions. I took that as a positive sign ("I will build a Trello to a bunch of JIRAs!").

So I got to coding. As I progressed, I talked about it with my friends who would send me links to competition. But not the ones I found by googling. Small products doing pretty much the same thing! I started to be concerned. Am I building something useless?

See, this is the kind of situation everybody wants you to avoid. All those medium articles and all those books. It's not a good feeling. I decided to finish what I started anyway. So what it's not an original. I will figure it out. I definitely won't be the first one.

If you're reading this, FeedBear is out in the wild having paying customers. I certainly don't defend my lack of research, but my confidence is slowly rising. I listen to my customers a lot and this alone can influence the product in a very unique way.

> "Originality is overrated. At least in the beginning, focus on providing value. Differentiation will come from truly serving your customers."

## The stack 🥞

I wasn't planning on writing about tech in this article. But I know you want to know. I know I would. So here it is.

**Backend:** Ruby on Rails. That's what I'm the most comfortable and productive with. Don't try new tech you know little about on serious projects. I was tempted but I'm thankful I was able to resist.

> "Don't try new tech you know little about on serious projects."

**Frontend:** Vue. In an interesting setup (in my opinion) that essentially replaced jQuery (and that whole ecosystem) for me. Vue is very easy to work with. I may write about this in a separate article – let me know if you're interested.

**Other:** PostgreSQL database (multi-tenancy via schemas). Hosting on Heroku. Emails from the app via SendGrid templates API.

## The result (for now) 🎉

I don't know if I consider FeedBear fully launched. I have yet to post it on Product Hunt. The post on Hacker News went mostly unnoticed. I posted it on Beta List, though (which invited more spam in my inbox than clicks – maybe I did it wrong?).

I'm definitely lacking a network that would see the stuff I'm making. This post is a start of building one.

As I'm writing this, FeedBear has two paying customers. One is an app having over 1 million downloads on Play Store. I'm also adding some features to make the whole experience more complete.

Intercom integration is a big one with two huge benefits. First, it allows customers to provide feedback in a familiar way without leaving the website or needing a separate account. Second, being in their App store brings new leads every day.

> "Integrating with popular tools gives you stable exposure in the beginning."

## The future 👀

In the nearest future, I want to finish the onboarding and launch on Product Hunt. I have no expectations, but I'm also excited.

I'd also love to do a deal on App Sumo, so if you can introduce me to somebody there, I will be eternally thankful.

If you want to follow updates about FeedBear and my thoughts about business and life, please subscribe below. See ya!
