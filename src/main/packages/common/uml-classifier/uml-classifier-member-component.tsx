import React, { FunctionComponent, SFC } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '../../../components/controls/text/text';
import { ModelState } from '../../../components/store/model-state';
import { UMLClassifierMember } from './uml-classifier-member';

export const UMLClassifierMemberComponent: FunctionComponent<Props> = ({ element, scale }) => {
  return (
    <g>
      <rect width="100%" height="100%" />
      <Text x={10 * scale} fill={element.textColor} fontWeight="normal" textAnchor="start">
        {element.name}
      </Text>
    </g>
  );
};

interface Props {
  element: UMLClassifierMember;
  scale: number;
}
