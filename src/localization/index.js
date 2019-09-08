const LocalizedStrings = {
  en: {
    common: {
      menu: 'Menu',
      ok: 'Ok',
    },
    menu: {
      freelancers: 'Freelancers',
      tasks: 'Tasks',
      become: 'Become freelancer',
      createTask: 'Create task',
    },
  },
  ru: {
    common: {
      menu: 'Menu',
      ok: 'Ok',
    },
    menu: {
      freelancers: 'Freelancers',
      tasks: 'Tasks',
      become: 'Become freelancer',
      createTask: 'Create task',
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
