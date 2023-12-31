window.onload = () => {
  document.getElementById('btnUser').addEventListener('click', async (e) => {
    e.preventDefault();

    //generate random number tobe used as user reference
    const randomNum = Math.floor(Math.random() * 10);
    //consume api for list of users
    const listOfUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users '
    );
    //convert raw data into a json object
    const data = await listOfUsers.json();
    //Display random User
    document.getElementById('user').innerText = `${data[randomNum].name}`;

    let text = '';
    if (data === '') {
      text = document.getElementById(
        'generate'
      ).innerText = `Please click 'Get username' to generate list of users. Thank you.`;
      return null;
    } else {
      text = document.getElementById(
        'generate'
      ).innerText = `Official list of users.`;
      //Display all reggistered user
      const displayUSers = (data) => {
        data.map((user) => {
          const listItem = document.createElement('li');
          listItem.className = 'listName';
          listItem.textContent = `${user.name}`;

          const container = document.getElementById('person-list');
          // Append the list item to the container
          container.appendChild(listItem);

          //check user with zip code that starts with 5
          const zipCode = user.address.zipcode;
          if (zipCode.startsWith('5' || zipCode.startsWith(5))) {
            //console.log(user.name);
            const zipFiveList = document.createElement('li');
            zipFiveList.className = 'zip5User';
            zipFiveList.textContent = `${user.name} (${user.address.zipcode})`;

            const container = document.getElementById('zip-five');
            // Append the list item to the container
            container.appendChild(zipFiveList);
          }
          //list of users
        });
      };
      displayUSers(data);
      //sort user names
      const sotUserNames = (data) => {
        let newListOfNames = [];
        data.forEach((user) => {
          const userNames = {
            name: user.name,
            email: user.email,
          };
          //const sortedName = newListOfNames.sort();
          newListOfNames.push(userNames);
        });
        //console.log(newListOfNames);
      };
      sotUserNames(data);
    }
  });
};
