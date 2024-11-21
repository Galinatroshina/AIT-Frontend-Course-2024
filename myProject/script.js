const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when yes is clicked
yesBtn.addEventListener("click", ()=>{
    question.innerHTML = "😘";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWJxdmNtcjU2eDAxZ3lxb256dHBuNXRpZ3gxeDJ3djNra3F6MnR2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SV0ekWJJaZTUha4wA5/giphy.gif";
});

// Make the no btn move randomly on hover
noBtn.addEventListener("mouseover", ()=>{
    const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
    
    // Calculate max position
    const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}) 