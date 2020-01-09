import * as React from 'react'
import { useEffect } from 'react'
import { RootState } from '@store'
import { connect, ConnectedProps } from 'react-redux'
import { currentFetchRequest } from '@module/weather/current/actions'

const mapState = (state: RootState) => ({
  currentWeather: state.weather.current,
})

const mapDispatchToProps = (dispatch: Function) => ({
  fetchWeather: (param: any) => dispatch(currentFetchRequest(param)),
})

const connector = connect(mapState, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const CurrentWeather = ({ currentWeather, fetchWeather }: Props) => {
  // useEffect(() => {
  //   fetchWeather({ lat: 32.24 })
  // }, [])
  return <div>{JSON.stringify(currentWeather)}</div>
}

export default connector(CurrentWeather)
