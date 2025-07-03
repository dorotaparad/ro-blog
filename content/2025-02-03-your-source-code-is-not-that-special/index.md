+++
title = "Your source code is not that special"
category = "security"

[extra]
image = "test.jpg"
alt = "This is a test image and bears no relevance"
+++

Whenever the topic of protecting developer machines comes up, I find myself dismantling the same fallacies over and over again. One of those fallacies goes like this: we must protect our source code! So far so good. Protecting your source code makes sense. But then it turns into: our source code is precious! It is our Intellectual Property! And then: our precious source code is on developers’ machines, we must do everything in our power to protect these machines! And that’s a fallacy.

It turns out, your source code itself, that treasured IP, is really not that special. Let’s think about it for a moment.

How much of your code is truly unique and innovative? How much of it is copy/pasted from Stack Overflow? How much is done by third party libraries you depend on? If you were given a chance to start from scratch and completely rewrite all your company’s software, how much of the end result would look exactly like your today’s code? (Ignoring, of course, those few who would jump at the opportunity because they haven’t yet had the privilege of spending countless years doing a migration project…) Unless you’re working on developing something new at the already cutting edge of software technology, your code is largely a glue holding various common pieces together. There aren’t many companies out there that have some secret sauce hidden in their code, and even if they do, that secret sauce is a tiny fraction of the whole code base.

Here’s a thought experiment—Imagine that your source code suddenly goes public. What is the worst that would happen? Would some indie hacker just copy it and spin up a new business just like yours to become your biggest competitor over night? Or what if it is your biggest competitor getting access to your code? Would they go “ah-ha!” and replace their code with yours? Spoiler alert: no engineer I’ve ever worked with has had the thought while looking at someone else’s code “Wow this is great, we would never be able to write this better.”

If exposing your source code was such a catastrophe, how do we explain all these software companies who make their code available to the public? [Multiple very successful businesses](https://en.wikipedia.org/wiki/Open-core_model#Examples) nowadays operate under that principle and chances are the company you work for is paying for some of them. It’s worth noting that most of the open-core or source-available software is not simple nor does it solve some trivial problem. Yet all these companies are doing well, commercially.

These days, the code is rarely the source of competitive advantage. And if it is, it’s not down to how well or clever it’s written. What matters is how you position yourself in the market, how you acquire your customers, how you retain them, and how you convey your value to the customers. What also matters is your pricing model, your operational efficiency, your margins, and how well you control the cost over time. Notice how these have very little to do with the code you’ve written? As a matter of fact, the code a company writes is a result of those exact strategies. Even if we look at the software itself, there are multiple other factors about it that are more important than the source code. Are there bugs in production? How often and how quickly do they get fixed? How easy is it for a customer to get help when something isn’t working? How easy is it to get started and onboard new users? How reliable is your software? How often do you leak your customers' data and do they care?

The true value of your code is not the source, but rather how well it supports the business model, how it’s operated and how it runs in production. And of these three, the most crucial bit is the latter - your source code running in production. That is the only thing truly worth protecting. So that code on your developer machine? Who cares.