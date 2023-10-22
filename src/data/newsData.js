import { faker } from "@faker-js/faker";
function generateRandomNewsItems(numberOfItems) {
  const news = [];
  for (let i = 0; i < numberOfItems; i++) {
    const newsItem = {
      coinImage: faker.image.url(),
      coinDescription: faker.lorem.sentence(),
      coinHeading: faker.lorem.words(),
      assetName: faker.lorem.word(),
      newsId: faker.string.uuid(),
      totalLikes: faker.number.int(),
      totalDislikes: faker.number.int(),
      createdAt: faker.date.past(),
      category: faker.helpers.arrayElement([
        "Bitcoin",
        "Ethereum",
        "Altcoins",
        "Blockchain",
        "Finance",
      ]),
      createdBy: faker.person.firstName(),
      topicTitle: faker.lorem.words(),
      marketsCard: faker.datatype.boolean(),
    };
    news.push(newsItem);
  }
  return news;
}

const numberOfItems = 10;
export const newsItems = generateRandomNewsItems(numberOfItems);
