const shirts = [
    {
        id: '1',
        name: 'Check Shirt',
        url: 'https://media.istockphoto.com/photos/red-plaid-shirt-picture-id498852901?k=20&m=498852901&s=612x612&w=0&h=eMSXW6GDPLsVb39C_V8Uc245jPNDZzDMWxdPVE4y9Tc=',
        price: 950,
    },
    {
        id: '2',
        name: 'Full Shirt Blue',
        url: 'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
        price: 750,
    },
    {
        id: '3',
        name: 'Designed Shirt',
        url: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2013/7/Seller/1333875/Images/1333875_0_201307111038550000000.jpg',
        price: 800,
    },
    {
        id: '4',
        name: 'Red Shirt',
        url: 'https://www.lerevecraze.com/wp-content/uploads/customer-registration/d49d1fda9e8ee79968b4484e76ba349b.jpg',
        price: 1250,
    },
    {
        id: '5',
        name: 'Navy Blue Shirt',
        url: 'https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/jpeg_DKSTQGzPx5U6zM.jpg',
        price: 1200,
    },
    {
        id: '6',
        name: 'Red T shirt',
        url: 'https://www.banksford.co.uk/wp-content/uploads/2016/06/UC302-flat-tshirt.png',
        price: 300,
    },
    {
        id: '7',
        name: 'Black T Shirt',
        url: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F76%2Fb9%2F76b9766522a63ae801ea85945b18ec9289e743de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 288,
    },
    {
        id: '8',
        name: 'Yellow T Shirt',
        url: 'data:image/jpeg;base64,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',
        price: 225,
    },
    {
        id: '9',
        name: 'White T Shirt',
        url: 'https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg',
        price: 150,
    },
    {
        id: '10',
        name: 'Panjabi Black',
        url: 'https://static.aadi.com.bd/__sized__/products/2919-14960-panjabi-black-m-c-s-30925-1-crop-c0-5__0-5-510x510-70.jpg',
        price: 1300,
    },
    {
        id: '11',
        name: 'Panjabi Blue',
        url: 'https://handaaz.com.bd/wp-content/uploads/2021/05/a-6.png',
        price: 1200,
    },
    {
        id: '12',
        name: 'Panjabi Pink',
        url: 'https://centerpoint.com.bd/wp-content/uploads/2021/01/Centerpoint-Exclusive-Panjabi-For-Men-tea-rose-color.jpg',
        price: 1500,
    }
]
//Product Generate
function generateProducts() {
    let showcase = document.querySelector(".products__showcase");
    let row = document.createElement("div");
    row.classList.add("products__row")
    shirts.forEach(shirt => {
        let productEach = document.createElement("div");
        productEach.classList.add("products__each");
        productEach.setAttribute('id', shirt.id);
        let productsEachImage = document.createElement("div");
        productsEachImage.classList.add("products__each--image");
        let img = document.createElement('img');
        img.id = shirt.id;
        img.src = shirt.url;
        productsEachImage.appendChild(img);
        let productsEachName = document.createElement("div");
        productsEachImage.classList.add("products__each--name");
        let name = document.createTextNode(shirt.name.substr(0, 7) + ' ...');
        productsEachName.appendChild(name);
        productEach.appendChild(productsEachImage);
        productEach.appendChild(productsEachName);
        row.appendChild(productEach);
    })
    showcase.appendChild(row);
}
generateProducts();
var selected = [];
let cartHead = document.querySelector(".cart__head");
let AddCustomer = document.createElement("div");
AddCustomer.classList.add("cart__head--AddCustomer");
let persondiv = document.createElement("div");
let personTag = document.createElement("i");
personTag.classList.add("bi");
personTag.classList.add("bi-person-fill");
persondiv.appendChild(personTag);
AddCustomer.appendChild(persondiv);
let customer = document.createElement("div");
let customerText = document.createTextNode('Add Customers');
customer.appendChild(customerText);
AddCustomer.appendChild(customer);
cartHead.appendChild(AddCustomer);

let subtotalprice = document.querySelector(".subtotal__price");
let totalprice = document.querySelector(".total__price");
let payTotalprice = document.querySelector(".pay__price");


