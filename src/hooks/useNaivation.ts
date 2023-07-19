import { useCallback, useEffect, useRef, useState } from "react";

export const useNavigation = (length: number) => {
  const resultItemRef = useRef<HTMLLIElement[] | null[]>([]);
  const [target, setTarget] = useState(-2);

  const scrollToElement = useCallback(
    (block: "start" | "end") => {
      resultItemRef.current[target]!.scrollIntoView({
        block: block,
        inline: "nearest",
      });
    },
    [resultItemRef, target]
  );

  const navigate = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        if (target > 0) setTarget((prev) => prev - 1);

        scrollToElement("end");
      } else if (e.key === "ArrowDown") {
        if (target < length - 1) setTarget((prev) => prev + 1);
        if (target > 8) {
          scrollToElement("start");
        }
      }
    },
    [scrollToElement, target, setTarget, length]
  );

  useEffect(() => {
    document.addEventListener("keydown", navigate);

    return () => {
      document.removeEventListener("keydown", navigate);
    };
  }, [target, length, navigate]);

  return { resultItemRef, target };
};
