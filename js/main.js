const terminalOutput = document.getElementById("terminal-output");
const terminalInputField = document.getElementById("terminal-input-field");


document.body.addEventListener("click", () => {
  terminalInputField.focus();
});


terminalInputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = terminalInputField.value.trim();
    terminalInputField.value = "";

    const outputLine = document.createElement("div");
    outputLine.classList.add("terminal-line", "terminal-line-output");
    let outputMessage = "";
    switch (command) {
      case "help":
        outputMessage = `
        social   : Display my social media links<br>
        about    : About me<br>
        clear    : Clear the terminal<br>
        
        `;
        break;
      case "social":
        const github = "https://github.com/yuki6942/";
        const twitter = "https://twitter.com/yuki6942";
        const mastodon = "https://androiddev.social/@yuki";
        const discord = "https://discord.com/users/594627968668794896";
        outputMessage = `
        github   : <a href="${github}" target="_blank">github.com/yuki6942</a>
        twitter  : <a href="${twitter}" target="_blank">twitter.com/yuki6942</a>
        mastodon : <a href="${mastodon}" target="_blank">androiddev.social/@yuki</a>
        discord  : <a href="${discord}" target="_blank">discord.com</a>
        
        `;
        break;
      case "clear":
        outputMessage = "";
        location.reload();
        break;
      case "about":
        outputMessage = `
        <br>
        Hey there! My name is Philipp, and I'm a 17-year-old from Germany. I'm a big fan of all things science fiction and fantasy, 
        from the magical world of Harry Potter to the epic adventures of Lord of the Rings and the supernatural realm of Supernatural.
        I'm also an avid reader and love exploring new worlds and characters in books and movies.
        On a more personal note, I'm bi and genderfluid, and I'm proud of who I am.
        I'm always looking for ways to express myself and connect with others who share my interests.
        In my free time, I enjoy coding and have experience in HTML, CSS, JS, PYTHON, RUST, SHELL SCRIPT, NODEJS, MONGODB, SQLITE, DOCKER and MYSQL.
      
        Thanks for taking the time to learn a little bit about me!
      
        `;
        break;
      default:
        outputMessage = `Unknown command: ${command}`;
    }

    terminalOutput.appendChild(outputLine);
    outputLine.innerHTML = `<span class="terminal-line-output">${outputMessage}</span>`;
    terminalOutput.appendChild(outputLine);
    
    const inputLine = document.createElement("div");
    inputLine.classList.add("terminal-line", "terminal-line-input");
    terminalOutput.appendChild(inputLine);

    const newInputField = document.createElement("input");
    newInputField.id = "terminal-input-field";
    newInputField.classList.add("terminal-input");
    newInputField.setAttribute("type", "text");
    newInputField.setAttribute("autofocus", true);
    newInputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const command = newInputField.value.trim();
        newInputField.value = "";

        const outputLine = document.createElement("div");
        outputLine.classList.add("terminal-line", "terminal-line-output");
        let outputMessage = "";
        switch (command) {
          case "help":
            outputMessage = `
            social   : Display my social media links<br>
                        about    : About me<br>
            clear    : Clear the terminal<br>
            
            `;
            break;
          case "social":
            const github = "https://github.com/yuki6942/";
            const twitter = "https://twitter.com/yuki6942";
            const mastodon = "https://androiddev.social/@yuki";
            const discord = "https://discord.com/users/594627968668794896";
            outputMessage = `
            github   : <a href="${github}" target="_blank">github.com/yuki6942</a>
            twitter  : <a href="${twitter}" target="_blank">twitter.com/yuki6942</a>
            mastodon : <a href="${mastodon}" target="_blank">androiddev.social/@yuki</a>
            discord  : <a href="${discord}" target="_blank">discord.com</a>
            
            `;
            break;
          case "clear":
            outputMessage = "";
            location.reload();
            break;
          case "about":
            outputMessage = `
            <br>
            Hey there! My name is Philipp, and I'm a 17-year-old from Germany. I'm a big fan of all things science fiction and fantasy, 
            from the magical world of Harry Potter to the epic adventures of Lord of the Rings and the supernatural realm of Supernatural.
            I'm also an avid reader and love exploring new worlds and characters in books and movies.
            On a more personal note, I'm bi and genderfluid, and I'm proud of who I am.
            I'm always looking for ways to express myself and connect with others who share my interests.
            In my free time, I enjoy coding and have experience in HTML, CSS, JS, PYTHON, RUST, SHELL SCRIPT, NODEJS, MONGODB, SQLITE, DOCKER and MYSQL.
          
            Thanks for taking the time to learn a little bit about me!
          
            `;
            break;
          default:
            outputMessage = `Unknown command: ${command}`;
        }
    
        terminalOutput.appendChild(outputLine);
        outputLine.innerHTML = `<span class="terminal-line-output">${outputMessage}</span>`;
        terminalOutput.appendChild(outputLine);

        const inputLine = document.createElement("div");
        inputLine.classList.add("terminal-line", "terminal-line-input");
        terminalOutput.appendChild(inputLine);

        const user = document.createElement("span");
        user.innerText = "user@yuki.me:";
        user.classList.add("terminal-line-user");
        inputLine.appendChild(user);

        const directory = document.createElement("span");
        directory.innerText = "/home";
        directory.classList.add("terminal-line-directory");
        inputLine.appendChild(directory);

        const dollar = document.createElement("span");
        dollar.innerText = "$ ";
        dollar.classList.add("terminal-line-dollar");
        inputLine.appendChild(dollar);

        inputLine.appendChild(newInputField);

        newInputField.focus();

        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      }
    });

    const user = document.createElement("span");
    user.innerText = "user@yuki.me:";
    user.classList.add("terminal-line-user");
    inputLine.appendChild(user);

    const directory = document.createElement("span");
    directory.innerText = "/home";
    directory.classList.add("terminal-line-directory");
    inputLine.appendChild(directory);

    const dollar = document.createElement("span");
    dollar.innerText = "$ ";
    dollar.classList.add("terminal-line-dollar");
    inputLine.appendChild(dollar);


    inputLine.appendChild(newInputField);

    newInputField.focus();

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
