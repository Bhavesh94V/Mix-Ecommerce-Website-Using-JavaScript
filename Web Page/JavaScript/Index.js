// Cart Section And Login SignUp
document.addEventListener('DOMContentLoaded', function () {

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    document.getElementById('userInfo').innerHTML = `
                                            <p>Email: ${storedEmail ? storedEmail : 'Not found'}</p>
                                            <p>Password: ${storedPassword ? storedPassword : 'Not found'}</p>
                                        `;

    document.getElementById('ValidLogin').addEventListener('click', function () {

        const emailInput = document.getElementById('exampleInputEmail1').value.trim();
        const passwordInput = document.getElementById('exampleInputPassword1').value.trim();

        if (storedEmail && storedPassword) {
            if (emailInput === storedEmail && passwordInput === storedPassword) {
                alert("Login Successful");
            } else {
                alert("Incorrect email or password. Please try again.");
            }
        } else {
            alert("No account found. Please create a new account.");
        }
    });
});




let indeX = 0
function updateCartCounter() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, indeX);
    document.getElementById('cartCounter').textContent = cartCount;
}

document.addEventListener('DOMContentLoaded', updateCartCounter);
// Cart Section And Login SignUp


// Slider Section
let slider = {
    slides: document.querySelectorAll('.slide'),
    currentSlide: 0,

    init: function () {
        if (!this.slides.length) {
            console.log("Not Found");
            return;
        }
        this.showSlides(this.currentSlide);
    },

    showSlides: function (index) {
        this.slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        this.slides[index].style.display = 'block'
    },

    next: function () {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlides(this.currentSlide)
    },

    prev: function () {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlides(this.currentSlide)
    }
}
slider.init();
// Slider Section


// Product Section
const products = [
    {
        img: "Imgs/product-slider-img/slide-1.jpg",
        title: "Iphone 11 Pro Max Price In Qatar",
    },
    {
        img: "Imgs/product-slider-img/slide-2.jpg",
        title: "H&M Divided Short Slive Men T-Shirt",
    },
    {
        img: "Imgs/product-slider-img/slide-3.jpg",
        title: "Comfortable Nike Bag",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRjSiWhNhVAXyJ-vMCpY0aNDBMdnvkmFfgaZtqzFhgid1Kv6tm27VDiAz5i4PyLwba_w&usqp=CAU",
        title: "Fastrack Analog Watch",
    },
    {
        img: "https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg",
        title: "Priemum Nike Shoes",
    },
    {
        img: "https://imagescdn.thecollective.in/img/app/product/9/924920-11665737.jpg?w=500&auto=format",
        title: "Marks & Spencer",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGZjYoGAucaCujzsBeSVzFsJBg1Aon99pCA&s",
        title: "Iphone 11 Pro Max Price In Qatar",
    }
];

const sliderWrapper = document.getElementById('slider-wrapper');
const slideWidth = 320;
let currentIndex = 0;

function createCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    img.classList.add("ProductWatchSlid");
    card.appendChild(img);

    const titleElement = document.createElement('p');
    titleElement.innerHTML = `<strong>Title:</strong> ${product.title}`;
    card.appendChild(titleElement);

    return card;
}

function renderSlider() {
    sliderWrapper.innerHTML = '';
    products.forEach(product => {
        sliderWrapper.appendChild(createCard(product));
    });
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
}

