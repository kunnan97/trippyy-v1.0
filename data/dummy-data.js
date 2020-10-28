import Attraction from '../models/Attraction';
import AttractionDetails from '../models/AttractionDetails';

export const ATTRACTIONS = [
    new Attraction('Singapore Flyer', 'Tourist Attraction', 'General', '30 Raffles Ave, Singapore 039803', 4.5, 
    'https://www.visitsingapore.com/see-do-singapore/recreation-leisure/viewpoints/singapore-flyer/_jcr_content/par-carousel/carousel_detailpage/carousel/item_3.thumbnail.carousel-img.740.416.jpg'),
    new Attraction('Gardens by the Bay', 'Tourist Attraction', 'General', '18 Marina Garden Dr, Singapore 018953', 4.5, 
    'https://afar-production.imgix.net/uploads/images/post_images/images/FH4WdZpSCC/original_7d0d74d7c60b72c7e76799a30334803e.jpg?1521203247?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954'),
    new Attraction('Singapore Botanic Gardens', 'Tourist Attraction', 'General', '1 Cluny Rd, Singapore 259569', 4.5, 
    'https://www.visitsingapore.com/see-do-singapore/nature-wildlife/parks-gardens/singapore-botanic-gardens/_jcr_content/par-carousel/carousel_detailpage/carousel/item_2.thumbnail.carousel-img.740.416.jpg'),
    new Attraction('National Museum of Singapore', 'Tourist Attraction', 'General', '93 Stamford Rd, Singapore 178897', 4.5, 
    'https://www.nhb.gov.sg/nationalmuseum/-/media/nms2017/image/homebanner/nmswebsitevsbanner/website-banner-visit-us.jpg'),
    new Attraction('Night Safari', 'Tourist Attraction', 'General', '80 Mandai Lake Rd, Singapore 729826', 4.5, 
    'https://www.visitsingapore.com/see-do-singapore/nature-wildlife/fun-with-animals/night-safari/_jcr_content/par-carousel/carousel_detailpage/carousel/item_3.thumbnail.carousel-img.740.416.jpg'),
    new Attraction('Deliveroo Food Market', 'Restaurant', 'Food', '29 Media Cir, Singapore', 4.5, 
    'https://cdn01.vulcanpost.com/wp-uploads/2019/03/Deliveroo-Food-Market-9.jpg'),
    new Attraction('Malaysian Food Street', 'Tourist Attraction', 'Food', 'Resorts World Sentosa 8 Sentosa Gateway, Waterfront, Level 1, 098269', 4.5, 
    'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/restaurants/malaysian-food-street/malaysian-food-street-masthead-banner-1366x666.jpg'),
    new Attraction('Maxwell Food Centre', 'Tourist Attraction', 'Food', '1 Kadayanallur St, Singapore 069184', 4.5, 
    'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2016/09/Maxwell-Nate-Robert1.jpg'),
    new Attraction('Chinatown Street Markets', 'Tourist Attraction', 'Food', 'Trengganu St, Singapore 050005', 4.5, 
    'https://coconuts.co/wp-content/uploads/2016/11/singapore_chinatown.jpg'),
    new Attraction('Ocean Restaurant', 'Aquarium', 'Food', '22 Sentosa Gateway S.E.A Aquarium, West zone carpark B1M, #B1-455 & 456, 098136', 4.5, 
    'https://i.hungrygowhere.com/business/b4/8d/12/00/1a_800x0_crop_800x800_3f961c038e.jpg')
];

export const ATTRACTIONS_DETAILS = [
    new AttractionDetails (
        'Deliveroo Food Market',
        
        'Monday       11:00AM-02:30PM, 04:30-09:30PM\n' + 
        'Tuesday      11:00AM-02:30PM, 04:30-09:30PM\n' +
        'Wednesday 11:00AM-02:30PM, 04:30-09:30PM\n' +
        'Thursday      11:00AM-02:30PM, 04:30-09:30PM\n' +
        'Friday            11:00AM-02:30PM, 04:30-09:30PM\n' + 
        'Saturday       11:00AM-02:30PM, 04:30-09:30PM\n' + 
        'Sunday          11:00AM-02:30PM, 04:30-09:30PM'
        ,
        'http://www.deliveroo.com.sg/',
        'Deliveroo (legally incorporated as Roofoods Ltd.) is an online food delivery company based in London, England. It operates in two hundred locations across the United Kingdom, the Netherlands, France, Belgium, Ireland, Spain, Italy, Australia, New Zealand, Singapore, the United Arab Emirates, Puerto Rico, Hong Kong and Kuwait.',
        4.5,
        [
            [
                'Kelvin Koh',
                4.5,
                'Good choices although it\'s a little pricey. Love the technology behind it too. If you do not want any contact or have to talk to anyone when u return order your food, this is the place!'
            ],
            
            [
                'Kelvin Koh',
                4.5,
                'Good choices although it\'s a little pricey. Love the technology behind it too. If you do not want any contact or have to talk to anyone when u return order your food, this is the place!'
            ],
            
            [
                'Kelvin Koh',
                4.5,
                'Good choices although it\'s a little pricey. Love the technology behind it too. If you do not want any contact or have to talk to anyone when u return order your food, this is the place!'
            ]
        ]
    )
]