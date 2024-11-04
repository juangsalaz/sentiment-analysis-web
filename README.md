# TwitSentiment
**TwitSentiment** is website to show the sentiment value of twitter post base on the topic and also showing percentage of sentiments for each topic.

## My approach to building TwitSentiment
* Because I have limit with the Twitter API access, so I generated my own dataset using [OpenAI API](https://openai.com/index/openai-api/). I generated fake tweets dataset with running a cron job periodically (to simulate the realtime twitter users post data) then calcullate the sentiment score using [sentiment javascript library](https://www.npmjs.com/package/sentiment).
* After generated dataset and get the sentiment score, I stored the dataset into [MongoDB Atlas](https://cloud.mongodb.com/). 
* Next step, I created Restful API using Node Js.
* There is two API endpoint, this is the [API docummentation](https://documenter.getpostman.com/view/3460037/2sAY4xCNm5)
* Ok, that is for the backend side, now I have dataset with the sentiment value, and the API endpoint to get the data, ok let's continue for the frontend side.
* Frontend side I'm using React Js, showing the tweets data into card elements.
* I put different colors for each card sentiment.
* I also put emoji for each card sentiment.
* I created badge label to show today's trending topic, it's became suggestion for users. When user click the badge, it will show the topic's tweets data.
* The last, I created a chart to show percentage of sentiment for a topic. To simulated real time dataset, we need to run the cron job in the backend and and I put setInterval in every 5 minutes call the API to get the updated data.

## Libraries
* [Sentiment javascript library](https://www.npmjs.com/package/sentiment), easy way to calcullate the sentiment score,  you can doing something like this:

```
import Sentiment from 'sentiment';

const sentiment = new Sentiment();
const sentimentAnalysis = sentiment.analyze(tweetText);
```

* [Chakra UI](chakra-ui.com) fast for craete layout and styling the web page, the elements you need is ready in Chakra.
* [React Chart JS ](https://www.npmjs.com/package/react-chartjs-2) easy way to create a chart

## Run Locally
Clone the project

```bash
  git clone git@github.com:juangsalaz/sentiment-analysis-web.git
```

Go to the project directory

```bash
  cd sentiment-analysis-web
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Demo

You can try this project demo [here](https://sentiment-web-sigma.vercel.app/)


## Screenshots

![Screen Shot 2024-11-04 at 18 47 25](https://github.com/user-attachments/assets/f4ee1757-f8d1-46ad-8d38-eb1a5d48289f)

![Screen Shot 2024-11-04 at 18 47 47](https://github.com/user-attachments/assets/aaa41e45-e6a1-4308-b2b9-b70514f9a3a7)

![Screen Shot 2024-11-04 at 18 48 04](https://github.com/user-attachments/assets/b6d59d15-7231-4447-9dcc-39c60f64f277)
