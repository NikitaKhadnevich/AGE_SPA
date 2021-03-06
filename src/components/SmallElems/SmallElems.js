/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { useSelector } from "react-redux";

import githubImg from "../../assets/images/github.svg";
import linkedinImg from "../../assets/images/linked.svg";
import fbImg from "../../assets/images/fb.svg";
import emailImg from "../../assets/images/email.com.svg";

export const indicator = {
  civil: "_civil",
  civInfo: "_civInfo",
  civDetailinfo: "_civDetail",
  civilStupid: "_civStupid",

  technology: "_technology",
  techInfo: "_techInfo",
  techDetailInfo: "_techDetailInfo",
  techStupid: "_techStupid",

  structure: "_structure",
  structureInfo: "_structureInfo",
  srtuctureStupid: "_civStupid",

  units: "_units",
  unitSkil: "_unitSkil",
  unitDetailInfo: "_unitDetailInfo",
  untiStupid: "_untiStupid",
};

const socialLinks = {
  git: "https://github.com/NikitaKhadnevich/AGE_SPA",
  linkedin: "https://www.linkedin.com/in/nikitakhadnevich/",
  fb: "https://www.facebook.com/nikita.khadnevich",
  email:
    "mailto:nikita.khadnevich@gmail.com?subject=Вопрос по Age Of Emperies II",
};

const HomePage = () => {
  return (
    <>
      <p>
        <span>Age of Empires</span> — серия исторических стратегий в реальном
        времени, издаваемых Microsoft Studios. Первая игра серии — Age of
        Empires видела свет в 1997 году. Изначально разработкой этих игр
        занималась Ensemble Studios, но после её роспуска в 2009 году она была
        поручена другим студиям. Age of Empires посвящена событиям, происходящим
        в Европе, Африке и Азии, охватывая временной период от каменного века до
        века железного; дополнение для этой игры освещает становление и
        расширение Римской империи. Действия во второй части игры, Age of
        Empires II: The Age of Kings, происходят в Средневековье; дополнение к
        ней повествует, в основном, об испанском покорении Мезоамерики. Третья
        часть, Age of Empires III, затрагивает ранний период Нового времени,
        когда европейские державы колонизировали Америку. Четвёртая часть, Age
        of Empires IV, находится в разработке, и уже известно, что её действие
        происходит в Средневековье, однако точные даты неизвестны. В серию также
        входят Age of Empires Online — закрытая бесплатная онлайн-игра,
        использовавшая сервис Games for Windows Live, — а также Age of
        Mythology, являющаяся спин-оффом серии, — действия в ней происходят в
        тот же временной период, что и в оригинальной Age of Empires, однако
        упор сделан не на историческую составляющую, а на мифологию (греческую,
        египетскую и скандинавскую). Серия Age of Empires имела коммерческий
        успех и была продана тиражом свыше 20 миллионов копий. По мнению
        критиков, причиной тому стали богатая историческая подоплёка и честный
        игровой процесс, ставящий игроков в равные условия, а также
        искусственный интеллект (ИИ), дающий меньше преимуществ реальным игрокам
        по сравнению с конкурентами серии.
      </p>
    </>
  );
};

