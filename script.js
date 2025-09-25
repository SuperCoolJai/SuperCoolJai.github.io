


function Click() {
   let id = event.target.id;
   let projectElement = document.getElementById(id);


   
    projectElement.innerHTML = "Loading...";

    startCelebration();







   newpage = window.open('', '_self'); //open in current window
   newpage.document.write('<html><head><title>' + id.charAt(0).toUpperCase() + id.slice(1) + '</title></head><body><h1>' + id.charAt(0).toUpperCase() + id.slice(1) + '</h1><p>This is a placeholder page for ' + id + '.</p></body></html>');
// 1. OPEN the new document
    newpage.document.write('<!DOCTYPE html><html><head>');

    // 2. LINK THE CSS FILE (Crucial for the new page)
    // Use the correct relative path here, e.g., 'style.css'
    newpage.document.write('<link rel="stylesheet" href="style.css">'); 

    // 3. CLOSE HEAD and OPEN BODY
    newpage.document.write('</head><body>');
    var imageData;

   if (id=="portfolioLink") {

    
         imageData = [
            { src: "image/portfolio/booksRead.png", alt: "Books Read", txt: "Essentially, my absolute favorite type of genre is science fiction. I have read so many books over the past years during my journey in PCTVS highschool. I would sincerly like to thank the book club for making me enjoy reading once again!" },
            { src: "image/portfolio/education.png", alt: "Education", txt: "Essentially, one of my favorite subject is mathematics. I have loved math all throughout my life. Anything that deals with STEM related pathways is the way to go!" },
            { src: "image/portfolio/familyPhoto2.png", alt: "FamilyPhoto", txt:"These are some of the pictures I have for myself and my family."},
            { src: "image/portfolio/favFood.png", alt: "Food", txt: "These are some of my favorite foods: Dosas, Samosas, Idli. I also love pizza and sweets!"},
            { src: "image/portfolio/interests.png", alt: "Interests", txt: "I have so many interests. One of my favorite is coding!"},
            { src: "image/portfolio/facts.png", alt: "Facts", txt: "I have listed some fun facts about myself. Feel free to read them."},


        ];

        



        

    }    else if (id=="projects") {
        imageData = [
            { src: "image/projects/art.jpg", alt: "Artworks", txt: "Throughout my life, I have drawn many artworks and they were amazing experiences! Drawing and doodling helped me when school stressed me out."},
            { src: "image/projects/dreamland.png", alt: "Dreamland Project", txt: "This is the project that I have turned in for FBLA. I had lost but I also had gained valuable learning experience." },
            { src: "image/projects/flowers.jpg", alt: "Flowers", txt:"I love to take picture of flowers and water them!"},
            { src: "image/projects/lasangia.png", alt: "Lasangia", txt:"I helped my mom cook Lasangia"},
            { src: "image/projects/minecraft.jpg", alt: "Minecraft", txt:"Rizwan and I have created many cool buildings in minecraft."},
            { src: "image/projects/plants.jpg", alt: "Plants", txt: "I love watching the plants grow. I help my mother water them sometimes."},
            { src: "image/projects/santa.jpg", alt: "Santa", txt: "I helped my father set up Santa Claus for christmas. Ho Ho Ho!"},
        ];



    }
   else if (id=="ideas") {

        imageData = [
            { src: "image/ideas/AI.jpg", alt: "AI", txt: "One day, I want to help revolutize the world by creating robots that teach students effectivly! AI will make life easier for us!"},
            { src: "image/ideas/chem.jpg", alt: "Chemistry", txt: "When I grow up, I want to do cool experiments in the lab."},
            { src: "image/ideas/coding.webp", alt: "Coding", txt: "I like to code and I want to actually make a videogame when I'm older."},
            { src: "image/ideas/cybersecurity.webp", alt: "Cyber", txt: "I was never really good at cybersecurity but I feel like I should know this at some point in my life." },
            { src: "image/ideas/engineering.jpg", alt: "Engineering", txt: "I will do computer and electrical engineering in college." },
            { src: "image/ideas/math.jpeg", alt: "Math", txt: "I want to be able to do more advance mathematics as I grow older."},
            { src: "image/ideas/physics.jpg", alt: "Physics", txt: "I also want to be abel to do more advance physics problems as I prosper in the subject." },
            { src: "image/ideas/smartGlasses.jpg", alt: "Glasses", txt: "I want to become a super-genius kid."},
        ];

   }

    else if (id=="gallery") {


        imageData = [
            { src: "image/gallery/books.jpg", alt: "books", txt:"Did I forget to mention I'm basically a speed-reader?" },
            { src: "image/gallery/bugPhoto.jpg", alt: "bugs", txt:"My mission is to spot a new kind of bug evertime I go to the playground. I usually do that during the summer."},
            { src: "image/gallery/calculator.jpg", alt: "calculator", txt:"I love doing math in my TI84 calculator." },
            { src: "image/gallery/I_Must_Betray_You.jpg", alt: "book", txt: "This book is just like the book of 1984."},
            { src: "image/gallery/icecream.jpg", alt: "Icecream", txt:"Butterscotch is such a good flavor. You should try some!"},
            { src: "image/gallery/icepop.jpg", alt: "Icepop", txt:"I like icepop but they are not my favorite thing to eat." },
            { src: "image/gallery/lemoncelloBooks.jpg", alt: "book", txt:"I used to read the lemoncello series and other books that talk about the power of books when I was yonger. Now, I like to read non-fiction or science-fiction." },
            { src: "image/gallery/michigan_vs_the_boys.jpg", alt: "book", txt:"I may or may not have read the entire book of Michigan Vs The Boys but I should continue sometime."},
            { src: "image/gallery/roboticDog.jpg", alt: "robotic_dog", txt: "In my freetime, I like to look at pictures at robots just like the robotic dog in PCTI."},
            { src: "image/gallery/sky_dim.jpg", alt: "dim_sky", txt:"I like to take pictures of the dim sky!"},
            { src: "image/gallery/sky_morning.jpg", alt: "morning_sky", txt:"I like to take pictures of the morning sky!"},
            { src: "image/gallery/temple.jpg", alt: "temple", txt: "I pray everyday for the wellbeing of me and my family."},
            { src: "image/gallery/train.jpg", alt: "train", txt: "I went to a subway museum and got a picture of the interior of a subway/train."},
            { src: "image/gallery/trainModel.jpg", alt: "train_model", txt:"I got a picture of the train model."},
            { src: "image/gallery/warcross.jpg", alt: "book", txt:"I have read the Warcross. This book is about a girl who tries to stop the neurolink from taking over the world."},
            { src: "image/gallery/You've_Reached_Sam.jpg", alt: "book", txt:"This book was such an emotional one because the main character, a girl believes that her boyfriend still exist within this world but it is all an illusion."},







        ];

    

    }

    else if (id == "family_photos"){

          imageData = [

            { src: "image/family_photos/photo.jpg", alt: "Photo", txt: "Well this is me!"},
            { src: "image/family_photos/familyPhoto.jpg", alt: "FamilyPhoto" , txt: "This is my family!"}]





        
    }

    else if (id=="email-form"){
        newpage.document.write('<h2>"Email:"</h2>')
        newpage.document.write('<h3>"jaineil32624@gmail.com"</h3>')
        newpage.document.write('<h3>"270629@pcti.mobi"</h3>')
        imageData = [{src:"image/email/email_me.jpg", alt:"Discord", txt:"Email me at: jaineil32624@gmail.com, or 270629@pcti.mobi if you guys have any questions."}];
    }


    else if (id=="social-media"){
        newpage.document.write('<h2>"Social Media:"</h2>')
        newpage.document.write('<h3>"Atomicwaves"</h3>')
        newpage.document.write('<h3>"Jaineil Rana"</h3>')
        imageData = [
                {src:"image/social_media/discord.png", alt:"Discord", txt:"Discord Account: Atomicwaves"},
                {src:"image/social_media/instagram.png", alt:"Instagram", txt:"Social Media: Jaineil Rana"},
        ];

    }

    else if (id=="location") {
        newpage.document.write('<h2>"Location:"</h2>')
        newpage.document.write('<h3>"New Jersy"</h3>')
        newpage.document.write('<h3>"Passaic"</h3>')
        imageData = [
                {src:"image/location/nj.png", alt:"NJ", txt: "I am from New Jersy, Passaic City."},
        ];


    }

    else if (id=="phone") {
        newpage.document.write('<h2>"Phone Numbers:"</h2>')
        newpage.document.write('<h2>"862-571-8021"</h2>')
        newpage.document.write('<h2>"862-571-3328"</h2>')
        imageData = [
                {src:"image/phone/call_me.png", alt:"NJ", txt: "If you ever need to call, here are the phone-numbers: 862-571-8021 and 862-571-3328"},
        ];
        
    }
    
    else if (id=="address") {
        newpage.document.write('<h2>"Home Address is not shown due to specific reasons!:"</h2>')
        imageData = [
                {src:"image/location/nj.png", alt:"NJ", txt:"Sorry, I cannot reveal my specific locations due to privacy reasons!"},
        ];
    }

    else if (id=="python_code") {
               imageData = [
                {src:"image/python_code/python_code1.png", alt:"python_code"},
                {src:"image/python_code/python_code2.png", alt:"python_code"},
                {src:"image/python_code/python_code3.png", alt:"python_code"},
                {src:"image/python_code/python_code4.png", alt:"python_code"},
                {src:"image/python_code/python_code5.png", alt:"python_code"},
                {src:"image/python_code/python_code6.png", alt:"python_code"},
                {src:"image/python_code/python_code7.png", alt:"python_code"},
                {src:"image/python_code/python_code8.png", alt:"python_code"},

        ];
    }

    else if (id=="minecraft_code") {
               imageData = [
                {src:"image/minecraft_code/minecraft_code3.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code4.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code6.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code8.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code2.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code5.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code7.png", alt:"minecraft_code"},
                {src:"image/minecraft_code/minecraft_code1.png", alt:"minecraft_code"},

        ];
    }

    else if (id=="scratch_code") {
               imageData = [
                {src:"image/scratch_code/scratch_code1.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code2.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code3.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code4.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code5.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code6.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code7.png", alt:"scratch_code"},
                {src:"image/scratch_code/scratch_code8.png", alt:"scratch_code"},

        ];
    }

    else if (id=="javascript_code") {
               imageData = [
                {src:"image/javascript_code/javascript_code8.png", alt:"javascript_code"},
        
                {src:"image/javascript_code/javascript_code2.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code3.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code5.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code6.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code7.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code4.png", alt:"javascript_code"},
                {src:"image/javascript_code/javascript_code1.png", alt:"javascript_code"},

        ];
    }




    else if (id=="makecode") {
               imageData = [
                {src:"image/makecode/makecode1.jpg", alt:"unity"},
                {src:"image/makecode/makecode2.jpg", alt:"unity"},
                {src:"image/makecode/makecode3.jpg", alt:"unity"},
                {src:"image/makecode/makecode4.jpg", alt:"unity"},
                {src:"image/makecode/makecode5.jpg", alt:"unity"},
                {src:"image/makecode/makecode6.jpg", alt:"unity"},
                {src:"image/makecode/makecode7.jpg", alt:"unity"},
                {src:"image/makecode/makecode8.jpg", alt:"unity"},

        ];
    }






        // This is the recommended way to create and append HTML elements.
        const galleryContainer = document.createElement('div');
        galleryContainer.classList.add('image-gallery');

        // Dynamically create the lightbox HTML structure in JavaScript
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = 'lightbox-overlay';
        lightboxOverlay.classList.add('lightbox-overlay');

        const lightboxContent = document.createElement('div');
        lightboxContent.classList.add('lightbox-content');

        const lightboxImage = document.createElement('img');
        lightboxImage.id = 'lightbox-image';
        lightboxContent.appendChild(lightboxImage);
        lightboxOverlay.appendChild(lightboxContent);


        const lightboxText = document.createElement('p');
        lightboxText.id = 'lightbox-text';
        lightboxContent.appendChild(lightboxText);
        lightboxOverlay.appendChild(lightboxContent);


          
        
        // Loop through the array and create an image element for each item.
        imageData.forEach(image => {
            // Create the image element
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.txt = image.txt;
            img.classList.add('portfolio-image');
            galleryContainer.appendChild(img);
    // ... (your existing image code) ...

            const imgText = document.createElement('p');
            imgText.textContent = image.txt;
            imgText.classList.add('image-description');
            galleryContainer.appendChild(imgText);
            


            // Add a click listener to each image
            img.addEventListener('click', () => {
                // When an image is clicked, set the source and alt text for the full-screen image
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                // Correctly update the lightbox text
                
    



                lightboxOverlay.classList.add('visible');
                const MIN_DIMENSION = 300; // Define a minimum dimension for readability
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;
                const padding = 40; // Space to keep the image from the edges

                const naturalWidth = img.naturalWidth;
                const naturalHeight = img.naturalHeight;

                // Determine the best size based on natural dimensions and screen size
                let newWidth = Math.min(naturalWidth, screenWidth - padding);
                let newHeight = Math.min(naturalHeight, screenHeight - padding);

                // Ensure the image is not too small for readability
                newWidth = Math.max(newWidth, MIN_DIMENSION);
                newHeight = Math.max(newHeight, MIN_DIMENSION);

                // Set the size of the lightbox container to the new dimensions
                lightboxContent.style.maxWidth = `${newWidth}px`;
                lightboxContent.style.maxHeight = `${newHeight}px`;
                

                // If the aspect ratio is different, we adjust so the image doesn't get distorted
                if (naturalWidth / naturalHeight > 1) {
             
                    lightboxImage.style.width = '100%';
                    lightboxImage.style.height = 'auto';
                } else {
                    lightboxImage.style.height = '100%';
                    lightboxImage.style.width = 'auto';
                }

                lightboxOverlay.classList.add('visible');
                lightboxContent.display(lightboxText.textContent)
            });

            
        }); 

        // Add a click listener to the lightbox overlay to close it
        lightboxOverlay.addEventListener('click', () => {
            lightboxOverlay.classList.remove('visible');
        });

        // Create a main container for the gallery and a title
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('main-container');

        const galleryTitle = document.createElement('h1');
   
        // Append everything to the body
        mainContainer.appendChild(galleryTitle);
        mainContainer.appendChild(galleryContainer);
        document.body.appendChild(mainContainer);
        document.body.appendChild(lightboxOverlay); // Append the dynamically created lightbox to the body


        

        


        
       

// 5. CLOSE BODY and HTML
    newpage.document.write('</body></html>');



   newpage.document.close();


   newpage.document.body.style.fontFamily = 'Arial, sans-serif';
   newpage.document.body.style.textAlign = 'center';
   newpage.document.body.style.padding = '20px';
   
   newpage.document.body.style.backgroundColor =        setInterval(setSmoothBackground, 10);
;





   

   let button = newpage.document.createElement('button');   
   button.innerHTML = '🏠 Home';
   button.style.padding = '10px 20px';
   button.style.fontSize = '16px';
   button.style.marginTop = '20px';
   button.style.cursor = 'pointer';
   button.style.border = 'none';
   button.style.borderRadius = '5px';
   button.style.backgroundColor = '#007BFF';
   button.style.color = '#fff';
   button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
   button.style.transition = 'background-color 0.3s ease';






   
   button.onmouseover = function() {
       button.style.backgroundColor = '#0056b3';
   };


   button.onmouseout = function() {
       button.style.backgroundColor = '#007BFF';
   };


   newpage.document.body.appendChild(button);
   newpage.button = button;
   newpage.button.style.display = 'block';
   newpage.button.style.margin = '20px auto';



   


    newpage.button.onclick = function() {
        window.location.href = "main.html";
    };






}













