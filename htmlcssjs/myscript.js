function myFunction() {
    let tag = document.getElementsByTagName("LI");
    document.getElementById("para2").innerHTML = /*"veju"*/ tag[1].innerHTML;
}

function changeallpara() {
    let tagp = document.getElementsByTagName('p');

    var num = tagp.length;
    alert('There are ' + num + ' paragraph in this document');
    document.getElementById("para3").innerHTML = /*"veju"*/ tagp[1].innerHTML;
    console.table(tagp);
}


function changename(name) {
    let elements = document.getElementsByName(name);
    let num2 = elements.length
    alert('There are ' + num2 + ' byname in this document');
}


function changeclass(class1) {
    let elements = document.getElementsByClassName(class1); // or:
    let num3 = elements.length
    alert('There are ' + num3 + ' byclass in this document');

}

function addsomenodes() {

    let para = document.createElement("p");
    let node = document.createTextNode("This is new.");
    para.appendChild(node);

    let element = document.getElementById("div1");
    let child = document.getElementById("p1");
    element.insertBefore(para, child);
}


//document.getElementById("myBtn").addEventListener("click", /*displayDate*/document.getElementById("para4").innerHTML = Date());
document.getElementById("myBtn").addEventListener("click", displayDada);
document.getElementById("myBtn").addEventListener("click", displayDate);

window.addEventListener('click', displaycordinates);

function displayDate() {
    document.getElementById("para4").innerHTML = Date();
}

function displayDada() {
    alert("called !");
}

function displaycordinates(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("para1").innerHTML = x;
    document.getElementById("para2").innerHTML = y;
    /*var context = new AudioContext()
    var o = context.createOscillator()
    var frequency = x + y;
    o.frequency.value = frequency
    o.connect(context.destination)
    o.start();
    o.stop(context.currentTime + 3);*/

}
