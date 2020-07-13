let command;

function decidepath(){
    if(command.toLowerCase() == "dir" && window.location.href== "https://ali-muhammad-123.github.io/Portfolio-Terminal-Emulator-/"){
        var p2 = "<p>07/01/2020  11:27 PM              Resume.doc<br>07/01/2020  11:27 PM              Aboutme.info<br>01/18/2020  11:34 AM                   links.link<br>06/04/2020  01:09 AM                   Contact.info<br>01/17/2020  06:17 AM        &ltDIR&gt           Projects";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
    }
    else if(command.toLowerCase() == "dir" && window.location.href== "https://ali-muhammad-123.github.io/Portfolio-Terminal-Emulator-/ProjectsDIR.html"){
        var p2 = "<p>01/18/2020  11:34 AM                   ..<br>07/01/2020  11:27 PM              PythonDesktopOrganiser.py<br>07/01/2020  11:27 PM              BMICalculator.java<br>06/04/2020  01:09 AM                   UniversityManagementSystem.java<br>01/17/2020  06:17 AM                   CourseManagementSystem.c";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
    }

    else if(command.toLowerCase() == "cls" ){
        document.location.reload();
    }

    

    else if(command.substring(0,2).toLowerCase() == "cd" ){
        let dir =   command.substring(2).trim();
        console.log(dir);
        switch(dir){
    case("Projects") : {
        window.location.href = "./ProjectsDIR.html";
        break;
    }
    case("..") : {
        console.log(window.location.href);
        window.location.href = "https://ali-muhammad-123.github.io/Portfolio-Terminal-Emulator-/";
        break;
    } 
}}


    else if(command.substring(0,4).toLowerCase() == "type"){
        let dir =   command.substring(4).trim();
        console.log(dir);
        switch(dir){
    case("Resume.doc") : {

        var embed = document.createElement('embed');
        embed.setAttribute('width', 800 );
        embed.setAttribute('height', 1200);
        embed.setAttribute('src', './AliMuhammad.pdf');
        document.getElementById('p3').appendChild(embed);
        break;

    }
    case("Aboutme.info") : {

    var p2 = "<p> Software developer with a passion for innovation. <br>Currently studying BS(CS) at szabist. Ready to learn new tech stacks and new technologies . Motivated to explore different branches computer science has to offer.<br>  This portfolio was made with pure html , css and js with some jquery .  </p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
        break;
    }
    case("links.link") : {

        var p2 = "<p>Github : <a href='https://github.com/Ali-Muhammad-123' >        https://github.com/Ali-Muhammad-123 </a>  <br>Linked in : <a href='https://www.linkedin.com/in/ali-muhammad-9a16905a/' >        https://www.linkedin.com/in/ali-muhammad-9a16905a/ </a> </p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
        break;
    }
    case("Contact.info") : {

        var p2 = "<p>Email : <a href='alim.9171@gmail.com' >        alim.9171@gmail.com </a>  <br>Linked in : <a href='https://www.linkedin.com/in/ali-muhammad-9a16905a/' >        https://www.linkedin.com/in/ali-muhammad-9a16905a/ </a> </p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
        break;

    }

    case("PythonDesktopOrganiser.py") : {

        var p2 = "<p>Code : <a href='https://github.com/Ali-Muhammad-123/Python_Desktop_Organiser' >        Python Desktop Organizer </a>  <br> Runs in the background and redirects every file placed on the desktop to the appropriate directory Specify the directory to the path of your desktop in the code Create a folder on your desktop with the name 'PYTHON ORANISATION FOLDER' and create three sub-filders in it with the names 'Documents' , 'Images' , 'Misc' and 'Compressed files' </p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
        break;

    }
    
    case("BMICalculator.java") : {

        var p2 = "<p>Code : <a href='https://github.com/Ali-Muhammad-123/BMI_CALCULATOR' >        BMICalculator.java </a>  </p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
        break;

    }

    case("UniversityManagementSystem.java") : {

        var p2 = "<p>Code : <a href='https://github.com/Ali-Muhammad-123/OOP-PROJECT' >        University Management System </a>  <br></p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
    var embed = document.createElement('embed');
        embed.setAttribute('width', 800 );
        embed.setAttribute('height', 1200);
        embed.setAttribute('src', './UMS.pdf');
        document.getElementById('p3').appendChild(embed);
        break;

    }
    case("SchoolResultManagementSystem.c") : {

        var p2 = "<p>Code : <a href='https://github.com/Ali-Muhammad-123/First_Semester_Project' >        School Result Management System </a>  <br></p>";
    document.getElementById("p3").insertAdjacentHTML('afterbegin', p2);
    var embed = document.createElement('embed');
    embed.setAttribute('width', 800 );
    embed.setAttribute('height', 1200);
    embed.setAttribute('src', './SRMS.pdf');
    document.getElementById('p3').appendChild(embed);

        break;

    }
}}

    else{
        alert("Invalid Command :  use 'dir' to view files , 'type' to view a particular file , 'cd' to traverse in directories , 'cls' to clear screen ")
    }
}

$("#command").keypress(function(event) { 
    if (event.keyCode === 13) { 
        command = (document.getElementById('command').value.trim());
        console.log(command);
         decidepath();
         document.getElementById('command').value = "";

    } 
});