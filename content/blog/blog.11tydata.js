export default {
	tags: ["posts"],
	layout: "layouts/post.njk",
	permalink: "posts/{{ title | slugify }}/",
};
