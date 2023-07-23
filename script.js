function getFormvalue() {
    //Write your code here
	const first_name=document.getElementsByName('fname')[0].value;
	const last_name=document.getElementsByName('lname')[0].value;
	alert(`${first_name} ${last_name}`);
	
}
const submit_button=document.querySelector('input[type="submit"]');
submit_button.addEventListener('click', function event()
{
	event.preventDefault();
	getFormvalue();
	
								   
})

