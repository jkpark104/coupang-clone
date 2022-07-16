import { useCallback } from 'react'
import { CheckInfo } from '../CheckGroup.types'

export const useCheckGroup = () => {
  const isParentChecks = useCallback(
    (checks: CheckInfo[]): checks is Required<CheckInfo>[] =>
      checks.every(({ relation }) => relation),
    []
  )

  const getParentChecks = useCallback(
    (checkInfos: CheckInfo[]) => {
      const parentChecks = checkInfos.filter(({ relation }) => relation)

      return isParentChecks(parentChecks) ? parentChecks : []
    },
    [isParentChecks]
  )

  const getNextChecks = useCallback(
    (
      {
        label,
        labelsToCheck,
        labelsToUncheck,
      }: Pick<CheckInfo, 'label' | 'labelsToCheck' | 'labelsToUncheck'>,
      prevCheckedLabels: string[],
      currentIsChecked: boolean
    ) => {
      const nextCheckedLabels = currentIsChecked
        ? Array.from(
            new Set([...prevCheckedLabels, ...(labelsToCheck || []), label])
          )
        : prevCheckedLabels
            .filter((checkedLabel) => !labelsToUncheck?.includes(checkedLabel))
            .filter((checkedLabel) => checkedLabel !== label)

      return nextCheckedLabels
    },
    []
  )

  const tuneParentChecks = useCallback(
    (parentChecksInfo: Required<CheckInfo>[], prevCheckedLabels: string[]) => {
      const nextCheckedLabels = parentChecksInfo.reduce(
        (acc, { label: parentLabel, relation: { type, subChecks } }) => {
          const parentIsChecked =
            type === 'some'
              ? subChecks.some((subCheck) => acc.includes(subCheck))
              : subChecks.every((subCheck) => acc.includes(subCheck))

          return parentIsChecked
            ? [...acc, parentLabel]
            : acc.filter((checkedLabel) => checkedLabel !== parentLabel)
        },
        [...prevCheckedLabels]
      )

      return nextCheckedLabels
    },
    []
  )

  return {
    getParentChecks,
    getNextChecks,
    tuneParentChecks,
  }
}
