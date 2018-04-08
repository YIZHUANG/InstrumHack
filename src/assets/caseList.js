import faker from "faker";
import { generateFixtures } from "simple-fixtures";

const fields = {
  industry: () =>
    faker.random.arrayElement([
      "Cleaning services",
      "Healh care",
      "IT ",
      "Health"
    ]),
  description: () => faker.lorem.sentence(),
  amount: () => faker.commerce.price()
};

const caseList = generateFixtures(fields, 20);

export default caseList;
