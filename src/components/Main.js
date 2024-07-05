import React from "react";
import "../Style.css";

const Main = () => {
  const tables = [
    { id: 1, customers: 2 },
    { id: 2, customers: 4 },
    { id: 3, customers: 1 },
    { id: 4, customers: 3 },
    { id: 5, customers: 2 },
    { id: 6, customers: 5 },
    { id: 7, customers: 2 },
    { id: 8, customers: 3 },
    { id: 9, customers: 1 },
  ];
  return (
    <div className="main">
      <h1>Cashier</h1>
      <h1>Tables</h1>
      <div className="table-container">
        {tables.map((table) => (
          <div key={table.id} className="table-item">
            <div className="table-number">Table {table.id}</div>
            <div className="customer-count">
              <div>{table.customers}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
