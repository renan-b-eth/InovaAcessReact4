"use client"
import React, { useEffect, useState } from 'react';


interface ClickData {
 timestamp: string;
 xPosition: number;
 yPosition: number;
}

const Coletagemclicks: React.FC = () => {
 const [data, setData] = useState<ClickData[]>([]);

 const trackClickAndPosition = (event: MouseEvent) => {
    const clickData: ClickData = {
      timestamp: new Date().toISOString(),
      xPosition: event.pageX,
      yPosition: event.pageY,
    };

    setData([...data, clickData]);
 };

 const saveDataToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + "Timestamp,X Position,Y Position\n" + data.map(click => `${click.timestamp},${click.xPosition},${click.yPosition}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "click_data.csv");
    document.body.appendChild(link);
    link.click();
 };

 useEffect(() => {
    document.addEventListener('click', trackClickAndPosition);
    return () => {
      document.removeEventListener('click', trackClickAndPosition);
    };
 }, [data]);

 return (
    <div>
      <button onClick={saveDataToCSV}>Salvar em CSV</button>
    </div>
 );
};

export default Coletagemclicks;