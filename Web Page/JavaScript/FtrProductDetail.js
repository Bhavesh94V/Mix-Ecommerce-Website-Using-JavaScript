document.addEventListener('DOMContentLoaded', function () {
    const FtrProducts = [{
        id: 'product1',
        img: 'Imgs/filter-products/1-224x260.jpg',
        title: "Iphone 11 Pro Max",
        price: "$241.99",
        stock: 6,
        category: 'latest'
    },
    {
        id: 'product2',
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRjSiWhNhVAXyJ-vMCpY0aNDBMdnvkmFfgaZtqzFhgid1Kv6tm27VDiAz5i4PyLwba_w&usqp=CAU",
        title: "Fastrack Analog Watch (Plus Features)",
        price: "$122.00",
        stock: 5,
        category: 'best-seller'
    },
    {
        id: 'product3',
        img: 'Imgs/product-slider-img/3-224x260.jpg',
        title: "Juniper Trail Running Bag",
        price: "$2000.00",
        stock: 10,
        category: 'special'
    },
    {
        id: 'product4',
        img:
            'https://static.wixstatic.com/media/70841d_413571c313774478933a3262f72f835a~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/70841d_413571c313774478933a3262f72f835a~mv2.png',
        title: "IPhone 12 Pro Max (Premium Product)",
        price: "$602.00",
        stock: 5,
        category: 'latest'
    },
    {
        id: 'product5',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGZjYoGAucaCujzsBeSVzFsJBg1Aon99pCA&s',
        title: "Iphone 14 Pro Max (Plus Features)",
        price: "$122.00",
        stock: 7,
        category: 'latest'
    },
    {
        id: 'product6',
        img: 'https://img0.junaroad.com/uiproducts/18689620/zoom_0-1669009918.jpg',
        title: "V2A Chronograph Digital Watch",
        price: "$241.99",
        stock: 6,
        category: 'best-seller'
    },
    {
        id: 'product7',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aCUmODOzFwLcarZjO8Z1P_r5sIVdTr-5gZijqlVMCtU_hmDCZZ_KPcufEsuLm2tLH3A&usqp=CAU',
        title: "Skybags Casual Backpack ",
        price: "$122.00",
        stock: 9,
        category: 'special'
    },
    {
        id: 'product8',
        img:
            'https://assets.ajio.com/medias/sys_master/root/20230705/I4eV/64a4e51deebac147fc4d51e4/-473Wx593H-464375705-silver-MODEL.jpg',
        title: "Premium Mens Watch",
        price: "$2,000.00",
        stock: 5,
        category: 'best-seller'
    },
    {
        id: 'product9',
        img:
            'https://images.hindustantimes.com/tech/htmobile4/P35953/images/Design/143993-v4-apple-iphone-14-mobile-phone-large-2.jpg',
        title: "Iphone 15 Pro Max (Premium Product)",
        price: "$102.00",
        stock: 5,
        category: 'latest'
    },
    {
        id: 'product10',
        img: 'https://images-cdn.ubuy.co.in/6539bc6ef7abb631fa5492f4-one-hand-mechanical-wrist-watch-mens.jpg',
        title: "INVICTO T800 Ultra Watch",
        price: "$122.00",
        stock: 3,
        category: 'best-seller'
    },
    {
        id: 'product11',
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJC8kIG7GeY1Ll1hZpHIRdsSOilcbVkcI_97d4pMBvID8YqvAsiVXRr9ZbasGLjjkSvU&usqp=CAU',
        title: "Safari Omega spacious Bag",
        price: "$602.00",
        stock: 5,
        category: 'special'
    },
    {
        id: 'product12',
        img: 'https://m.media-amazon.com/images/I/61yMAsvoVSL._AC_UY1100_.jpg',
        title: "Beoplay A1 Sand Bag",
        price: "$122.00",
        stock: 3,
        category: 'special'
    }];

    function getProductIDFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    function findProductByID(productId) {
        return FtrProducts.find(product => product.id === productId) || null;
    }

    function displayProductDetails(product) {
        const container = document.querySelector('.product-detail');
        const image = container.querySelector('img');
        const title = container.querySelector('h1');
        const price = container.querySelector('p:nth-of-type(1)');
        const category = container.querySelector('p:nth-of-type(2)');
        const stock = document.getElementById('stock');
        const quantityInput = document.getElementById('quantity');
        const addToCartButton = document.getElementById('add-to-cart');

        if (!product) {
            container.innerHTML = '<p>Product not found.</p>';
            return;
        }

        image.src = product.img;
        title.textContent = product.title;
        price.textContent = 'Price: ' + product.price;
        category.textContent = 'Category: ' + product.category;
        stock.textContent = 'Available Stock: ' + product.stock;

        if (product.stock === 0) {
            addToCartButton.disabled = true;
            addToCartButton.textContent = 'Out of Stock';
        }

        price.setAttribute('data-price', product.price.replace('$', ''));

        quantityInput.addEventListener('input', () => {
            checkStockAvailability(product.stock, quantityInput.value, addToCartButton);
        });

        checkStockAvailability(product.stock, quantityInput.value, addToCartButton);
    }

    function checkStockAvailability(stock, quantity, button) {
        if (parseInt(quantity, 10) > stock) {
            button.disabled = true;
            button.textContent = 'Out of Stock';
        } else {
            button.disabled = false;
            button.textContent = 'Add to Cart';
        }
    }

    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    function addProductToCart(product, quantity) {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
            showErrorMessage();
        } else {
            cart.push({ ...product, quantity });
            localStorage.setItem('cartItems', JSON.stringify(cart));
            showSuccessMessage();
        }

        updateTotalPrice(product.price, quantity);
    }

    function updateTotalPrice(price, quantity) {
        const totalPriceElement = document.getElementById('total-price');
        const priceValue = parseFloat(price.replace('$', ''));
        const totalPrice = priceValue * quantity;

        totalPriceElement.textContent = 'Total: $' + totalPrice.toFixed(2);
    }

    function showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    }

    function showErrorMessage() {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }

    document.getElementById('add-to-cart').addEventListener('click', () => {
        const productId = getProductIDFromURL();
        const product = findProductByID(productId);

        if (!product) return;

        const quantity = parseInt(document.getElementById('quantity').value, 10);
        if (quantity > product.stock) return;

        addProductToCart(product, quantity);
    });

    const productId = getProductIDFromURL();
    const product = findProductByID(productId);
    displayProductDetails(product);
});