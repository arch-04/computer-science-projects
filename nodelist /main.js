function nodeList() {
    let head = null;
    let length = 0;

    const append = (value) => {
        if (head === null) {
            head = Node(value);
        } else {
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = Node(value);
        }
        length++;
    }

    const prepend = (value) => {
        newHead = Node(value, head);
        head = newHead;
        length++;
    }
    const size = () => {
        console.log(length)
    }
    const showHead = () => {
        console.log(head.value);
    }

    const showTail = () => {
        current = head;
        while (current.next != null) {
            current = current.next;
        }
        console.log(current.value)
    }

    const byIndex = (index) => {
        if (index < 0) {
            return null;
        }

        let current = head;
        for (let i = 1; i < index; i++) {
            current = current.next;
        }

        if (current === null) {
            return null;
        } else {
            console.log(current.value);
        }
    }

    const pop = () => {
        if (head === null) {
            return null;
        }

        if (head.next === null) {
            const poppedValue = head.value;
            head = null;
            length--;
            return poppedValue;
        }

        let current = head;
        let prev = null;
        while (current.next != null) {
            prev = current;
            current = current.next;
        }

        if (prev != null) {
            prev.next = null;
        }
        length--;
    }

    const contains = (value) => {
        let current = head;
        while (current !== null) {
            if (current.value === value) {
                console.log(true);
                return;
            }
            current = current.next;
        }
        console.log(false)
    }

    const find = (value) => {
        let current = head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                console.log(index);
                return;
            } else {
                index += 1
            }
            current = current.next;
        }
        return console.log(null);
    }

    const toString = () => {
        let current = head;
        let stringList = ""
        while (current != null) {
            stringList += (`( ${current.value} ) -> `);
            current = current.next;

        }
        let nodeNull = (`${null}`);
        stringList += nodeNull;
        console.log(stringList)

    }

    const insertAt = (value, index) => {
        if (0 > index || index > length) {
            console.log('index is out of reach');
            return;
        }

        if (index === 0) {
            prepend(value);
            return;
        }

        if (index === length) {
            append(value);
            return;
        }

        let current = head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const newNode = Node(value, current.next);
        current.next = newNode;
        length++;
    };


    const deleteAt = (index) => {
        if (index < 0 || index > length) {
            console.log('index out of reach')
            return;
        }

        if (index === 0) {
            head = head.next;
            length--;
            return;
        }

        let current = head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
            length--;
            return
        }
    }

    const print = () => {
        current = head;
        while (current != null) {
            console.log(current.value)
            current = current.next;
        }
    }

    return {
        append,
        print,
        prepend,
        showHead,
        showTail,
        byIndex,
        pop,
        size,
        contains,
        find,
        toString,
        insertAt,
        deleteAt
    }
}



function Node(value = null, next = null) {
    return {
        value: value,
        next: next
    }
}

list = nodeList();

list.append(12);
list.append(10);
list.append(1);
list.append(22);
list.prepend(5);
list.pop();
list.print();
list.showHead();
list.showTail();
list.byIndex(2);
list.size();
list.contains(10);
list.find(10);
list.toString();
list.print();
list.toString();
list.size();
list.insertAt(122, 2);
list.deleteAt(1);
list.toString();
list.size();

