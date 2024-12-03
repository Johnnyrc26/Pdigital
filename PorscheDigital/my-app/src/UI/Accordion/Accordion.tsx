import { useCallback, useState } from 'react';
import { type AccordionUpdateEventDetail, PAccordion, PText } from '@porsche-design-system/components-react';

export const Accordion = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen4, setIsOpen4] = useState<boolean>(false);

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

  const content =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
    'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

  return (
    <>
      <div className='pl-4 pr-4'>
      <PAccordion theme="auto" heading="History" headingTag="h3" open={isOpen1} onUpdate={onUpdate1}>
        <PText theme="auto">{content} </PText>
      </PAccordion>
        <PAccordion theme="auto" heading="Shop" headingTag="h3" open={isOpen2} onUpdate={onUpdate2}>
        <PText theme="auto">{content}</PText>
      </PAccordion>
      <PAccordion theme="auto" heading="FAQ" headingTag="h3" open={isOpen3} onUpdate={onUpdate3}>
        <PText theme="auto">{content}</PText>
      </PAccordion>
      <PAccordion theme="auto" heading="User Manual"  headingTag="h3" open={isOpen4} onUpdate={onUpdate4}>
        <PText theme="auto">{content}</PText>
      </PAccordion>

</div>
    </>
  );
};