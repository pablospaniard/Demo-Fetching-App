document.getElementById('left').addEventListener('click', onClick);
document.getElementById('prevButton').addEventListener('click', moveBack);
document.getElementById('nextButton').addEventListener('click', moveForward);


const rightScreen = document.getElementById('right');
const lis = document.getElementsByClassName('user');
let titleName = document.getElementById('title');
let email = document.getElementById('mail');
let ul = document.getElementById('users');
let row = document.getElementById('team');
let memberName = document.getElementById('member');
let memberEmail = document.getElementById('member-email');
let image = document.getElementById('img');
let imgPath;
let members;
let index;

membersList();


function membersList() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText)
            // console.log(response);
            members = response;
            let team = 'person';
            let output = '';


            for (let i = 0; i < members.length; i++) {
                if (members[i].users) {
                    team = 'group';
                } else {
                    team = 'person';
                }
                output += '<li class="user"><i class="fa fa-circle ' + team + ' " aria-hidden="true"></i> ' + members[i].name + '</li>';

            }
            document.getElementById('users').innerHTML = output;

        }
    };

    xhttp.open("GET", "../assets/members.json", true);
    xhttp.send();
}



function getIndex() {
    for (let j = 0; j < ul.children.length; j++) {
        ( () => {
            ul.children[j].onclick = function() {
                index = members[j].id - 1;
                console.log(index);
            }
        })(j);

    }
}

function onClick(event) {
    let e = event.target || event.srcElement;

    if (e.tagName === 'LI') {
        rightScreen.style.display = 'flex';
        for(let i = 0; i < lis.length; i++) {
            lis[i].style.backgroundColor = '';
        }
        e.style.backgroundColor = 'red';
        userInfo();
    }
}

function userInfo() {
    getIndex();
    imgPath = (Math.random() + 1).toString(36).substr(2,5);

    image.setAttribute('src', 'https://api.adorable.io/avatars/200/' + imgPath + '@adorable.io.png')
    titleName.textContent = (members[index].name);
    email.textContent = (members[index].email);

    if (members[index].users) {
        memberName.innerHTML = '';
        memberEmail.innerHTML = '';

        let teamTitle = document.createElement('h3');
        teamTitle.textContent = 'NAME';
        memberName.appendChild(teamTitle);

        let teamEmail = document.createElement('h3');
        teamEmail.textContent = 'EMAIL';
        memberEmail.appendChild(teamEmail);

        for (let i = 0; i < members[index].users.length; i++){
            let teamMember = document.createElement('p');
            let teamMemberEmail = document.createElement('p');
            teamMember.textContent = members[index].users[i].name;
            teamMemberEmail.textContent = members[index].users[i].email;
            memberName.appendChild(teamMember);
            memberEmail.appendChild(teamMemberEmail);
        }
    } else {
        memberName.innerHTML = '';
        memberEmail.innerHTML = '';

    }
}

function moveBack() {
    getIndex();
    index = index-1;
    index === -1 ? index = members.length -1 : index;
    console.log(index);
    userInfo();

    let li = lis[index];
    for(let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = '';
    }
    li.style.backgroundColor = 'red';
}

function moveForward() {
    getIndex();
    index = index+1;
    index === members.length ? index = 0 : index;
    console.log(index);
    userInfo();

    let li = lis[index];
    for(let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = '';
    }
    li.style.backgroundColor = 'red';
}




