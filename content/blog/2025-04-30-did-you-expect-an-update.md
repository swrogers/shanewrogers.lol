---
title: Did you expect an update?
date: 2025-04-30T12:03:06-05:00
tags: [journal,100DaysToOffload]
---

The title of this particular entry, *Did you expect an update?*, is kind of a funny one to me because of some recent experiences that we've been having with a certain vendor at work.

Working with vendors and being at the mercy of their support system - or lack thereof in some cases - really kind of sucks sometimes. We've got a handful of them that we have to deal with on a daily basis and some of them are certainly better than others. At least they are before they get bought up by an even larger suckier vendor.

One of our products is *SaaS*, *IaaS* and all that jazz. It's great when it works, not so much when it doesn't. Naturally there aren't a whole lot of logging options on these things, so we kinda just have to roll with the punches on what can be done.

This particular product has been having some intermittent, very challenging to replicate, user presentation issues. Not widespread, yet, but who the heck knows when that could happen. We decide to open up a support request. We send them the only logs that I can grab - stuff from tailing the systemd crud generated from their application we use as a bridge. These definitely show some communication issues. But again, only intermittently. Usually our people are able to wait and refresh and have things "fixed".

I'll not go into the ordeal that ensued...but good grief it was weeks of back and forth. Eventually, after no updates from their end for quite some time (they had actually determined the problem to be a bug on their side, go figure), they patch one of our development instances. Of course, I was out when this happened and we were unable to respond and test for the last portion of that week. Then there is the weekend. Then I've got a Monday to play catch up with everything else that happens. So I didn't get to check the status Monday.

Tuesday I go to check on it. They've closed the request. We were not stoked about that. Not even a "Hey, we're getting ready to close out your request" email. Remind, it's perfectly okay for *them* to go a week or more with no contact. We fire off an email to our contact rep, then I call support. Fortunately it was not too challenging to get it re-opened. Just far too many hoops to jump through.

After that, we request that they send the patch to our main testing instance.

"Well, we've just bundled that up into the next big overall patch that will be pushed so you'll get it then." Fine. Just don't close the damn support ticket until after that, which doesn't happen for a week or so.

Guess what they attempted to do? I'll give you three guesses and the first two don't count.

At least this time I did receive an email letting me know that a solution had been offered. The hell it was, I think. We haven't even had the chance to **test** the patch since it's not been patched at this point. FFS.

So, yeah. They kind of expect updates for absolutely no reason whatsoever. I'm tempted to update the damn thing on the daily just for shits and giggles. I'm not, though.

I do imagine that for those of you out there who deal with vendor support probably have similar experiences. It is what it is.

And yeah, I know that none of you actually expect an update from me.

This is post 86/100 of my #100DaysToOffload posts. You can read the other posts in this series [here](/tags/100daystooffload).
