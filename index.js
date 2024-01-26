const API_URL = "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        const featured_image = data.featured_image;
        const images = data.images;
        const description = data.description;
        const title = data.title;
        const vendor = data.vendor;
        const colors = data.options[0].values;
        const price = data.price/100;
        const compare_at_price = data.compare_at_price/100;
        const formatDolar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })        
        var priceformat = formatDolar.format(price);
        var price_max_format = formatDolar.format(compare_at_price);

        document.querySelector(".description-product").innerHTML = description;
        document.querySelector(".breadCrumb").innerHTML = 'Catalog / '+vendor+' / <strong>'+title+'</strong>';
        document.querySelector(".title-order").innerHTML = '<strong>Producto: </strong>'+title;
        document.querySelector(".name-product").innerHTML = title;
        document.querySelector(".brand").innerHTML = 'By '+vendor;
        document.querySelector(".price").innerHTML = priceformat;
        document.querySelector(".price-order").innerHTML = '<strong>Valor unitario: </strong>'+priceformat;
        document.querySelector(".price-full").innerHTML = price_max_format;
        document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformat+'</strong>';

        let image_featured = "";
        images.shift();
        images.forEach(image_t1);
        document.querySelector(".image_featured").innerHTML = image_featured;
        function image_t1(featured_image) {
            image_featured += '<img class="props img_carusel_cont" src="'+'https:'+featured_image+' " alt="" style="display: none;">';
        }
        document.querySelector("div.dot:nth-child(1)").click();

        let image_thumbnail = "";
        images.shift();
        images.forEach(image_t);
        document.querySelector(".image_thumbnail").innerHTML = image_thumbnail;
        function image_t(value) {
            image_thumbnail += '<img class="thumbnail img_carusel_cont" src="'+'https:'+value+'" alt="">';
        }  

        let color_checkbox = "";
        let c =  0;
        colors.forEach(myFunction);
        document.querySelector(".color-1").innerHTML = color_checkbox;
        function myFunction(value) {
            c = c+1;
            color_checkbox += '<label class="container_color" id="c'+c+'"><span class="o">.</span><input type="checkbox" id="'+value+'" onclick="javascript: '+value+'()"><span class="checkmark_'+value+'"></span></label>';
        } 
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}`);
xhr.send();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img_carusel_cont");
    let dots = document.getElementsByClassName("dot");
    

    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

    
}

var i = 1; 
var total = 285.00;
const formatDolarPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
function contposi(){ 
    i = i + 1; 
    var cant = document.getElementById("cantidad"); 
    cant.value = i;
    var restotal = total*i;
    var priceformatt = formatDolarPrice.format(restotal);
    document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformatt+'</strong>'; 
    document.querySelector(".qty-order").innerHTML = '<strong>Cantidad: </strong>'+i;
    document.querySelector(".total-order").innerHTML = '<strong>TOTAL: </strong>'+priceformatt;
}
function contnega(){ 
    if(i>=2){
        i = i - 1; 
        var cant = document.getElementById("cantidad"); 
        cant.value = i;
        var restotal = total*i;
        var priceformatt = formatDolarPrice.format(restotal);
        document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformatt+'</strong>';
        document.querySelector(".qty-order").innerHTML = '<strong>Cantidad: </strong>'+i;
        document.querySelector(".total-order").innerHTML = '<strong>TOTAL: </strong>'+priceformatt;
    }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var colorOrder = "Select the color";
document.querySelector(".color-order").innerHTML = '<strong>Color: </strong>'+colorOrder;
function Red(){   
    document.getElementById("Red").checked = true; 
    document.getElementById("Black").checked = false; 
    colorOrder = "Red";
    document.querySelector(".color-order").innerHTML = '<strong>Color: </strong>'+colorOrder;
}
function Black(){  
    document.getElementById("Red").checked = false; 
    document.getElementById("Black").checked = true; 
    colorOrder = "Black";
    document.querySelector(".color-order").innerHTML = '<strong>Color: </strong>'+colorOrder;
}