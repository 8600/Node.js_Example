function run(a, b, callback) {
    console.log("please wait...");
    setTimeout(function() {
        callback(a + b);
    }, 100);
}
run(5, 10, function(answer) {
    console.log("answer:" + answer);
});