window.onload = function() {
    let testimonials_1 = [
        { image: "Images/ranil.jpg", title: "WHAT", name: "Ranil Wickramasinghe", text: "BuyAnything.com exceeded my expectations! The site is easy to navigate, the delivery is super fast, and the quality of the products is outstanding. I’m a loyal customer now. Highly recommended!" },
        { image: "Images/mahinda.jpg", title: "PROFESSIONALS", name: "Mahinda Rajapakse", text: "Shopping at BuyAnything.com is a dream! The seamless browsing experience, swift delivery, and top-notch products make it my favorite beauty destination. Five stars every time!" },
        { image: "Images/putin.jpg", title: "SAY", name: "Vladimir Putin", text: "I love BuyAnything.com! The website is user-friendly, delivery is speedy, and the products are fantastic. I’ve never been disappointed. Five-star service all around!" },
        { image: "Images/trump.jpg", title: "ABOUT US", name: "Donald Trump", text: "BuyAnything.com makes my beauty routine effortless. The easy browsing, quick shipping, and amazing products keep me coming back. A five-star experience through and through!" }
    ];

    let testimonials_2 = [
        { image: "Images/GalElec.png", title: "VIEW", name: "Electronics", text: "Our electronics line is engineered with precision and innovation, offering top-tier performance and cutting-edge technology that seamlessly integrates into your lifestyle. Whether it's enhancing your home entertainment experience or boosting your productivity, our products deliver unparalleled reliability and functionality, empowering you to stay connected and achieve your goals effortlessly." },
        { image: "Images/GalFashion.png", title: "OUR", name: "Fashion", text: "Our fashion collection is designed with a blend of elegance and contemporary style, offering unique pieces that reflect your individuality. Each garment is crafted with high-quality materials and attention to detail, ensuring comfort and durability. Whether you're dressing for a casual outing or a formal event, our fashion line provides the perfect combination of sophistication and trendiness, allowing you to express yourself with confidence and flair." },
        { image: "Images/GalGrocery.png", title: "BEST", name: "Groceries", text: "Our grocery selection delivers the freshest and finest ingredients straight to your doorstep. From farm-fresh produce to premium pantry staples, we prioritize quality and sustainability. Our range includes organic options, locally sourced goods, and international favorites. Whether you're preparing a gourmet meal or a quick snack, our groceries are curated to meet all your culinary needs, making healthy and delicious eating convenient and enjoyable." },
        { image: "Images/GalWine.png", title: "PRODUCTS", name: "Wines and Spirits", text: "Our Wines and Spirits collection offers a curated selection of premium beverages to elevate any occasion. From rich, full-bodied wines to smooth, refined spirits, each bottle promises exceptional quality and taste. Whether you're toasting a special moment or simply unwinding, our range ensures a perfect pour every time. Enjoy the finest selections delivered to your doorstep, making every sip a celebration." }
    ];

    let container_1 = document.querySelector('.container_1');
    let container_2 = document.querySelector('.container_2');

    testimonials_1.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_1.appendChild(box);
    });

    testimonials_2.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_2.appendChild(box);
    });

    function createTestimonialBox(testimonial) {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.src = testimonial.image;
        image.alt = testimonial.gal;

        const span = document.createElement('span');
        span.textContent = testimonial.title;

        const hvrDiv = document.createElement('div');
        hvrDiv.classList.add('hvr');

        const h1 = document.createElement('h1');
        h1.textContent = testimonial.name;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        hvrDiv.appendChild(h1);
        hvrDiv.appendChild(p);

        box.appendChild(image);
        box.appendChild(span);
        box.appendChild(hvrDiv);

        return box;
    }
};