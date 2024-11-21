---
title: 
date: 2024-11-21T15:05:11-05:00
permalink: 'posts/{{ title | slug }}/'
tags: [journal,100DaysToOffload]
---
That has been both a very long and a very busy week. 

At least it's only my four day work week.

Progress has been made in the work realm, that's probably one of the more fulfilling aspects of the week.

Earlier this year Oracle decided that they were no longer going to support the graphical interface version of their Business Integration Catalog tool, which, grand scheme of things is awesome as it's an icky, gross, Java gooey that I despise.

But, having replaced my laptop and not having kept the older version of the BI tools install setup (why, Shane....why), I had to get the newer one set up.

Which, shock of shocks, is a command line tool.

Super cool, now I can actually sorta kinda script the process. Not to mention that now report creation can be somewhat saved! We always had to manually select and click to create and run reports - now, at least, by virtue of saving the command line it's more easily repeatable.

Now, it's just all about learning the switches and fine tuning the reports themselves.

Oh and don't even get me started on getting the stupid tool installed.

I'd almost, *almost*, forgotten just how horrible that process was.

Our environments have a limited amount of *temporary* directory space. Normally it wouldn't be an issue, just make some new directory, assign it properly as as temp, set your shell environment variables and your good to go.

Sometimes you might even need to set your java options. Because, java.

But, does the Oracle installer bin file respect those environment variables?

Of course it doesn't.

Why would it.

Nope, it needed some obtuse way to let the bin file know what the `java.io.temp` (don't quote me on that one) needs to be: `-J-Djava.io.temp` (again, don't quote me). Sigh. At least I got it and it's documented.

On the personal and family side of things, tonight is opening night for the middle school musical. This year they are performing *Emma*.

The older twin has the male lead. I feel horrible that I can't recall what the younger twin has....*but*, he is the understudy of the older. So there is that. 

Supposedly the other middle school brother is doing crew - but I have my doubts as to the veracity of that claim.

I guess he'll be performing in the Spring play, though he probably doesn't realize that at this point. 

Not much else going on currently, so with that I'll sign off.

This is post 53/100 of my #100DaysToOffload posts. You can read the other posts in this series [here](/tags/100daystooffload).