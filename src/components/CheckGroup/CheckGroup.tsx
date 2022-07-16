import { useState } from 'react'
import Checkbox from '../Check/Check'
import { CheckGroupProps, CheckInfo } from './CheckGroup.types'
import { useCheckGroup } from './hooks'

function CheckGroup({ checkInfos, className }: CheckGroupProps) {
  const [checkedLabels, setCheckedLabels] = useState<string[]>([])

  const { getParentChecks, getNextChecks, tuneParentChecks } = useCheckGroup()

  const parentChecks = getParentChecks(checkInfos)

  const handleCheckChange = (
    checkInfo: Pick<CheckInfo, 'label' | 'labelsToCheck' | 'labelsToUncheck'>,
    currentIsChecked: boolean
  ) => {
    setCheckedLabels((prevCheckedLabels) => {
      const nextCheckedLabels = getNextChecks(
        checkInfo,
        prevCheckedLabels,
        currentIsChecked
      )

      const tunedCheckedLabels = tuneParentChecks(
        parentChecks,
        nextCheckedLabels
      )

      return tunedCheckedLabels
    })
  }

  return (
    <div className={className}>
      {checkInfos.map(
        ({ label, labelsToCheck, labelsToUncheck, ...restProps }) => (
          <Checkbox
            key={label}
            isChecked={checkedLabels.includes(label)}
            handleCheckChange={(currentIsChecked) => {
              handleCheckChange(
                { label, labelsToCheck, labelsToUncheck },
                currentIsChecked
              )
            }}
            {...restProps}
          />
        )
      )}
    </div>
  )
}

export default CheckGroup
