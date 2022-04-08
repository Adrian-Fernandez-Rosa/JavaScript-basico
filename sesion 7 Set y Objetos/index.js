
//como escribir en pantalla
//ProcessingInstruction.stdout.write("Dime tu nombre");



process.stdout.write("hola, dime tu nombre \n");

process.stdin.on('data', function(data) {
    process.stdout.write("hola "+ data.toString()+ "\n");
    process.exit();
})