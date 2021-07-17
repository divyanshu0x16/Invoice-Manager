import React from 'react';
import { useLocation } from 'react-router-dom';

const Element = () => {
  const invoiceParams = useLocation().pathname.substring(9);

  return <div>Hi this is the element</div>;
};

export default Element;
