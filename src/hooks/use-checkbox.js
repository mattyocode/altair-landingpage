import { useState, useEffect, useCallback } from 'react';

export default function useRadio(initialChoice, options = []) {
  const [selected, setSelected] = useState(initialChoice);

  const checkboxChangeHandler = useCallback(
    (position) => {
      const updatedCheckedState = isChecked.map((item, index) =>
        index === position ? !item : item
      );
      setIsChecked();
    },
    [isChecked]
  );

  useEffect(() => {
    if (isChecked.includes(false)) {
      setAllBtnHighlighted(true);
    } else {
      setAllBtnHighlighted(false);
    }
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(new Array(options.length).fill(false));
  }, [options]);

  return {
    isChecked,
    checkboxChangeHandler,
  };
}
