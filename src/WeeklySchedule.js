import React from 'react';
import MaterialTable from "material-table";


const Gauss_4A=["石以成","雷润宁","何高楠","寇可思","闵木兰","马海为"]
const Gauss_4A_en=["Jonah Stapleton","Ronin Rademacher","Sophie Obeng","Keisa Kopietz","Mulan Addy","Victor Moua"]
const Euler_4A=["史凯蒂","陆凯","毛美茜","石庆路","戴玲","陈萌臻","杨达"]
const Euler_4A_en=["Camille Ayers","Kai Lewis","Maisy Mau","Keilo Smith","Mackenzie Davis","Kelly Chen","Dag Young"]
const Newton_4A=["温婉婷","吴若莎","任秋铭","欧乔恩","米思娜","杰伦","欧贝莎","潘如艺"]
const Newton_4A_en=["Vivian Wenzel","Rosie Wachman","Azrael Rexius","Chelsea Ochocki","Signe Miller","Jaelon Larson-Adams","Betsaida Morales Omana","Ruby Pruesse"]
const All_4A=Gauss_4A.concat(Euler_4A).concat(Newton_4A)
const All_4A_en=Gauss_4A_en.concat(Euler_4A_en).concat(Newton_4A_en)

// console.log("all students 0f 4A",All_4A)

const Gauss_4B=["马永科","思同","万志恒","罗爱乐","黄美枚","马承凯"]
const Gauss_4B_en=["Atticus Matthes","Easton Schneider","Bryduk Wickham","Ella Roselius","Mei Wong","Benny Maanum"]
const Euler_4B=["孙慧莲","何亦凯","孙狄伦","莫凯星","榆兆岗","林莉媛","黄诗如"]
const Euler_4B_en=["Solvig Wilson","Isaak Wilson","Dylan Schaefer","Abby Moore","Sammy Schumann","Li Yuan (Lily) Lin","Caitlin (Joy Joy) Huang"]
const Newton_4B=["柏甜雅","曹芸菲","梅天佑","刘笙","赵志明","高仁迪","邓敏开"]
const Newton_4B_en=["Thea Berg","Elicia Thao","Leo Merethith","Seng Nhkum","Riley Eppelheimer","Tiago Cuadro Labey","MyKa’el Koumalasy-Dent"]
const All_4B=Gauss_4B.concat(Euler_4B).concat(Newton_4B)
const All_4B_en=Gauss_4B_en.concat(Euler_4B_en).concat(Newton_4B_en)

const Gauss_5A=["孔美希","梁睿天","周乐陶","聂璐珍","范玮杰","王学琳","宋广宇","艾文","苏家恩"]
const Gauss_5A_en=["Miriam Kelly", "Odilia Lang","Tao McCarthy","Genevieve Menchaca Gorton",
            "Rayne Pham","Jolene Wang","Alex Lundsten","Lucian Espinosa-Splichal","Elena Soo"]

const Euler_5A=["葛荟婕","何曼琳","宋文丽","宋明铭","冯苏玉","陈亚当","乔爱","高美希","马哲昊"]
const Euler_5A_en=["Penny Gulbranson","Katherine Horton","Gwen Thayer","Miles Thayer"
                ,"Suzume Usada-Fagerland","Adam Putz","Esther George","Eva Granser","Xavier Markowitz Mulet"]
const Newton_5A=["代凯","田一帆","史夏天","罗可文","张忆娜","宋荣华","莫逸思","范卓飞","刘大伟"]
const Newton_5A_en=["Kai DaCruz Carlos","Finn Foster","Sasha Stoick","Lestat Lor","Nataniella Zedekia","Maya Song","Amaris Moos","Mack Phillips","David Nhkum"]

const All_5A=Gauss_5A.concat(Euler_5A).concat(Newton_5A)
const All_5A_en=Gauss_5A_en.concat(Euler_5A_en).concat(Newton_5A_en)


const Woods_5A=["Lucian Espinosa-Splichal","Finn Foster","Xavier Markowitz Mulet","Maya Song","Elena Soo"];
const Water_5A=["Eva Granser","Miriam Kelly","Mack Phillips","Miles Thayer","Jolene Wang"];
const Soil_5A=["Katherine Horton","Genevieve Menchaca Gorton","Amaris Moos","David Nhkum","Rayne Pham","Gwen Thayer"]
const Gold_5A=["Kai DaCruz Carlos","Esther George","Lestat Lor","Tao McCarthy","Suzume Usada-Fagerland","Nataniella Zedekia"]
const Fire_5A=["Penny Gulbranson","Odilia Lang","Alex Lundsten","Adam Putz","Sasha Stoick"]
const row0={Time: "", Name:"",Monday:"", Tuesday:"", Wednesday:"", Thursday:"", Friday:""}






