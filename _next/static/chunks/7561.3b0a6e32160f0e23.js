"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7561],{17561:function(e,r,t){t.r(r),t.d(r,{ssaoCombinePixelShaderWGSL:function(){return l}});var a=t(35606);let o="ssaoCombinePixelShader",n=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var originalColorSampler: sampler;var originalColor: texture_2d<f32>;uniform viewport: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var ssaoColor: vec4f=textureSample(textureSampler,textureSamplerSampler,uniforms.viewport.xy+input.vUV*uniforms.viewport.zw);var sceneColor: vec4f=textureSample(originalColor,originalColorSampler,input.vUV);fragmentOutputs.color=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;a.v.ShadersStoreWGSL[o]=n;let l={name:o,shader:n}}}]);