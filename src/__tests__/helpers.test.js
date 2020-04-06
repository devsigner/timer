import {computePercent, formatTimer, timeToSeconds} from '../helpers/global';

describe('computePercent', () => {
  it('returns percent', () => {
    expect(computePercent(200, 20)).toBe(10)
  })
})

describe('formatTimer', () => {
  it('returns formated time string', () => {
    expect(formatTimer(190)).toBe("03:10")
  })
})

describe('timeToSeconds', () => {
  it('returns time in seconds as number', () => {
    expect(timeToSeconds("03:10")).toBe(190)
  })

  it('returns 0 when value is an empty string', () => {
    expect(timeToSeconds("")).toBe(0)
  })

  it('returns 0 when value is an erroneous string', () => {
    expect(timeToSeconds("a")).toBe(0)
  })
})
