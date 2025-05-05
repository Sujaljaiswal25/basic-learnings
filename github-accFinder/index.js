// https://api.github.com/users/${username}

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let card = document.querySelector(".Card");

getUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if(!raw.ok) {
      throw new Error("User not found");
    }
    return raw.json();
  })
};

getRepose = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw) => {
    if(!raw.ok) {
      throw new Error("User not found");
    }
    return raw.json();
  })
};


btn.addEventListener("click", ()=> {
    let username = inp.value.trim();
    if(username.length === 0) {
        alert("Please enter a username");
        return;
    }
    getUser(username).then((data)=> {
        decorateData(data);
    })
    getRepose(username).then((data)=> {
        console.log(data);
    })
})

let decorateData = (data) => {

    console.log(data);
    let user = `<div class="p-6 flex items-center gap-6">
            <img src="${data.avatar_url
            }" alt="Avatar" class="w-20 h-20 rounded-full border-4 border-blue-500" />
            <div>
              <h2 class="text-2xl font-bold">${data.name}</h2>
              <p class="text-gray-400">@${data.login}</p>
              <p class="mt-2 text-sm text-gray-300">Builds GitHub, loves Octocats and open source.</p>
            </div>
          </div>
          <div class="bg-gray-900 grid grid-cols-3 text-center py-4 border-t border-gray-700">
            <div>
              <p class="text-lg font-semibold">${data.public_repos
              }</p>
              <p class="text-gray-400 text-sm">Repos</p>
            </div>
            <div>
              <p class="text-lg font-semibold">23.5k</p>
              <p class="text-gray-400 text-sm">Followers</p>
            </div>
            <div>
              <p class="text-lg font-semibold">9</p>
              <p class="text-gray-400 text-sm">Following</p>
            </div>
          </div>`

  card.innerHTML = user;
}
