import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { type AccordionUpdateEventDetail, PAccordion, PText, PLink, PModelSignature } from '@porsche-design-system/components-react';

type LocationState = {
  selectedUser: {
    value: string;
    title: string;
    modelSignature: 'taycan' | '911' | 'cayenne';
  };
};

export const Accordion = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen4, setIsOpen4] = useState<boolean>(false);

  const location = useLocation();
  const state = location.state as LocationState | undefined;

  const carModel = state?.selectedUser?.modelSignature || "a Porsche";

  const onUpdate1 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen1(e.detail.open);
  }, []);
  const onUpdate2 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen2(e.detail.open);
  }, []);
  const onUpdate3 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen3(e.detail.open);
  }, []);
  const onUpdate4 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen4(e.detail.open);
  }, []);

  const contentHistory = (carModel: string) => {
    if (carModel === 'cayenne') {
      return 'The Porsche Cayenne debuted in 2002, marking a bold move for a brand traditionally known for sports cars. Initially controversial, it was Porsche\'s first SUV, designed to combine the luxury and performance of a sports car with the versatility of an off-road vehicle. The Cayenne helped Porsche recover from financial difficulties in the late 1990s, quickly becoming a commercial success and paving the way for other SUVs in the lineup.\n\nThe Cayenne is now synonymous with luxury, power, and innovation. It offers a range of high-performance engines, including hybrids, ensuring efficiency meets thrilling driving dynamics. Loved by families and executives alike, the Cayenne represents Porsche’s ability to adapt while staying true to its core values of precision and excellence.';
    } else if (carModel === 'taycan') {
      return 'Introduced in 2019, the Porsche Taycan marked Porsche\'s ambitious entry into the electric vehicle (EV) market. Its name, "Taycan," translates to "lively young horse," symbolizing the energy and dynamism of this groundbreaking model. The Taycan set a new standard for electric performance, offering exhilarating acceleration, innovative two-speed transmission, and exceptional handling—all while maintaining Porsche\'s signature design and luxury.\n\nWith an industry-first 800-volt electrical architecture, the Taycan charges faster and delivers improved range efficiency. It embodies Porsche’s commitment to sustainability without compromising the thrilling driving experience the brand is known for. The Taycan has been celebrated as a bridge between Porsche’s legendary heritage and its vision for the future of mobility.';
    } else if (carModel === '911') {
      return 'First introduced in 1964, the Porsche 911 is the heart and soul of Porsche. Designed by Ferdinand “Butzi” Porsche, the 911 was intended to replace the Porsche 356, offering a more powerful, modern, and versatile sports car. Its timeless silhouette, rear-engine layout, and unmatched driving dynamics have made it one of the most iconic and enduring sports cars in history.\n\nOver the decades, the 911 has evolved through numerous generations, incorporating cutting-edge technology while retaining its unmistakable DNA. From dominating motorsport events like Le Mans to becoming a symbol of prestige on the streets, the 911 is a car that appeals to both racers and enthusiasts alike.\n\nEach version of the 911 reflects Porsche\'s relentless pursuit of perfection, with models like the Turbo, GT3, and Targa showcasing its versatility. For many, the 911 is more than a car—it’s a legacy that has stood the test of time for over half a century.';
    }
    return 'Discover the rich history of your Porsche model!';
  };

  const contentShop =
    'Explore the official Porsche Online Shop to discover a curated selection of Porsche merchandise, accessories, and lifestyle products that embody the brand\'s commitment to quality and performance.';

  const contentFAQ = 'Find answers to common questions about Porsche vehicles, services, and ownership. Our comprehensive FAQ section provides detailed information to enhance your Porsche experience.';

  const contentManual = 'Access digital owner\'s manuals tailored to your specific Porsche model. These manuals offer in-depth guidance on vehicle features, operation, and maintenance to ensure you get the most out of your Porsche.';

  return (
    <>
      <div className='pl-4 pr-4'>
        <PAccordion theme='auto' heading='History' headingTag='h3' open={isOpen1} onUpdate={onUpdate1}>
          <div className='mb-2 mt-2 bg-gray-900' style={{ display: 'inline-block' }}>
            <PModelSignature theme="auto" safeZone={false} model={carModel} />
          </div>
          <PText theme='auto' style={{ whiteSpace: 'pre-line' }}>{contentHistory(carModel)}</PText>
        </PAccordion>
        <PAccordion theme='auto' heading='Shop' headingTag='h3' open={isOpen2} onUpdate={onUpdate2}>
          <PText theme='auto'>{contentShop}</PText>
          <PText theme='auto' weight="bold" className='mt-3 mb-3'>Access the Porsche Online Shop here:</PText>
          <PLink theme='auto' href='https://shop.porsche.com/'>Shop</PLink>
        </PAccordion>
        <PAccordion theme='auto' heading='FAQ' headingTag='h3' open={isOpen3} onUpdate={onUpdate3}>
          <PText theme='auto'>{contentFAQ}</PText>
          <PText theme='auto' weight="bold" className='mt-3 mb-3'>Visit the Porsche FAQ page here:</PText>
          <PLink theme='auto' href='https://www.porsche.com/usa/accessoriesandservices/porscheservice/faq/'>FAQs</PLink>
        </PAccordion>
        <PAccordion theme='auto' heading='User Manual' headingTag='h3' open={isOpen4} onUpdate={onUpdate4}>
          <PText theme='auto'>{contentManual}</PText>
          <PText theme='auto' weight="bold" className='mt-3 mb-3'>Find your Porsche owner's manual here:</PText>
          <PLink theme='auto' href={`https://manual.porsche.com/${carModel}`}>Manuals</PLink>
        </PAccordion>

      </div>
    </>
  );
};