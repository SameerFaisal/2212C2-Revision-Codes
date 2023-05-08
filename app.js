// let country=[]

// let howMany=+prompt("Enter how many countries you want to enter")
// for(let i=0;i<howMany;i++){
//     country[i]=prompt("Enter country name")
// }


// let sum=0
// for(let i=0;i<1000;i++){
// if(i%3===0&&i%5===0){
//     sum+=i
// }
// }

// console.log(sum)

// let time=+prompt("Enter time in 24 hours format")

// if(time>1200){
//     console.log((time-1200)+"pm")
// }
// else if(time<1200){
//     console.log(time+"am")

// }

// let user=+prompt("Enter a number")
// let sum=0
// for(let i=0;i<=user;i++){
//     sum=sum+i
// }
// console.log(sum)
// function swap(st){
// for(let i=0;i<st.length;i++){
//     if(st[i]===st[i].toUpperCase()){
//         console.log(st[i].toLowerCase())
//     }
//     else if(st[i]===st[i].toLowerCase()){
//         console.log(st[i].toUpperCase())
//     }
// }
// }

// let promp=prompt("Enter a string")
// swap(promp)

// let str=prompt("Enter a string")
// let text=""
// for(let i=str.length-1;i>=0;i--){
//     text=text+str[i]
// }
// if(str.toLowerCase()===text.toLowerCase()){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not Palindrome")
// }
// function full(){
//     let fname=document.getElementById("fn").value
//     let lname=document.getElementById("ln").value
//     let full=fname+" "+lname
//     alert(full)
// }



// function add(){
//     let num1=document.getElementById("num1").value
// let num2=document.getElementById("num2").value
//     let sum=parseFloat(num1)+parseFloat(num2)
//     alert(sum)
// }
// function sub(){
//     let num1=document.getElementById("num1").value
// let num2=document.getElementById("num2").value
//     let sub=num1-num2
//     alert(sub)
// }
// function mul(){
//     let num1=document.getElementById("num1").value
// let num2=document.getElementById("num2").value
//     let mul=num1*num2
//     alert(mul)
// }
// function div(){
//     let num1=document.getElementById("num1").value
// let num2=document.getElementById("num2").value
//     let div=num1/num2
//     alert(div)
// }

// function change(){
//     document.querySelector("#root").classList.add("b")
// }
// function remove(){
//     document.querySelector("#root").setAttribute("class","w")
// }

// let items=["cake", "apple pie", "cookie", "chips", "patties"]
// function search(){
//     let search=document.getElementById("data").value
//     for(let i=0;i<items.length;i++){
//         if(search.toLowerCase()===items[i]){
//             alert("Yes "+search+" is available at index "+i+" in our bakery")
//             break
//         }
//         else{
//             alert("We are sorry "+search+" is not available in our bakery")
//             break
//         }
//     }
// }