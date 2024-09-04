import React, { useEffect } from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";
import { DocumentEditor } from "@syncfusion/ej2/documenteditor";

const Kanban = () => {
  useEffect(() => {
    setTimeout(() => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            const headerElement = document.querySelector(
              ".e-dlg-header-content"
            );
            const table = document.querySelector(".e-kanban-dialog-content");
            const footer = document.querySelector(".e-footer-content");
            const deleteContent = document.querySelector(".e-dlg-content");

            if (headerElement && table && footer && deleteContent) {
              console.log(deleteContent);
              headerElement.textContent = "ویرایش جزئیات کارت";
              headerElement.style.fontFamily = "IRANSANSWEB";
              headerElement.style.fontSize = "20px";
              table.querySelector("table").style.direction = "ltr";
              footer.querySelector(".e-dialog-delete").textContent = "حذف";
              footer.querySelector(".e-dialog-delete").style.fontFamily =
                "IRANSANSWEB";
              footer.querySelector(".e-dialog-cancel").textContent = "بستن";
              footer.querySelector(".e-dialog-cancel").style.fontFamily =
                "IRANSANSWEB";
              footer.querySelector(".e-dialog-edit").textContent = "ذخیره";
              footer.querySelector(".e-dialog-edit").style.fontFamily =
                "IRANSANSWEB";
              footer.querySelector(".e-dialog-yes").textContent = "بله";
              footer.querySelector(".e-dialog-yes").style.fontFamily =
                "IRANSANSWEB";
            }
          }
        });
      });

      // Start observing the target node for configured mutations
      observer.observe(document.body, { childList: true, subtree: true });

      // Clean up observer on component unmount
      return () => observer.disconnect();
    }, []);
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="برنامه" title="تابلوی وظایف" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
