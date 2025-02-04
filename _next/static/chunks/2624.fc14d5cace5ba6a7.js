"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2624],{42624:function(e,t,i){i.r(t),i.d(t,{layerVertexShader:function(){return s}});var o=i(35606);let n="layerVertexShader",r=`attribute vec2 position;uniform vec2 scale;uniform vec2 offset;uniform mat4 textureMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec2 shiftedPosition=position*scale+offset;vUV=vec2(textureMatrix*vec4(shiftedPosition*madd+madd,1.0,0.0));gl_Position=vec4(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;o.v.ShadersStore[n]=r;let s={name:n,shader:r}}}]);