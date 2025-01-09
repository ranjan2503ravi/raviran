const don = [
    {
        img:"https://i.pinimg.com/736x/2a/ab/bf/2aabbf29be7ed8696dd1b1c39ba6e226.jpg",
        name: "radhika rajput",
        email: "radhika@gmail.com",
        phone:7979056132,
    },
    {
        img:"https://i.pinimg.com/736x/2a/ab/bf/2aabbf29be7ed8696dd1b1c39ba6e226.jpg",
        name: "radhika rajput",
        email: "radhika@gmail.com",
        phone:7979056132,
    },
    {
        img:"https://i.pinimg.com/736x/2a/ab/bf/2aabbf29be7ed8696dd1b1c39ba6e226.jpg",
        name: "radhika rajput",
        email: "radhika@gmail.com",
        phone:7979056132,
    },
    {
        img:"https://i.pinimg.com/736x/2a/ab/bf/2aabbf29be7ed8696dd1b1c39ba6e226.jpg",
        name: "radhika rajput",
        email: "radhika@gmail.com",
        phone:7979056132,
    },
    {
        img:"https://i.pinimg.com/736x/2a/ab/bf/2aabbf29be7ed8696dd1b1c39ba6e226.jpg",
        name: "radhika rajput",
        email: "radhika@gmail.com",
        phone:7979056132,
    },
];
const mom = document.querySelector(".main");

don.forEach((idx)=>{
    const non = document.createElement("div");
    non.innerHTML = `
     <div class="box1">
         <img src="${idx.img}" alt="">
<p>${idx.name}</p>
<p>${idx.email}</p>
<p>${idx.phone}</p>

    </div>
    `;
    mom.appendChild(non);
})