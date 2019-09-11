const LocalizedStrings = {
  en: {
    common: {
      next: 'Next',
      ok: 'Ok',
      continueNow: 'Continue now',
      scheduleTheSession: 'Schedule the session',
      step: 'Step',
      from: 'from',
    },
    problemSteps: {
      step1Header: 'What do you want to achieve?\nWhat problem you want to compete?',
      step1Title: 'Hello! Your journey starts here. Don’t hesitate to start right now. It will take just few minutes.',
      step2Header: 'What time and week day will it be easy for you to work on this goal/problem?',
      step2Title: 'It will be great when you will achieve this. I hope we will celebrate it together 😉 Start your strategic session right now. Set up time for your session.',
      step3Header: 'Please introduce yourself. What role do you play in life?',
      step3Title: 'What role will you play to compete with this problem or to achieve your goal?',
      step4Header: 'Why are you here?',
      step4Title: 'What goal do you have in this role? What problem do you have right now that prevents you from achieving your goal?',
      step5Header: 'What actions slow you down on the way to your goal?',
      step5Title: 'Or even make your problem stronger? What you will stop doing?',
      endTitle: 'We congratulate you for finishing the first part of this strategic session! 🎉/nNext part - Define the future'
    },
  },
  ru: {
    common: {
      next: 'Далее',
      ok: 'Ok',
      continueNow: 'Продолжить сейчас',
      scheduleTheSession: 'Запланировать сессию',
      step: 'Шаг',
      from: 'из',
    },
    problemSteps: {
      step1Header: 'Чего ты хочешь достичь? Какую проблему хочешь решить?',
      step1Title: 'Привет! Сейчас мы решим все твои заботы. Не откладывай на завтра то, что можно сделать сегодня. Это займет всего несколько минут.',
      step2Header: 'Во сколько и в какой день недели тебе будет удобно работать над своей целью/проблемой?',
      step2Title: 'Будет классно, когда ты сможешь допиться этого. Я надеюсь, мы отпразднуем это вместе 😉 Начни свою стратегическую сессию прямо сейчас',
      step3Header: 'Please introduce yourself. What role do you play in life?',
      step3Title: 'What role will you play to compete with this problem or to achieve your goal?',
      step4Header: 'Why are you here?',
      step4Title: 'What goal do you have in this role? What problem do you have right now that prevents you from achieving your goal?',
      step5Header: 'What actions slow you down on the way to your goal?',
      step5Title: 'Or even make your problem stronger? What you will stop doing?',
      endTitle: 'We congratulate you for finishing the first part of this strategic session! 🎉/nNext part - Define the future'
    },
  },
};

export const getLocalizedStrings = (locale, category) => {
  let handledLocale = locale;
  if (
    !Object.prototype.hasOwnProperty.call(LocalizedStrings, handledLocale) ||
    !Object.prototype.hasOwnProperty.call(
      LocalizedStrings[handledLocale],
      category,
    )
  ) {
    handledLocale = 'en';
  }
  return LocalizedStrings[handledLocale][category];
};
