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
      history: "The Porsche Cayenne broke barriers by proving that an SUV can be as thrilling as a sports car. With the introduction of hybrid technology, the Cayenne Hybrid 2024 takes versatility to the next level, delivering Porsche’s signature power with a focus on efficiency and sustainability. This model combines luxury and functionality, featuring interiors designed for maximum comfort and advanced driving systems that make every journey unforgettable. The Cayenne Hybrid is not just an SUV; it’s a statement that performance and environmental responsibility can coexist.",
      faq: "What is the electric-only range of the Cayenne Hybrid 2024? It offers an impressive range of up to 40 km under ideal conditions.",
      manual: "The Porsche Cayenne Hybrid 2024 manual contains in-depth information on its hybrid system and advanced driving technologies.",
      shopLink: "https://shop.porsche.com/es/es-ES/search?query=cayenne",
    },
    "911": {
      history: "Since its debut in 1964, the Porsche 911 has become a global icon of design, power, and exclusivity. Each generation preserves the unmistakable essence of the 911, combining its timeless silhouette with modern technology. The Targa 4 GTS stands out among the 911 family with its unique roof design, blending the best of a coupe and a convertible, allowing drivers to enjoy open-air driving without losing the dynamic performance that defines Porsche. This model is not just the pinnacle of automotive design but also a tribute to decades of innovation and perfection on the road.",
      faq: "How does the Targa roof mechanism work? The roof can be opened or closed at the touch of a button in under 20 seconds.",
      manual: "Dive into the user manual for the Porsche 911 Targa 4 GTS to discover detailed insights into its design, safety features, and performance specs.",
      shopLink: "https://shop.porsche.com/es/es-ES/search?query=911",
    },
  }

  const selectedCarInfo = carInfo[carModel] || carInfo["taycan"]

  return (
    <div className="pl-4 pr-4">
      <PAccordion theme="auto" heading="History" headingTag="h3" open={isOpen1} onUpdate={onUpdate1}>
        <PText theme="auto">{selectedCarInfo.history}</PText>
      </PAccordion>
      <PAccordion theme="auto" heading="Shop" headingTag="h3" open={isOpen2} onUpdate={onUpdate2}>
        <PLink theme="auto" href={selectedCarInfo.shopLink} target="_blank" rel="noopener noreferrer">
          Visit the official Porsche Shop for {carModel.toUpperCase()}
        </PLink>
      </PAccordion>
      <PAccordion theme="auto" heading="FAQ" headingTag="h3" open={isOpen3} onUpdate={onUpdate3}>
        <PText theme="auto">{selectedCarInfo.faq}</PText>
      </PAccordion>
      <PAccordion theme="auto" heading="User Manual" headingTag="h3" open={isOpen4} onUpdate={onUpdate4}>
        <PText theme="auto">{selectedCarInfo.manual}</PText>
      </PAccordion>
    </div>
  )
}

export default Accordion