document.addEventListener('DOMContentLoaded', function() {
    let gnEnquiry = document.getElementById('gnEnquiry');
    let gnSupport = document.getElementById('gnSupport');
    let gnenquiry = document.getElementsByName('gnenquiry');
    let contactform = document.getElementById('contactform');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let checkboxArea = document.getElementById('checkboxArea');
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let fnameError = document.getElementById('fnameError');
    let lnameError = document.getElementById('lnameError');
    let emailError = document.getElementById('emailError');
    let querytypeError = document.getElementById('querytypeError');
    let messageError = document.getElementById('messageError');

    let successStage = document.getElementById('successStage'); // Changed to getElementById
    let checkError = document.getElementById('checkError'); // Changed to getElementById


    gnEnquiry.addEventListener('click', function() {
        this.parentElement.classList.add('active');
        gnSupport.parentElement.classList.remove('active');
    });

    gnSupport.addEventListener('click', function() {
        this.parentElement.classList.add('active');
        gnEnquiry.parentElement.classList.remove('active');
    });

    contactform.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValue = true;

        if (fname.value === '') {
            isValue = false;
            fnameError.style.display = 'block';
            fname.style.borderColor = '#ff0000';
        } else {
            fnameError.style.display = 'none';
            fname.style.borderColor = '#87a3a6';
        }

        if (lname.value === '') {
            isValue = false;
            lnameError.style.display = 'block';
            lname.style.borderColor = '#ff0000';
        } else {
            lnameError.style.display = 'none';
            lname.style.borderColor = '#87a3a6';
        }

        if (email.value === '') {
            isValue = false;
            emailError.style.display = 'block';
            email.style.borderColor = '#ff0000';
        } else if (!email.value.match(validRegex)) {
            isValue = false;
            email.style.borderColor = '#ff0000';
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = "";
            email.style.borderColor = '#87a3a6';
        }

        if (!(gnenquiry[0].checked || gnenquiry[1].checked)) {
            isValue = false;
            querytypeError.style.display = 'block';
        } else {
            querytypeError.style.display = 'none';
        }

        if (message.value === '') {
            isValue = false;
            messageError.style.display = 'block';
            message.style.borderColor = '#ff0000';
        } else {
            messageError.style.display = 'none';
            message.style.borderColor = '#87a3a6';
        }

        if(!checkboxArea.checked){
            isValue = false;
            checkError.style.display = 'block';
        }else{
            checkError.style.display = 'none';
        }

        if (isValue) {
            // alert("Form Submitted Successfully");
            // Perform further actions, e.g., send data to server
             successStage.classList.add('active'); // Uncomment if successStage element is present

             setTimeout(() => {
                successStage.classList.remove('active');
                location.reload();
             }, 2000);
        }
    });
});
