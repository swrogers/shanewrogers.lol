export default {
	tags: ["photos"],
	layout: "layouts/photo.njk",
	permalink: "photos/{{ title | slugify}}/",
};
