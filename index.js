
/**
 * @name twosines
 * @author T Blank
 */

export function dsp(time)
{
  return sin(time,
             660 + sin(time, 
                       16 + sin(time,
                                0.3,
                                0.02), 
                       0.01),
             0.3);
}

function sin(time, frequency, amplitude)
{
  return Math.sin(Math.PI * 2 * time * frequency) * amplitude;
}