function nextSlide() {
    if (currentIndex < products.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

renderSlider();

// Product Section

// Filter Products
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.querySelectorAll(".product");
    const productnames = document.getElementsByTagName("h2");

    for (let i = 0; i < productnames.length; i++) {
        let match = products[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}

const FtrProducts = [
    {
        id: 'product1',
        img: 'Imgs/filter-products/1-224x260.jpg',
        title: "Iphone 11 Pro Max",
        price: "$241.99",
        category: 'latest'
    },
    {
        id: 'product2',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRjSiWhNhVAXyJ-vMCpY0aNDBMdnvkmFfgaZtqzFhgid1Kv6tm27VDiAz5i4PyLwba_w&usqp=CAU",
        title: "Fastrack Analog Watch (Plus Features)",
        price: "$122.00",
        category: 'best-seller'
    },
    {
        id: 'product3',
        img: 'Imgs/product-slider-img/3-224x260.jpg',
        title: "Juniper Trail Running Bag",
        price: "$2,000.00",
        category: 'special'
    },
    {
        id: 'product4',
        img: 'https://static.wixstatic.com/media/70841d_413571c313774478933a3262f72f835a~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/70841d_413571c313774478933a3262f72f835a~mv2.png',
        title: "IPhone 12 Pro Max (Premium Product)",
        price: "$602.00",
        category: 'latest'
    },
    {
        id: 'product5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGZjYoGAucaCujzsBeSVzFsJBg1Aon99pCA&s',
        title: "Iphone 14 Pro Max (Plus Features)",
        price: "$122.00",
        category: 'latest'
    },
    {
        id: 'product6',
        img: 'https://img0.junaroad.com/uiproducts/18689620/zoom_0-1669009918.jpg',
        title: "V2A Chronograph Digital Watch",
        price: "$241.99",
        category: 'best-seller'
    },
    {
        id: 'product7',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aCUmODOzFwLcarZjO8Z1P_r5sIVdTr-5gZijqlVMCtU_hmDCZZ_KPcufEsuLm2tLH3A&usqp=CAU',
        title: "Skybags Casual Backpack ",
        price: "$122.00",
        category: 'special'
    },
    {
        id: 'product8',
        img: 'https://assets.ajio.com/medias/sys_master/root/20230705/I4eV/64a4e51deebac147fc4d51e4/-473Wx593H-464375705-silver-MODEL.jpg',
        title: "Premium Mens Watch",
        price: "$2,000.00",
        category: 'best-seller'
    },
    {
        id: 'product9',
        img: 'https://images.hindustantimes.com/tech/htmobile4/P35953/images/Design/143993-v4-apple-iphone-14-mobile-phone-large-2.jpg',
        title: "Iphone 15 Pro Max (Premium Product)",
        price: "$102.00",
        category: 'latest'
    },
    {
        id: 'product10',
        img: 'https://images-cdn.ubuy.co.in/6539bc6ef7abb631fa5492f4-one-hand-mechanical-wrist-watch-mens.jpg',
        title: "INVICTO T800 Ultra Watch",
        price: "$122.00",
        category: 'best-seller'
    },
    {
        id: 'product11',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJC8kIG7GeY1Ll1hZpHIRdsSOilcbVkcI_97d4pMBvID8YqvAsiVXRr9ZbasGLjjkSvU&usqp=CAU',
        title: "Safari Omega spacious Bag",
        price: "$602.00",
        category: 'special'
    },
    {
        id: 'product12',
        img: 'https://m.media-amazon.com/images/I/61yMAsvoVSL._AC_UY1100_.jpg',
        title: "Beoplay A1 Sand Bag",
        price: "$122.00",
        category: 'special'
    }
];

const productContainer = document.getElementById('product-container');

function createCard(product) {
    const card = document.createElement('div');
    const viewlinkpro = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 product';
    card.setAttribute('data-category', product.category);

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.title;
    img.className = "IMGProductLink"
    card.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement('p');
    price.textContent = product.price;
    card.appendChild(price);
    card.setAttribute("id", "ViewProlink")

    const viewProductLink = document.createElement('a');
    viewProductLink.href = 'FtrProductDetail.html?id=' + product.id;
    viewProductLink.textContent = 'View Product';
    viewProductLink.className = "ViewProductLink";
    viewlinkpro.appendChild(viewProductLink);
    card.appendChild(viewlinkpro);
    viewlinkpro.className = "ViewProlink";

    return card;
}

function renderProducts(productsToRender) {
    productContainer.innerHTML = '';
    productsToRender.forEach(product => {
        productContainer.appendChild(createCard(product));
    });
}

function filterProducts(category) {
    if (category === 'all') {
        renderProducts(FtrProducts);
    } else {
        const filteredProducts = FtrProducts.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Add click event listeners to filter buttons
document.getElementById('filter-all').onclick = function () {
    filterProducts('all');
    setActiveFilter('filter-all');
};
document.getElementById('filter-latest').onclick = function () {
    filterProducts('latest');
    setActiveFilter('filter-latest');
};
document.getElementById('filter-best-seller').onclick = function () {
    filterProducts('best-seller');
    setActiveFilter('filter-best-seller');
};
document.getElementById('filter-special').onclick = function () {
    filterProducts('special');
    setActiveFilter('filter-special');
};

// Function to set active filter button
function setActiveFilter(activeId) {
    var filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(function (button) {
        button.classList.remove('active');
    });
    document.getElementById(activeId).classList.add('active');
}

// Initially show all products
renderProducts(FtrProducts);

// Add search functionality
document.getElementById("search-item").addEventListener("keyup", search);
// Filter Products




