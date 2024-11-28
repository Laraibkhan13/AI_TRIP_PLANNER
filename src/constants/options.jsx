export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:"Moderate",
        desc:'Keep cost on the average side',
        icon:'💰'
    },
    {
        id:3,
        title:"Luxury",
        desc:'Dont worry about cost',
        icon:'💸'
    }
]

export const selectTravelersList=[
    
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveller in exploration',
        icon:'✈️',
        people:'1 person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travellers in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'family ',
        desc:'A group of fun loving adv',
        icon:'🏠',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'friends',
        desc:'A bunch of thrill seeks',
        icon:'💪',
        people:'5 to 10 people'

    }
]

export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price-range, hotel image url, geo coordinates, rating, descriptions and suggest }, itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'