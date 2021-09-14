create database coffeeshop;
use coffeeshop;

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    description VARCHAR(100),
    price DECIMAL(6 , 2 ),
    photo VARCHAR(2083),
    category VARCHAR(10),
    PRIMARY KEY (id)
);

insert into product (name, description, price, photo, category) values ('Black Coffee','Single Origin Ethiopian (12 oz)','3.00','https://www.perfectbrew.com/wp-content/uploads/2021/06/how-to-make-black-coffee-taste-good-XS-1200x675.jpg','HOT');
insert into product (name, description, price, photo, category) values ('Latte','Robusta espresso with steamed whole milk (12 oz)','3.75','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/latte-art-in-a-yellow-cup-on-a-marble-table-royalty-free-image-1592427210.jpg','HOT');
insert into product (name, description, price, photo, category) values ('Cappuccino','Robusta espresso with steamed whole milk (8 oz)','3.50','https://coffeeaffection.com/wp-content/uploads/2021/02/does-a-cappuccino-have-caffeine.jpg','HOT');
insert into product (name, description, price, photo, category) values ('Hot Tea','Choice of green, earl grey, rooibos chai, and english breakfast (12 oz)','3.00','https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_218532663-scaled.jpeg','HOT');
insert into product (name, description, price, photo, category) values ('Cold Brew','Colombian blend brewed overnight (12 oz)','3.50','https://www.thespruceeats.com/thmb/J7rACsF2LG0Fh1H_UbfzvyP7i7k=/2667x2667/smart/filters:no_upscale()/ColdBrewCoffee017-bcdb960a88f94521bb3a64a2f228e740.jpg','COLD');
insert into product (name, description, price, photo, category) values ('Nitro Cold Brew','Colombian blend brewed overnight injected with nitrogen gas (12 oz)','4.25','https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-71225.jpg','COLD');
insert into product (name, description, price, photo, category) values ('Frappuccino','Robusta espresso blended with ice and whole milk (16 oz)','4.00','https://addapinch.com/wp-content/uploads/2012/10/Homemade-Frappuccino-DSC_0560-2.jpg','COLD');
insert into product (name, description, price, photo, category) values ('Bagel','Plain, everything, asiago, or salted','2.75','https://www.onceuponachef.com/images/2021/02/Bagels-scaled.jpg','FOOD');
insert into product (name, description, price, photo, category) values ('Scone','Raspberry walnut, chocolate chip, or strawberry white chocolate','3.00','https://www.livewellbakeoften.com/wp-content/uploads/2019/08/Scones-Recipe-5.jpg','FOOD');
insert into product (name, description, price, photo, category) values ('Muffin','Double chocolate chip, blueberry, or raisin bran','3.00','https://fitfoodiefinds.com/wp-content/uploads/2019/02/muffin-2-sq.jpg','FOOD');
