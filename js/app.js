function clipboardCopy() {
	var copyText = document.getElementById("email");

	copyText.focus();
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	try {
		let successful = document.execCommand('copy');
		let msg = successful ? copyText.value : 'unsuccessful';

		console.log(msg);
	} catch (e) {
		console.log('unable to copy');
	}
};