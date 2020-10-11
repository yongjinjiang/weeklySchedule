import React from 'react';
import MaterialTable from "material-table";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Gauss_4A, Gauss_4B, Gauss_5A,Gauss_4A_en, Gauss_4B_en, Gauss_5A_en,
  Euler_4A, Euler_4B, Euler_5A,Euler_4A_en, Euler_4B_en, Euler_5A_en,
  Newton_4A, Newton_4B, Newton_5A,Newton_4A_en, Newton_4B_en, Newton_5A_en,
  All_4A, All_4A_en,All_4B, All_4B_en,All_5A, All_5A_en,
  Woods_5A, Water_5A, Soil_5A, Gold_5A, Fire_5A,
  Woods_4A, Water_4A, Soil_4A, Gold_4A, Fire_4A,
  Woods_4B, Water_4B, Soil_4B, Gold_4B, Fire_4B,
  Red_5A,Blue_5A,Green_5A,Yellow_5A,Orange_5A,
  Red_4A,Blue_4A,Green_4A,Yellow_4A,Orange_4A,
  Red_4B,Blue_4B,Green_4B,Yellow_4B,Orange_4B
} from "./studentsGroups"


const row0={Time: "", Name:"",Monday:"", Tuesday:"", Wednesday:"", Thursday:"", Friday:""}

// const { useState } = React;
// const [selectedRow, setSelectedRow] = useState(null);



// const ALL=All_5A_en.concat(All_4A_en).concat(All_4B_en);

// const EncodedNames=[]

// for (let x in  ALL) {EncodedNames.push( encodeURIComponent(ALL[x]) )}

// function download(filename, text) {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//   element.setAttribute('download', filename);

//   element.style.display = 'none';
//   document.body.appendChild(element);

//   element.click();
//   document.body.removeChild(element);
// }

// // Start file download.
// download("EncodedNames.txt",JSON.stringify(EncodedNames));
// download("originalNames.txt",JSON.stringify(EncodedNames));

// const name="Esther George";
// const EncodedName=encodeURIComponent(name)



