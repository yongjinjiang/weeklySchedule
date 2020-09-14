import React from 'react';
import MaterialTable from "material-table";
export const Table = () => {
    const data = [
      { name: "个", name_en: "one", value: 1},
      { name: "十", name_en: "ten", value: 10},
      { name: "百", name_en: "hundred", value: 100 },
      { name: "千", name_en: "thousand", value: 1000},
      { name: "万", name_en: "ten thousand", value: "10,000"},
      { name: "十万", name_en: "hundred thousand", value: "100,000"},
      { name: "百万", name_en: "million", value: "1,000,000"},
      { name: "千万", name_en: "ten milliion", value: "10,000,000"},
      { name: "亿", name_en: "hundred million", value: "100,000,000"},
      { name: "十亿", name_en: "billion", value: "1000,000,000"},
    ];
  
    const columns = [
      {
        title: "中文位值",
        field: "name",
      },
      {
        title: "英文位值",
        field: "name_en",
      },
      {
        title: "数值",
        field: "value",
      }
    ];
  
    return (
      <MaterialTable title="Place Values" data={data} columns={columns} />
    );
  };