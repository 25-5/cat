"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4628],{24628:function(e,t,n){n.r(t),n.d(t,{proceduralVertexShaderWGSL:function(){return o}});var i=n(35606);let r="proceduralVertexShader",u=`attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;i.v.ShadersStoreWGSL[r]=u;let o={name:r,shader:u}}}]);