//window.addEventListener('click', playfreq);

function playNotefreq(e) {
    //var x = e.clientX;
    //var y = e.clientY;

    var context = new AudioContext()
    var o = context.createOscillator()
    var frequency = e;

    o.frequency.value = frequency
    o.connect(context.destination)
    o.start();
    o.stop(context.currentTime + 0.5);

}

function test(){

    let a = 10;
    let b = a;
    a=0;
    //alert ("a="+a);
    //alert ("b="+b);

}