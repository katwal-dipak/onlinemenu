const MENUDATA_1 = [
  {
    title: 'SMOOTHIES',
    data: [
      {
        price: '$5.50',
        active: true,
        description:
          'Strawberry Juice, Pineapple Juice, Bananas, Strawberries, Yogurt',
        title: 'STRAWBERRY BANANA',
      },
      {
        price: '$7.25',
        active: true,
        description:
          'Apple Juice, Strawberry Juice, Blueberries, Bananas, Orange Sherbet',
        title: 'BLUEBERRY DREAM',
      },
      {
        price: '$4.50',
        active: true,
        description: 'Apple Juice, Peaches, Bananas, Orange Sherbet, Yogurt',
        title: 'PEACH BEACH',
      },
      {
        price: '$5.00',
        active: true,
        description: 'Apple Juice, Raspberries, Bananas, Raspberry Sherbet',
        title: 'RASPBERRY HARMONY',
      },
      {
        price: '$5.50',
        active: true,
        description:
          'Cranberry Juice, Blueberries, Strawberries, Bananas, Raspberry Sherbet, Yogurt',
        title: 'CRANBERRY FIX',
      },
      {
        price: '$4.50',
        active: true,
        description:
          'Papaya Juice, Pineapple Juice, Strawberries, Bananas, Orange Sherbet, Pineapple Sorbet',
        title: 'TROPICAL BLAST',
      },
      {
        price: '$6.00',
        active: true,
        description:
          'Fresh Squeezed Orange Juice, Cranberry Juice, Strawberries, Blueberries, Raspberries, Raspberry Sherbet, Yogurt',
        title: 'CITRUS BERRY',
      },
    ],
    active: true,
  },
  {
    title: 'BOWLS',
    data: [
      {
        price: '$8.50',
        active: true,
        description:
          'Organic Acai, Fresh Banana And Granola (Add Peanut Butter Or Blueberries For $.50)',
        title: 'THE “ORIGINAL” ACAI BOWL',
      },
      {
        price: '$8.00',
        active: true,
        description:
          'Our Famous Pb&g Wrap Served In A Bowl! Peanut Butter, Fresh Banana, Granola, Honey, Low-fat Vanilla Yogurt',
        title: 'PB&G BOWL',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Dragonfruit, Raspberries, Mangos, Almond Milk, Strawberry Juice',
        title: 'DRAGONFRUIT BOWL',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Hass Avocado, Mangos, Bananas, Pineapple Sorbet, Honey, Soy Milk',
        title: 'AVOCADO BOWL',
      },
    ],
    active: true,
  },
  {
    title: 'WRAPS & SALADS',
    data: [
      {
        price: '$6.00',
        active: true,
        description:
          'Tender Chicken Breast, Cucumber, Shredded Carrots, Romaine Lettuce, And Sesame Ginger Dressing',
        title: 'ASIAN CHICKEN WRAP',
      },
      {
        price: '$5.00',
        active: true,
        description:
          'Romaine Lettuce, Shredded Carrots, Cucumbers, Tomatoes, Choice Of Cheese And Dressing',
        title: 'VEGGIE WRAP',
      },
      {
        price: '$8.50',
        active: true,
        description:
          'Sliced Smoked Turkey Breast, Hass Avocado, Fat-free Mayonnaise, Tomato, And Romaine Lettuce',
        title: 'AVOCADO TURKEY WRAP',
      },
      {
        price: '$4.50',
        active: true,
        description:
          'Romaine Lettuce, Tomato, Shredded Carrots, Cucumber, Choice Of Cheese And Dressing',
        title: 'GARDEN SALAD',
      },
    ],
    active: true,
  },
  {
    title: 'SHOTS',
    data: [
      {
        price: '$4.00',
        active: true,
        description:
          'A mineral-rich shot packed with detoxifying benefits, enhancing overall well-being. A daily serving of vegetables in just 1oz!',
        title: 'WHEATGRASS SHOTS',
      },
      {
        price: '$4.00',
        active: true,
        description:
          'Freshly-juiced Ginger And Lemon In A 2 Oz. Blast Of Immune-boosting Properties. Reduces Inflammation While Increasing Energy And Focus. Choose A Cayenne Or Turmeric Topper For An Extra Boost!',
        title: 'GINGER SHOTS',
      },
    ],
    active: true,
  },
  {
    title: 'JUICES',
    data: [
      {
        price: '$3.50',
        active: true,
        description:
          'Our Simple Blend Of Freshly Juiced Apples & Lemon.  (Add Kale Or Ginger For $.50)',
        title: 'PULP LEMONADE',
      },
    ],
    active: true,
  },
];

