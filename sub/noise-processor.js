
/*
Code generated with Faust version 2.59.6
Compilation options: -lang wasm-ib -ct 1 -cn noise -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONnoise() {
	return '{"name": "Noise","filename": "noise.dsp","version": "2.59.6","compile_options": "-lang wasm-ib -ct 1 -cn noise -es 1 -mcd 16 -single -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/noises.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/platform.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/Users/master/Desktop/test-web"],"size": 32,"inputs": 0,"outputs": 1,"meta": [ { "author": "Francesco Vitucci" },{ "compile_options": "-lang wasm-ib -ct 1 -cn noise -es 1 -mcd 16 -single -ftz 2" },{ "filename": "noise.dsp" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.6" },{ "name": "Noise" },{ "noises.lib/name": "Faust Noise Generator Library" },{ "noises.lib/version": "0.4" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.3" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.3" }],"ui": [ {"type": "vgroup","label": "Noise","items": [ {"type": "vslider","label": "Volume","shortname": "Volume","address": "/Noise/Volume","index": 8,"meta": [{ "style": "knob" }],"init": 0.5,"min": 0,"max": 1,"step": 0.1}]}]}';
}
function getBase64Codenoise() { return "AGFzbQEAAAABy4CAgAAOYAJ/fwBgBH9/f38AYAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gA39/fQACgYCAgAAAA4+AgIAADgABAgMEBQYHCAkKCwwNBYyAgIAAAQGBgICAAOmHgIAAB7qBgIAADAdjb21wdXRlAAEMZ2V0TnVtSW5wdXRzAAINZ2V0TnVtT3V0cHV0cwADDWdldFBhcmFtVmFsdWUABA1nZXRTYW1wbGVSYXRlAAUEaW5pdAAGDWluc3RhbmNlQ2xlYXIABxFpbnN0YW5jZUNvbnN0YW50cwAIDGluc3RhbmNlSW5pdAAJGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAAoNc2V0UGFyYW1WYWx1ZQANBm1lbW9yeQIACpaEgIAADoKAgIAAAAvBgYCAAAICfwJ9QQAhBEMAAAAAIQZBACEFQwAAAAAhByADQQBqKAIAIQRBACoCBEEAKgIIlCEGQQAhBQNAAkAgBkEAKgIMQQAqAhSUkiEHQQAgB7xBgICA/AdxBH0gBwVDAAAAAAs4AhBBAEHtnJmOBEEAKAIcbEG54ABqNgIYIAQgBWpDAAAAMEEAKgIQQQAoAhiylJQ4AgBBAEEAKgIQOAIUQQBBACgCGDYCHCAFQQRqIQUgBUEEIAFsSARADAIMAQsLCwuFgICAAABBAA8LhYCAgAAAQQEPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARAAIAAgARAJC+OAgIAAAQJ/QQAhAUEAIQJBACEBA0ACQEEQIAFBAnRqQwAAAAA4AgAgAUEBaiEBIAFBAkgEQAwCDAELCwtBACECA0ACQEEYIAJBAnRqQQA2AgAgAkEBaiECIAJBAkgEQAwCDAELCwsLtoCAgAAAQQAgATYCAEEAQ2ZmMEJDAIA7SEMAAIA/QQAoAgCyl5aVOAIEQQBDAACAP0EAKgIEkzgCDAuQgICAAAAgACABEAggABAKIAAQBwuMgICAAABBAEMAAAA/OAIIC5CAgIAAACAAIAFIBH8gAQUgAAsPC5CAgIAAACAAIAFIBH8gAAUgAQsPC4yAgIAAACAAIAFqIAI4AgALC9iKgIAAAQBBAAvRCnsibmFtZSI6ICJOb2lzZSIsImZpbGVuYW1lIjogIm5vaXNlLmRzcCIsInZlcnNpb24iOiAiMi41OS42IiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWN0IDEgLWNuIG5vaXNlIC1lcyAxIC1tY2QgMTYgLXNpbmdsZSAtZnR6IDIiLCJsaWJyYXJ5X2xpc3QiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9ub2lzZXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvbWF0aHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9wbGF0Zm9ybS5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvVXNlcnMvbWFzdGVyL0Rlc2t0b3AvdGVzdC13ZWIiXSwic2l6ZSI6IDMyLCJpbnB1dHMiOiAwLCJvdXRwdXRzIjogMSwibWV0YSI6IFsgeyAiYXV0aG9yIjogIkZyYW5jZXNjbyBWaXR1Y2NpIiB9LHsgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jdCAxIC1jbiBub2lzZSAtZXMgMSAtbWNkIDE2IC1zaW5nbGUgLWZ0eiAyIiB9LHsgImZpbGVuYW1lIjogIm5vaXNlLmRzcCIgfSx7ICJtYXRocy5saWIvYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRocy5saWIvbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHMubGliL3ZlcnNpb24iOiAiMi42IiB9LHsgIm5hbWUiOiAiTm9pc2UiIH0seyAibm9pc2VzLmxpYi9uYW1lIjogIkZhdXN0IE5vaXNlIEdlbmVyYXRvciBMaWJyYXJ5IiB9LHsgIm5vaXNlcy5saWIvdmVyc2lvbiI6ICIwLjQiIH0seyAicGxhdGZvcm0ubGliL25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtLmxpYi92ZXJzaW9uIjogIjAuMyIgfSx7ICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFscy5saWIvdmVyc2lvbiI6ICIwLjMiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogIk5vaXNlIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2c2xpZGVyIiwibGFiZWwiOiAiVm9sdW1lIiwic2hvcnRuYW1lIjogIlZvbHVtZSIsImFkZHJlc3MiOiAiL05vaXNlL1ZvbHVtZSIsImluZGV4IjogOCwibWV0YSI6IFt7ICJzdHlsZSI6ICJrbm9iIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMX1dfV19"; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

// Monophonic Faust DSP
class noiseProcessor extends AudioWorkletProcessor {

    // JSON parsing functions
    static parse_ui(ui, obj, callback) {
        for (var i = 0; i < ui.length; i++) {
            noiseProcessor.parse_group(ui[i], obj, callback);
        }
    }

    static parse_group(group, obj, callback) {
        if (group.items) {
            noiseProcessor.parse_items(group.items, obj, callback);
        }
    }

    static parse_items(items, obj, callback) {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }

    static parse_item1(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            noiseProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            obj.push({
                name: item.address,
                defaultValue: item.init,
                minValue: item.min,
                maxValue: item.max
            });
        }
    }

    static parse_item2(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            noiseProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }

    static get parameterDescriptors() {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        noiseProcessor.parse_ui(JSON.parse(getJSONnoise()).ui, params, noiseProcessor.parse_item1);
        return params;
    }

    constructor(options) {
        super(options);
        this.running = true;

        const importObject = {
            env: {
                memoryBase: 0,
                tableBase: 0,

                // Integer version
                _abs: Math.abs,

                // Float version
                _acosf: Math.acos,
                _asinf: Math.asin,
                _atanf: Math.atan,
                _atan2f: Math.atan2,
                _ceilf: Math.ceil,
                _cosf: Math.cos,
                _expf: Math.exp,
                _floorf: Math.floor,
                _fmodf: function (x, y) { return x % y; },
                _logf: Math.log,
                _log10f: Math.log10,
                _max_f: Math.max,
                _min_f: Math.min,
                _remainderf: function (x, y) { return x - Math.round(x / y) * y; },
                _powf: Math.pow,
                _roundf: Math.fround,
                _sinf: Math.sin,
                _sqrtf: Math.sqrt,
                _tanf: Math.tan,
                _acoshf: Math.acosh,
                _asinhf: Math.asinh,
                _atanhf: Math.atanh,
                _coshf: Math.cosh,
                _sinhf: Math.sinh,
                _tanhf: Math.tanh,
                _isnanf: Number.isNaN,
                _isinff: function (x) { return !isFinite(x); },
                _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                // Double version
                _acos: Math.acos,
                _asin: Math.asin,
                _atan: Math.atan,
                _atan2: Math.atan2,
                _ceil: Math.ceil,
                _cos: Math.cos,
                _exp: Math.exp,
                _floor: Math.floor,
                _fmod: function (x, y) { return x % y; },
                _log: Math.log,
                _log10: Math.log10,
                _max_: Math.max,
                _min_: Math.min,
                _remainder: function (x, y) { return x - Math.round(x / y) * y; },
                _pow: Math.pow,
                _round: Math.fround,
                _sin: Math.sin,
                _sqrt: Math.sqrt,
                _tan: Math.tan,
                _acosh: Math.acosh,
                _asinh: Math.asinh,
                _atanh: Math.atanh,
                _cosh: Math.cosh,
                _sinh: Math.sinh,
                _tanh: Math.tanh,
                _isnan: Number.isNaN,
                _isinf: function (x) { return !isFinite(x); },
                _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        };

        this.noise_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
        this.json_object = JSON.parse(options.processorOptions.json);

        this.output_handler = function (path, value) { this.port.postMessage({ path: path, value: value }); };

        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;

        this.factory = this.noise_instance.exports;
        this.HEAP = this.noise_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function () {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }

        this.initAux = function () {
            var i;

            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            // Parse UI
            noiseProcessor.parse_ui(this.json_object.ui, this, noiseProcessor.parse_item2);

            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val) {
            this.HEAPF32[this.pathTable[path] >> 2] = val;
        }

        this.getParamValue = function (path) {
            return this.HEAPF32[this.pathTable[path] >> 2];
        }

        // Init resulting DSP
        this.initAux();
        console.log(this);
    }

    handleMessage(event) {
        var msg = event.data;
        switch (msg.type) {
            case "destroy": this.running = false; break;
        }
    }

    process(inputs, outputs, parameters) {
        var input = inputs[0];
        var output = outputs[0];

        // Check inputs
        if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
            //console.log("Process output error");
            return true;
        }

        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }

        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
        */

        // Update controls
        for (const path in parameters) {
            const paramArray = parameters[path];
            this.setParamValue(path, paramArray[0]);
        }

        // Compute
        try {
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
        } catch (e) {
            console.log("ERROR in compute (" + e + ")");
        }

        // Update bargraph
        this.update_outputs();

        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }

        return this.running;
    }
}

// Globals
const NUM_FRAMES = 128;
try {
    registerProcessor('noise', noiseProcessor);
} catch (error) {
    console.warn(error);
}
