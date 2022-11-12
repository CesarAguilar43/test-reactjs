import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import classnames from "classnames";
import moment from "moment";
import { useRef } from "react";
import { useEffect } from "react";

export function DateTime(props) {
  const { className, field, form } = props;
  const startPicker = useRef();

  useEffect(() => {
    flatpickr(startPicker.current, {
      defaultDate: ["10-20-2003"],
      dateFormat: "m-d-Y",
      altInput: true,
      altFormat: "m-d-Y",
      onOpen: () => {
        document
          .getElementsByClassName("cur-year")
          .item(0)
          .setAttribute(
            "oninput",
            "this.value=this.value.replace(/[^0-9]/g,'')"
          );
      },
      onClose: (selectedDate) => {
        form.setFieldValue(field.name, selectedDate[0]);
      },
      onYearChange: (selectedDates, dateStr, instance) => {
        if (instance.currentYear.toString().length > 4) {
          instance.setDate(
            new Date(instance.currentYear.toString().slice(0, 4))
          );
        }
      },
    });
  }, []);
  return (
    <div className="date-time--picker">
      <input
        className={classnames("date-time--input", {
          [`${className}`]: className,
        })}
        {...field}
        value={moment(field.value).format("MM-DD-YYYY")}
        placeholder="Seleccionar fecha..."
        ref={startPicker}
      />
    </div>
  );
}
