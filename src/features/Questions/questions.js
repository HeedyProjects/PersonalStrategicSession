import {getLocalizedStrings} from '../../localization';
import {LOCALIZE_CATEGORIES} from '../../localization/const';

export const getQuestionsByPhase = (phase, problemMode, language) => {
  switch (phase) {
    case 0:
      return getFirstPhaseQuestions(problemMode, language);
    case 1:
      return getSecondPhaseQuestions(language);
    case 2:
      return getThirdPhaseQuestions(language);
    default:
      return getFirstPhaseQuestions(problemMode, language);
  }
};

const getFirstPhaseQuestions = (problemMode, language) => {
  const localization = getLocalizedStrings(
    language,
    LOCALIZE_CATEGORIES.problemSteps,
  );
  const data = [
    {title: '', body: ''},
    {
      title: problemMode
        ? localization.step1HeaderProblem
        : localization.step1HeaderGoal,
      body: localization.step1Title,
    },
    {title: localization.step2Header, body: localization.step2Title},
    {
      title: localization.step3Header,
      body: problemMode
        ? localization.step3TitleProblem
        : localization.step3TitleGoal,
    },
    {
      title: localization.step4Header,
      body: problemMode
        ? localization.step4TitleProblem
        : localization.step4TitleGoal,
    },
    {title: localization.step5Header, body: localization.step5Title},
  ];
  return data;
};

const getSecondPhaseQuestions = language => {
  const localization = getLocalizedStrings(
    language,
    LOCALIZE_CATEGORIES.futureSteps,
  );
  const data = [
    {title: '', body: ''},
    {title: localization.step1Header, body: localization.step1Title},
    {title: localization.step2Header, body: localization.step2Title},
    {title: localization.step3Header, body: localization.step3Title},
    {title: localization.step4Header, body: localization.step4Title},
    {title: localization.step5Header, body: localization.step5Title},
    {title: localization.step6Header, body: localization.step6Title},
    {title: localization.step7Header, body: localization.step7Title},
  ];
  return data;
};

const getThirdPhaseQuestions = language => {
  const localization = getLocalizedStrings(
    language,
    LOCALIZE_CATEGORIES.planSteps,
  );
  const data = [
    {title: '', body: ''},
    {title: localization.step1Header, body: localization.step1Title},
    {title: localization.step2Header, body: localization.step2Title},
    {title: localization.step3Header, body: localization.step3Title},
  ];
  return data;
};
