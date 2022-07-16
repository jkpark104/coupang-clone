// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckGroup from './CheckGroup'

export default {
  title: 'components/CheckGroup',
  component: CheckGroup,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof CheckGroup>

const Template: ComponentStory<typeof CheckGroup> =
  function CheckGroupComponent(args) {
    return (
      <div
        style={{
          width: 460,
        }}
      >
        <CheckGroup {...args} />
      </div>
    )
  }

export const DefaultCheckGroup = Template.bind({})
DefaultCheckGroup.args = {
  checkInfos: [
    {
      label: 'CHECK_ALL',
      text: '모두 동의합니다.',
      labelsToCheck: [
        'JOIN_TERMS_FOURTEEN',
        'JOIN_TERMS_SERVICE',
        'JOIN_TERMS_COMMERCE',
        'JOIN_TERMS_PRIVACY_COLLECT_USE',
        'AGREE_TO_COLLECT_THIRD_PART_INFORMATION',
        'POLICY_AGREE_COLLECT',
        'AGREE_TO_RECEIVE_ADS',
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      labelsToUncheck: [
        'JOIN_TERMS_FOURTEEN',
        'JOIN_TERMS_SERVICE',
        'JOIN_TERMS_COMMERCE',
        'JOIN_TERMS_PRIVACY_COLLECT_USE',
        'AGREE_TO_COLLECT_THIRD_PART_INFORMATION',
        'POLICY_AGREE_COLLECT',
        'AGREE_TO_RECEIVE_ADS',
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      relation: {
        type: 'every',
        subChecks: [
          'JOIN_TERMS_FOURTEEN',
          'JOIN_TERMS_SERVICE',
          'JOIN_TERMS_COMMERCE',
          'JOIN_TERMS_PRIVACY_COLLECT_USE',
          'AGREE_TO_COLLECT_THIRD_PART_INFORMATION',
          'POLICY_AGREE_COLLECT',
          'AGREE_TO_RECEIVE_ADS',
          'POLICY_AGREE_EMAIL',
          'POLICY_AGREE_SMS',
          'POLICY_AGREE_MARKETING_PUSH',
        ],
      },
    },
    {
      label: 'JOIN_TERMS_FOURTEEN',
      text: '[필수] 만 14세 이상입니다',
      labelsToCheck: [],
      labelsToUncheck: [],
      hasDescription: true,
    },
    {
      label: 'JOIN_TERMS_SERVICE',
      text: '[필수] 쿠팡 이용약관 동의',
      labelsToCheck: [],
      labelsToUncheck: [],
      hasDescription: true,
    },
    {
      label: 'JOIN_TERMS_COMMERCE',
      text: '[필수] 전자금융거래 이용약관 동의',
      labelsToCheck: [],
      labelsToUncheck: [],
      hasDescription: true,
    },
    {
      label: 'JOIN_TERMS_PRIVACY_COLLECT_USE',
      text: '[필수] 개인정보 수집 및 이용 동의',
      labelsToCheck: [],
      labelsToUncheck: [],
      hasDescription: true,
    },
    {
      label: 'AGREE_TO_COLLECT_THIRD_PART_INFORMATION',
      text: '[필수] 개인정보 제3자 제공 동의',
      labelsToCheck: [],
      labelsToUncheck: [],
      hasDescription: true,
    },
    {
      label: 'POLICY_AGREE_COLLECT',
      text: '[선택] 광고성 목적의 개인정보 수집 및 이용 동의',
      labelsToCheck: [
        'AGREE_TO_RECEIVE_ADS',
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      labelsToUncheck: [
        'AGREE_TO_RECEIVE_ADS',
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      hasDescription: true,
    },
    {
      label: 'AGREE_TO_RECEIVE_ADS',
      text: '[선택] 광고성 정보 수신 동의',
      labelsToCheck: [
        'POLICY_AGREE_COLLECT',
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      labelsToUncheck: [
        'POLICY_AGREE_EMAIL',
        'POLICY_AGREE_SMS',
        'POLICY_AGREE_MARKETING_PUSH',
      ],
      hasDescription: true,
      relation: {
        type: 'some',
        subChecks: [
          'POLICY_AGREE_EMAIL',
          'POLICY_AGREE_SMS',
          'POLICY_AGREE_MARKETING_PUSH',
        ],
      },
    },
    {
      label: 'POLICY_AGREE_EMAIL',
      text: '[선택] 이메일 수신 동의',
      labelsToCheck: ['POLICY_AGREE_COLLECT', 'AGREE_TO_RECEIVE_ADS'],
      labelsToUncheck: ['AGREE_TO_RECEIVE_ADS'],
    },
    {
      label: 'POLICY_AGREE_SMS',
      text: '[선택] SMS,MMS 수신 동의',
      labelsToCheck: ['POLICY_AGREE_COLLECT', 'AGREE_TO_RECEIVE_ADS'],
      labelsToUncheck: ['AGREE_TO_RECEIVE_ADS'],
    },
    {
      label: 'POLICY_AGREE_MARKETING_PUSH',
      text: '[선택] 앱 푸시 수신 동의',
      labelsToCheck: ['POLICY_AGREE_COLLECT', 'AGREE_TO_RECEIVE_ADS'],
      labelsToUncheck: ['AGREE_TO_RECEIVE_ADS'],
    },
  ],
}
