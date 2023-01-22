import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
const Logo = () => (
  <a href='/'>
    <img
      className='logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQFELK3a9H16QTturOu6HihNMpAp5WbqN-Q&usqp=CAU'
      alt='logo'
    />
  </a>
);

// Composing Components
const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const twoJoes = {
  name: 'Two Joes',
  image:
    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vzx0lioqi9xvk49kl49b',
  cuisines: ['Tandoor', 'Arabian'],
  rating: '4.2',
};

// Config Driven Architecture

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '649056',
      name: 'Mj Kitchen',
      uuid: '6d781104-5293-4913-8944-4799f4265896',
      city: '16',
      area: 'Pratap Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'bd88c208d64b63978885c682db3e74e0',
      cuisines: ['Tandoor', 'Seafood', 'Biryani'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: 'mj-kitchen-pratap-nagar-pratap-nagar',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'PLOT NO 2 , FIRST FLOOR, MANGALMURTI COMPLEX, BANDHU G.N , SOCIETY , NAGPUR, Nagar urban , Nagpur urban, Nagpur-1 (Maharashtra), - 440022',
      locality: 'Bandhu G N Society',
      parentId: 137322,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2300,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2300,
        message: '',
        title: 'Delivery Charge',
        amount: '2300',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5658377~p=1~eid=00000185-d98f-02c4-1339-a30f0016015c',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '649056',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '--',
      totalRatings: 0,
      new: true,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '59240',
      name: 'Yellow Chilly',
      uuid: '5f2b102b-e69e-4bc3-bece-155fdb48d3c9',
      city: '16',
      area: 'Trimurti Nagar',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'dawuvbi1i1ue5egblbzr',
      cuisines: ['North Indian', 'Biryani', 'Chinese', 'Tandoor'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: '19 MINS',
      lastMileTravel: 0.5,
      slugs: {
        restaurant: 'yellow-chilly-bajaj-nagar-bajaj-nagar',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'Sanchiti Complex, Flat No. 104, Ring Rd, Trimurtee Nagar, Nagpur, Maharashtra 440022',
      locality: 'Subhash Nagar',
      parentId: 9220,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2300,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2300,
        message: '',
        title: 'Delivery Charge',
        amount: '2300',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '59240',
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.3',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '412733',
      name: 'Suryakant Saoji',
      uuid: '2efea19b-177d-4907-8689-b1afdd697df0',
      city: '16',
      area: 'Pratap Nagar',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'hukxpql5xrulxnm7mcdg',
      cuisines: ['North Indian'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 0.5,
      slugs: {
        restaurant: 'suryakant-saoji-pratap-nagar-pratap-nagar',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'TRIMURTI NAGAR SQUARE, SUBHASH NAGAR ROAD, PARSODI, NAGPUR 440022',
      locality: 'Subhash Nagar Road',
      parentId: 198026,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2300,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2300,
        message: '',
        title: 'Delivery Charge',
        amount: '2300',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '412733',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '388105',
      name: "AB's - Absolute Barbecues",
      uuid: '8a978836-c45d-42b6-9f4d-24e5f0f8a5ea',
      city: '16',
      area: 'Dharampeth',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'it5wzmskpr7hw0nltwdk',
      cuisines: [
        'North Indian',
        'Chinese',
        'Mughlai',
        'Biryani',
        'Barbecue',
        'Grill',
        'Seafood',
        'Kebabs',
        'Pan-Asian',
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: '32 MINS',
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: 'ab-s-absolute-barbecues-dharampeth-dharampeth',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'Plot No. 236, Survey No. 962, Street No. 15/24, West High Court, Dharampeth, Nagpur, Nagpur-1, Maharashtra,440010',
      locality: 'Dharampeth',
      parentId: 387759,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3500,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 3500,
        message: '',
        title: 'Delivery Charge',
        amount: '3500',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5705173~p=4~eid=00000185-d98f-02c4-1339-a3100016042d',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '4 kms',
      hasSurge: false,
      sla: {
        restaurantId: '388105',
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.9',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '61864',
      name: 'I Love Momo',
      uuid: 'fd238325-c8ad-466a-96bb-3fe72d85a7d8',
      city: '16',
      area: 'Shewalkar Garden Building',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'hga5ntlumohyg0km4we3',
      cuisines: ['Chinese', 'Fast Food', 'Snacks', 'Street Food', 'Tibetan'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: '21 MINS',
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: 'i-love-momo-opp-durga-mandir-paratap-nagar-pratap-nagar',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'Plot no.10, Gittikhadan Layout, Kotwal Nagar, Pratap Nagar, Nagpur',
      locality: 'Opp. Prasadham Restaurant',
      parentId: 4749,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2300,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2300,
        message: '',
        title: 'Delivery Charge',
        amount: '2300',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '61864',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '365294',
      name: 'Checkers',
      uuid: '58a5aa2b-fec0-42d7-b088-3abc02e18deb',
      city: '16',
      area: 'Pratap Nagar',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'd5516079bd5c3cf93e9c5a5340287894',
      cuisines: [
        'American',
        'Chinese',
        'Indian',
        'Italian',
        'North Indian',
        'Pastas',
        'Pizzas',
        'Snacks',
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: '18 MINS',
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: 'checkers-pratap-nagar-pratap-nagar',
        city: 'nagpur',
      },
      cityState: '16',
      address:
        'PLOT NO. 24, GAYATRI NAGAR, I T PARK, NAGPUR, Nagpur-1, Maharashtra',
      locality: 'I T Park',
      parentId: 21854,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2300,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2300,
        message: '',
        title: 'Delivery Charge',
        amount: '2300',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '365294',
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.4',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  // destructuring the object data which we get as prop
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='restaurant-list'>
      {
        restaurantList.map(restaurant => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/> // Here the "key" remains unique for every element that gets added to the DOM, reconciliation.
        })
      }
      
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing react element inside the root:
root.render(<AppLayout />);
