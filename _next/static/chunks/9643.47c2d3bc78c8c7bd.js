"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9643],{9643:function(e,t,n){n.r(t),n.d(t,{glowMapMergeVertexShaderWGSL:function(){return p}});var i=n(35606);let r="glowMapMergeVertexShader",u=`attribute position: vec2f;varying vUV: vec2f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;i.v.ShadersStoreWGSL[r]=u;let p={name:r,shader:u}}}]);