export const Schedule= (props) => {

    const data = []
    var row1

    for(let x in All_4A){ 
    row1=JSON.parse(JSON.stringify(row0));row1.Time="12:50-1:20";row1.Name=All_4A[x]+","+All_4A_en[x]; 
    if (Gauss_4A.includes(All_4A[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_4A.includes(All_4A[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_4A.includes(All_4A[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:20-1:50";row1.Name=All_4A[x]+","+All_4A_en[x]; 
    if (Gauss_4A.includes(All_4A[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_4A.includes(All_4A[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_4A.includes(All_4A[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);
     }

    for(let x in All_4B){ 
    row1=JSON.parse(JSON.stringify(row0));row1.Time="2:20-2:50";row1.Name=All_4B[x]+","+All_4B_en[x]; 
    if (Gauss_4B.includes(All_4B[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_4B.includes(All_4B[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_4B.includes(All_4B[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="2:50-3:20";row1.Name=All_4B[x]+","+All_4B_en[x]; 
    if (Gauss_4B.includes(All_4B[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_4B.includes(All_4B[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_4B.includes(All_4B[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);
         }

    for(let x in All_5A){ 
    row1=JSON.parse(JSON.stringify(row0));row1.Time="10:50-11:20";row1.Name=All_5A[x]+","+All_5A_en[x]; 
    if (Gauss_5A.includes(All_5A[x])){row1.Thursday="Gauss(3305jiang)";row1.Monday="Gauss(3305jiang)";}
    if (Euler_5A.includes(All_5A[x])){row1.Wednesday="Euler(3305jiang)";row1.Monday="Euler(3305jiang)";}
    if (Newton_5A.includes(All_5A[x])){row1.Tuesday="Newton(3305jiang)";row1.Friday="Newton(3305jiang)";row1.Monday="Newton(3305jiang)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="11:20-11:50";row1.Name=All_5A[x]+","+All_5A_en[x]; 
    if (Gauss_5A.includes(All_5A[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_5A.includes(All_5A[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_5A.includes(All_5A[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);


    row1=JSON.parse(JSON.stringify(row0));row1.Time="11:20-11:50";row1.Name=All_5A[x]+","+All_5A_en[x]; 
    if (Gauss_5A.includes(All_5A[x])){row1.Tuesday="Gauss(3305jiang)";}
    if (Euler_5A.includes(All_5A[x])){row1.Thursday="Euler(3305jiang)";row1.Friday="Euler(3305jiang)";}
    if (Newton_5A.includes(All_5A[x])){row1.Monday="Newton(3305jiang)";row1.Wednesday="Newton(3305jiang)";}
    data.push(row1);


   
    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:50-2:05";row1.Name=All_5A[x]+","+All_5A_en[x]; 
    if (Woods_5A.includes(All_5A_en[x])){row1.Monday="Wood(jmjiang1chinese)";}
    if (Fire_5A.includes(All_5A_en[x])){row1.Tuesday="Fire(jmjiang1chinese)";}
    if (Gold_5A.includes(All_5A_en[x])){row1.Wednesday="Gold(jmjiang1chinese)";}
    if (Soil_5A.includes(All_5A_en[x])){row1.Friday="Soil(jmjiang1chinese)";}
    if (Water_5A.includes(All_5A_en[x])){row1.Thursday="Water(jmjiang1chinese)";}
    data.push(row1);

    row1=JSON.parse(JSON.stringify(row0));row1.Time="1:30-1:45";row1.Name=All_5A[x]+","+All_5A_en[x]; 
    if (Woods_5A.includes(All_5A_en[x])){row1.Thursday="Wood(jmjiang1chinese)";} 
    if (Fire_5A.includes(All_5A_en[x])){row1.Friday="Fire(jmjiang1chinese)";} 
    if (Gold_5A.includes(All_5A_en[x])){row1.Monday="Gold(jmjiang1chinese)";}
    if (Soil_5A.includes(All_5A_en[x])){row1.Wednesday="Soil(jmjiang1chinese)";}  
    if (Water_5A.includes(All_5A_en[x])){row1.Tuesday="Water(jmjiang1chinese)";}  
    data.push(row1);

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
      },
      {
        title: "Name",
        field: "Name",
      },
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
  
    return (
       <div className="uniqueName">
      <MaterialTable title= {props.title1+"'s weekly schedule"} data={data} columns={columns} />
      </div> 
    );
  };