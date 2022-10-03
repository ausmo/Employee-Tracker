
let {prompt} = require("inquirer")
const db = require("./db")
require("console.table")
const logo = require("asciiart-logo");


init()
function init(){
    const logoText = logo({name:"Employee Tracker"}).render()
    console.log(logoText)
    loadMainPrompts()
}
function loadMainPrompts(){
    prompt([
        {
            type:"list", 
            name:"choice",
            message:"What would you like to do?",
            choices:[
                {
                    name:"view all employees",
                    value:"VIEW_EMPLOYEES"
                },
                {
                    name:"quit",
                    value:"QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch(choice){
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
                default:
                    quit()
        }
    })
}
function viewEmployees(){
    db.findAllEmployees().then(([rows])=>{
        let employees = rows;
        console.log("/n")
        console.table(employees)
    })
    .then(()=>loadMainPrompts(quit))
}
function quit(){
    console.log("goodbye")
    process.exit()
}