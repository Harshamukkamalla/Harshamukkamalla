function emailSend() {

  let Username = document.getElementById('name');
  let Email = document.getElementById('email');
  let Subject = document.getElementById('subject');

  let Message = "Name" + Username + 
  "<br> Email" + Email + 
  "<br> Subject" + Subject +
  
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "saisriharsha442@gmail.com",
    Password : "4BD751F6E45CCA261541BA356E95A632FC44",
    To : 'mharshavardhan73@gmail.com',
    From : "saisriharsha442@gmail.com",
    Subject : "This is the subject",
    Body : Message
}).then(
  message => {
    if(message == 'Ok') {
      swal("Message Sent Successfully", "You clicked the button!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  }
);
}