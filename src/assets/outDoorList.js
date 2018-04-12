import faker from "faker";
import { generateFixtures } from "simple-fixtures";

// const jobDescription = [];

const outdoorList = {
  title: ()=>faker.random.arrayElement(["Assistant Gardener", "Garden Camp Instructor", "Gardener", "Berry picker","Kiwifruit Picking","Community Relations Specialist"]),
  industry: "care",
  description: () =>
    faker.random.arrayElement(
      ["We need people to start approx. 20.03.2018. preferbly with cars we need at least 3 people with a car who can take others to the orchard, registered to pick kiwifruit NOW!!!!We are Pacific Coast Lodge located in beautiful Mount Maunganui close to the beach!",
      "Pick product for shipping according to the schedule in a safe, timely accurate manner,Essential Duties and Responsibilities include the following. Other duties may be assigned.,Follow and support all Company safety, GMP and HACCP policies,Pick product according to the pick list and DC link,Meet minimum productivity standard of 13 moves per hour,Fill in when needed on dock and in putaway,Assist with Inventory,Put stock transfers away,Consolidate product in designated bins,Label orders,Housekeeping,Repack and scrap items,Observe safety rules in the warehouse and plant,Conduct safety inspections on material handling equipment,Complete change sheets",
      "An Addus Home Care Aide/Caregiver serves a vital function in support of seniors and people with disabilities living independently in their homes, but who need assistance with daily tasks. There is frequent person-to-person contact in this job, and a Home Care Aide becomes very important to their client. While physical activity is not constant, a Home Care Aide needs to be in good physical condition to perform the duties of the position. The need for Home Care Aides is great, so employment is steady and hours can be flexible to accommodate personal/family needs. A Home Care Aide is a great entry level position with opportunity for growth in one of the fastest growing industries in the United States.",
      "Implements programs to develop relationships with organizations to build community coalitions and promote health awareness and managed care. Develops and implements approved marketing strategies for events to interested candidates in the service area according to prescribed rules and regulations. "
    ]),
  city: () =>
    faker.random.arrayElement(["Espoo", "Helsinki", "Vantta", "Tempere"]),
  hours: "8",
  salary: () => faker.random.number({ min: 10, max: 20 }),
  requirement: () =>
    faker.random.arrayElement([
      "YOU MUST BE OVER 165CM TALL TO REACH THE FRUIT ON THE VINES. We are Pacific Coast Lodge located in beautiful Mount Maunganui close to the beach!.we ASSIST our guests find work in the Bay of Plenty Area. We have strong relationships with the best contractors in the Bay of Plenty to make sure you are treated well and paid on time.",
      "Must be at least 18 years of age and Must be physically capable of performing personal care tasks.",
      "To perform this job successfully, an individual must be able to perform each essential duty satisfactorily. The requirements listed below are representative of the knowledge, skill, and/or ability required. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.",
      "Knowledge of the methods, materials, procedures, tools, and equipment associated with landscaping and gardening is required. Commitment to the mission of the zoo and the institutions? Core Values."
    ]),
  contactPerson: () => faker.internet.email()
};

const jobFields = generateFixtures(outdoorList, 20);


export default jobFields;
