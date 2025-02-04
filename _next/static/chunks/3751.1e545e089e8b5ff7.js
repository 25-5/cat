"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3751],{33751:function(e,i,t){t.r(i),t.d(i,{hdrFilteringVertexShader:function(){return c}});var r=t(35606);let n="hdrFilteringVertexShader",o=`attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;r.v.ShadersStore[n]=o;let c={name:n,shader:o}}}]);