const data = null;

var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://irctc1.p.rapidapi.com/api/v2/getFare?trainNo=19038&fromStationCode=ST&toStationCode=BVI');
xhr.setRequestHeader('X-RapidAPI-Key', 'edec363200msh7c4fe37a67acfacp138979jsn51d5211f3c53');
xhr.setRequestHeader('X-RapidAPI-Host', 'irctc1.p.rapidapi.com');

xhr.send(data);