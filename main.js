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

    //console.log(data[randomNum].name);

    document.getElementById('user').innerText = `${data[randomNum].name}`;

    if (data === '') {
      return null;
    } else {
      //document.location.reload();
      data.map((user) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name}`;

        const container = document.getElementById('person-list');
        // Append the list item to the container
        container.appendChild(listItem);
      });
      //const names = [];

      //   for (const nameOfPerson of pipol) {
      //     const obj = {
      //       name: nameOfPerson.name,
      //     };

      //     names.push(obj);
      //   }
    }
  });
};