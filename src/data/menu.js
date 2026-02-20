export const menuData = {
    lakeCafe: {
        name: { en: "Beiruti Lake", ar: "بيروتي ليك" },
        sections: [
            {
                category: "Coffee",
                items: [
                    { name: { en: "Espresso", ar: "إسبريسو" }, price: 16, image: "/images/menu/coffee/espresso.jpg" },
                    { name: { en: "Double Espresso", ar: "دبل إسبريسو" }, price: 20, image: "/images/menu/coffee/double-espresso.jpg" },
                    { name: { en: "Americano", ar: "أمريكانو" }, price: 18, image: "/images/menu/coffee/americano.jpg" },
                    { name: { en: "Flat White", ar: "فلات وايت" }, price: 22, image: "/images/menu/coffee/flat-white.jpg" },
                    { name: { en: "Cappuccino", ar: "كابتشينو" }, price: 22, image: "/images/menu/coffee/cappuccino.jpg" },
                    { name: { en: "Latte", ar: "لاتيه" }, price: 22, image: "/images/menu/coffee/latte.jpg" },
                    { name: { en: "Mocha", ar: "موكا" }, price: 24, image: "/images/menu/coffee/mocha.jpg" },
                    { name: { en: "Cortado", ar: "كورتادو" }, price: 20, image: "/images/menu/coffee/cortado.jpg" },
                    { name: { en: "V60 Pour Over", ar: "تقطير V60" }, price: 28, image: "/images/menu/coffee/v60.jpg" },
                    { name: { en: "Chemex Brew", ar: "كيمكس" }, price: 32, image: "/images/menu/coffee/chemex.jpg" },
                ],
            },
            {
                category: "Signature Coffee",
                items: [
                    { name: { en: "Spanish Latte", ar: "سبانيش لاتيه" }, description: { en: "Condensed milk espresso with house-roasted beans", ar: "إسبريسو بالحليب المكثف مع حبوب محمصة محلياً" }, price: 26, image: "/images/menu/signature/spanish-latte.jpg" },
                    { name: { en: "Pistachio Latte", ar: "بيستاشيو لاتيه" }, description: { en: "Creamy pistachio-infused latte", ar: "لاتيه كريمي بنكهة الفستق" }, price: 28, image: "/images/menu/signature/pistachio-latte.jpg" },
                    { name: { en: "Lotus Latte", ar: "لوتس لاتيه" }, description: { en: "Biscoff-infused creamy latte", ar: "لاتيه كريمي بنكهة بسكويت اللوتس" }, price: 28, image: "/images/menu/signature/lotus-latte.jpg" },
                    { name: { en: "Caramel Macchiato", ar: "كراميل ماكياتو" }, price: 26, image: "/images/menu/signature/caramel-macchiato.jpg" },
                    { name: { en: "Hazelnut Latte", ar: "بندق لاتيه" }, price: 26, image: "/images/menu/signature/hazelnut-latte.jpg" },
                    { name: { en: "Iced Spanish Latte", ar: "آيس سبانيش لاتيه" }, price: 28, image: "/images/menu/signature/iced-spanish-latte.jpg" },
                ],
            },
            {
                category: "Tea",
                items: [
                    { name: { en: "Moroccan Tea", ar: "شاي مغربي" }, price: 18 },
                    { name: { en: "Karak Tea", ar: "شاي كرك" }, price: 12 },
                    { name: { en: "Green Tea", ar: "شاي أخضر" }, price: 15 },
                    { name: { en: "Chamomile Tea", ar: "شاي بابونج" }, price: 15 },
                    { name: { en: "English Breakfast", ar: "إنجليش بريكفاست" }, price: 15 },
                    { name: { en: "Earl Grey", ar: "إيرل غراي" }, price: 15 },
                ],
            },
            {
                category: "Milk Shake",
                items: [
                    { name: { en: "Chocolate", ar: "شوكلاته" }, price: 25 },
                    { name: { en: "Strawberry", ar: "فراولة" }, price: 25 },
                    { name: { en: "Caramel", ar: "كراميل" }, price: 25 },
                    { name: { en: "Vanilla", ar: "فانيلا" }, price: 25 },
                    { name: { en: "Oreo", ar: "أوريو" }, price: 28 },
                    { name: { en: "Lotus", ar: "لوتس" }, price: 28 },
                ],
            },
            {
                category: "Smoothie",
                items: [
                    { name: { en: "Strawberry Smoothie", ar: "سموثي فراولة" }, price: 34 },
                    { name: { en: "Mango Smoothie", ar: "سموثي مانجو" }, price: 34 },
                    { name: { en: "Raspberry Smoothie", ar: "سموثي توت أحمر" }, price: 34 },
                    { name: { en: "Blueberry Smoothie", ar: "سموثي توت أزرق" }, price: 34 },
                    { name: { en: "Passion Fruit Smoothie", ar: "سموثي باشن فروت" }, price: 34 },
                    { name: { en: "Mixed Berry Smoothie", ar: "سموثي توت مشكل" }, price: 34 },
                ],
            },
            {
                category: "Cold Beverage",
                items: [
                    { name: { en: "Mint Lemonade", ar: "ليمون بالنعناع" }, price: 20 },
                    { name: { en: "Lemonade", ar: "عصير ليمون" }, price: 20 },
                    { name: { en: "Passion Fruit Mojito", ar: "موهيتو باشن فروت" }, price: 30 },
                    { name: { en: "Strawberry Mojito", ar: "موهيتو فراولة" }, price: 30 },
                    { name: { en: "Classic Mojito", ar: "موهيتو كلاسيك" }, price: 30 },
                    { name: { en: "Raspberry Mojito", ar: "موهيتو توت أحمر" }, price: 30 },
                    { name: { en: "Blueberry Mojito", ar: "موهيتو توت أزرق" }, price: 30 },
                    { name: { en: "Blue Lagoon Mojito", ar: "موهيتو بلو لاغون" }, price: 30 },
                ],
            },
            {
                category: "Fresh Juice",
                items: [
                    { name: { en: "Orange Juice", ar: "عصير برتقال" }, price: 22 },
                    { name: { en: "Apple Juice", ar: "عصير تفاح" }, price: 22 },
                    { name: { en: "Watermelon Juice", ar: "عصير بطيخ" }, price: 22 },
                    { name: { en: "Mango Juice", ar: "عصير مانجو" }, price: 22 },
                    { name: { en: "Pineapple Juice", ar: "عصير أناناس" }, price: 22 },
                    { name: { en: "Carrot Juice", ar: "عصير جزر" }, price: 22 },
                    { name: { en: "Mixed Juice", ar: "عصير كوكتيل" }, price: 25 },
                ],
            },
            {
                category: "Soft Drinks",
                items: [
                    { name: { en: "Large Sparkling Water", ar: "مياه غازية كبيرة" }, price: 18 },
                    { name: { en: "Small Sparkling Water", ar: "مياه غازية صغيرة" }, price: 11 },
                    { name: { en: "Large Water", ar: "مياه معدنية كبيرة" }, price: 10 },
                    { name: { en: "Small Water", ar: "مياه معدنية صغيرة" }, price: 5 },
                    { name: { en: "Energy Drink", ar: "مشروب طاقة" }, price: 20 },
                    { name: { en: "Soft Drinks", ar: "مشروبات غازية" }, price: 8 },
                ],
            },
            {
                category: "Breakfast",
                items: [
                    { name: { en: "Lebanese Breakfast", ar: "فطور لبناني" }, description: { en: "Traditional mezze platter with labneh, hummus, foul & warm bread", ar: "تشكيلة مازة تقليدية مع لبنة، حمص، فول وخبز ساخن" }, price: 38 },
                    { name: { en: "Shakshuka", ar: "شكشوكة" }, description: { en: "Spiced tomato, poached eggs, herbs & warm bread", ar: "طماطم متبلة، بيض، أعشاب وخبز ساخن" }, price: 32 },
                    { name: { en: "Foul Medames", ar: "فول مدمس" }, description: { en: "Slow-cooked fava beans with olive oil, lemon & spices", ar: "فول مطهو ببطء مع زيت زيتون، ليمون وتوابل" }, price: 25 },
                    { name: { en: "Eggs Benedict", ar: "بيض بينيديكت" }, description: { en: "Hollandaise, smoked salmon, brioche bun", ar: "صلصة هولنديز، سلمون مدخن، خبز بريوش" }, price: 36 },
                    { name: { en: "Omelette", ar: "أومليت" }, description: { en: "Three eggs with your choice of fillings", ar: "ثلاث بيضات مع اختيارك من الإضافات" }, price: 28 },
                ],
            },
            {
                category: "Hot Appetizers",
                items: [
                    { name: { en: "Chicken Wings", ar: "جوانح دجاج" }, description: { en: "Crispy wings with house sauce", ar: "جوانح مقرمشة مع صلصة خاصة" }, price: 35 },
                    { name: { en: "Samosa", ar: "سمبوسة" }, description: { en: "Traditional stuffed pastry", ar: "عجينة محشوة تقليدية" }, price: 20 },
                    { name: { en: "Spring Rolls", ar: "سبرينغ رولز" }, description: { en: "Crispy vegetable rolls", ar: "لفائف خضار مقرمشة" }, price: 22 },
                    { name: { en: "Cheese Rolls", ar: "رقاقات جبنة" }, description: { en: "Golden fried cheese pastry", ar: "عجينة جبن مقلية ذهبية" }, price: 25 },
                    { name: { en: "Falafel", ar: "فلافل" }, description: { en: "Crispy chickpea fritters with tahini", ar: "أقراص حمص مقرمشة مع طحينة" }, price: 22 },
                ],
            },
            {
                category: "Cold Appetizers",
                items: [
                    { name: { en: "Hummus", ar: "حمص" }, description: { en: "Classic chickpea dip with olive oil", ar: "تغميسة حمص كلاسيكية مع زيت زيتون" }, price: 18 },
                    { name: { en: "Moutabal", ar: "متبل" }, description: { en: "Smoky eggplant dip with tahini", ar: "تغميسة باذنجان مدخن مع طحينة" }, price: 20 },
                    { name: { en: "Labneh", ar: "لبنة" }, description: { en: "Strained yogurt with olive oil & mint", ar: "زبادي مصفى مع زيت زيتون ونعناع" }, price: 18 },
                    { name: { en: "Tabbouleh", ar: "تبولة" }, description: { en: "Fresh parsley, bulgur, tomato & lemon", ar: "بقدونس طازج، برغل، طماطم وليمون" }, price: 22 },
                    { name: { en: "Fattoush", ar: "فتوش" }, description: { en: "Mixed greens with crispy bread & pomegranate dressing", ar: "خضروات مشكلة مع خبز مقرمش وصلصة رمان" }, price: 22 },
                ],
            },
            {
                category: "Grill",
                items: [
                    { name: { en: "Mixed Grill", ar: "مشاوي مشكلة" }, description: { en: "Selection of grilled meats", ar: "تشكيلة من اللحوم المشوية" }, price: 55, image: "/images/menu/grill/mixed-grill.jpg" },
                    { name: { en: "Chicken Tawook", ar: "شيش طاووق" }, description: { en: "Marinated grilled chicken skewers", ar: "أسياخ دجاج متبلة ومشوية" }, price: 42, image: "/images/menu/grill/tawook.jpg" },
                    { name: { en: "Lamb Kofta", ar: "كفتة لحم" }, description: { en: "Seasoned ground lamb skewers", ar: "أسياخ لحم مفروم متبل" }, price: 45, image: "/images/menu/grill/kofta.jpg" },
                    { name: { en: "Shish Tawook", ar: "شيش طاووق (صدر)" }, description: { en: "Tender chicken breast skewers", ar: "أسياخ صدور دجاج طرية" }, price: 40, image: "/images/menu/grill/shish-tawook.jpg" },
                    { name: { en: "Lamb Chops", ar: "ريش لحم" }, description: { en: "Marinated rack of lamb", ar: "ريش لحم متبلة" }, price: 65, image: "/images/menu/grill/lamb-chops.jpg" },
                ],
            },
            {
                category: "Grill per KG (Combo Meal)",
                items: [
                    { name: { en: "Chicken Combo", ar: "كومبو دجاج" }, description: { en: "Whole grilled chicken with sides & bread", ar: "دجاجة كاملة مشوية مع مقبلات وخبز" }, price: 95 },
                    { name: { en: "Mixed Meat Combo", ar: "كومبو مشاوي مشكلة" }, description: { en: "Assorted grilled meats per kg with sides", ar: "مشاوي مشكلة بالكيلو مع مقبلات" }, price: 150 },
                    { name: { en: "Lamb Combo", ar: "كومبو لحم" }, description: { en: "Grilled lamb per kg with rice & sides", ar: "لحم مشوي بالكيلو مع أرز ومقبلات" }, price: 180 },
                ],
            },
            {
                category: "Salads",
                items: [
                    { name: { en: "Caesar Salad", ar: "سلطة سيزر" }, description: { en: "Romaine, parmesan, croutons & caesar dressing", ar: "خس، جبنة بارميزان، خبز محمص وصلصة سيزر" }, price: 30 },
                    { name: { en: "Greek Salad", ar: "سلطة يونانية" }, description: { en: "Tomato, cucumber, olives, feta & oregano", ar: "طماطم، خيار، زيتون، فيتا وزعتر بري" }, price: 28 },
                    { name: { en: "Fattoush", ar: "فتوش" }, description: { en: "Mixed greens, radish, sumac & crispy bread", ar: "خضروات مشكلة، فجل، سماق وخبز مقرمش" }, price: 25 },
                    { name: { en: "Quinoa Salad", ar: "سلطة كينوا" }, description: { en: "Quinoa, avocado, cherry tomato & herbs", ar: "كينوا، أفوكادو، طماطم كرزية وأعشاب" }, price: 32 },
                ],
            },
            {
                category: "Rice",
                items: [
                    { name: { en: "Chicken Biryani", ar: "برياني دجاج" }, description: { en: "Fragrant basmati rice with spiced chicken", ar: "أرز بسمتي عطري مع دجاج متبل" }, price: 35 },
                    { name: { en: "Lamb Biryani", ar: "برياني لحم" }, description: { en: "Aromatic rice with tender lamb", ar: "أرز عطري مع لحم طري" }, price: 42 },
                    { name: { en: "Vegetable Biryani", ar: "برياني خضار" }, description: { en: "Mixed vegetables with saffron rice", ar: "خضروات مشكلة مع أرز بالزعفران" }, price: 28 },
                    { name: { en: "Plain Rice", ar: "أرز أبيض" }, price: 10 },
                    { name: { en: "Saffron Rice", ar: "أرز بالزعفران" }, price: 15 },
                ],
            },
            {
                category: "Dessert",
                items: [
                    { name: { en: "Tiramisu", ar: "تيراميسو" }, price: 25 },
                    { name: { en: "Kunafa", ar: "كنافة" }, description: { en: "Traditional cheese pastry with sugar syrup", ar: "عجينة جبن تقليدية مع قطر" }, price: 28 },
                    { name: { en: "Chocolate Lava Cake", ar: "مولتن كيك" }, description: { en: "Warm chocolate cake with vanilla ice cream", ar: "كيك شوكولاتة دافئ مع آيس كريم فانيلا" }, price: 30 },
                    { name: { en: "Lotus Cheesecake", ar: "تشيز كيك لوتس" }, price: 28 },
                    { name: { en: "Baklava", ar: "بقلاوة" }, description: { en: "Layers of filo pastry with nuts & honey", ar: "طبقات من عجينة الفيلو مع مكسرات وعسل" }, price: 22 },
                ],
            },
        ],
    },
    lago: {
        name: { en: "Lago", ar: "لاغو" },
        sections: [
            {
                category: "Neapolitan Pizza",
                items: [
                    { name: { en: "Margherita", ar: "مارغريتا" }, price: 35, image: "/images/menu/pizza/margherita.jpg" },
                    { name: { en: "Pepperoni", ar: "بيبروني" }, price: 43, image: "/images/menu/pizza/pepperoni.jpg" },
                    { name: { en: "Truffle Mushrooms", ar: "فطر بالكمأة" }, price: 49, image: "/images/menu/pizza/truffle.jpg" },
                    { name: { en: "Bresaola", ar: "بريزاولا" }, price: 49, image: "/images/menu/pizza/bresaola.jpg" },
                    { name: { en: "Buratta", ar: "بوراتا" }, price: 45, image: "/images/menu/pizza/burrata.jpg" },
                    { name: { en: "Chicken Alfredo", ar: "دجاج ألفريدو" }, price: 43, image: "/images/menu/pizza/chicken-alfredo.jpg" },
                ],
            },
            {
                category: "Pasta",
                items: [
                    { name: { en: "Bolognese Spaghetti", ar: "سباغيتي بولونيز" }, price: 43, image: "/images/menu/pasta/bolognese.jpg" },
                    { name: { en: "Fettuccine Chicken Alfredo", ar: "فيتوتشيني دجاج ألفريدو" }, price: 45, image: "/images/menu/pasta/alfredo.jpg" },
                    { name: { en: "Arrabiata Penne", ar: "بيني أرابياتا" }, price: 40, image: "/images/menu/pasta/arrabiata.jpg" },
                    { name: { en: "Funghi Truffle Rigatoni", ar: "ريغاتوني فطر وكمأة" }, price: 49, image: "/images/menu/pasta/truffle.jpg" },
                    { name: { en: "Chicken Pesto Fusilli", ar: "فوسيلي دجاج بيستو" }, price: 45, image: "/images/menu/pasta/pesto.jpg" },
                    { name: { en: "Carbonara Spaghetti", ar: "سباغيتي كاربونارا" }, price: 49, image: "/images/menu/pasta/carbonara.jpg" },
                ],
            },
            {
                category: "Manakish",
                items: [
                    { name: { en: "Zatar", ar: "زعتر" }, price: 23 },
                    { name: { en: "Zatar & Cheese", ar: "زعتر وجبنة" }, price: 29 },
                    { name: { en: "Muhammara", ar: "محمرة" }, price: 23 },
                    { name: { en: "Muhammara & Cheese", ar: "محمرة وجبنة" }, price: 29 },
                    { name: { en: "Lahm Be Ajin", ar: "لحم بعجين" }, price: 27 },
                    { name: { en: "Lahm Be Ajin & Cheese", ar: "لحم بعجين وجبنة" }, price: 35 },
                    { name: { en: "Spinach", ar: "سبانخ" }, price: 23 },
                    { name: { en: "Spinach & Cheese", ar: "سبانخ وجبنة" }, price: 27 },
                ],
            },
            {
                category: "Sandwiches",
                items: [
                    { name: { en: "Club Sandwich", ar: "كلوب ساندويش" }, description: { en: "Triple-decker with chicken, egg & lettuce", ar: "طبقات متعددة مع دجاج، بيض وخس" }, price: 35 },
                    { name: { en: "Chicken Wrap", ar: "راب دجاج" }, description: { en: "Grilled chicken with garlic sauce in tortilla", ar: "دجاج مشوي مع صلصة ثوم في خبز تورتيلا" }, price: 30 },
                    { name: { en: "Steak Sandwich", ar: "ساندويش ستيك" }, description: { en: "Tender beef with caramelized onions", ar: "لحم بقري طري مع بصل مكرمل" }, price: 42 },
                    { name: { en: "Falafel Wrap", ar: "راب فلافل" }, description: { en: "Crispy falafel with hummus & pickles", ar: "فلافل مقرمشة مع حمص ومخلل" }, price: 25 },
                    { name: { en: "Halloumi Wrap", ar: "راب حلوم" }, description: { en: "Grilled halloumi with fresh vegetables", ar: "جبنة حلوم مشوية مع خضروات طازجة" }, price: 28 },
                ],
            },
        ],
    },
};
