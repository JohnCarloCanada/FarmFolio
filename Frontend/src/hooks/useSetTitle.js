import { useState, useEffect } from "react";

const useSetTitle = (dataTitle) => {
  const [title, setTitle] = useState(dataTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, setTitle];
};

export default useSetTitle;
