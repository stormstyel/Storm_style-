const products=[
["هودي ستايل كاجوال","هودي",320,"🧥"],["تيشيرت قطن فاخر","تيشيرتات",180,"👕"],["بنطلون جينز كلاسيك","بنطلونات",450,"👖"],
["جاكيت شتوي","جاكيتات",650,"🧥"],["حذاء رياضي مريح","أحذية",550,"👟"],["بدلة رسمية","بدلات رسمية",1200,"🤵"],
["هودي أسود فاخر","هودي",390,"🧥"],["تيشيرت ستورم","تيشيرتات",220,"👕"],["جينز شبابي","بنطلونات",420,"👖"],["جاكيت ستورم","جاكيتات",700,"🧥"],["سنيكرز أبيض","أحذية",590,"👟"],["بدلة ستورم","بدلات رسمية",1350,"🤵"]
];
let cart=[];let activeCat="الكل";
const grid=document.getElementById("grid");
function render(list=products){
 grid.innerHTML=list.map((p,i)=>`<article class="card"><div class="card-img">${p[3]}</div><div class="card-body"><h3>${p[0]}</h3><div class="price">${p[2].toLocaleString()} جنيه</div><button class="add" onclick="add(${i})">🛒 أضف إلى السلة</button></div></article>`).join("");
}
function filterCat(cat){activeCat=cat;render(products.filter(p=>p[1]===cat));document.getElementById("products").scrollIntoView({behavior:"smooth"});}
document.getElementById("search").addEventListener("input",e=>{const q=e.target.value.trim();render(products.filter(p=>(activeCat==="الكل"||p[1]===activeCat)&&p[0].includes(q)));});
function add(i){cart.push(products[i]);updateCart();openCart();}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p[3]} ${p[0]}</span><b>${p[2]} ج</b><button onclick="removeItem(${i})">✕</button></div>`).join(""):"<p>السلة فارغة.</p>";
 document.getElementById("total").textContent=cart.reduce((s,p)=>s+p[2],0).toLocaleString();
}
function removeItem(i){cart.splice(i,1);updateCart();}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("shade").classList.add("show");}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("shade").classList.remove("show");}
function checkout(){
 if(!cart.length)return alert("أضف منتجًا أولاً.");
 const text="مرحبًا STORM STYLE، أريد طلب:%0A"+cart.map(p=>`- ${p[0]} (${p[2]} جنيه)`).join("%0A")+`%0Aالإجمالي: ${cart.reduce((s,p)=>s+p[2],0)} جنيه`;
 window.open("https://wa.me/201213985655?text="+text,"_blank");
}
render();updateCart();