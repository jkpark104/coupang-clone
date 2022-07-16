import { CheckProps } from '../Check/Check.types'

export interface Relation {
  type: 'every' | 'some'
  subChecks: string[]
}

export interface CheckInfo extends CheckProps {
  relation?: Relation
  label: string
  labelsToCheck?: string[]
  labelsToUncheck?: string[]
}

export interface CheckGroupProps {
  checkInfos: CheckInfo[]
  className?: string
}
