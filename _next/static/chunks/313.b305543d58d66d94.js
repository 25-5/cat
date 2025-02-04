"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{40313:function(e,r,a){a.r(r),a.d(r,{iblShadowDebugPixelShader:function(){return l}});var i=a(35606);let u="iblShadowDebugPixelShader",o=`#ifdef GL_ES
precision mediump float;
#endif
varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D debugSampler;uniform vec4 sizeParams;
#define offsetX sizeParams.x
#define offsetY sizeParams.y
#define widthScale sizeParams.z
#define heightScale sizeParams.w
void main(void) {vec2 uv =
vec2((offsetX+vUV.x)*widthScale,(offsetY+vUV.y)*heightScale);vec4 background=texture2D(textureSampler,vUV);vec4 debugColour=texture2D(debugSampler,vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {gl_FragColor.rgba=background;} else {gl_FragColor.rgb=mix(debugColour.rgb,background.rgb,0.0);gl_FragColor.a=1.0;}}`;i.v.ShadersStore[u]=o;let l={name:u,shader:o}}}]);