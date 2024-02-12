const Nam = document.querySelector("#name");
const btn = document.querySelector("#button");
const result = document.querySelector("#result");
const myVideo = document.getElementById("myVideo");
const myvideo2 = document.getElementById("myVideo2");
function sumOfDigits(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function CallFUN() {
    const enteredName = Nam.value.trim(); // Get the value of the input field

    if (enteredName.length === 7 || sumOfDigits(enteredName)===7) {
        console.log("Name is valid");
        const formattedName = enteredName.split('').join('+');
        result.textContent = `${formattedName} = 7`; // Update the content of the result element
        //result.style.marginLeft = "150px";
        document.getElementById("noop").style.display = 'none';
        document.getElementById("yaa").style.display = 'block';
        myVideo.style.display='block';
        myVideo.play();
        myvideo2.style.display='none';
    } else {
        console.log("Name is invalid");
        const formattedName = enteredName.split('').join('+');
        result.innerHTML = `${formattedName}<span class='invalid'> ≠ 7</span>`;
        //result.style.marginLeft = "150px";
        document.getElementById("noop").style.display = 'block';
        document.getElementById("yaa").style.display = 'none';
        myVideo.style.display='none';
        myVideo.pause();
        myVideo.currentTime = 0;
        myVideo2.style.display='block';
        myVideo2.play();
        myVideo2.currentTime = 0;


    }
}

btn.addEventListener("click", () => {
    CallFUN();
});
