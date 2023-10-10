const welcomeText = `
Welcome to My Portfolio!

I'm TechNo.
Here, you can learn more about my skills and projects.
`;

const aboutText = `
About Me:


I'm a passionate Developer, Cyber Security Student and Blogger. I love exploring the world of Security and Development. I like to write Blogs about the stuffs I learn.I have also participated in hackathons and attended security conferences.
`;

const projectsText = `
Projects:

1. Number Plate Detection
   - Description: Machine learning model to find license plate in a vechicle automatically.
   - GitHub: https://github.com/tech-n0/Anpr

2. Portfolio Website
   - Description: Portfolio Website
   - GitHub: https://tech-n0.github.io

3. Vulnerability Scanner
   - Description: Developed a Python Script to find OWASP Vulnerability in web application.
   - GitHub: https://github.com/tech-n0

4. Fuzz
   - Description: Simple Python Script to recon Web Application directories and subdomain.
   - GitHub: https://github.com/tech-n0/fuzz
`;

const socialMediaText = `
Social Media Links:


- GitHub: https://github.com/tech-n0
- Medium: https://medium.com/@t3ch_no
`;

const thankYouText = `
Thank you for visiting my portfolio! If you have any questions or would like to get in touch, feel free to contact me.
`;

const output = document.getElementById("output");
const terminal = document.querySelector(".terminal"); // Added terminal reference

const sections = [welcomeText, aboutText, projectsText, socialMediaText, thankYouText];
let sectionIndex = 0;
let index = 0;

function type() {
    if (sectionIndex < sections.length) {
        const section = sections[sectionIndex];
        if (index < section.length) {
            output.innerHTML += section.charAt(index);
            index++;
            setTimeout(type, 15);
            // Scroll to the bottom of the terminal
            terminal.scrollTop = terminal.scrollHeight;
        } else {
            output.innerHTML += '<br /><br />';
            sectionIndex++;
            index = 0;
            setTimeout(type, 1000); // Add a longer pause between sections
        }
    }
}

type();