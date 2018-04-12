import faker from "faker";
import { generateFixtures } from "simple-fixtures";

// const jobDescription = [];

const Carefields = {
  title: ()=>faker.random.arrayElement(["Home Health Aide", "Personal and Home Care Aide", "Home Care", "Addus Caregiver","Caregiver","Community Relations Specialist"]),
  industry: "care",
  description: () =>
    faker.random.arrayElement([
      "Provide personal care, homemaking services, companion services, and occasional assistance with outdoor or indoor chores ",
      "Girling Community Care, an affiliate of Kindred at Home, is currently seeking caring and dependable people for the Abilene area to work in the homes of elderly or disabled clients.",
      "An Addus Home Care Aide/Caregiver serves a vital function in support of seniors and people with disabilities living independently in their homes, but who need assistance with daily tasks. There is frequent person-to-person contact in this job, and a Home Care Aide becomes very important to their client. While physical activity is not constant, a Home Care Aide needs to be in good physical condition to perform the duties of the position. The need for Home Care Aides is great, so employment is steady and hours can be flexible to accommodate personal/family needs. A Home Care Aide is a great entry level position with opportunity for growth in one of the fastest growing industries in the United States.",
      "Implements programs to develop relationships with organizations to build community coalitions and promote health awareness and managed care. Develops and implements approved marketing strategies for events to interested candidates in the service area according to prescribed rules and regulations. "
    ]),
  city: () =>
    faker.random.arrayElement(["Espoo", "Helsinki", "Vantta", "Tempere"]),
  hours: "8",
  salary: () => faker.random.number({ min: 10, max: 20 }),
  requirement: () =>
    faker.random.arrayElement([
      "Be at least 18 years old. Demonstrate the ability to communicate well both in writing and orally. Demonstrated ability to work as an effective team member. Demonstrate ability to adapt to a variety of circumstances, situations, and people. Be available to work various shifts. Meet the eligibility requirements of the auto insurance company providing coverage for OCCK vehicles. Have basic computer knowledge. Must have a valid Kansas driver’s license",
      "Must be at least 18 years of age and Must be physically capable of performing personal care tasks.",
      "To perform this job successfully, an individual must be able to perform each essential duty satisfactorily. The requirements listed below are representative of the knowledge, skill, and/or ability required. Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.",
      "Knowledge of the methods, materials, procedures, tools, and equipment associated with landscaping and gardening is required. Commitment to the mission of the zoo and the institutions? Core Values."
    ]),
  contactPerson: () => faker.internet.email()
};

const jobFields = generateFixtures(Carefields, 20);

export default jobFields;
