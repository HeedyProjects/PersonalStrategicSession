import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const data = [
  { title: '', body: '' },
  { title: 'Укажите ваш пол', body: 'У женщин и мужчин разный метаболизм, поэтому нам важно знать это.' },
  { title: 'Сколько вам лет?', body: 'Возраст влияет на то, как протекает обмен веществ' },
  { title: 'Укажите свой рост', body: 'Это поможет нам подобрать для вас правильный план питания.' },
  { title: 'Укажите свой вес', body: 'Запишите свой вес сейчас — и совсем скоро вы увидите, как он изменится!' },
  { title: 'Сколько вы хотите весить?', body: 'Ставьте смелые цели! А мы поможем их добиться.' },
  { title: 'Что вам помогало худеть раньше?', body: '' },
  { title: 'Как вы привыкли питаться?', body: '' }
];

export const StepInfo = ({ step }) => {
  const { title, body } = data[step];
  return (
    <View style={styles.mainVew}>
      <View style={styles.subView}>
        <Text style={styles.firstText}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={styles.secondText}>
          {body}
        </Text>
      </View>
    </View>
  );
};