const ListAgeMemo = (props) => {
  const { data, blockName, elem, propsUrl, SortStructure, Sort } = props;
  const [filterData, setFilter] = useState("");

  const ValueFromInput = (e) => {
    e.preventDefault();
    const inputs = e.target.value;
    const filtredFunc = (arr) => {
      const filtredArr = arr.filter(
        (item) =>
          item.name.toLowerCase().includes(inputs) || item.name.includes(inputs)
      );
      setFilter(filtredArr);
    };
    filtredFunc(data);
  };

  const ClearInput = () => {
    setTimeout(() => {
      setFilter("");
    }, 100);
  };

  return (
    <>
      {data ? (
        <div className="filter">
          <input
            className="filter input"
            name="serach"
            type="text"
            placeholder="Что найти, Правитель?"
            onChange={ValueFromInput}
            onBlur={ClearInput}
            onFocus={ValueFromInput}
          />
        </div>
      ) : null}

      <div key={elem + "Wrapper"} className={elem + "Wrapper"}>
        {elem === "structures" && filterData.length === 0 ? (
          <>
            {data &&
              SortStructure(data).map((item, i) => {
                return (
                  <div id={item.name} key={i + elem} className={elem + "Item"}>
                    <Link to={`${propsUrl}/${item}`}>{item}</Link>
                  </div>
                );
              })}
          </>
        ) : elem === "structures" && filterData.length !== 0 ? (
          <>
            {filterData &&
              SortStructure(filterData).map((item, i) => {
                return (
                  <div id={item.name} key={i + elem} className={elem + "Item"}>
                    <Link to={`${propsUrl}/${item}`}>{item}</Link>
                  </div>
                );
              })}
          </>
        ) : elem !== "structures" && filterData.length === 0 ? (
          <>
            {data &&
              Sort(data).map((item, i) => {
                return (
                  <div id={item.name} key={i + elem} className={elem + "Item"}>
                    <Link to={`${propsUrl}/${item.name}${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
          </>
        ) : elem !== "structures" && filterData.length !== 0 ? (
          <>
            {data &&
              Sort(filterData).map((item, i) => {
                return (
                  <div id={item.name} key={i + elem} className={elem + "Item"}>
                    <Link to={`${propsUrl}/${item.name}${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
          </>
        ) : null}
      </div>
    </>
  );
};
export const ListAge = React.memo(ListAgeMemo);

/****** ACTION FOR BUTTONS ******** */
export const ButtonGoBack = (props) => {
  const { handleLocation, idName, indicator } = props;
  return (
    <div
      key={idName + indicator + "a"}
      className={`goback ${idName}`}
      onClick={handleLocation}
    >
      Вернуться назад
    </div>
  );
};

export const ButtonClose = (props) => {
  const { handleLocation, idName, indicator, selector } = props;
  const e = useSelector(selector);

  return (
    <>
      {e !== null ? (
        <ul id={idName} key={idName + indicator}>
          <button key={"buttonX" + indicator} onClick={handleLocation}>
            X
          </button>
          <li>{e}</li>
        </ul>
      ) : e === null ? (
        <>
          <button
            id={idName}
            key={"buttonX" + indicator}
            onClick={handleLocation}
          >
            X
          </button>
        </>
      ) : null}
    </>
  );
};

/****** SORT MAIN LIST ELEMENTS ******** */
export const Sort = (data) => {
  const sortArr = (a, b) => (a.name > b.name ? 1 : -1);
  const sortData = data.sort(sortArr);
  return sortData;
};

export const SortStructure = (data) => {
  // const sortArr = (a,b) => a.name > b.name ? 1 : -1;
  // data.sort(sortArr)
  // return [...new Set(data.map((item, i) => item.name))];
  // ч
  // data.forEach((element,i) => {
  //    console.log(element)
  // });

  const setArr = [...new Set(data.map((item, i) => item.name))];
  const sortArr = (a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1);
  return setArr.sort(sortArr);
};

/****** ACTION FOR SPINER (SHOW/HIDE) ******** */
export const SpinerStupid = () => {
  return (
    <>
      <div className="blocks">
        <div className="block orange"></div>
        <div className="block blue"></div>
        <div className="block text">Пару мгновений, Милорд</div>
      </div>
    </>
  );
};

/****** ACTION FOR FOOTER (SHOW/HIDE) ******** */
export const FooterStupid = () => {
  const { git, linkedin, fb, email } = socialLinks;
  return (
    <>
      <div className="social">
        <a href={git} target="_blank">
          <img src={githubImg} alt="github" />
        </a>
        <a href={linkedin} target="_blank">
          <img src={linkedinImg} alt="linkedin" />
        </a>
        <a href={fb} target="_blank">
          <img src={fbImg} alt="facebook" />
        </a>
        <a href={email} target="_blank">
          <img src={emailImg} alt="facebook" />
        </a>
      </div>
    </>
  );
};

export default HomePage;
