
/**
 * @name twosines
 * @author T Blank
 */

export function dsp(time)
{
  return sin(time, sin(time, 40, 0.01) + 440, 0.3);
}

function sin(time, frequency, amplitude)
{
  return Math.sin(Math.PI * 2 * time * frequency) * amplitude;
}
