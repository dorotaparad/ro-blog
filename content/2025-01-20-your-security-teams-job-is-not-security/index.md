+++
title = "Your security team’s job is not security"
category = "security"
[extra]
canonical = "https://authress.io/knowledge-base/articles/2025/01/20/your-security-teams-job-is-not-security"
+++

There is a very common misunderstanding in tech that I keep running into. Many people believe that a person hired by their company who has “security” in their title is there to ensure that your software and operations are secure. It’s especially heartbreaking to see new graduates who studied the topic and are looking for their first job in cybersecurity, full of hopes that they’ll get to fight the baddies, make things better, or at least make sure that software engineers are doing things properly.
The truth is, when a company hires a CISO and invests in a security team, those people’s jobs have nothing to do with security. They are there to ensure **compliance**. It’s a very important job, but a rather different one from what the name implies. In fact, compliance and security are often at odds with each other.

So what is the job of a CISO and the security team they may be in charge of?

## The job of a CISO ##
No matter what the PR release may say, companies hire a C-level security person for one reason only - to ensure compliance with whatever security-ish requirements may be imposed on the business. Compliance in security boils down to convincing some third party authority that your company is doing a good enough job minimizing security risks. It’s important to highlight two things here: it’s not about the job being perfect, but merely good enough, and it’s not about eliminating the risks, but merely minimizing them. And, to be cynical, it’s not even about doing these things but rather convincing the stakeholders that you are. Hopefully it’s clear why we see so many cases of security theater out there.

Putting the cynical view aside, the job of a CISO is really to craft a convincing narrative on how your company minimizes security risks. People to be convinced are usually associated with an external third party, which can fall in one of three categories:
* Certifications (ISO 27001, SOC2, etc.), which are there to signal to other businesses that your company does good enough job minimizing security risks; these are represented by auditors
* Regulations (GDPR, CCPA, etc.), which are there to protect the rights of end-users in the absence of business incentives to do so; these are represented by respective government officials
* Insurance companies (usually cyberinsurance) - a discount on premiums may be contingent on companies’ security posture; represented by insurance sales people

As you can imagine, the stakeholders I’ve listed above have no idea about the specifics of your business. They also tend to have limited knowledge of software and technology in general. And your poor CISO needs to convince them that your company sufficiently minimizes security risks. It’s a tough job!

## Security team’s dilemma ##
Since security teams get created to ensure compliance, which is all about creating a convincing security narrative for non-technical, external stakeholders, you’d imagine they would be composed of people good at communication, or at least great at writing. But it is rarely the case.

A lot of people working in security, and especially those bright-eyed new graduates joining the profession, do so because they love the idea of good security. They may be motivated by thinking about all the threats and ways to thwart them, or by laying down a foundation to do things “correctly”. Regardless of which flavor of cybersecurity these people are drawn to, almost no one gets into this discipline by thinking “wow, I really want my job to be maintaining paperwork and ensuring adherence to corporate procedures!”
People who are motivated by the latter end up as auditors rather than security professionals. As a result, we have a large number of professionals who want to, and often believe they should, do one thing but are instead paid to do something completely different. It’s no surprise they would face pushback.

There may be pushback from senior business leaders, who may not understand why should the company spend money or effort to implement this particular protection strategy over this other one which seems much simpler to grasp (and usually involves simply paying six figures for a specific tool).
There may be pushback from other employees, who don’t want to do any extra steps or change any of their well-established procedures, and who are under pressure to deliver whatever their department is paid to do.
There may be pushback from the tenured people in security organizations, who are comfortable with the status quo and may have strong attachment to “how we do things around here”.

It can all be disheartening.

Now imagine you’re a CISO, by nature a very specialized role, yet your organization is entirely separate from the structures where the actual work happens: the IT, software development, operations. You may have a passion for security, but all your company cares about is the optics. You have to make your company look good in front of people who care nothing about your business model, have no understanding of modern technology, and don’t even know what security is. It doesn’t exactly look like a dream job, does it?

## Compliance at the cost of security ##
Crafting a convincing narrative about a deeply nuanced, technical topic for people who don’t care about nuances and have limited technical knowledge requires finesse. If you also want that narrative to come with actual security practices that are fully integrated into your company’s daily operations, then that’s a whole other level of difficulty. It’s one that is far beyond the scope of compliance. Why bother then? It is tempting to optimize for the ease of audits. It is even more tempting to just blindly copy whatever someone else did that got them to pass their audit, even if what you’re copying doesn’t make sense in your situation.

This is why so many businesses leak their customers’ data, get infected by ransomware, suffer random downtimes for unexplained reasons (if you don’t look, you don’t see; if you don’t see, you don’t have to report it) all the while having a fully staffed security team and investing over [13% of their IT budget](https://www.iansresearch.com/resources/all-blogs/post/security-blog/2024/09/05/2024-security-budget-benchmark-report--key-findings) in security.

The truth is, lazy compliance is often at odds with actual, proper security. The sad part is, in the industry today, the vast majority of compliance is of the lazy kind.

The certification auditor doesn’t understand modern cloud technology? Instead of relying on cloud provider’s built-in security, which you get almost for free but which may be difficult to explain, your security team decides to go old-school and locks down access to corporate resources by only allowing specific IP addresses to connect. This means you need VPN. Some time later, [hackers are happily using](https://techcrunch.com/2025/01/09/hackers-are-exploiting-a-new-ivanti-vpn-security-bug-to-hack-into-company-networks/) your “secure” VPN client solution to gain access.

Struggling to explain how your zero trust architecture makes endpoint protection obsolete? Instead of spending effort to document your reasoning, your security team decides to install spyware on all your employee machines. Some time later, spyware has a bug, [now none of your machines boot up](https://en.wikipedia.org/wiki/2024_CrowdStrike-related_IT_outages). Or perhaps your “secure” spyware provider was hacked again and all the [data from your devices got wiped](https://securityboulevard.com/2024/08/mobile-guardian-hacked-again-richixbw/). Or that tool that was supposed to [prevent credential theft gets used by the attackers](https://techcrunch.com/2024/12/27/cyberhaven-says-it-was-hacked-to-publish-a-malicious-update-to-its-chrome-extension/) to do precisely that.

You may argue that no software is bug free and any software can get hacked and that is no reason not to use security tools. I agree. But the risk that these tools mitigate better be much greater than the inherent risks coming with the tools themselves. In a lot of cases, that equation doesn’t check out. In a lot of cases, no one even does that sort of analysis, because the job is not to actually minimize the security risk but to convince the third party stakeholders that the company is doing so. And if the company is paying six or seven figures for the cause, that surely must be sufficient, isn’t it?

But it’s not just about using paid tools as shortcuts. Lazy compliance can lead to other contradictions. Here’s my favorite quote from last year (the person asked to remain anonymous for obvious reasons, but it’s not some obscure tiny company):

> *“So a ‘senior IT security engineer’ in my company wants me to email credentials for an internal system to some external penetration testers.* <br/>
> *I confirmed with him via chat and even got on a phone call with him and as far as I can tell it's a genuine request but I can't tell if I'm being trolled right now or not.”*

So if your security team’s job is not security but simply compliance, then whose job is it to make sure your company’s software systems are secure? The cynical view would be - it’s no one’s job. Businesses routinely ignore security in favor of compliance, meaning security isn’t valuable enough to make it anyone’s job. But considering that the global number of successful attacks increases year over year, and the insurance companies are getting more assertive on what sort of losses they cover and when, ignoring actual security is not sustainable in the long run. So whose job is it? I’ll let you answer this one for yourself.