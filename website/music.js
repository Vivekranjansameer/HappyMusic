const myupdatetime=document.getElementById('mytimeupdate');
function happy() {
    
    setInterval(() => {
        const mytime=new Date().toLocaleTimeString()
        myupdatetime.innerText=mytime
    }, 1000);
 
}
happy()
const About=document.querySelector('.About')
About.addEventListener('click' ,()=>{
    location.href="About.html"
})
const Home=document.querySelector('.Home')
Home.addEventListener('click' ,()=>{
    location.href="Music.html"
})
const Contact=document.querySelector('.Contact')
Contact.addEventListener('click' ,()=>{
    location.href="Contact.html"
})
const Product=document.querySelector('.Products')
Product.addEventListener('click' ,()=>{
    location.href="https://www.flipkart.com/search?q=music+set&sid=ypu%2Calc%2C3d4%2C4xn&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=music+set%7CMicrophone+Accessories&requestId=88b0f797-f8bf-4ed8-9d4d-b1e82f1e6378&as-searchtext=music%20"
})