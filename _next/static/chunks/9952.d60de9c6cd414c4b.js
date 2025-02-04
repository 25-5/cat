"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9952],{49952:function(e,a,r){r.r(a),r.d(a,{displayPassPixelShaderWGSL:function(){return l}});var t=r(35606);let p="displayPassPixelShader",s=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;t.v.ShadersStoreWGSL[p]=s;let l={name:p,shader:s}}}]);