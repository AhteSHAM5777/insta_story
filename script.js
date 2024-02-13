var arr = [{ dp: "01.jpg", story: "sal.jpg" }, { dp: "sal.jpg", story: "sha.jpg" }, { dp: "sha.jpg", story: "01.jpg" }, { dp: "amir.jpg", story: "sal.jpg" }]

var clutter = ""
arr.forEach((elem, idx) => {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}"  alt="">
</div>`
});

document.querySelector("#insta").innerHTML = clutter;
document.querySelector("#insta").addEventListener("click", (dets) => {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none"

    },3000)
});