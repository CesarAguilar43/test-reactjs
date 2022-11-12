import { isDate, parse } from "date-fns";

const dobMax = new Date();
const dobMin = new Date();

dobMax.setFullYear(
  dobMax.getFullYear() - 120,
  dobMax.getMonth(),
  dobMax.getDate()
);
dobMin.setFullYear(
  dobMin.getFullYear() - 18,
  dobMin.getMonth(),
  dobMin.getDate()
);

const parseDateString = (value, originalValue) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "MM-dd-yyyy", new Date());
  return parsedDate;
};

const convertText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
export { convertText, dobMax, dobMin, parseDateString };
