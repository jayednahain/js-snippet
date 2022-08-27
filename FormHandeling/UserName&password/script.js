console.log("connected");

// form validation
document.form_one.username
var form_element = document.forms['form_one']
console.log(form_element);
var name_field = form_element.username
console.log(name_field.value);

// function will run on event

function validate_username()
{
    var username_pattern = /^([^0-9\W]*)$/;
    if (username_pattern.test(document.form_one.username.value))
    {
        console.log("correct");
        document.form_one.username.style.border ="thick solid green";
        
    }
    else
    {
        document.form_one.username.style.border ="thick solid red";
        SnackBar({
            message: "Dont support Number or space",
            fixed: true,
            status: "red",
            icon: "danger"
        })
    }
}

document.form_one.username.addEventListener('keyup',validate_username)

