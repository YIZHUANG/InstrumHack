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
  address: () => faker.address.streetAddress("###"),
  salary: () => faker.commerce.price,
  contactPerson: () => faker.internet.email
};

const jobFields = generateFixtures(fields, 20);

export default jobFields;