// Data for all image sets is defined at the global level
const imageSets = {
    minecraft: [
        ['/image/minecraft/minecraft1.jpg', '/image/minecraft/minecraft2.jpg', '/image/minecraft/minecraft3.jpg', '/image/minecraft/minecraft4.jpg', '/image/minecraft/minecraft5.jpg', '/image/minecraft/minecraft6.jpg', '/image/minecraft/minecraft7.jpg', '/image/minecraft/minecraft8.jpg'],
        ['/image/minecraft/minecraft9.jpg', '/image/minecraft/minecraft10.jpg', '/image/minecraft/minecraft11.jpg', '/image/minecraft/minecraft12.jpg', '/image/minecraft/minecraft13.jpg', '/image/minecraft/minecraft14.jpg', '/image/minecraft/minecraft15.jpg', '/image/minecraft/minecraft16.jpg']
    ],
    makecode: [
        ['/image/makecode/makecode1.jpg', '/image/makecode/makecode2.jpg', '/image/makecode/makecode3.jpg', '/image/makecode/makecode4.jpg', '/image/makecode/makecode5.jpg', '/image/makecode/makecode6.jpg', '/image/makecode/makecode7.jpg', '/image/makecode/makecode8.jpg'],
        ['/image/unity/unity8.jpg', '/image/unity/unity2.jpg', '/image/unity/unity3.jpg', '/image/unity/unity4.jpg', '/image/unity/unity5.jpg', '/image/unity/unity6.jpg', '/image/unity/unity7.jpg', '/image/unity/unity1.jpg',],
        ['/image/scratch/scratch1.jpg', '/image/scratch/scratch2.jpg','/image/scratch/scratch3.jpg','/image/scratch/scratch4.jpg','/image/scratch/scratch5.jpg','/image/scratch/scratch6.jpg','/image/scratch/scratch7.jpg', '/image/scratch/scratch8.jpg',]
    ],
    roblox: [
        ['/image/roblox/roblox1.jpg', '/image/roblox/roblox2.jpg', '/image/roblox/roblox3.jpg', '/image/roblox/roblox4.jpg', '/image/roblox/roblox5.jpg', '/image/roblox/roblox6.jpg', '/image/roblox/roblox7.jpg', '/image/roblox/roblox8.jpg'],
        ['/image/roblox/roblox9.jpg', '/image/roblox/roblox10.jpg', '/image/roblox/roblox16.jpg', '/image/roblox/roblox12.jpg', '/image/roblox/roblox13.jpg', '/image/roblox/roblox14.jpg', '/image/roblox/roblox15.jpg', '/image/roblox/roblox11.jpg']
    ]
};

