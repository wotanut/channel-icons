let style;

export default {
	goosemodHandlers: {
		onImport: async () => {
			style = document.createElement("style");
			style.textContent = `@import url("https://v-briese.github.io/channel-icons/channelicons.theme.css");`;
			document.head.appendChild(style);
		},

		onRemove: async () => {
			style.remove();
		},
	},
};
