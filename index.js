const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let vanAddEl = document.getElementById("like-add")
let valueOne = `21492`;

function addLike() {
    valueOne = Number(valueOne) + 1;
    vanAddEl.innerHTML = `${valueOne} likes`;
    
}


let courAddEl = document.getElementById("like-addTwo")
let valueTwo = "12502";

function addLikeTwo() {
    valueTwo = Number(valueTwo) + 1;
    courAddEl.innerHTML = `${valueTwo} likes`
    
}


let josAddEl = document.getElementById("like-addThree")
let valueThree = `15492`;

function addLikeThree() {
    console.log("clicked")
    valueThree = Number(valueThree) + 1;
    josAddEl.innerHTML = `${valueThree} likes`;
    
}