const currentSetIndex = { minecraft: 0, makecode: 0, roblox: 0 };

const sectionImageIds = {
    minecraft: ['minecraft1', 'minecraft2', 'minecraft3', 'minecraft4', 'minecraft5', 'minecraft6', 'minecraft7', 'minecraft8'],
    makecode: ['makecode1', 'makecode2', 'makecode3', 'makecode4', 'makecode5', 'makecode6', 'makecode7', 'makecode8'],
    roblox: ['roblox1', 'roblox2', 'roblox3', 'roblox4', 'roblox5', 'roblox6', 'roblox7', 'roblox8']
};

// This function is now a global function that the HTML can call directly
function changeImages(sectionName) {

    // Find the current index for the section
    let currentIndex = currentSetIndex[sectionName];
    
    // Increment the index and loop back to 0 if it goes past the last set
    currentIndex = (currentIndex + 1) % imageSets[sectionName].length;
    currentSetIndex[sectionName] = currentIndex;

    // Get the new image paths for the current set
    const newImagePaths = imageSets[sectionName][currentIndex];
    const imageIds = sectionImageIds[sectionName];

    // Loop through the image IDs and change the src of each element
    imageIds.forEach((id, index) => {
        const imgElement = document.getElementById(id); // Use getElementById to find the element
        if (imgElement && newImagePaths[index]) {
            imgElement.src = newImagePaths[index]; // Set the src property to the new path
            // The alert is useful for testing, but you should remove it once it's working
        }
    });
}










