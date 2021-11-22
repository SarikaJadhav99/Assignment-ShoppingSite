    function FetchData(){
        fetch('https://fakestoreapi.com/products')
    .then((response) => { return response.json()})

    .then((responseData) => {return buildProductsList(responseData)})
    }
    
    function buildProductsList(products)
    {
        let items="";

        for (let product of products) {
            items += `<div class="item1">
            
            <div class="select"><input type="checkbox" value = ${product.title} name = "title" onclick="AddToCart()"></div>
            <div class="images"><img src="${product.image}" height=120px ></div>
            <div class="price"><p>₹${product.price}</p></div>
    
            <div class="title"><h3>${product.title}</h3></div>
            <div class="desscription"><p>${product.description}</p></div>
            <div class="category"><p>${product.category}</p></div>
            </div>`
        }
        document.getElementById("product").innerHTML = item1;
    }

    function AddToCart()
    {
        var checkboxes  = document.getElementsByName("title");
        var cartItems = document.getElementById("cart");

        for (let item of checkboxes) 
        {
            var list = document.createElement("div");
            
            if(item.checked == true)
            {
                list.innerHTML = item.value;
                cartItems.appendChild(list)
            }
        }
    }