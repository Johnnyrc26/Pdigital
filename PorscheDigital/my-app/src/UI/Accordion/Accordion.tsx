
import { useCallback, useState } from "react"
import { useLocation } from "react-router-dom"
import {
  type AccordionUpdateEventDetail,
  PAccordion,
  PText,
  PLink,
} from "@porsche-design-system/components-react"

type LocationState = {
  selectedUser: {
    value: string
    title: string
    modelSignature: "taycan" | "911" | "cayenne"
  }
}

interface AccordionProps {
  selectedCar: { [key: string]: any }; // Adjust the type according to the actual structure of the car model object
}

export const Accordion : React.FC<AccordionProps> = ({ selectedCar }) => {
  const location = useLocation()
  const state = location.state as LocationState | undefined
  const carModel = state?.selectedUser?.modelSignature || "taycan" // Valor por defecto

  const [isOpen1, setIsOpen1] = useState<boolean>(false)
  const [isOpen2, setIsOpen2] = useState<boolean>(false)
  const [isOpen3, setIsOpen3] = useState<boolean>(false)
  const [isOpen4, setIsOpen4] = useState<boolean>(false)


  const onUpdate1 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen1(e.detail.open)
  }, [])
  const onUpdate2 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {

    setIsOpen2(e.detail.open)
  }, [])
  const onUpdate3 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen3(e.detail.open)
  }, [])
  const onUpdate4 = useCallback((e: CustomEvent<AccordionUpdateEventDetail>) => {
    setIsOpen4(e.detail.open)
  }, [])

  const carInfo: Record<string, { history: string; faq: string; manual: string; shopLink: string }> = {
    taycan: {
      history: "The Porsche Taycan revolutionized the automotive world by redefining what an electric car can be. It is the perfect synthesis of German engineering and sustainability, blending cutting-edge technology with Porsche’s sporty DNA. From its iconic instant acceleration to its aerodynamic design that exudes speed and elegance, the Taycan represents the future of mobility without compromising the thrill of driving. The Turbo GT version takes these features to the extreme, delivering electric performance that rivals traditional supercars, all while prioritizing sustainability and innovation.",
      faq: "Is the Taycan Turbo GT compatible with fast charging stations? Yes, it supports ultra-fast DC charging up to 270 kW.",
      manual: "Explore the official user manual of the Porsche Taycan Turbo GT on the Porsche website for detailed guidance on performance, maintenance, and features.",
      shopLink: "https://shop.porsche.com/es/es-ES/search?query=taycan",
    },
    cayenne: {
      history: "The Porsche Cayenne debuted in 2002, marking a bold move for a brand traditionally known for sports cars. Initially controversial, it was Porsche\'s first SUV, designed to combine the luxury and performance of a sports car with the versatility of an off-road vehicle. The Cayenne helped Porsche recover from financial difficulties in the late 1990s, quickly becoming a commercial success and paving the way for other SUVs in the lineup.\n\nThe Cayenne is now synonymous with luxury, power, and innovation. It offers a range of high-performance engines, including hybrids, ensuring efficiency meets thrilling driving dynamics. Loved by families and executives alike, the Cayenne represents Porsche’s ability to adapt while staying true to its core values of precision and excellence.",
      faq: "What is the electric-only range of the Cayenne Hybrid 2024? It offers an impressive range of up to 40 km under ideal conditions.",
      manual: "The Porsche Cayenne Hybrid 2024 manual contains in-depth information on its hybrid system and advanced driving technologies.",
      shopLink: "https://shop.porsche.com/es/es-ES/search?query=cayenne",
    },
    "911": {
      history: "First introduced in 1964, the Porsche 911 is the heart and soul of Porsche. Designed by Ferdinand “Butzi” Porsche, the 911 was intended to replace the Porsche 356, offering a more powerful, modern, and versatile sports car. Its timeless silhouette, rear-engine layout, and unmatched driving dynamics have made it one of the most iconic and enduring sports cars in history.\n\nOver the decades, the 911 has evolved through numerous generations, incorporating cutting-edge technology while retaining its unmistakable DNA. From dominating motorsport events like Le Mans to becoming a symbol of prestige on the streets, the 911 is a car that appeals to both racers and enthusiasts alike.\n\nEach version of the 911 reflects Porsche\'s relentless pursuit of perfection, with models like the Turbo, GT3, and Targa showcasing its versatility. For many, the 911 is more than a car—it’s a legacy that has stood the test of time for over half a century.",
      faq: "How does the Targa roof mechanism work? The roof can be opened or closed at the touch of a button in under 20 seconds.",
      manual: "Dive into the user manual for the Porsche 911 Targa 4 GTS to discover detailed insights into its design, safety features, and performance specs.",
      shopLink: "https://shop.porsche.com/es/es-ES/search?query=911",
    },
  }

  const selectedCarInfo = carInfo[carModel] || carInfo["taycan"]

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
  )
}

export default Accordion