let hue = 0; // We'll start at 0 and increase this number

// This function sets the smooth, increasing background color
function setSmoothBackground() {
    // Increase the hue value to move to the next color in the rainbow
    hue = (hue + 1) % 360; 
    
    // Keep saturation and lightness high for a vibrant color
    const saturation = 70;
    const lightness = 80;
    
    // Put it all together in an HSL string
    const smoothColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    // Apply the color to the body of the page
    document.body.style.backgroundColor = smoothColor;
}


function confetti(confetti_number = Math.floor(Math.random() * (50 - 25 + 1)) + 25) {
   // Confetti effect with random timing
   for (let i = 0; i < confetti_number; i++) {
       setTimeout(() => {
           const confetti = document.createElement('div');
           confetti.classList.add('confetti-piece');
           confetti.style.left = Math.random() * 100 + 'vw';
           confetti.style.top = '0px';
           confetti.style.backgroundColor = `hsl(${Math.random() * 450}, 70%, 60%)`;
           confetti.style.position = 'fixed';
           confetti.style.width = `${Math.random()*10}px`;
           confetti.style.height = '16px';
           confetti.style.borderRadius = '100px';
           confetti.style.zIndex = 9999;
           confetti.style.opacity = 0.8;
           confetti.style.transition = 'top 2s ease, opacity 2s ease';
           document.body.appendChild(confetti);
           setTimeout(() => {
               confetti.style.top = '100vh';
               confetti.style.opacity = 0.2;
               confetti.style.borderRadius = '50%';
           }, 50);
           setTimeout(() => {
               confetti.remove();
           }, 2000);
       }, Math.random() * 20000); // Random delay up to 1 second


       
   }
}











