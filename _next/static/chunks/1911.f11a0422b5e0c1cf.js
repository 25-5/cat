"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1911],{41911:function(e,i,t){t.r(i),t.d(i,{glowMapMergeVertexShader:function(){return r}});var n=t(35606);let o="glowMapMergeVertexShader",d=`attribute vec2 position;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;n.v.ShadersStore[o]=d;let r={name:o,shader:d}}}]);