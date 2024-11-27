export const decodeHtml = (htmlText: string) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = htmlText;
	return txt.value;
};
