console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully');
}
let cat = document.getElementById('beerus');
beerus.addEventListener('mouseover', function(event) {
	alert('we can smell you, and we like what we smell');
})

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);