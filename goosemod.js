let style;

export default {
	goosemodHandlers: {
		onImport: async () => {
			style = document.createElement("style");
			style.textContent = `@import url("https://raw.githack.com/Controlfreak707/Channel-Icons/main/channelicons.theme.css");`;
			document.head.appendChild(style);
		},

		onRemove: async () => {
			style.remove();
		},
	},
};
