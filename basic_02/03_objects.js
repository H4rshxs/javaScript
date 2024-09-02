const Kabir = {
    name :"kabir bot ",
    "father name": "noob bot",
    location: "Amedabaad",
    age:20 ,
    IsloggedIn: false , 
    email:"harsh@google.com",
}
//console.log(Kabir["father name"]);

const instaUser ={}

instaUser.Id = "chirkut__00"
instaUser.Gmail = "yoychikurt@gmail.com"
instaUser.fullname = {
    UserFullname :{ 
        FirstName : "chaman",
        lastname : "chirkut"

    }
}
//console.log(instaUser)

const obj1 = {1: "Harsh", 2: "Pavan",3:"goppu"}
const obj3 = {4:"yoyo", 5:"manthan", 6:"chamn"}
const obj2 = Object.assign({},obj1,obj3)
//console.log(Object.keys(instaUser))
//console.log(Object.values(instaUser))
//console.log(Object.entries(instaUser))

const course = {
    CourceName : "JS" ,
    CourcePrice : "7Caror",
    Instructor: "RonakSir"
}

//console.log(course.CourceName)
const {Instructor} = course
console.log(Instructor)