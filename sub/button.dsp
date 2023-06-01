declare name 		"Button";
declare author 		"Francesco Vitucci";
import("stdfaust.lib");
oscillator = os.osc(440);
process = oscillator * (button("gate") : si.smoo);