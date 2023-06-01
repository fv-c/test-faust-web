declare name 		"Oscillator";
declare author 		"Francesco Vitucci";

oscillator = os.osc(440);

import("stdfaust.lib");
process = oscillator * (vslider("Volume[style:knob]", 0.5, 0, 1, 0.1) : si.smoo);