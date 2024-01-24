// NameList.jsx
import React from 'react';
import { List } from 'react-native-paper';

const NameList = ({ navigation, names }) => {
  return (
    <List.Section>
      <List.Accordion title="Name">
        {names.map((item, index) => (
          <List.Item key={index} title={item.prenom} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default NameList;
