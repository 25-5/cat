"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1986],{81986:function(e,i,o){o.r(i),o.d(i,{proceduralVertexShader:function(){return d}});var n=o(35606);let t="proceduralVertexShader",r=`attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;n.v.ShadersStore[t]=r;let d={name:t,shader:r}}}]);