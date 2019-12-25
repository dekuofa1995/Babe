import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../store'

const mapState = (state: RootState) => ({
  settings: state.setting,
})
const connector = connect(mapState, null)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Setting = (props: Props) => {
  const { key, location, proxy } = props.settings
  return (
    <div>
      <ul>
        <li>key: {key || 'null'}</li>
        <li>location: {JSON.stringify(location) || 'null'}</li>
        <li>proxy: {JSON.stringify(proxy) || 'null'}</li>
      </ul>
    </div>
  )
}

export default connector(Setting)
