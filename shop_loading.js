const articles_data = [
    {
        "nom" : "Table",
        "prix" : "30",
        "image_ref" : "https://www.ikea.com/fr/fr/images/products/ekedalen-table-extensible-chene__0736964_pe740828_s5.jpg?f=s",
        "description" :"c'est une table vrere Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Sit amet luctus venenatis lectus magna. Dui id ornare arcu odio. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus mattis molestie a iaculis at. Ridiculus mus mauris vitae ultricies leo. Nascetur ridiculus mus mauris vitae ultricies leo integer. Nunc aliquet bibendum enim facilisis gravida neque convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Dis parturient montes nascetur ridiculus."
    },
    {
        "nom" : "Prout",
        "prix" : "5",
        "image_ref" : "https://pbs.twimg.com/media/FeQKp8PXEBMSugs?format=jpg&name=360x360",
        "description" :"PROUUUUT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Sit amet luctus venenatis lectus magna. Dui id ornare arcu odio. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus mattis molestie a iaculis at. Ridiculus mus mauris vitae ultricies leo. Nascetur ridiculus mus mauris vitae ultricies leo integer. Nunc aliquet bibendum enim facilisis gravida neque convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Dis parturient montes nascetur ridiculus."
    },
    {
        "nom" : "Caca",
        "prix" : "500",
        "image_ref" : "https://pbs.twimg.com/media/FeQKrYxXEAk9Goh?format=jpg&name=small",
        "description" :"Caca maudit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Sit amet luctus venenatis lectus magna. Dui id ornare arcu odio. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus mattis molestie a iaculis at. Ridiculus mus mauris vitae ultricies leo. Nascetur ridiculus mus mauris vitae ultricies leo integer. Nunc aliquet bibendum enim facilisis gravida neque convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Dis parturient montes nascetur ridiculus."
    },
    {
        "nom" : "Mug Big magz",
        "prix" : "0.50",
        "image_ref" : "https://www.achetezenhautecorreze.fr/38111-home_default/mug-go-mags.jpg",
        "description" :"Caca maudit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Sit amet luctus venenatis lectus magna. Dui id ornare arcu odio. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus mattis molestie a iaculis at. Ridiculus mus mauris vitae ultricies leo. Nascetur ridiculus mus mauris vitae ultricies leo integer. Nunc aliquet bibendum enim facilisis gravida neque convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Dis parturient montes nascetur ridiculus."
    },
    {
        "nom" : "Sépulture de Jérôme",
        "prix" : "12.99",
        "image_ref" : "https://media.discordapp.net/attachments/963980122405363732/1027634874112299058/q7oyevqew4s61.png?width=1193&height=671",
        "description" :"Rip Jérôme mon gars Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque. Sit amet luctus venenatis lectus magna. Dui id ornare arcu odio. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus mattis molestie a iaculis at. Ridiculus mus mauris vitae ultricies leo. Nascetur ridiculus mus mauris vitae ultricies leo integer. Nunc aliquet bibendum enim facilisis gravida neque convallis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Dis parturient montes nascetur ridiculus."
    }
];

function article_load() {
    
    for (let i = 0; i < articles_data.length; i++) {
        let article_name = articles_data[i].nom;
        let article_price = articles_data[i].prix;
        let article_image = articles_data[i].image_ref;
        let article_title = articles_data[i].description;
        build_article(article_name, article_price, article_image, article_title);
    }
}

function build_article(name, price, img_src, desc) {
    const article_section = document.getElementById("article_section");

    const article_build = document.createElement("div");
    article_build.className = "article_block";

    const article_title = document.createElement("div");
    article_title.className = "article_title"

    const article_content = document.createElement("div");
    article_content.className = "article_desc"

    const article_price = document.createElement("div");
    article_price.className = "article_price"

    const article_buy = document.createElement("div");
    article_buy.className = "article_buy";
    article_buy.setAttribute("onclick", "getIP()")

    const article_image = document.createElement("img");
    article_image.setAttribute("src", img_src)
    article_image.className = "img_article"



    article_title.appendChild(document.createTextNode(name));
    article_content.appendChild(document.createTextNode(desc));
    article_price.appendChild(document.createTextNode(price + " €"));
    article_buy.appendChild(document.createTextNode("Acheter"));

    article_build.appendChild(article_title);
    article_build.appendChild(article_content);

    article_build.appendChild(article_image);
    article_build.appendChild(article_price);
    article_build.appendChild(article_buy);
    article_section.appendChild(article_build);

}

const getIP = async () => {
    let ip;
    let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';
    await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
    .then(result => result.json())
    .then(data => {
        ip = data.ip_address;
        alert("ip data.city_address");
    });
};

  

