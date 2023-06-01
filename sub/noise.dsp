declare name 		"Noise";
declare author 		"Francesco Vitucci";
import("stdfaust.lib");
noise = no.noise;
process = noise * (vslider("Volume[style:knob]", 0.5, 0, 1, 0.1) : si.smoo);