
/**
 * @name twosines
 * @author T Blank
 */

export function dsp(time)
{
  return sin(time, 440, 0.1) + sin(time, 220, 0.4);
}

function sin(time, frequency, volume)
{
  return Math.sin(Math.PI * 2 * time * frequency) * volume;
}
