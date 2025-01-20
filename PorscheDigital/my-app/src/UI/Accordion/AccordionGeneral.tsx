import { useState } from "react";
import { PAccordion, PText } from "@porsche-design-system/components-react";

type QuestionCategories =
  | "Porsche ID and My Porsche Account"
  | "Registration and Access to My Porsche"
  | "Porsche Connect Services"
  | "Functions and Additional Services (Functions on Demand - FoD)"
  | "Charging Your Porsche"
  | "Technical Assistance and Issues"
  | "Other General Topics";

const questions: Record<QuestionCategories, Record<string, string>> = {
  "Porsche ID and My Porsche Account": {
    "What is the Porsche ID?": "With the Porsche ID (your personal email address), you can log in to many Porsche services, websites, apps, and certain vehicle models. If you have purchased a vehicle with Connect equipment, you will automatically receive an invitation before delivery. Depending on your country, you can also create your own Porsche ID.",
    "Why do I need to acknowledge the Privacy Policy and accept data sharing to use My Porsche?": "To use some Porsche Connect services, it is necessary to record and process personal data. We place great importance on ensuring that you know exactly and can decide how your data is used, for what purpose, and how it is collected and processed. We inform you about this in our privacy statement. The current version of the privacy statement is always accessible in My Porsche. To serve you better through our dealer network, we kindly ask you to provide your consent during registration so that we can share data with your chosen Porsche dealer. You can revoke your consent at any time by sending us an email.",
    "How can I create or update my personal information (name, address, phone number, email, payment details) in the My Porsche portal?": "At the top of the Porsche Connect Store homepage, you will find the menu to log into your My Porsche account. Once logged in, you can adjust various settings in your profile through the 'Profile Settings' submenu. In the 'Personal Information' tab, you can edit specific Porsche ID information. Additionally, your password and security code can be edited in 'Login and Security'.",
    "How can I create or update my personal information in the My Porsche app?": "To change your personal information, open the My Porsche app and log in with your Porsche ID. Then, under the 'Account' section, select 'Edit Profile Information' to modify the desired details.",
    "How can I add my vehicle in the My Porsche portal?": "To add your vehicle to your My Porsche profile in the portal, follow these steps:\n\n1) Log in to the My Porsche portal with your Porsche ID and password.\n2) Select the 'Add Vehicle' submenu.\n3) Follow the instructions to link your vehicle and have your Vehicle Identification Number (VIN) ready. You can find it in the vehicle's technical data sheet or registration document. Your Porsche dealer can also help you link your vehicle by sending an invitation to My Porsche.",
    "How can I assign my My Porsche ID to another country (e.g., after relocating)?": "The country associated with your Porsche ID is the same as the one for the Porsche dealer that initially invited you to My Porsche. To change the country association, for example, after relocating, ask your new local Porsche dealer to send you another invitation to My Porsche. You can also contact the Porsche Customer Interaction Center.",
    "Is my Porsche ID account automatically deleted after selling the vehicle?": "No. Your Porsche ID account remains active, and you can add new vehicles at any time. If you sell a vehicle, you can remove it from your user profile.",
    "I want to delete my Porsche ID account.": "You can delete your Porsche ID account in My Porsche via the menu > Login and Security.\n\nDeleting your Porsche ID account will result in losing online access to your services and vehicles, and all service settings will be reset. Service features will also be suspended. Your customer data provided to Porsche will be retained.\n\nTo also delete your customer data, contact your Official Porsche Center.",
    "What is an additional user?": "As the primary user of a vehicle with Porsche Connect, you can enable other users, such as family members, to use your vehicle and Porsche Connect services as secondary users. Each secondary user will receive their own Porsche ID and can configure services according to their preferences. The owner of the vehicle reserves the right to contract services."
  },
  "Registration and Access to My Porsche": {
    "I haven’t received an email with the registration link for My Porsche.": "The email with the registration link might have ended up in your spam folder. Check the spam folder of your email inbox. If you haven’t received the registration email, contact your Porsche Partner.",
    "How will I receive the confirmation code required during registration in My Porsche?": "You will receive an email invitation to My Porsche about 14 days before the delivery of your vehicle. By clicking the activation link, you will access the My Porsche portal. In the first step, you must request a confirmation code, which will be sent via SMS to the mobile number registered with your Porsche dealer. Then, you can enter the confirmation code in My Porsche and set your password and security code. IMPORTANT: Ensure that the mobile number provided to your Porsche dealer is current and correct. This is the only way you can receive the confirmation SMS.",
    "How can I link my Porsche ID to my vehicle and establish the connection?": "Log in to My Porsche with your Porsche ID, go to \"My Vehicles\", and enter your vehicle's VIN. Follow the instructions to finalize the connection."
  },
  "Porsche Connect Services": {
    "How do I request Porsche Connect services?": "Log in to My Porsche or the Porsche Connect Store, select your vehicle, browse the available services, and purchase or activate the desired ones.",
    "Why was my Connect service automatically renewed?": "If you accepted the automatic renewal of the subscription when purchasing a service in the Connect Store, the contract will automatically renew once the previous term has expired. You can disable the automatic renewal feature through the 'My Products' submenu in the My Porsche portal.",
    "How can I cancel a Connect service?": "Services linked to a term can be canceled at any time, provided the corresponding notice period is respected. To do so, proceed as follows:\n\n1) Log in to the Porsche Connect Store and select 'My Products'.\n2) Select the contract you wish to terminate and submit your cancellation request.\n\nIf you need assistance from an advisor to cancel the services, contact the Porsche Customer Interaction Center.",
    "Why am I still being charged for Connect services if I no longer own the corresponding vehicle?": "If you accepted the automatic renewal of the subscription when purchasing a service in the Connect Store, the corresponding contract will automatically renew once the previous term has expired. To avoid automatic contract renewal, for example, after selling the vehicle, cancel the corresponding Connect contracts during the notice period. You can do this at any time as follows:\n\n1) Log in to the Porsche Connect Store and select 'My Products'.\n2) Click on the contract you wish to terminate and submit your cancellation request directly.\n\nIf you need assistance from an advisor to cancel the services, contact the Porsche Customer Interaction Center.",
    "What Connect services are available for my vehicle?": "In the Porsche Connect Store, you will find a summary of all the Connect services available for your vehicle after logging in with your Porsche ID.",
    "How can I pay in the Porsche Connect Store?": "You can make purchases in the Porsche Connect Store using a credit card. A summary of all credit cards accepted in your country can be found at the bottom of each page in the Porsche Connect Store.",
    "How can I change the language displayed in the My Porsche app?": "The language displayed in the My Porsche app depends on the language selected in your smartphone settings. To change the language setting in the My Porsche app, adjust the language selected in your smartphone settings."
  },
  "Functions and Additional Services (Functions on Demand - FoD)": {
    "When will I receive the invoice for contracted Functions on Demand (FoD) services?": "Billing for Functions on Demand occurs as soon as the function is activated in the vehicle. Refer to the manual for more details about activation in the vehicle.",
    "Do I need to cancel the Function on Demand if I sell the vehicle?": "Functions on Demand are not available in all countries and cannot be canceled upon selling the vehicle. If you have a monthly subscription, you must cancel it in the Connect Store before transferring the vehicle.",
    "Can I cancel a Functions on Demand (FoD) order?": "If you have purchased a Function on Demand on a permanent basis, you can revoke it within the first 14 days. For monthly subscriptions, you can cancel with one day’s notice before the end of the month.",
    "When will a requested service be available in the vehicle?": "Requested services can be accessed immediately after restarting your vehicle in the PCM if your vehicle is connected to the Internet."
  },
  "Charging Your Porsche": {
    "Where can I charge my Porsche?":
      "You can charge your Porsche in various locations, including public charging points, home charging stations, and fast chargers. Use the public charging network or install a home charger for added convenience.",

    "What types of outlets can I use to charge my Porsche?":
      "Your Porsche can be charged using standard 230V outlets for slow charging or AC (alternating current) and DC (direct current) chargers for faster charging. The type of connector depends on the charging infrastructure and your vehicle model.",

    "Can the indicated charging times vary?":
      "Yes, several factors affect charging times, including:\n\n- The connection cable and power supply infrastructure\n- Cabin preconditioning\n- The state of charge and temperature of the high-voltage battery\n- Charger or energy manager settings\n\nAdditionally, the specific home installation is a significant factor when charging at home. For AC charging, the onboard charger’s capacity is critical, which can cause charging times to vary from the indicated values.",

    "How can I optimize charging times?":
      "The Porsche Charging Planner can help predict charging times and optimize the process. For instance, preconditioning the battery before charging can improve performance and reduce the required charging time.",

    "What charging equipment does Porsche offer for home charging, and where can I purchase it?":
      "Porsche offers various charging equipment options, such as the Porsche Mobile Charger and Porsche Mobile Charger Connect. Optional accessories include wall-mounted Charging Docks and compact Porsche Compact Charging Pedestals. These can be purchased through official sales channels like your Official Porsche Center.",

    "What is the difference between the Porsche Mobile Charger Connect and the Porsche Mobile Charger?":
      "The main difference is that the Porsche Mobile Charger Connect includes Wi-Fi connectivity, enabling remote management and control of the charging process via the Porsche Connect app. It also offers more customization and remote control options compared to the standard Porsche Mobile Charger, which is designed solely for direct vehicle charging.",

    "I’d like to charge my Porsche at home. How can I determine if it’s possible?":
      "To charge your Porsche at home, verify your home’s electrical infrastructure. Ensure you have a suitable outlet or the ability to install a compatible charger, whether standard or faster. Consult a qualified electrician or your Official Porsche Center for details on installation requirements and available options.",

    "Are there any specific requirements for installing a home charging system?":
      "Yes, installing a home charging system requires meeting certain technical and safety standards, such as having an appropriate power outlet or an electrical setup that can handle the vehicle’s charging demands. Contact a certified electrician or your Official Porsche Center to evaluate the installation and ensure compliance with local regulations.",

    "Can I connect Porsche’s charging equipment to other energy management systems?":
      "Yes, the Porsche Mobile Charger Connect is compatible with various home energy management systems, such as those with solar panels or energy storage systems. This integration allows for energy optimization, reducing reliance on the external power grid. Consult an energy expert or your Official Porsche Center for details on integrating these systems.",

    "What options are available for setting the current limit?":
      "The Porsche Mobile Charger and Porsche Mobile Charger Connect allow you to set a current limit to control charging speed and adapt to your home’s electrical network capacity. You can adjust this limit through the Porsche Connect app or directly on the charging device, depending on the model and configuration.",

    "Where can I find my Mobile Charger Connect login details if I’ve lost the letter containing them?":
      "If you’ve lost the letter with your Porsche Mobile Charger Connect login details, contact Porsche Customer Service or your Official Porsche Center to request a new letter or recover your login credentials. Have your vehicle and Porsche ID information ready to expedite the process.",

    "What benefits does the Porsche Charging Service offer for public charging?":
      "The Porsche Charging Service provides access to an extensive network of public charging points, competitive rates, and the convenience of easy payments via the Porsche Connect app or directly from the vehicle. Additionally, the service offers real-time information about charger availability, helping you plan your routes. Special conditions or preferential rates may also apply with certain charging providers.",

    "How can I use public charging points?":
      "To use public charging points, simply go to a compatible charger, connect your vehicle, and start charging. Payments can be made through the Porsche Connect app, a linked charging card, or a credit card, depending on the charging provider. Some charging points also allow you to initiate charging directly from the vehicle if it supports the charger’s payment system.",

    "How can I plan a route or trip?":
      "You can plan your route or trip using the route planning feature of Porsche’s navigation system or the Porsche Connect app. The trip planner not only shows the fastest routes but also provides information on available charging points along your journey, helping you optimize charging times and battery usage. The Porsche Charging Planner also offers suggestions to streamline the charging process for a smoother travel experience.",

    "What’s the easiest way to find the nearest charging point?":
      "The easiest way to find a nearby charging point is through the navigation system in your Porsche, which displays the location of available chargers along your route or near your current location. You can also use the Porsche Connect app to view nearby charging points, their real-time availability, and associated charging rates.",

    "How can I ensure my Porsche doesn’t fully discharge?":
      "To prevent your Porsche battery from fully discharging, monitor the charge level using the navigation system or Porsche Connect app. If the charge level drops low, plan to charge as soon as possible. Electric vehicles are designed to protect the battery from completely discharging, but maintaining a minimum charge ensures optimal battery performance.",

    "Do I need to charge my Porsche to 100% every time?":
      "It’s not necessary to charge your Porsche to 100% every time. In fact, it’s recommended to charge the battery between 20% and 80% to maximize its lifespan. Only charge to 100% for long trips or when full range is needed. Frequent partial charges help prevent accelerated battery wear.",

    "What should I keep in mind during cold weather?":
      "In cold temperatures, battery range may be reduced due to the internal chemistry being less efficient. To mitigate this, precondition the battery before starting your trip using the vehicle’s climate control system while plugged in. Keep in mind that charging times may increase, and heating the vehicle may consume more energy.",

    "What should I consider when traveling abroad?":
      "When traveling abroad, prepare for differences in charging infrastructure and availability. Bring necessary adapters for charging points in the destination country, and check charging fees. If using services like Porsche Charging Service, ensure the charging network is available in that country.",

    "Can I use travel adapters when charging abroad?":
      "Yes, you can use travel adapters when charging abroad, provided they are compatible with the charging points and electrical infrastructure of the country you’re visiting. Ensure the adapter meets safety standards and doesn’t interfere with the charging process.",

    "What happens if there’s a power interruption during charging?":
      "In the event of a power interruption, the vehicle will typically stop charging and display an error message on the PCM or Porsche Connect app. Wait a few minutes and try restarting the charging process. If the issue persists, check the power supply or contact the charging provider. For home chargers, inspect your electrical setup.",

    "My vehicle isn’t charging or isn’t charging at the expected power level. What can I do?":
      "If your vehicle isn’t charging correctly or at the expected power level, check the following: ensure the cable and connector are securely connected, verify the power supply and charging station, and check for any interruptions or faults. The vehicle may also adjust charging power based on battery conditions, ambient temperature, or infrastructure capacity. If the issue continues, contact your Official Porsche Center for assistance.",

    "What should I keep in mind when charging vehicles from other brands?":
      "When charging vehicles from other brands, ensure the charger is compatible with the connection standard and charging requirements of that vehicle. You may need specific adapters, and charging power may vary depending on the vehicle model and charger used. Check each vehicle’s and charger’s specifications before attempting to charge.",

    "How are charging prices calculated with the Porsche Charging Service?":
      "Charging prices depend on the amount of energy consumed, the charging duration, and the power level of the charging station. You can view a price overview by country and power level on the Charging Service platform."
  },
  "Technical Assistance and Issues": {
    "Who can I contact if I need technical assistance?":
      "If you need technical assistance, you can contact your Official Porsche Center. They can provide support for technical issues, vehicle diagnostics, or any other type of assistance. Additionally, you can also reach out to Porsche Connect Support for specific issues related to connectivity services and applications. Contact details are available through the My Porsche app and the Porsche web portal.",
    "I can't schedule a service appointment with my Porsche Partner through My Porsche.":
      "Currently, scheduling maintenance appointments with your Porsche Partner via My Porsche is not available in all countries. Please contact your Porsche Partner by phone or email.",
    "I can't find the services on the PCM.":
      "First, check the validity period of the services. You can view the remaining time in My Porsche under 'Services' or in the Porsche Connect Store after logging in. The range of services is continuously improved and optimized. Therefore, availability for your vehicle or country may vary.",
    "An error occurred during the activation of a Function on Demand available by country or during an online software update.":
      "Activation or installation failures can have various causes. Ensure there is no active charging connection. Disconnect the vehicle using the power button, exit, and lock it. Wait about 10 minutes. Then, restart the vehicle. Typically, activation is completed after this process, and the online software update will reappear as available in the PCM under 'Updates.'\n\nIf other error messages appear, follow the instructions on the PCM or instrument panel and contact your Official Porsche Center."
  },
  "Other General Topics": {
    "Do the services purchased expire when selling the vehicle?":
      "Porsche Connect services are purchased for a specific vehicle. When a vehicle is sold, the contracted services remain active, and the new owner can use them for the remaining duration. It is not possible to transfer the purchased services to other vehicles.",
    "Do Porsche Connect services work abroad?":
      "The availability of Porsche Connect services may vary depending on the country and Porsche's regional partners. To use the services in another country, activate roaming on the PCM:\n\nOlder models (911, 718, Macan, Cayenne): PHONE > OPT > SET PHONE > Roaming.\n\nPanamera (2nd generation): Device Manager > Options > Data Connections > Roaming.\n\nRecent models (Cayenne 3rd generation, Macan, 911, Panamera): SET > Device Manager > Options > Mobile Data > Roaming.\n\nTaycan: Roaming is activated automatically.",
    "I want to disable the data connection on the PCM and use only offline functions.":
      "To disable the data connection on the PCM:\n\n- Older models (911, 718, Macan, Cayenne): PHONE > OPT > SET PHONE > Data Connection > OFF.\n- Panamera (2nd generation): Device Manager > Options > Data Connections > OFF.\n- Recent models (Cayenne, Macan, 911, Panamera): SET > Device Manager > Options > Mobile Data > OFF.\n- Taycan: Privacy Settings and Porsche Connect > Private Mode > Enable Private Mode for all services.",
    "Do I need to enter the SIM card PIN every time the car starts?":
      "You can save your PIN in the PCM:\n\nRecent models (Panamera, Cayenne, Macan, 911): Device Manager > Options > Phone > SIM Card > Save PIN.\n\nOlder models (911, 718, Macan, Cayenne): PHONE > OPT > SET PHONE > Phone > SIM Card > Save PIN.\n\nTaycan: Entering the SIM card PIN is not required.",
    "With the integrated SIM card: do I have to pay for using services abroad (roaming)?":
      "You can use Porsche Connect services in more than 30 countries. To use the integrated SIM card available in some countries, a roaming fee is required. The availability of certain Connect services, depending on the country, can be checked in the Connect Store.",
    "Why can't I use Apple® CarPlay while the phone's Bluetooth function is active?":
      "When Apple® CarPlay is used, active Bluetooth connections (for telephony, media playback, or news) are automatically disconnected."
  },
}


interface AccordionProps {
  category: QuestionCategories;
}

export const Accordion: React.FC<AccordionProps> = ({ category }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const categoryQuestions = questions[category];

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pl-4 pr-4">
      {Object.entries(categoryQuestions).map(([question, answer], index) => (
        <PAccordion
          key={index}
          heading={question}
          headingTag="h3"
          open={openIndexes.includes(index)}
          theme="auto"
          onUpdate={() => toggleIndex(index)}
        >
          <PText theme="auto">{answer || "No answer available yet."}</PText>
        </PAccordion>
      ))}
    </div>
  );
};

export default Accordion;