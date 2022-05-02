console.log("Nice");

let l = "Namaste Billo";
// l = undefined;
if (l != undefined) {

    // console.error("This is not undifined");
    // throw new Error("This is not un-defined")
} else {
    console.log("This is undefined");
}

try {
   console.log("We are inside");
   laksh();
} catch (error) {
    console.log("This Bad");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log("This will always run");
}

// Done