const cats = document.getElementsByClassName('pick-cat');
const mainCat = document.getElementById('img-preview');
const catModel = document.getElementById('img-model');
const myModal = document.getElementById('myModal');
const messageShow = document.getElementsByClassName("title")[0];
const chat = document.getElementById("chat");
const myChat = document.getElementById("message");
const contentChat = document.getElementById("content-chat");

let index = 0;

for (let i = 0; i < cats.length; i++) {
    cats[i].addEventListener('click', function () {
        let src = this.getAttribute('src');
        mainCat.setAttribute('src', src);
        index = i;
    });
}

mainCat.addEventListener('click', function () {
    let src = this.getAttribute('src');
    catModel.setAttribute('src', src);
    // myModal add class active
    myModal.classList.add('active');
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    // myModal remove class active
    myModal.classList.remove('active');
});

document.getElementsByClassName('btn-left')[0].addEventListener('click', function () {
    if (index > 0) {
        index--;
    }else{
        index = cats.length - 1;
    }
    let src = cats[index].getAttribute('src');
    console.log(src);
    catModel.setAttribute('src', src);
});

document.getElementsByClassName('btn-right')[0].addEventListener('click', function () {
    if (index < cats.length - 1) {
        index++;
    }else{
        index = 0;
    }
    let src = cats[index].getAttribute('src');
    console.log(src);
    catModel.setAttribute('src', src);
});

messageShow.addEventListener('click', function () {
    messageShow.parentNode.classList.toggle('message-show');
});

chat.addEventListener('click', function () {
    var myChatContent = myChat.value
    myChat.value = '';
    contentChat.innerHTML += `
        <div class="message-chat message-chat-me">
            ${myChatContent}
        </div>
    `;

    // await 1s
    setTimeout(function () {
        contentChat.innerHTML += `
            <div class="message-chat message-chat-you">
                Xin chào shop đang offline, bạn có thể để lại tin nhắn, shop sẽ liên hệ lại với bạn trong thời gian sớm nhất.
            </div>
        `;
    }, 1000);

});