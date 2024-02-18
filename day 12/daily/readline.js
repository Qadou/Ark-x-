let readline = require('readline');
let rl = readline.createInterface(process.stdin,process.stdout);
let dt = require('./data.json');//like database
let fs = require('fs');
function main() {
console.log(" 1) add a person \n 2) display the data \n 3) search by name \n 4) exit")
rl.question('Enter the number of your choice: ', (action) => {
    switch (action) {
        case '1':
            add() ;
            break;
        case '2':
            aff();
            break;
        case '3':
            search();
            break;
        case '4':
            exit();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            promptForAction();
    }
});}

 function add (){
    rl.question("your name : ",(name)=>{
    rl.question("Your Phone Number : ",(phone)=>{
        
     dt.push({name,phone})
     fs.writeFile('./data.json',JSON.stringify(dt),
        (error)=>{if (error){crossOriginIsolated.error(error)}});
       main();

    
    })
})};
function aff(){
    console.log(dt);
    
    main();

}
function search(){
   
    rl.question('search a contact with name : ',(x) => {
        let b= dt.filter((s)=>s.name==x)
        if(b.length> 0 ){      
        console.log(b)
        }
        else {
            console.log("name does not exist")
        }
           main();

     })
}
function exit (){
    rl.close(); 

}
main();


