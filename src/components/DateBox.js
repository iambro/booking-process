import React from "react";

const DateBox = props => {
  const { form, content, todayDate, language, handleDateButton } = props;

  const weekday = { weekday: "long" };
  const month = { month: "2-digit" };
  const day = { day: "2-digit" };
  const year = { year: "numeric" };

  let today = new Date(`${todayDate[2]}-${todayDate[1]}-${todayDate[0]}`);
  let afterToday = new Date(`${todayDate[2]}-${todayDate[1]}-${todayDate[0]}`);
  let afterAfterToday = new Date(
    `${todayDate[2]}-${todayDate[1]}-${todayDate[0]}`
  );

  let mainDay = new Date(form.date);
  let beforeDay = new Date(form.date);
  let afterDay = new Date(form.date);

  afterToday.setDate(afterToday.getDate() + 1);
  afterAfterToday.setDate(afterAfterToday.getDate() + 2);

  beforeDay.setDate(beforeDay.getDate() - 1);
  afterDay.setDate(afterDay.getDate() + 1);

  let td = [
    `${today.toLocaleDateString(`${language}-${language.toUpperCase()}`, day)}`,
    `${today.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${today.toLocaleDateString(`${language}-${language.toUpperCase()}`, year)}`
  ];
  let atd = [
    `${afterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      day
    )}`,
    `${afterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${afterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      year
    )}`
  ];
  let aatd = [
    `${afterAfterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      day
    )}`,
    `${afterAfterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${afterAfterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      weekday
    )}`,
    `${afterAfterToday.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      year
    )}`
  ];

  let md = [
    `${mainDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      day
    )}`,
    `${mainDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${mainDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      weekday
    )}`,
    `${mainDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      year
    )}`
  ];
  let bd = [
    `${beforeDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      day
    )}`,
    `${beforeDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${beforeDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      weekday
    )}`,
    `${beforeDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      year
    )}`
  ];
  let ad = [
    `${afterDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      day
    )}`,
    `${afterDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      month
    )}`,
    `${afterDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      weekday
    )}`,
    `${afterDay.toLocaleDateString(
      `${language}-${language.toUpperCase()}`,
      year
    )}`
  ];

  let dayOne,
    dayTwo,
    dayThree,
    dateOne,
    dateTwo,
    dateThree,
    valueOne,
    valueTwo,
    valueThree;

  if (
    `${td[2]}-${td[1]}-${td[0]}` === `${md[3]}-${md[1]}-${md[0]}` ||
    `${atd[2]}-${atd[1]}-${atd[0]}` === `${md[3]}-${md[1]}-${md[0]}` ||
    `${aatd[3]}-${aatd[1]}-${aatd[0]}` === `${md[3]}-${md[1]}-${md[0]}`
  ) {
    dayOne = content.today;
    dayTwo = content.tomorrow;
    dayThree = aatd[2];
    dateOne = `${td[0]}.${td[1]}`;
    dateTwo = `${atd[0]}.${atd[1]}`;
    dateThree = `${aatd[0]}.${aatd[1]}`;
    valueOne = `${td[2]}-${td[1]}-${td[0]}`;
    valueTwo = `${atd[2]}-${atd[1]}-${atd[0]}`;
    valueThree = `${aatd[3]}-${aatd[1]}-${aatd[0]}`;
  } else {
    dayOne = bd[2];
    dayTwo = md[2];
    dayThree = ad[2];
    dateOne = `${bd[0]}.${bd[1]}`;
    dateTwo = `${md[0]}.${md[1]}`;
    dateThree = `${ad[0]}.${ad[1]}`;
    valueOne = `${bd[3]}-${bd[1]}-${bd[0]}`;
    valueTwo = `${md[3]}-${md[1]}-${md[0]}`;
    valueThree = `${ad[3]}-${ad[1]}-${ad[0]}`;
  }

  return (
    <>
      <button
        className="form-title date"
        value={valueOne}
        onClick={handleDateButton}
      >
        <span className="form-date__numeric">{dateOne}</span>
        <span className="form-date__human">{dayOne}</span>
      </button>
      <button
        className="form-title date"
        value={valueTwo}
        onClick={handleDateButton}
      >
        <span className="form-date__numeric">{dateTwo}</span>
        <span className="form-date__human">{dayTwo}</span>
      </button>
      <button
        className="form-title date"
        value={valueThree}
        onClick={handleDateButton}
      >
        <span className="form-date__numeric">{dateThree}</span>
        <span className="form-date__human">{dayThree}</span>
      </button>
    </>
  );
};

export { DateBox };
