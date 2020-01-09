import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '@store'
import { ChangeEvent, useState } from 'react'
import { Location } from '../types'

const mapState = (state: RootState) => ({
  settings: state.setting,
})

const connector = connect(mapState, null)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Setting = (props: Props) => {
  const { key: settingKey, location: settingLocation, proxy } = props.settings
  const [key, setKey] = useState<string>(settingKey)
  const [location, setLocation] = useState<Location>(settingLocation)

  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    const target = e.target
    setLocation({ ...location, [target.id || target.name]: target.value })
  }
  return (
    <div>
      <ul>
        <div>
          key:
          <input
            onChange={(e) => {
              e.persist()
              setKey(e.target.value)
            }}
          />
        </div>
        <div>
          location:
          <input id="latitude" onChange={inputOnChange} />
          <input id="longitude" onChange={inputOnChange} />
        </div>
        <li>key: {key || 'unset'}</li>
        <li>location: {JSON.stringify(location) || 'unset'}</li>
        <li>proxy: {JSON.stringify(proxy) || 'unset'}</li>
      </ul>
    </div>
  )
}

export default connector(Setting)
