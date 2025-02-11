---
title: And Now For Something Different
date: 2024-04-29T15:29:44-05:00
permalink: posts/{{ title | slug }}/
tags: [rambling]
---

Ah and now for something (not so?) completely different! For those of you who have been following along at home - which, I suppose, would really just be me, myself and I - I've made some changes to the site.

No longer is the static site based on Eleventy Duo. Welcome, instead, to [eleventy high performance blog](https://github.com/google/eleventy-high-performance-blog). Being a tinkerer does at times really, really suck. Never being happy or content with the way things are on the old blog.

The change actually went a lot smoother than I was anticipating it going. I cloned the new template to a clean directory. Made the changes that I needed to make to it (at least, started them - I'm sure more will come). Renamed the remote origin and added a new remote origin. Then, over in my now old and stale github repo I renamed the 'main' branch, added a new 'to migrate' branch, then went back to the new template and did the ol' something of a force push to the new branch on my static site repo.

Once that was done, I had to rename the local and remote repos back to main and set the new default branch.

Thankfully, things still just worked after that! Had to make a single change to the emacs org capture template to ensure the directory for the posts was good...now, I think we're golden.

Or at least a decent shade of pale yellow.

