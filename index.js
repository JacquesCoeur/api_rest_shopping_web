const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(cors({}));


app.get('/', (req,res)=> {
    res.json([
        {"img":"https://lp2.hm.com/hmgoepprod?set=width[800],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s06/october_2022/1126c/1126C-3x2-bewitch-the-night.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]"},
    ])
})

app.get('/women/blazers', (req,res)=> {
    res.json([
            {
                "name":'Oversized single-breasted blazer',     
                "price":34.99,         
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2F89%2F6e89226eaab2371698df0b80d9ac8eeaadd2ea1e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'

            },
            {
                "name":'Fitted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2Ff7%2Faff7b772667d78c4296f58df2d5475f7f4368efe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Fitted jacket',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa6%2F60%2Fa660ca0f3a80077fd1741b3b14e343b8b1f7d8f8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Single-breasted jacket',
                "price":27.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F38%2Fd6%2F38d602a76cb59a6aa0b14acd18a2bfc79598290e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Single-breasted jacket',
                "price":27.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9c%2F4d%2F9c4d33933eddde43bd4a853f46a1414781437793.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Double-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2Fca%2F6ccaea51230d95bfd4617422f3126f5b6bc2d01c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Gathered-sleeve jacket',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fc2%2Ff8c284864a4c28999debc73fb3ea64d161603c33.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Double-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3d%2F51%2F3d51862264e57261562997adf692fe23ac044028.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Oversized single-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2a%2F5b%2F2a5b42f0fdc64b1a6385191f13d7c652836c7581.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Oversized single-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2Faa%2F48aa65c166d5186cbb5af8f623e2d75d8ff9523e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Single-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2F34%2F253444fc565e44e45cf478576a4d31b1336dd85e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Fitted blazer', 
                "price":34.99, 
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F77%2Fa9%2F77a96070ae417b864fce17d11d767e339aa5db89.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Single-breasted blazer',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2Fec%2F57ecc1d0620f372524210c8d7f51a49842fab90a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Fitted jacket',
                "price":34.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbb%2Fee%2Fbbeea4a1bf890ce17fedd89c97aeb5f66b48a094.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Double-breasted blazer',
                "price":29.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fed%2F77%2Fed7789e7f2e4aeb4fe4fb31b745298efba77809d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Oversized single-breasted blazer',
                "price":'',
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1a%2Fce%2F1aced65727d6966fbe0f6d8417895ea3e130b9f8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Fitted jacket',
                "price":24.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F21%2F1f%2F211f643a349045c14b8c572b0eb43857554575fe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Suit waistcoat',
                "price":24.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbb%2Fc7%2Fbbc7d751781fde0a6c69003b95f11145eccd62fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Double-breasted blazer',
                "price":29.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F2f%2F602f1fe7a79f5e9a1b47a48613a5c1db219d34a9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
            {
                "name":'Single-breasted jacket',
                "price":27.99,
                "img":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2F50%2F0750d9f2a90132555764b9b364792d3e3ba9b636.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
            },
        ])
})
app.get('/women/jacketsandcoats', (req,res)=> {
    res.json([
            {
                "name":"Hooded puffer coat",
                "price":59.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe7%2F12%2Fe712cf7499e1251b46bdf11a796308c50889cf7f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            },
            {
                "name":"Double-breasted wool-blend coat",
                "price":139.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcb%2Fbe%2Fcbbeebcb7e5a14c54cba5c2cb08d0125e7de2aa2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Hooded puffer gilet",
                "price":34.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F05%2F85%2F058514959cc3fb9e832704d23894ded137ec940e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Hooded puffer coat",
                "price":59.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F28%2F3b%2F283bdf99fcfb2c582bfe62f30e54781a0efad167.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Quilted coat",
                "price":49.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2F0c%2F360ce57c7f380f8b6f740d19f60bdeed65411e26.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Tie-belt coat",
                "price":34.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2Fee%2Fe5ee162d5f9f94d848814c565ec64a51c3475b32.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            },
            {
                "name":"Coat",
                "price":49.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2Fb8%2Fe5b82c4376e30672bca74f4bbff076c1fe21dc64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"2.5-layer parka in StormMove™",
                "price":59.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F23%2F8b%2F238bd225af941c442271007bf6054645f39ce23c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Hooded puffer jacket",
                "price":49.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fd7%2Ff8d7d26b02344fd6525bf67378eeb2ff7e0aa7fc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Teddy jacket",
                "price":59.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F96%2F4a%2F964a946135c54bdf033db0db75cafb49e440b5a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            },
            {
                "name":"Double-breasted jacket",
                "price":49.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2b%2F35%2F2b35a13d5c59159a425493455e71ff6a4fe26f16.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Teddy-lined jacket",
                "price":34.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2Fcb%2F00cb98480890f3ab8e788c25f0f40cfd351ff8b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
    ])
})
app.get('/women/boots', (req,res)=> {
    res.json([
            {
                "name":"Platform Chelsea boots",
                "price":34.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F9c%2F8a9cea863b2503095573240b56ddb140c1011ff3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Teddy-lined leather boots",
                "price":55.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F92%2Fb9%2F92b96fe54c3f65f1bb9ef7eb537524905809af80.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Calf-length boots",
                "price":29.80,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Fa4%2F62a49485d7d9aaa62c5dd362da8cabebb411e186.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
            },
            {
                "name":"Warm-lined Chelsea boots",
                "price":35.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2Fab%2F19abe02110b9defb6c69163eff76a35cd32d349c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"Knee-high heeled boots",
                "price":39.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F97%2F24%2F9724580a1e215283b81e5a90891bcb19427b512d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            },
            {
                "name":"Leather knee-high boots",
                "price":29.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2Fb3%2F30b31fc47a2229abb40544fa23272e990bb74d14.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
            },
            {
                "name":"Chelsea boots",
                "price":49.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F45%2F3c%2F453c76065807396f38496503283f6b41b91e50b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
            {
                "name":"High profile Chelsea boots",
                "price":29.99,
                "img":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F05%2F94%2F059419a5deb7dc4aab19634208b889f8af778483.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
            },
    ])
})
app.listen(PORT, () => console.log(`Hello world app listening on http://localhost:${PORT}`))