var admin = [
    {
      email: "admin@gmail.com",
      password: "12345",
    },
  ];

  var user = [
    {
      email: "user@gmail.com",
      password: "12345",
      gender: "male",
      mobile: "1234567890",
      cart: [],
      wishlist: [],
      order: [],
    },
  ];

  var brand = [
    {
      brand_id: "1",
      name: "Lakme",
      logo_img:
        "https://media6.ppl-media.com/mediafiles/ecomm/promo/1502367558_lakme.jpg",
      description:
        "As a skincare brand with a legacy of making the most trusted beauty products in the country, Lakme needs no introduction. It has been in the Indian market for over 65 years and is the first home grown beauty brand of the country, conceived at a time when Indian women had no indigenous beauty options to choose from. And this endeavour has been successful, given the fact that every Indian woman will testify that their first trust with skincare and beauty was in the form of a Lakme makeup product. This long, trusted association in the beauty industry has made sure that lakme products are the flag bearer of makeup trends and styles in India.Not only that, along with providing a range of beauty and makeup products, Lakme India is also in the business of beauty services as evident from the number of Lakme brand salons all over the country, which provide beauty solutions for all your needs.",
    },
    {
      brand_id: 2,
      name: "Nivea",
      logo_img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAulBMVEX///8LKnoAAG4AF3MAJniiqMPy9PYAC3AADG6Yob4AJHjQ0twvRYv4+foAAGwAEnIAHHUAH3a4v9REUomaoboQL3oAFXMrP4QAG3YACHHS1eMAJXlMW5FbZ5hwe6UmO4KBia7m5+2xtcemq8HLztqRmLTKz98AAGXAxtfj5Ow8TYxkb5yGj7A2R4TX2eEeNX9WY5Z4gKV3gKJJV5E3SotzfaANK3ciOXy/w81seKUuQX9pc5pNXZWPlrYRtCnsAAAHuUlEQVR4nO2d+WOiOhDHJURRunLYFlF7eHXr1drr7b52t///v/WAJMil9SAw9M3nl3qtm/kySWYmIdZqCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCFJ95rP6cLlY6xohpKnfLpar+mxUdqOKozFbLQgxVUsfUKr4UDrQLVUjvfPPWaPs5snn8bNLTGugZKO7Jlm05mU3UibzlUJcusV+wcAl67vv2i3Gi68FYFCXXM3Kbm7+tFuuua0HZPYKjU7KbnPOfBL1AAGYMzhOvexm50jdPFgBpoI9LrvpOXG2No9RIFBBe3gsu/l58E72Gwiz0cmwbANO5qdrnaCAj/qr4q4wPMkJGNS4K9uME2i8OScr4GNetcs25Vj6pp6LBIpi04rGz+Mc+oGAkmnZ5hxDi+SmgI9RwVBhla8EikIqFzvnLoEnwkXZRh2GBAmq5gl1GRJ4InTKNmx/OoYUCbyB8axs0/blUY4X+PQqUm5sW/nFBUkG67Kt249XW5oEiuIuyzZvHz6bEiXwxsUKxEoSBwMuAvya86W8wYChP5Rt4les8smWd6EBD5XmsiKDKAT2BPmaV8VgF/afss3cxUz2gMggkCuMa9kDIkM/L9vQ7Yy1QiTwHAFuVUn6vCiA6widotzAcwSoCeTDIQvLp2Ffl21sNtKj5CgGzIj5Rma+mMSFufZUpBsoVC/b3Cw68jOFKD2I0+NTEWHyBuu5bIPTtAvtCl5nUMu2OE3n6M0mR9KDFyKIWUFaqJj8YoAzA992++syOkNSNSAYKWz2OHzgJj7kPXfVGDGr7XVCgwG4etKIDwdO7XXTKWh3UvdZerpYq+DhZG0N2Yt3/HODD/a85br1GJOPiAj2SydZqyXQNmaI4aDp70UUrRSpzYV39TWe8/+wRJi7YBOJyQvFFy5JfOdVZKYxGqmMTIM2IAytUIPaVOw/ERq01E2Lf1BRAeEplhjfzdSFjWhgvaRTMhXaOrQoovka1BoLZ4cGunAE3b+w7op/xtmlgeGXEG/jjgCupCauUZM9HZLtGigG31zkd5GwQOqkO/hGAzYHzHoxDeitbKMOo0HiGtRmRN+qgc7Xy/ywyuaP6zs1aLJ3uvHk3JBr06H0E37gTRRddZsGYeL7bIfFEL9fcA1GdxcBk67wfYf3/Fm8cg9sxSmMEpub127INg1ET54T+sEeTfx/zzX4aSTiA2qLr3yL5STAJoa6k9agNja2aBBewSuxghpEgaEGWkBoqxkuLE1jSYkJa1vKp5uhQW1+xf6mNLD/YU9m9+zvOHAjrkHjrO/zKGSlvzbfGFvDcWAtuj3bWRoIUhqwuc6Dd3QW/iTGRHHNtchqez/qCMAyhvcDNfBjng08+snWgP4Ons3Zm1eRdMRa5W7HKVwfqEHoCAF8eSpbg96/wbN35g3Rwq01zN2OU7jWD9Qgeg1FEJypAU8P24TPIE92VTQYx3bMZGgQXUAXoU+mBjyAaDn8QcQRgGvQuY/21SwN3PADYQgs5sb7nofGUmWbTy26ovOgIux2ij2UbNVhLBPjQcc0zzdXNUuDzVV/GyQ0IJQRvJZaZp+HjgDMD25SGii2HTY/UwMxs23iHq5BX71kKNlrauEcBGxuXFkpDRRqiBgmUwNFYyYv9IQGIV7QYWTcvyJKVtAKCC01rYFn1J/Nu2kNmAmR8DepwY2dXSIQTmfC2qo4drI0UNyPYPTP1oCtEESi37QG2SurwhFMWEtNUy1TA0Vv+u3M1iBIic8iMU9KgyZfSxqvuwHiTsdn1vMIrBu9RiRbA4WSu60aKF5O/FffoYEIJtc6myhcnmrxig20wrLQwGk3PNrjzQKs9hRoYE6Dd2IamJN5NAcyGjHayxf2ZbMwjSYj9s7Q5hKCIqz5kIDoGrTVDbJKk70TLYfR39exogiJo9vsr5n6RCCB/lS20Ql2bcCgW9+jp6xVAwsPIoWk4gBWRvJSmd7Xjc4ZYCXVWsE7cXyoUrbJKQrehuLNCvA2okyKHhBMeKcHzYvuDNAiJJ/Eiqhs9KuyDc6g5X7d8BwBljQyRsV2BgNgV4gWQwrAhnmvZ6G786DexVHg7Eih3vf8edSpaEcBckT0KXC7LsCNupzhqeeC7YsDq6IcpVGQI1CrbEt3UNCIAPuO5z0PTD0N4IdhjIsopUCNDQTn8oNFoCHiBvlZA9VAZgpRLuQeh1KNA1GkHoujKBb0nuDTkJo6AaykZjGVeR5I1oYEiLTkTZBVGAwYS1nhogZrV+ZOXuUkT04VxsOQrozJwYJYSt5O+zb/eNECewDIFtq3eXuCWzUJPN7yHROcanUEzt88gyUN2o18e/KcX/5U3WPnJ0Y+JRWdwFtj3ptHJY9BQb0Ft+PkIJYnHzxPycvX/w1sZs5pruBS4JWzfWjfkOPjpe/wcywBj2+94zrEgJxXeySI0rnUDldh0Pv4Bt0gwnjdO6xH6OSjwhPiFmZ/9/3JuuBH665h3dCdF6NPu7fHWeyeAJct2EfnnsTZkBJnV0ZpO+RyBfnI2FyY169NYqp60iGo/yOe9nLyfWaC3Yw6d8uuSUhPa5qm2dR6hKgP763/06/achqj/nTmM+2PwK+fIQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIHvxH5ITh3RFy2PnAAAAAElFTkSuQmCC",
      description:
        "In the world of cosmetics and skincare, Nivea is a name that needs no introduction whatsoever. Most of us grown-up splattering our faces with the cold cream in a blue round box that ultimately created its significance in our lives. A trendy household brand, Nivea began its journey in 1911 in Germany as a beauty product and personal care company. Initially, they went popular through Europe and the US for their skin breakout product and moisturizers. However, after their rebranding in 1958, Nivea branched out and emerged as a gamechanger in the skincare industry.",
    },
    {
      brand_id: 3,
      name: "Sugar",
      logo_img:
        "https://1000logos.net/wp-content/uploads/2021/05/SUGAR-Cosmetics-logo.png",
      description:
        "Need a nourishing product that serves up yumminess too? No worries! Presenting, SUGAR Tipsy Lips Moisturizing Lip Balm in 7 awesome flavours that are enriched with Vitamin E, Jojoba Oil, Shea Butter, and SPF",
    },
    {
      brand_id: 4,
      name: "Blue Heaven",
      logo_img:
        "data:image/png;base64,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",
      description:
        "O, Beauty, Beauty! The Blue Heavens Cosmetics tagline is an indication of the companys commitment to provide easy, simple and quick access to beauty products available for every Indian woman, so that she is able to express her individuality, whether via a full-blown makeup look or by going minimal. It makes available great contemporary makeup solutions for every woman across India, as they are committed to celebrating the most-spirited, everyday moments in a womans life, no matter how small they are. According to Blue Heaven, makeup is no more an occasional phenomenon and the beauty of an Indian woman should be celebrated every day.",
    },
    {
      brand_id: 5,
      name: "Good Vibes",
      logo_img:
        "data:image/png;base64,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",
      description:
        "Every woman deserve to pamper her senses. It is not vanity to want flawless beauty. And true beauty lies in taking good care of you. That is the ideology that drives Good Vibes. This brand has lovingly crafted a range of personal care products that will bring out your inner glow. With Good Vibes, discover and nurture your unblemished self.",
    },
    {
      brand_id: 6,
      name: "Maybelline",
      logo_img:
        "https://1000logos.net/wp-content/uploads/2021/04/Maybelline-logo.png",
      description:
        "If its makeup, its maybelline. Maybelline New York is a company known for making trends from the catwalk appear on the sidewalk, and in this process, empowering women to make a statement with bold new looks that enhances their creativity, individuality and confidence. Their venture began in India 1998 and ever since, they have been pivotal in describing beauty trends for the Indian woman. Since then, Maybelline products have wooed their audience with their products and excellent marketing strategies and continue to do so even now. Moreover, their tagline #MakeItHappen encourages women to make bold decisions that transcend beauty.",
    },
    {
      brand_id: 7,
      name: "Wow",
      logo_img: "https://image3.mouthshut.com/images/imagesp/926003380s.png",
      description:
        "Buy the best WOW beauty products at affordable prices at our website. Explore a wide range of makeup products and try on a variety of lipstick shades that suits you the most.",
    },
    {
      brand_id: 8,
      name: "NY Bae",
      logo_img:
        "https://cdn.shopify.com/s/files/1/0019/1810/7757/files/NYbae.png?height=628&pad_color=fff&v=1560254681&width=1200",
      description:
        "NY Bae Foundations come in both liquid and stick forms and are specially crafted for Indian skin tones to give you the perfect base for makeup. Its light formula blends smoothly with your skin to hide blemishes and spots, leaving your face with a nice, radiant glow.",
    },
    {
      brand_id: 9,
      name: "Insight",
      logo_img:
        "data:image/png;base64,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",
      description:
        "Makeup is not just about looking beautiful, rather it is also about enhancing your look. INSIGHT Cosmetics comes with a wide range of cosmetic products with a touch of perfection to give your skin a flawless makeup look. The brand provides you with products that make you look perfect and gorgeous.",
    },
    {
      brand_id: 10,
      name: "Lotus",
      logo_img:
        "https://cdn.shopify.com/s/files/1/0428/8063/0937/files/Copy-of-LOTUS-HERBALS_9da8eb0e-9456-487d-8cd7-600e35066411.jpg?v=1631270806",
      description:
        "Lotus is a premium and well-established brand with a history dating back to 1973. The brand uses a wide range of herbs and flora to cater to the skincare and beauty concerns rising from contemporary lifestyles. The Lotus Herbals brands products are extremely tender on the skin and can effectively fetch you the desired results.",
    },
  ];

  var category = [
    { category_id: "1", name: "Makeup" },
    { category_id: "2", name: "Skin care" },
    { category_id: "3", name: "Hair care" },
    { category_id: "4", name: "Personal care" },
    { category_id: "5", name: "Men" },
    { category_id: "6", name: "Fragrance" },
    { category_id: "7", name: "Health & Wellness" },
    { category_id: "8", name: "Mom & Baby" },
  ];

  var type = [
    { category_id: "1", type_id: "1", name: "Face Makeup" },
    { category_id: "1", type_id: "2", name: "Eye Makeup" },
    { category_id: "1", type_id: "3", name: "Lip Makeup" },
    { category_id: "1", type_id: "4", name: "Nails" },
    { category_id: "1", type_id: "5", name: "Brushes and Tools" },
    { category_id: "1", type_id: "6", name: "Gifts and Value Sets" },
    { category_id: "2", type_id: "7", name: "Cleanser" },
    { category_id: "2", type_id: "8", name: "Toner and Facemask" },
    { category_id: "2", type_id: "9", name: "Moisturizer" },
    { category_id: "2", type_id: "10", name: "Mask" },
    { category_id: "2", type_id: "11", name: "Sunscreen" },
    { category_id: "2", type_id: "12", name: "Eyecare" },
    { category_id: "2", type_id: "13", name: "Lipcare" },
    { category_id: "2", type_id: "14", name: "Body Care" },
    { category_id: "2", type_id: "15", name: "Bath & Shower" },
    { category_id: "2", type_id: "16", name: "Hand & Footcare" },
    { category_id: "2", type_id: "17", name: "Massager & Face Tool" },
    { category_id: "2", type_id: "18", name: "Aromatherapy" },
    { category_id: "2", type_id: "19", name: "Gifts and Value Sets" },
    { category_id: "2", type_id: "20", name: "By Concern" },
    { category_id: "2", type_id: "21", name: "By Benefits" },
    { category_id: "3", type_id: "22", name: "Shampoo & Conditioners" },
    { category_id: "3", type_id: "23", name: "Nourishment" },
    { category_id: "3", type_id: "24", name: "Hair styling & tools" },
    { category_id: "3", type_id: "25", name: "Hair Accessories" },
    { category_id: "3", type_id: "26", name: "Gifts and Value Sets" },
    { category_id: "3", type_id: "27", name: "By Concern" },
    { category_id: "3", type_id: "28", name: "By Hairtype" },
    { category_id: "4", type_id: "29", name: "Bath & Body" },
    { category_id: "4", type_id: "30", name: "Feminine Hygiene" },
    { category_id: "4", type_id: "31", name: "Women's Grooming" },
    { category_id: "4", type_id: "32", name: "Men's Grooming" },
    { category_id: "4", type_id: "33", name: "Dental Care" },
    { category_id: "4", type_id: "34", name: "Hard & Root Care" },
    { category_id: "4", type_id: "35", name: "Hair Care" },
    { category_id: "4", type_id: "36", name: "Gifts & Value Sets" },
    { category_id: "5", type_id: "37", name: "Shaving Care" },
    { category_id: "5", type_id: "38", name: "Skincare" },
    { category_id: "5", type_id: "39", name: "Bath & aby" },
    { category_id: "5", type_id: "40", name: "Hair Care" },
    { category_id: "5", type_id: "41", name: "Beard Care" },
    { category_id: "5", type_id: "42", name: "Frangrance" },
    { category_id: "6", type_id: "43", name: "Fragnance for men" },
    { category_id: "6", type_id: "44", name: "Frangnance for Women" },
    { category_id: "7", type_id: "45", name: "Health Supplements" },
    { category_id: "7", type_id: "46", name: "Sexual Health Products" },
    { category_id: "7", type_id: "47", name: "Health Food & Drinks" },
    { category_id: "7", type_id: "48", name: "Pain Relief & First Aid" },
    { category_id: "7", type_id: "49", name: "By Concern" },
    { category_id: "8", type_id: "50", name: "Baby Skin Care" },
    { category_id: "8", type_id: "51", name: "Baby Bath & Oil" },
    { category_id: "8", type_id: "52", name: "Kids Care" },
    { category_id: "8", type_id: "53", name: "Maternity Care" },
    { category_id: "8", type_id: "54", name: "Nursing & Feeding" },
    { category_id: "8", type_id: "55", name: "Gifts & Value Sets" },
  ];
  var subtype = [
    { category_id: "1", type_id: "1", subtype_id: 1, name: "Primer" },
    { subtype_id: 2, category_id: "1", type_id: "1", name: "Concealer" },
    { subtype_id: 3, category_id: "1", type_id: "1", name: "BB & CC Creams" },
    { subtype_id: 4, category_id: "1", type_id: "1", name: "Foundation" },
    { subtype_id: 5, category_id: "1", type_id: "1", name: "Compact" },
    { subtype_id: 6, category_id: "1", type_id: "1", name: "Loose Powder" },
    { subtype_id: 7, category_id: "1", type_id: "2", name: "Eyeliner" },
    {
      subtype_id: 8,
      category_id: "1",
      type_id: "2",
      name: "Under eye Concealers",
    },
    { subtype_id: 9, category_id: "1", type_id: "2", name: "Eyeshadow" },
    { subtype_id: 10, category_id: "1", type_id: "2", name: "Kajal" },
    { subtype_id: 11, category_id: "1", type_id: "2", name: "Mascara" },
    { subtype_id: 12, category_id: "1", type_id: "3", name: "Lipstick" },
    {
      subtype_id: 13,
      category_id: "1",
      type_id: "3",
      name: "Liquid Lipstick",
    },
    { subtype_id: 14, category_id: "1", type_id: "3", name: "Lip Crayon" },
    { subtype_id: 15, category_id: "1", type_id: "3", name: "Lip Liner" },
    { subtype_id: 16, category_id: "1", type_id: "3", name: "Lip Gloss" },
    { subtype_id: 17, category_id: "1", type_id: "4", name: "Nail Polish" },
    {
      subtype_id: 18,
      category_id: "1",
      type_id: "4",
      name: "Gel Nail Polish",
    },
    {
      subtype_id: 19,
      category_id: "1",
      type_id: "4",
      name: "Matte Nail Polish",
    },
    { subtype_id: 20, category_id: "1", type_id: "5", name: "Face Brushes" },
    { subtype_id: 21, category_id: "1", type_id: "5", name: "Eye Brushes" },
    { subtype_id: 22, category_id: "1", type_id: "5", name: "Lip Brushes" },
    { subtype_id: 23, category_id: "1", type_id: "5", name: "Brushe Sets" },
    { subtype_id: 24, category_id: "2", type_id: "7", name: "Face Wash" },
    { subtype_id: 25, category_id: "2", type_id: "7", name: "Cleanser" },
    {
      subtype_id: 26,
      category_id: "2",
      type_id: "7",
      name: "Scrubs & Exfoliators",
    },
    {
      subtype_id: 27,
      category_id: "2",
      type_id: "7",
      name: "Makeup Remover",
    },
    { subtype_id: 28, category_id: "2", type_id: "8", name: "Toner" },
    { subtype_id: 29, category_id: "2", type_id: "8", name: "Face Mists" },
    {
      subtype_id: 30,
      category_id: "2",
      type_id: "9",
      name: "Face Moisturizers & Day Creams",
    },
    { subtype_id: 31, category_id: "2", type_id: "9", name: "Night Cream" },
    { subtype_id: 32, category_id: "2", type_id: "10", name: "Sheet Mask" },
    {
      subtype_id: 33,
      category_id: "2",
      type_id: "12",
      name: "Eye Masks & Patches",
    },
    { subtype_id: 34, category_id: "2", type_id: "12", name: "Eye Serum" },
    { subtype_id: 35, category_id: "2", type_id: "12", name: "Eye Cream" },
    {
      subtype_id: 36,
      category_id: "2",
      type_id: "12",
      name: "Eye Makeup Remover",
    },
    { subtype_id: 37, category_id: "2", type_id: "13", name: "Lip Balm" },
    { subtype_id: 38, category_id: "2", type_id: "13", name: "Lip Scrub" },
    {
      subtype_id: 39,
      category_id: "2",
      type_id: "14",
      name: "Body Lotions & Moisturizers",
    },
    {
      subtype_id: 40,
      category_id: "2",
      type_id: "14",
      name: "Body Creams & Body Butters",
    },
    { subtype_id: 41, category_id: "3", type_id: "22", name: "Shampoo" },
    { subtype_id: 42, category_id: "3", type_id: "22", name: "Dry Shampoo" },
    { subtype_id: 43, category_id: "3", type_id: "22", name: "Conditioner" },
    { subtype_id: 44, category_id: "3", type_id: "23", name: "Hair Oil" },
    { subtype_id: 45, category_id: "3", type_id: "23", name: "Hair Serum" },
    {
      subtype_id: 46,
      category_id: "3",
      type_id: "23",
      name: "Hair Spa & Mask",
    },
    { subtype_id: 47, category_id: "3", type_id: "24", name: "Hair Color" },
    { subtype_id: 48, category_id: "3", type_id: "24", name: "Hair Spray" },
    {
      subtype_id: 49,
      category_id: "3",
      type_id: "24",
      name: "Styling Cream, Gel & Waxes",
    },
    {
      subtype_id: 50,
      category_id: "3",
      type_id: "25",
      name: "Hair Clips, Bands & More",
    },
  ];

  var products = [
    {
      category: "Makeup",
      type: "Face Makeup",
      subtype: "Primer",
      brand: "NY Bae",
      name: "NY Bae Brightenin' Primer|Face Primer| For Brightening & Radiant Glow| Removes Creases| Even Skin Tone| All Skin Types| Matte|",
      offer: "25",
      price: "215",
      image_url_1:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240160/ny-bae-primer-gold-15g-16_10_display_1631800142_eeaaffb8.jpg",
      image_url_2:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240160/ny-bae-primer-gold-15g-16_6_display_1623940907_80a23140.jpg",
      image_url_3:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/240160/ny-bae-primer-gold-15g-16_3_display_1623940903_db3d5375.jpg",
      description:
        "Rise and shine bright with NY Bae Brightenning Primer. This is for every girl who dreamt of smooth, even-textured, bright skin in minutes. Its light-weight feel covers your face beautifully and gives a creaseless, long-lasting, even-toned finish. So go girl, go flawless.",
    },
    {
      subtype_id: 51,
      category: "Makeup",
      type: "Face Makeup",
      subtype: "Primer",
      brand: "Insight",
      name: "Insight 3 In 1 Long Lasting Primer (30ml)",
      offer: "0",
      price: "250",
      image_url_1:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/239648/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1630212475_7b05bb98.jpg",
      image_url_2:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/239648/insight-3-in-1-long-lasting-primer-30ml-67_2_display_1635142506_b33f594d.jpg",
      image_url_3:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/239648/insight-3-in-1-long-lasting-primer-30ml-67_4_display_1635142507_c9489492.jpg",
      description:
        "Reduce the appearance and fine lines and pores while locking in your makeup looks with this insight 3-in-1 primer. This 3-in-1 formula primes, protects, and moisturizes your face to prepare it as a perfect canvas. Lightweight and oil-free, it glides on to give a flawless finish to the makeup.INCREASE THE LONGIVITY OF MAKE UPPRIMES,PROTECTS AND MOISTURISESPRIMES,PROTECTS AND MOISTURISES,LONG LASTING,OIL FREE, SATIN FINISHall skin types,Color cosmetics that transform your makeup look! Insight is a revolutionary makeup brand from VOV International. The brand is known for its affordable, professional quality makeup products and offers wide array of color cosmetics for women who crave for sophisticated innovations in makeup and beauty. Insight Cosmetics offers a broad range of makeup products including Nail polish, Lipstick, mascara, eyeliners, eye shadows, foundations, concealers, powder, lip-gloss, makeup brushes, and tools. Its extended range also includes professional makeup range, artistic products and makeup for special effects.",
    },
    {
      subtype_id: 51,
      category: "Makeup",
      type: "Face Makeup",
      subtype: "Primer",
      brand: "Blue Heaven",
      name: "Blue Heaven Flawless Make-up Base Primer",
      offer: "25",
      price: "225",
      image_url_1:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/172035/blue-heaven-studio-perfection-primer-30-g_3_display_1622163985_8f216d41.jpg",
      image_url_2:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/172035/blue-heaven-studio-perfection-primer-30-g_2_display_1622163985_055c9737.jpg",
      image_url_3:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/172035/blue-heaven-studio-perfection-primer-30-g_5_display_1622163987_4dc42eee.jpg",
      description:
        "Use the Studio Perfection Primer under your makeup to make sure that your makeup looks fresh all day & stays on for hours! It is an amazing base for your makeup and is oil-free & non-greasy.",
    },
    {
      subtype_id: 51,
      category: "Makeup",
      type: "Face Makeup",
      subtype: "Primer",
      brand: "NY Bae",
      name: "NY Bae Pro Primer | Orange Colour Correcting Face Primer | Covers Dark Spots & Pigmentation | Matte Finish | Light weight | Quick Absorbing | Pore Filling",
      offer: "12",
      price: "219",
      image_url_1:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_1_display_1634907622_6adaad73.jpg",
      image_url_2:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_2_display_1634907623_7f1a9fa6.jpg",
      image_url_3:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/250565/ny-bae-pro-primer-orange-color-correcting-face-primer-15-ml_3_display_1634907625_b9716318.jpg",
      description:
        "What's better than a primer? A colour correcting primer! NY Bae’s Colour Correcting Pro Primer in Orange is here to help you look your finest. A little dab dab and poof, dark spots and pigmentation magically disappear. Its matte finish gives you the perfect chic look while soft texture hugs your skin like a warm hug. It seamlessly hides pores, uneven skin tone and refines your skin texture. Make the revolutionary color correcting NY Bae Pro Primer yours today",
    },
    {
      subtype_id: 51,
      category: "Makeup",
      type: "Face Makeup",
      subtype: "Primer",
      brand: "Blue Heaven",
      name: "Blue Heaven Flawless Makeup Base Primer (30 g)",
      offer: "25",
      price: "244",
      image_url_1:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/232332/blue-heaven-studio-perfection-primer-30-g_2_display_1612161844_9ec6a65b.jpg",
      image_url_2:
        "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max/static/img/product/232332/blue-heaven-studio-perfection-primer-30-g_2_display_1613195604_6d580da9.jpg",
      image_url_3:
        "https://media4.purplle.com/static/img/brand//__1619586836_b9f3303c.jpg",
      description:
        "Use the Studio Perfection Primer under your makeup to make sure that your makeup looks fresh all day & stays on for hours! It is an amazing base for your makeup and is oil-free & non-greasy.",
    },
  ];

window.addEventListener("load",function(){

      let data_list=JSON.parse(localStorage.getItem("products"));
      if(data_list==null)
      {
          fn();
      }
     
});

function fn() {
    localStorage.setItem("admin", JSON.stringify(admin));
    localStorage.setItem("brand", JSON.stringify(brand));
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("type", JSON.stringify(type));
    localStorage.setItem("subtype", JSON.stringify(subtype));
    localStorage.setItem("products", JSON.stringify(products));
  }