function startCelebration() {
        // Start the confetti effect right away

        // Wait for 2 seconds (2000 milliseconds)
        setTimeout(() => {
        confetti();
        }, 0);
    }













// Menu button functionality
const sections = {
   button1: 'homeSection',
   button2: 'aboutSection',
   button3: 'projectsSection',
   button4: 'skillsSection',
   button5: 'contactSection',
};








Object.keys(sections).forEach(btnId => {
   document.getElementById(btnId).addEventListener('click', () => {
       Object.values(sections).forEach(secId => {
           document.getElementById(secId).style.display = 'none';
       });
       document.getElementById(sections[btnId]).style.display = 'block';
   });
});
























// Initialize by showing the home section
document.getElementById('homeSection').style.display = 'block';
document.getElementById('aboutSection').style.display = 'none';
document.getElementById('projectsSection').style.display = 'none';
document.getElementById('skillsSection').style.display = 'none';
document.getElementById('contactSection').style.display = 'none';







// --- Helper function (required by your code) ---
    function showMessage(message) {
        const msgBox = document.getElementById('message-box');
        msgBox.textContent = message;
        msgBox.classList.add('show');
        setTimeout(() => {
            msgBox.classList.remove('show');
        }, 3000);
    
    }




    // This is the single function you requested
    function renderForm(formType) {
        // Get the container where the form will be displayed
        const container = document.getElementById('form-container');

        // Check if the container exists
        if (!container) {
            console.error("Error: Element with ID 'form-container' not found.");
            return;
        }
        
        // Use an if/else if structure to choose which form to render
        if (formType === 'login') {
            container.innerHTML = `
                <h1>Log In</h1>
                <form id="login-form">
                    <div class="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <button onclick="renderForm('signup')" style="margin-top: 1rem; background-color: #95a5a6; color: #fff;">Need an account?</button>
            `;



            // Add the event listener to the form after it's been created
            document.getElementById('login-form').addEventListener('submit', function(event) {
                event.preventDefault();
                showMessage("You have logged in!");
            });

        } else if (formType === 'signup') {
            container.innerHTML = `
                <h1>Create an Account</h1>
                <form id="signup-form">
                    <div class="input-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required>
                    </div>
                    <div class="input-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="••••••••" required>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <button onclick="renderForm('login')" style="margin-top: 1rem; background-color: #95a5a6; color: #fff;">Already have an account?</button>
            `;








            
            // Add the event listener to the form after it's been created
            document.getElementById('signup-form').addEventListener('submit', function(event) {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const message = `Thanks, ${name}! Your account has been created.`;
                showMessage(message);
            });
        }
    }


    

// This is all you need in your script.js file
const buttons = document.querySelectorAll('.button, .sub-button, .img');
const sound = document.getElementById('click-sound');

if (sound) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            sound.currentTime = 0;
            sound.play();
        });
    });
}











document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the arrows and grid sections
    const arrows = document.querySelectorAll('.arrow');
    const sections = document.querySelectorAll('.grid-section');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                if (arrows[index]) {
                    arrows[index].classList.add('animate');
                }
            } else {
                if (arrows[index]) {
                    arrows[index].classList.remove('animate');
                }
            }
        });
    });
});

