function getData(){

    let request = "https://raw.githubusercontent.com/shindeabhi27/assignment3/main/product_details.json";

fetch(request).then((response) => {
    return response.json();

}).then((products) => {
    //Printing the objects.
    console.log(products);

    const html = products.Item.map(user => {

        return `Deals: ${user.id} 
        <div class="container-fluid" >
                        
            <img src="${user.url}" class="img-fluid media-img" style="height: 500px; width: 500px" >
            
              <a href="#" class="tm-article-link"><a href="#" class="tm-article-link"><h3 class="tm-article-title text-uppercase">${user.product_name}</h3></a>
              <p>${user.price} </p>
             <div class="tm-media-body"> ${user.description}</div></div>`;
        
    }).join("");

    console.log(html);
    document.querySelector('article').insertAdjacentHTML('afterbegin', html);


}).catch(error => {
    console.log(error);
})

}

getData();