const MENUDATA_2 = [
  {
    title: 'SPECIAL',
    data: [
      {
        price: '£4.0',
        active: true,
        description:
          'A scoop of house-made vanilla ice cream with a shot of Red Brick espresso',
        title: 'ULTIMATE AFFOGATO',
      },
    ],
    active: true,
  },
  {
    title: 'ESPRESSO BASED COFFEE',
    data: [
      {
        price: '£2.6 ',
        active: true,
        description: 'Espresso / Long Black',
        title: 'BLACK',
      },
      {
        price: '£3.0',
        active: true,
        description: 'Oat/Regular Milk',
        title: 'FLAT WHITE / CAPPUCCINO / LATTE',
      },
      {
        price: '£4.0',
        active: true,
        description: 'Piura Porcelana 75% chocolate',
        title: 'HOT CHOCOLATE / MOCHA',
      },
      {
        price: '£2.8 ',
        active: true,
        description: 'Oat/Regular Milk',
        title: 'CORTADO / MACCHIATO',
      },
    ],
    active: true,
  },
  {
    title: 'FILTER COFFEE',
    data: [
      {
        price: '£3.5',
        active: true,
        description: 'Square Mile Coffee Roasters',
        title: 'ROTUTU, EAST TIMOR - WASHED',
      },
      {
        price: '£5.5',
        active: true,
        description: 'Koppi',
        title: 'GUAMA AA, KENYA - WASHED',
      },
      {
        price: '£5.5',
        active: true,
        description: 'Manhattan Coffee Roasters',
        title: 'DIEGO BERMUDEZ, COLOMBIA - ANAEROBI',
      },
    ],
    active: true,
  },
  {
    title: 'LIMITED EDITION TEA',
    data: [
      {
        price: '£5.5',
        active: true,
        description: 'Fruity/Floral/Caramel',
        title: 'ROASTED YANCHA OOLONG, CHINA',
      },
    ],
    active: true,
  },
  {
    title: 'TEA',
    data: [
      {
        price: '£3.5',
        active: true,
        description:
          'Assam w/milk / Earl grey / Nara Black / Spring Darjeeling',
        title: 'BLACK',
      },
      {
        price: '£3.5',
        active: true,
        description: 'Fuji Sencha / Supernatural Green / Yimu Oolong',
        title: 'GREEN',
      },
      {
        price: '£3.5',
        active: true,
        description: 'Lemon Verbena / French Peppermint / Chamomile',
        title: 'HERBAL',
      },
    ],
    active: true,
  },
  {
    title: 'COLD DRINKS',
    data: [
      {
        price: '£2.0',
        active: true,
        description: 'Aqua Panna',
        title: 'STILL WATER',
      },
      {
        price: '£2.6',
        active: true,
        description: 'Apple Blend Variety 100% pure fruit juice',
        title: 'CHEGWORTH VALLEY JUICES',
      },
      {
        price: '£4.0',
        active: true,
        description: 'Original / Ginger / Passion Fruit / Raspberry',
        title: 'JARR KOMBUCHA',
      },
    ],
    active: true,
  },
  {
    title: 'ICED DRINKS',
    data: [
      {price: '£3.5', active: true, description: 'Iced filter', title: 'BLACK'},
      {
        price: '£4.0',
        active: true,
        description: 'Iced Spring Darjeeling',
        title: 'ICED TEA',
      },
      {
        price: '£3.0',
        active: true,
        description: 'Oat/Regular Milk',
        title: 'ICED LATTE ',
      },
      {
        price: '£3.6',
        active: true,
        description: 'Green/ Oolong/ Black',
        title: 'ICED STONE ROLLED TEA WITH MILK/OAT',
      },
    ],
    active: true,
  },
];