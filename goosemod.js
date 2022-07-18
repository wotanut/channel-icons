let style;

export default {
	goosemodHandlers: {
		onImport: async () => {
			style = document.createElement("style");
			style.textContent = `@import url("https://raw.githubusercontent.com/wotanut/channel-icons/main/channelicons.theme.css");`;
			document.head.appendChild(style);
		},

		onRemove: async () => {
			style.remove();
		},
	},
};
