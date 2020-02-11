function List() {

    function Node(val) {
        this.prev = null;
        this.value = val;
        this.next = null;

    }


    List.prototype.add = function (...theArgs) {

        //for (theArgs.forEach( elemval in theArgs))
        for (var val of theArgs) {
            var newNode = new Node(val);
            if (this.head == null)
                this.head = newNode;
            else {
                this.tail.prev = this.head;
                this.tail.next = newNode;
            }

            this.tail = newNode;
        }
    }

    List.prototype.printforward = function () {
        for (var current = this.head; current != null; current = current.next) {
            console.log(current.value);

        }
    }

    List.prototype.printreverse = function () {
        for (var current = this.tail; current != null; current = current.prev) {
            console.log(current.value);

        }
    }

}


var Objlist = new List();
Objlist.add(45, 50, 67, 78, 89); // thanks to args rest param
Objlist.add(50);
Objlist.add(55);
Objlist.add(65);
Objlist.add(75);
Objlist.add(85);

Objlist.printforward();
console.log("print list reverse now");
Objlist.printreverse();