export const Schedule= (props) => {
let All_4A_somebody=[];
let All_4B_somebody=[];
let All_5A_somebody=[];

let All_4A_somebody_en=[];
let All_4B_somebody_en=[];
let All_5A_somebody_en=[];
var zwName="";  
  if (All_4A_en.includes(props.who)){const x = All_4A_en.indexOf(props.who); All_4A_somebody_en.push(props.who);All_4A_somebody.push(All_4A[x]);zwName=All_4A[x]};
  if (All_4B_en.includes(props.who)){const x = All_4B_en.indexOf(props.who); All_4B_somebody_en.push(props.who);All_4B_somebody.push(All_4B[x]);zwName=All_4B[x]};
  if (All_5A_en.includes(props.who)){const x = All_5A_en.indexOf(props.who); All_5A_somebody_en.push(props.who);All_5A_somebody.push(All_5A[x]);zwName=All_5A[x]};
    

   console.log("All_4A_somebody_en: ",All_4A_somebody_en, All_4A_somebody)

   console.log("All_4B_somebody_en: ",All_4B_somebody_en, All_4B_somebody)

   console.log("All_5A_somebody_en: ",All_5A_somebody_en, All_5A_somebody)


    const data = []
    var row1

    for(let x in All_4A_somebody){ 

      row1=JSON.parse(JSON.stringify(row0));row1.Time="11:05-11:25";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
      if (Red_4A.includes(All_4A_somebody_en[x])){row1.Monday="Red(jmhvidhyld)";row1.Wednesday="Red(jmhvidhyld)";}
      if (Blue_4A.includes(All_4A_somebody_en[x])){row1.Tuesday="Blue(jmhvidhyld)";row1.Thursday="Blue(jmhvidhyld)";}
      if (Orange_4A.includes(All_4A_somebody_en[x])){row1.Friday="Orange(jmhvidhyld)";}
      if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};
  
      row1=JSON.parse(JSON.stringify(row0));row1.Time="11:25-11:45";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
      if (Green_4A.includes(All_4A_somebody_en[x])){row1.Monday="Green(jmhvidhyld)";row1.Wednesday="Green(jmhvidhyld)";}
      if (Yellow_4A.includes(All_4A_somebody_en[x])){row1.Tuesday="Yellow(jmhvidhyld)";row1.Thursday="Yellow(jmhvidhyld)";}
      if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};

    row1=JSON.parse(JSON.stringify(row0));row1.Time="12:50-1:20";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
    if (Gauss_4A.includes(All_4A_somebody[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_4A.includes(All_4A_somebody[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_4A.includes(All_4A_somebody[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:20-1:50";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
    if (Gauss_4A.includes(All_4A_somebody[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_4A.includes(All_4A_somebody[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_4A.includes(All_4A_somebody[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);


    row1=JSON.parse(JSON.stringify(row0));row1.Time="3:00-3:20";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
    if (Woods_4A.includes(All_4A_somebody_en[x])){row1.Thursday="Wood(jmjiang1chinese)";} 
    if (Fire_4A.includes(All_4A_somebody_en[x])){row1.Friday="Fire(jmjiang1chinese)";} 
    if (Gold_4A.includes(All_4A_somebody_en[x])){row1.Monday="Gold(jmjiang1chinese)";}
    if (Soil_4A.includes(All_4A_somebody_en[x])){row1.Wednesday="Soil(jmjiang1chinese)";}  
    if (Water_4A.includes(All_4A_somebody_en[x])){row1.Tuesday="Water(jmjiang1chinese)";}  
    data.push(row1);


    row1=JSON.parse(JSON.stringify(row0));row1.Time="3:20-3:40";row1.Name=All_4A_somebody[x]+","+All_4A_somebody_en[x]; 
    if (Woods_4A.includes(All_4A_somebody_en[x])){row1.Monday="Wood(jmjiang1chinese)";}
    if (Fire_4A.includes(All_4A_somebody_en[x])){row1.Tuesday="Fire(jmjiang1chinese)";}
    if (Gold_4A.includes(All_4A_somebody_en[x])){row1.Wednesday="Gold(jmjiang1chinese)";}
    if (Soil_4A.includes(All_4A_somebody_en[x])){row1.Friday="Soil(jmjiang1chinese)";}
    if (Water_4A.includes(All_4A_somebody_en[x])){row1.Thursday="Water(jmjiang1chinese)";}
    data.push(row1);


     }

    for(let x in All_4B_somebody){ 
      row1=JSON.parse(JSON.stringify(row0));row1.Time="11:20-11:40";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
      if (Woods_4B.includes(All_4B_somebody_en[x])){row1.Thursday="Wood(jmjiang1chinese)";} 
      if (Fire_4B.includes(All_4B_somebody_en[x])){row1.Friday="Fire(jmjiang1chinese)";} 
      if (Gold_4B.includes(All_4B_somebody_en[x])){row1.Monday="Gold(jmjiang1chinese)";}
      if (Soil_4B.includes(All_4B_somebody_en[x])){row1.Wednesday="Soil(jmjiang1chinese)";}  
      if (Water_4B.includes(All_4B_somebody_en[x])){row1.Tuesday="Water(jmjiang1chinese)";}  
      data.push(row1);
  
  
      row1=JSON.parse(JSON.stringify(row0));row1.Time="11:40-12:00";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
      if (Woods_4B.includes(All_4B_somebody_en[x])){row1.Monday="Wood(jmjiang1chinese)";}
      if (Fire_4B.includes(All_4B_somebody_en[x])){row1.Tuesday="Fire(jmjiang1chinese)";}
      if (Gold_4B.includes(All_4B_somebody_en[x])){row1.Wednesday="Gold(jmjiang1chinese)";}
      if (Soil_4B.includes(All_4B_somebody_en[x])){row1.Friday="Soil(jmjiang1chinese)";}
      if (Water_4B.includes(All_4B_somebody_en[x])){row1.Thursday="Water(jmjiang1chinese)";}
      data.push(row1);





      row1=JSON.parse(JSON.stringify(row0));row1.Time="1:05-1:25";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
      if (Red_4B.includes(All_4B_somebody_en[x])){row1.Monday="Red(jmhvidhyld)";row1.Wednesday="Red(jmhvidhyld)";}
      if (Blue_4B.includes(All_4B_somebody_en[x])){row1.Tuesday="Blue(jmhvidhyld)";row1.Thursday="Blue(jmhvidhyld)";}
      if (Orange_4B.includes(All_4B_somebody_en[x])){row1.Friday="Orange(jmhvidhyld)";}
      if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};
  
      row1=JSON.parse(JSON.stringify(row0));row1.Time="1:25-1:45";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
      if (Green_4B.includes(All_4B_somebody_en[x])){row1.Monday="Green(jmhvidhyld)";row1.Wednesday="Green(jmhvidhyld)";}
      if (Yellow_4B.includes(All_4B_somebody_en[x])){row1.Tuesday="Yellow(jmhvidhyld)";row1.Thursday="Yellow(jmhvidhyld)";}
      if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};


    row1=JSON.parse(JSON.stringify(row0));row1.Time="2:20-2:50";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
    if (Gauss_4B.includes(All_4B_somebody[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_4B.includes(All_4B_somebody[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_4B.includes(All_4B_somebody[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="2:50-3:20";row1.Name=All_4B_somebody[x]+","+All_4B_somebody_en[x]; 
    if (Gauss_4B.includes(All_4B_somebody[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_4B.includes(All_4B_somebody[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_4B.includes(All_4B_somebody[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);

         }

    for(let x in All_5A_somebody){ 
    row1=JSON.parse(JSON.stringify(row0));row1.Time="10:00-10:50";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    row1.Monday="Prep-Gym(jmgym)"; row1.Wednesday="prep-Gym(jmgym)"; 
   
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="10:50-11:20";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Gauss_5A.includes(All_5A_somebody[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_5A.includes(All_5A_somebody[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_5A.includes(All_5A_somebody[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="11:20-11:50";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Gauss_5A.includes(All_5A_somebody[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_5A.includes(All_5A_somebody[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_5A.includes(All_5A_somebody[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:20-1:40";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Woods_5A.includes(All_5A_somebody_en[x])){row1.Thursday="Wood(jmjiang1chinese)";} 
    if (Fire_5A.includes(All_5A_somebody_en[x])){row1.Friday="Fire(jmjiang1chinese)";} 
    if (Gold_5A.includes(All_5A_somebody_en[x])){row1.Monday="Gold(jmjiang1chinese)";}
    if (Soil_5A.includes(All_5A_somebody_en[x])){row1.Wednesday="Soil(jmjiang1chinese)";}  
    if (Water_5A.includes(All_5A_somebody_en[x])){row1.Tuesday="Water(jmjiang1chinese)";}  
    data.push(row1);


    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:40-2:00";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Woods_5A.includes(All_5A_somebody_en[x])){row1.Monday="Wood(jmjiang1chinese)";}
    if (Fire_5A.includes(All_5A_somebody_en[x])){row1.Tuesday="Fire(jmjiang1chinese)";}
    if (Gold_5A.includes(All_5A_somebody_en[x])){row1.Wednesday="Gold(jmjiang1chinese)";}
    if (Soil_5A.includes(All_5A_somebody_en[x])){row1.Friday="Soil(jmjiang1chinese)";}
    if (Water_5A.includes(All_5A_somebody_en[x])){row1.Thursday="Water(jmjiang1chinese)";}
    data.push(row1);


    row1=JSON.parse(JSON.stringify(row0));row1.Time="2:45-3:05";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Red_5A.includes(All_5A_somebody_en[x])){row1.Monday="Red(jmhvidhyld)";row1.Wednesday="Red(jmhvidhyld)";}
    if (Blue_5A.includes(All_5A_somebody_en[x])){row1.Tuesday="Blue(jmhvidhyld)";row1.Thursday="Blue(jmhvidhyld)";}
    if (Orange_5A.includes(All_5A_somebody_en[x])){row1.Friday="Orange(jmhvidhyld)";}
    if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};

    row1=JSON.parse(JSON.stringify(row0));row1.Time="3:10-3:30";row1.Name=All_5A_somebody[x]+","+All_5A_somebody_en[x]; 
    if (Green_5A.includes(All_5A_somebody_en[x])){row1.Monday="Green(jmhvidhyld)";row1.Wednesday="Green(jmhvidhyld)";}
    if (Yellow_5A.includes(All_5A_somebody_en[x])){row1.Tuesday="Yellow(jmhvidhyld)";row1.Thursday="Yellow(jmhvidhyld)";}
    if(row1.Monday||row1.Tuesday||row1.Wednesday||row1.Thursday||row1.Friday) {data.push(row1)};

        }
         
    

    // data.push(row1)

    // const data = [
    //     {Time:"8Am", Monday:"Math",Tuesday:"Chinese",Wednesday:"English",Thursday:"SCI",Friday:"Art"},
    //   { name: "个", name_en: "one", value: 1},
    //   { name: "十", name_en: "ten", value: 10},
    //   { name: "百", name_en: "hundred", value: 100 },
    //   { name: "千", name_en: "thousand", value: 1000},
    //   { name: "万", name_en: "ten thousand", value: "10,000"},
    //   { name: "十万", name_en: "hundred thousand", value: "100,000"},
    //   { name: "百万", name_en: "million", value: "1,000,000"},
    //   { name: "千万", name_en: "ten milliion", value: "10,000,000"},
    //   { name: "亿", name_en: "hundred million", value: "100,000,000"},
    //   { name: "十亿", name_en: "billion", value: "1000,000,000"},
    //   { name: "十分", name_en: "tenth", value: "0.1"},
    //   { name: "百分", name_en: "hundredth", value: "0.01"},
    //   { name: "千分", name_en: "thousandth", value: "0.001"},
    // ];
  
    const columns = [
      {
        title: "Time",
        field: "Time",
        cellStyle: {
          backgroundColor: '#039be5',
          color: '#FFF'
        },  
        headerStyle: {
          backgroundColor: '#039be5',
          color: '#FFF'
        }
      },
      // {
      //   title: "Name",
      //   field: "Name",
      // },
      {
        title: "Monday",
        field: "Monday",
      },
      {
        title: "Tuesday",
        field: "Tuesday",
      },
      {
        title: "Wednesday",
        field: "Wednesday",
      },
      {
        title: "Thursday",
        field: "Thursday",
      },
      {
        title: "Friday",
        field: "Friday",
      }
    ];
  

    const theme = createMuiTheme({
      overrides: {
        MuiTypography: {
          h6: {
            fontWeight: 'bolder !important',
            color: "#f542b9",
          },
        },
      },
    });

    return (
       <div className="uniqueName">

   <ThemeProvider theme={theme}>
      <MaterialTable title= {props.who+"("+zwName+")'s weekly schedule"} data={data} columns={columns}    options={{headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        rowStyle: {
          backgroundColor: '#EEE'},
        // rowStyle: rowData => ({
        //   backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        // }),
        rowStyle: rowData => {
          if(rowData.Monday.includes("3305jiang")||rowData.Tuesday.includes("3305jiang")||rowData.Wednesday.includes("3305jiang")||rowData.Friday.includes("3305jiang") ||rowData.Thursday.includes("3305jiang") ) {
            return {backgroundColor: 'yellow'}};
          if(rowData.Monday.includes("jmjiang1chinese")||rowData.Tuesday.includes("jmjiang1chinese")||rowData.Wednesday.includes("jmjiang1chinese") ||rowData.Thursday.includes("jmjiang1chinese")||rowData.Friday.includes("jmjiang1chinese")) {
              return {backgroundColor: '#45f542'}};
          if(rowData.Monday.includes("jmhvidhyld")||rowData.Tuesday.includes("jmhvidhyld")||rowData.Wednesday.includes("jmhvidhyld") ||rowData.Thursday.includes("jmhvidhyld")||rowData.Friday.includes("jmhvidhyld")) {
                return {backgroundColor: '#eb36ae'}};
          if(rowData.Monday.includes("prep")||rowData.Tuesday.includes("prep")||rowData.Wednesday.includes("prep") ||rowData.Thursday.includes("prep")||rowData.Friday.includes("prep")) {
                  return {backgroundColor: '#fcba03'}};
            
        },
        paging:true,
        pageSize:6,       // make initial page size
        emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
        pageSizeOptions:[6,12,20,50],    // rows selection options
      }}/>
      </ThemeProvider>
      </div> 
    );
  };