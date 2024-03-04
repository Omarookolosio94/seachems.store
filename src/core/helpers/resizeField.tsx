/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

export const reSizeField = (textAreaRef: any, value: any) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0px';
      const { scrollHeight } = textAreaRef;
      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value]);
};