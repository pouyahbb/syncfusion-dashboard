import React, { useEffect, useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  useEffect(() => {
    setTimeout(() => {
      const todayEl = document.querySelector(
        ".e-toolbar-item.e-today.e-overflow-show"
      );
      const dayEl = document.querySelector(".e-toolbar-item.e-views.e-day");
      const weekEl = document.querySelector(".e-toolbar-item.e-views.e-week");
      const workWeekEl = document.querySelector(
        ".e-toolbar-item.e-views.e-work-week"
      );
      const monthEl = document.querySelector(".e-toolbar-item.e-views.e-month");
      const agendaEl = document.querySelector(
        ".e-toolbar-item.e-views.e-agenda"
      );

      if (todayEl && dayEl && weekEl && monthEl && agendaEl && workWeekEl) {
        todayEl.innerHTML = "امروز";
        todayEl.style.fontFamily = "IRANSansWeb";
        todayEl.style.fontSize = "14px";
        todayEl.style.marginRight = "3px";
        todayEl.style.marginLeft = "3px";
        dayEl.innerHTML = "روزانه";
        dayEl.style.fontFamily = "IRANSansWeb";
        dayEl.style.fontSize = "14px";
        dayEl.style.marginRight = "3px";
        dayEl.style.marginLeft = "3px";
        weekEl.innerHTML = "هفتگی";
        weekEl.style.fontFamily = "IRANSansWeb";
        weekEl.style.fontSize = "14px";
        weekEl.style.marginRight = "3px";
        weekEl.style.marginLeft = "3px";
        monthEl.innerHTML = "ماهانه";
        monthEl.style.fontFamily = "IRANSansWeb";
        monthEl.style.fontSize = "14px";
        monthEl.style.marginRight = "3px";
        monthEl.style.marginLeft = "3px";
        agendaEl.innerHTML = "برنامه";
        agendaEl.style.fontFamily = "IRANSansWeb";
        agendaEl.style.fontSize = "14px";
        agendaEl.style.marginRight = "3px";
        agendaEl.style.marginLeft = "3px";
        workWeekEl.innerHTML = "هفته کاری";
        workWeekEl.style.fontFamily = "IRANSansWeb";
        workWeekEl.style.fontSize = "14px";
        workWeekEl.style.marginRight = "3px";
        workWeekEl.style.marginLeft = "3px";
      }
    }, 200);
  }, []);

  useEffect(() => {
    const handleClassChange = () => {
      const headerDays = document.querySelectorAll(".e-header-day");
      const headerCells = document.querySelectorAll(".e-header-cells");

      if (headerDays && headerCells) {
        headerDays.forEach((day) => {
          if (day.innerHTML === "Sat") {
            day.innerHTML = "شنبه";
          }
          if (day.innerHTML === "Sun") {
            day.innerHTML = "یکشنبه";
          }
          if (day.innerHTML === "Mon") {
            day.innerHTML = "دوشنبه";
          }
          if (day.innerHTML === "Tue") {
            day.innerHTML = "سه شنبه";
          }
          if (day.innerHTML === "Wed") {
            day.innerHTML = "چهار شنبه";
          }
          if (day.innerHTML === "Thu") {
            day.innerHTML = "پنج شنبه";
          }
          if (day.innerHTML === "Fri") {
            day.innerHTML = "جمعه";
          }
        });
        headerCells.forEach((cell) => {
          if (cell?.querySelector("span")?.innerHTML === "Saturday") {
            cell.querySelector("span").innerHTML = "شنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Sunday") {
            cell.querySelector("span").innerHTML = "یکشنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Monday") {
            cell.querySelector("span").innerHTML = "دوشنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Tuesday") {
            cell.querySelector("span").innerHTML = "سه شنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Wednesday") {
            cell.querySelector("span").innerHTML = "چهار شنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Thursday") {
            cell.querySelector("span").innerHTML = "پنج شنبه";
          }
          if (cell?.querySelector("span")?.innerHTML === "Friday") {
            cell.querySelector("span").innerHTML = "جمعه";
          }
        });
      }
    };
    const timer = setTimeout(() => {
      handleClassChange();
    }, 200);
    // Initial setup of MutationObserver
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "class") {
            const activeEl = document.querySelector(
              ".e-toolbar-item.e-active-view"
            );
            if (activeEl) {
              handleClassChange();
            }
          }
        }
      }
    });
    const toolbar = document.querySelector(".e-toolbar-right");
    if (toolbar) {
      observer.observe(toolbar, { attributes: true, subtree: true });
    }

    // Cleanup observer on component unmount
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="برنامه" title="تقویم" />
      <ScheduleComponent
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
      <PropertyPane>
        <table style={{ width: "100%", background: "white" }}>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100%" }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Scheduler;
