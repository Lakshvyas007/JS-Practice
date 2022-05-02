console.log("Omkayy");

const Arr = ["Apples", "Grapes", "Oranges", "Bhindi"];

function fruitsIterator(values) {
    let nextIndex = 0;
    //We will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We eill return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done 
                return {
                    done: true
                }
            }
        }

    }
}

console.log("My array is ", Arr);