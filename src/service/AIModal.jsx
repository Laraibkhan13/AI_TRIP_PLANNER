import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Please give proper things which the user ask no feild should be empty",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format if ratings not avialable put random rating according to your knowloedge."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"tripDetails\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 50,\n        \"notes\": \"Average nightly rate. Prices vary depending on season and availability.\"\n      },\n      \"hotelImageUrl\": \"https://example.com/circuscircus.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1246,\n        \"longitude\": -115.1741\n      },\n      \"rating\": 3.8,\n      \"description\": \"A classic Las Vegas hotel with a circus theme, offering affordable rooms and various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"300 Fremont St, Las Vegas, NV 89101\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 60,\n        \"notes\": \"Average nightly rate. Prices vary depending on season and availability.\"\n      },\n      \"hotelImageUrl\": \"https://example.com/thed.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1662,\n        \"longitude\": -115.1404\n      },\n      \"rating\": 4.0,\n      \"description\": \"Located in the Fremont Street Experience, this hotel offers a vibrant atmosphere and budget-friendly accommodations.\"\n    },\n    {\n      \"hotelName\": \"Best Western Plus Casino Royale\",\n      \"hotelAddress\": \"3400 W Flamingo Rd, Las Vegas, NV 89103\",\n      \"price\": {\n        \"currency\": \"USD\",\n        \"amount\": 75,\n        \"notes\": \"Average nightly rate. Prices vary depending on season and availability.\"\n      },\n      \"hotelImageUrl\": \"https://example.com/bestwestern.jpg\", \n      \"geoCoordinates\": {\n        \"latitude\": 36.1072,\n        \"longitude\": -115.2028\n      },\n      \"rating\": 3.5,\n      \"description\": \"A comfortable and convenient hotel with easy access to the Strip and various attractions.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"A pedestrian mall with a vibrant atmosphere, light shows, and street performers.\",\n        \"placeImageUrl\": \"https://example.com/fremontstreet.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.167,\n          \"longitude\": -115.142\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"timeToVisit\": \"Evening (for the light show)\"\n      },\n      {\n        \"placeName\": \"Neon Museum\",\n        \"placeDetails\": \"A museum showcasing vintage Las Vegas signs.\",\n        \"placeImageUrl\": \"https://example.com/neonmuseum.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.177,\n          \"longitude\": -115.142\n        },\n        \"ticketPricing\": {\n          \"currency\": \"USD\",\n          \"amount\": 25\n        },\n        \"rating\": 4.2,\n        \"timeToVisit\": \"Afternoon\"\n      }\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"Strip Walk\",\n        \"placeDetails\": \"Walk the Las Vegas Strip, admiring the hotels and casinos.\",\n        \"placeImageUrl\": \"https://example.com/lasvegasstrip.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.11,\n          \"longitude\": -115.17\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.8,\n        \"timeToVisit\": \"Afternoon/Evening\"\n      },\n      {\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"Enjoy the mesmerizing water show.\",\n        \"placeImageUrl\": \"https://example.com/bellagiofountains.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1147,\n          \"longitude\": -115.1731\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.7,\n        \"timeToVisit\": \"Evening\"\n      }\n    ],\n    \"day3\": [\n      {\n        \"placeName\": \"Seven Magic Mountains\",\n        \"placeDetails\": \"Colorful rock art installation outside of the city.\",\n        \"placeImageUrl\": \"https://example.com/sevenmagicmountains.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.011,\n          \"longitude\": -114.923\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.4,\n        \"timeToVisit\": \"Afternoon\"\n      },      \n      {\n        \"placeName\": \"High Roller Observation Wheel\",\n        \"placeDetails\": \"Enjoy panoramic views of the city from the High Roller.\",\n        \"placeImageUrl\": \"https://example.com/highroller.jpg\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.09,\n          \"longitude\": -115.17\n        },\n        \"ticketPricing\":{\n          \"currency\": \"USD\",\n          \"amount\": 30\n        },\n        \"rating\": 4.6,\n        \"timeToVisit\": \"Evening\"\n      }\n    ]\n  }\n}\n```\n\n**Note:**  This JSON uses placeholder URLs for images.  You'll need to replace `\"https://example.com/...\"` with actual image URLs.  Also, prices are estimates and should be verified closer to your travel dates.  Consider using a travel API to get real-time pricing and availability for hotels and attractions.\n"},
          ],
        },
      ],
    });
  
    