function hashMap() {

    let array = new Array(16);

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    function getBucketIndex(key) {
        const hashIndex = hash(key);
        let bucketIndex = hashIndex % 16
        return bucketIndex;
    }

    function set(key, value) {
        if (typeof (key) != 'string' || typeof (value) != 'string') {
            throw new Error("key and value must be string!");
        }
        if (key === null || value === null) {
            return null;
        }

        let bucketIndex = getBucketIndex(key);

        if (!array[bucketIndex]) {
            array[bucketIndex] = [];
        }

        let found = false;
        for (let i = 0; i < array[bucketIndex].length; i++) {
            if (array[bucketIndex][i][0] === key) {
                array[bucketIndex][i][1] = value;
                found = true;
            }
        }

        if (!found) {
            array[bucketIndex].push([key, value]);
        }
    }

    function get(key) {
        const bucketIndex = getBucketIndex(key);
        const bucket = array[bucketIndex];

        if (!bucket) {
            console.log("bucket not found!")
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                let value = array[bucketIndex][i][1];
                console.log(`key found: ${value}`)
                return value;
            }
        }

        return null;
    }

    function has(key) {
        const bucketIndex = getBucketIndex(key);
        const bucket = array[bucketIndex];

        if (!bucket) {
            console.log("bucket not found")
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (array[bucketIndex][i][0] === key) {
                return true;
            }
        }
        return false;
    }

    function remove(key) {
        const bucketIndex = getBucketIndex(key);
        const bucket = array[bucketIndex];

        if (!bucket) {
            console.log("bucket not found")
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                console.log("key-value pair is removed.")
                return bucket;
            }
        }
        console.log("key not found");
        return null;
    }

    function length() {
        let count = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                count += array[i].length;
            }
        }

        console.log(count);
        return count;
    }

    function clear() {
        array = new Array(16);
    }

    function keys() {
        let keysArray = [];

        for (let i = 0; i < array.length; i++) {
            const bucket = array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    const key = bucket[j][0];
                    keysArray.push(key);
                }
            }
        }
        console.log(keysArray);
        return keysArray;
    }

    function values() {
        let valuesArray = [];

        for (let i = 0; i < array.length; i++) {
            const bucket = array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    const value = bucket[j][1];
                    valuesArray.push(value);
                }
            }
        }

        console.log(valuesArray);
        return valuesArray;
    }

    function entries() {
        let entriesArray = []
        for (let i = 0; i < array.length; i++) {
            let bucket = array[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    const key = bucket[j][0];
                    const value = bucket[j][1];
                    entriesArray.push(`[${key}, ${value}]`);
                }
            }
        }
        let hashMapStr = `[${entriesArray.join(", ")}]`


        console.log(hashMapStr)
        return hashMapStr;
    }

    return {
        set,
        entries,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
    }

}

const myMap = hashMap();

myMap.set("key", "value");
myMap.set("halo", "great");
myMap.set("john", "smith");
myMap.set("Chuck", "Norris");
myMap.length();
myMap.entries();
myMap.keys();
myMap.values();