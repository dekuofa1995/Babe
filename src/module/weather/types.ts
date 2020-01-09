import { CurrentWeather } from './current/types'

interface WeatherState {
  current?: CurrentWeather
}

// prettier-ignore
enum Language {
  en = 'English', // default
  ar = 'Arabic',
  az = 'Azerbaijani',
  be = 'Belarusian',
  bg = 'Bulgarian',
  bs = 'Bosnian',
  ca = 'Catalan',
  cz = 'Czech',
  da = 'Danish',
  de = 'German',
  fi = 'Finnish',
  fr = 'French',
  el = 'Greek',
  et = 'Estonian',
  hr = 'Croation',
  hu = 'Hungarian',
  id = 'Indonesian',
  it = 'Italian',
  is = 'Icelandic',
  kw = 'Cornish',
  lt = 'Lithuanian',
  nb = 'Norwegian Bokmål',
  nl = 'Dutch',
  pl = 'Polish',
  pt = 'Portuguese',
  ro = 'Romanian',
  ru = 'Russian',
  sk = 'Slovak',
  sl = 'Slovenian',
  sr = 'Serbian',
  sv = 'Swedish',
  tr = 'Turkish',
  uk = 'Ukrainian',
  zh = 'Chinese (Simplified)',
  'zh-tw' = 'Chinese (Traditional)',
}

// prettier-ignore
enum Unit {
  'Celcius'    = 'M', // default
  'Kelvin'     = 'S',
  'Fahrenheit' = 'I',
}
export { WeatherState, Language, Unit }