if (selected.length == 0) {
    let nothing = document.createElement("div");
    let nothingText = document.createTextNode("Nothing Selected");
    nothing.classList.add("nothing")
    nothing.appendChild(nothingText);
    cartHead.appendChild(nothing);
    
}


//Add selected to the cart
//if already selected then ignore
const select = document.querySelectorAll('.products__each').forEach((s) => {
    s.addEventListener('click', function () {
        let selectedshirt = shirts.find((shirt) => {
            return shirt.id === this.id;
        })
        let has=false;
        selected.map((sh)=>{
            if(sh.id==selectedshirt.id){
                has=true;
            }
        })
        if(!has){
            selected.push(selectedshirt);
            generateCart(selected);
        }
        
    })
});


//Cart Generate
function generateCart(se) {
    let cartHead = document.querySelector(".cart__head");
    let subtotalprice = document.querySelector(".subtotal__price");
    let totalprice = document.querySelector(".total__price");
    let payTotalprice = document.querySelector(".pay__price");
    cartHead.innerHTML = "";
    let AddCustomer = document.createElement("div");
    AddCustomer.classList.add("cart__head--AddCustomer");
    let persondiv = document.createElement("div");
    let personTag = document.createElement("i");
    personTag.classList.add("bi");
    personTag.classList.add("bi-person-fill");
    persondiv.appendChild(personTag);
    AddCustomer.appendChild(persondiv);
    let customer = document.createElement("div");
    let customerText = document.createTextNode('Add Customers');
    customer.appendChild(customerText);
    AddCustomer.appendChild(customer);
    cartHead.appendChild(AddCustomer);
    let total = 0;
    let subtotal = 0;
    let payprice = 0;
    if(se.length<=0){
        subtotalprice.innerHTML = "BDT" + subtotal;
        payTotalprice.innerHTML = "BDT" + payprice;
        totalprice.innerHTML = "BDT" + total;
    }
    se.forEach((s) => {
        total = total + s.price;
        subtotal = subtotal + s.price;
        payprice = payprice + s.price;
        subtotalprice.innerHTML = "BDT" + subtotal;
        payTotalprice.innerHTML = "BDT" + payprice;
        totalprice.innerHTML = "BDT" + total;
        let CartHeadRow = document.createElement("div");
        CartHeadRow.classList.add("cart__head--row");
        let CartHeadRowImage = document.createElement("div");
        CartHeadRowImage.classList.add("cart__head--row-image");
        let CartHeadRowImageIMG = document.createElement("img");
        CartHeadRowImageIMG.src = s.url;
        CartHeadRowImageIMG.id = s.id;
        CartHeadRowImageIMG.classList.add("cart__head--row-image-img");
        let span = document.createElement("span");
        span.classList.add("cart__head--row-image-count");
        let number = document.createTextNode(1);
        span.appendChild(number);
        CartHeadRowImage.appendChild(CartHeadRowImageIMG);
        CartHeadRowImage.appendChild(span);
        CartHeadRow.appendChild(CartHeadRowImage);
        let namediv = document.createElement("div");
        let name = document.createTextNode(s.name);
        namediv.appendChild(name);
        CartHeadRow.appendChild(namediv);
        let priceDiv = document.createElement("div");
        let price = document.createTextNode(s.price);
        priceDiv.appendChild(price);
        CartHeadRow.appendChild(priceDiv);
        let idiv = document.createElement("div");
        idiv.classList.add("delete");
        idiv.setAttribute('id', s.id);
        let itag = document.createElement("i");
        itag.classList.add("bi");
        itag.classList.add("bi-trash")
        idiv.appendChild(itag);
        CartHeadRow.appendChild(idiv);
        cartHead.appendChild(CartHeadRow);
    })
}

//Delete
document.querySelector('body').addEventListener('click',function(){
    if(selected.length>0){
        document.querySelectorAll(".delete").forEach((s) => {
            s.addEventListener('click', function () {
                selected=selected.filter(shirt=>shirt.id!==this.id);
                generateCart(selected);
            })
        }
        )
    }
})
    



