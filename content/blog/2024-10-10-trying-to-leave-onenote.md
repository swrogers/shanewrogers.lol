---
title: Trying to leave OneNote
date: 2024-10-10T10:21:38-05:00
permalink: posts/{{ title | slug }}/
tags: [journal,100DaysToOffload,emacs,orgmode]
---

This particular post is most likely just going to be of interest to future me, though some others may find some information of use.

As my place of employment is a Microsoft shop, we use a large number of Microsoft applications. Personally, I'm not really a major fan of some of these apps so I like to look for good alternatives.

Fortunately, I have grown used to being in the WSL environment and Emacs in particular.

Historically I have been using OneNote to keep track of, um, notes and tidbits and whatever else one might want to put into a notebook. It has worked *just fine* but I don't like the fact that I don't have a lot of control over the format. I've kind of grown fond of just using text, and have been attempting to integrate Emacs' org-mode into more of my workflow.

(I would love to say that I'm using org-mode for this blog, but alas, I am not - although it **is** plain markdown.)

I recently came upon a tool that caught my interest, the [OneNoteExporter](https://github.com/alopezrivera/OneNoteExporter "OneNoteExporter by alopezrivera") PowerShell script from **alopezrivera**. Easily enough installed into my Windows 11 laptop, it only really required pandoc as an additional requirement. 

Once I had the configuration file tweaked to my liking, I fired the script off. Of note, the powershell script needs to run at the same user level elevation as the currently running OneNote application. Also, a temporary script bypass may need to be run in powershell in order for the process to succeed: `Set-ExecutionPolicy ByPass -Scope Process`

There were a handful of errors at first, which were similar [to this issue](https://github.com/alopezrivera/OneNoteExporter/issues/11). I was able to make the same edit as suggested and those problems were resolved.

The next stumbling block that I came upon was the large amount of screenshots and images that I had in my OneNote notebooks. Those were not being exported by the pandoc process. As is normal within the world of the internet, I [was not the first person to have this problem](https://github.com/theohbrothers/ConvertOneNote2MarkDown/issues/183). One thing that I most absolutely *did not* want to have to do was re-save all of those images in another format, **or** copy and paste the pages themselves into a new page - both of which were suggested as possible solutions. Thankfully, a very simple solution was found by another user [in that OneNote needs to download all files and images before syncing](https://github.com/theohbrothers/ConvertOneNote2MarkDown/issues/183#issuecomment-2343708831).

With that issue taken care of, everything was golden, right?

Mostly. 

I still had to go through and add the proper filename extension to all of my fresh org files. Still haven't figured out why that was, but it was easy enough with emacs and wdired mode.

Now, with my work related notes over in org mode and copied up to the work OneDrive I should be ready to roll.

I hope.

This is post 45/100 of my #100DaysToOffload posts. You can read the other posts in this series [here](/tags/100daystooffload).

